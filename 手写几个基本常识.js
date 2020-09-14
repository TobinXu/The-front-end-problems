/*
// 封装ajax √
const SERVER_URL = "/server"
let xhr = new XMLHttpRequest();
// 创建http请求
xhr.open("GET", SERVER_URL, true);
// 设置状态监听函数
xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    // 当请求成功时
    if (this.status === 200) {
        handle(this.response);
    } else {
        console.error(this.stateText);
    }
};
// 设置请求失败的监听函数
xhr.onerror = function() {
    console.error(this.statusText);
};
// 设置请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");
// 发送http请求
xhr.send(null);
*/

// promsie封装ajax实现：
function getJSON(url) {
    // 创建一个promise对象
    let promise = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        // 新建一个http请求
        xhr.open("GET", url, true);
        // 设置状态监听函数
        xhr.onreadystatechange = function() {
            if (this.readyState !==4) return;
            // 当请求成功或失败时，改变promsie的状态
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText));
            }
        };
        // 设置错误监听函数
        xhr.onerror = function() {
            reject(new Error(this.statusText));
        };
        // 设置响应的数据类型
        xhr.responseType = "json";
        // 设置请求头信息
        xhr.setRequestHeader("Accpet", "application/json");
        // 发送http请求
        xhr.send(null);
    });
    return promsie;
}

// js深浅拷贝的实现 √
/* 
浅拷贝指的是将一个对象的属性值复制到另一个对象，如果有的属性的值为引用类型的话，那么会将这个引用的地址复制给对象，
因此两个对象会有同一个引用类型的引用。浅拷贝可以使用  Object.assign 和展开运算符来实现。

深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，因此对象获得的一个
新的引用类型而不是一个原有类型的引用。深拷贝对于一些对象可以使用 JSON 的两个函数来实现，但是由于 JSON 的对象格
式比 js 的对象格式更加严格，所以如果属性值里边出现函数或者 Symbol 类型的值时，会转换失败。
*/
// 浅拷贝的实现
function shallowCopy(object) {
    // 只拷贝对象
    if (!object || typeof object !== "object") return;
    // 根据object类型判断是新建一个数组还是对象
    let newObjcet = Array.isArray(object) ? [] : {};
    // 遍历object，并且判断是object的属性才拷贝
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = object[key];
        }
    }
    return newObjcet;
}
// 深拷贝的实现
function deepCopy(objcet) {
    // 只拷贝对象
    if (!objcet || typeof object !== "object") return;
    // 根据object类型判断是新建一个数组还是对象
    let newObject = Array.isArray(object) ? [] : {};
    // 遍历object，并且判断是object的属性才拷贝，遇到引用类型，递归调用深拷贝
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject = typeof object[key] === "object"
            ? deepCopy(object[key])
            : ojbcet[key];
        }
    }
    return newObject;
}

//封装防抖节流 √
function debounce(fn, delay) {
    let timer = null;
    // 借助闭包
    return function() {
        if (timer) {
            clearTimeout(timer); // 进到这个分支，说明一个计时周期内，再次触发相同时间，所以清除当前计时器，重新计时
        }
        timer = setTimeout(fn, delay); // 进入该分支说明当前没有计时，那就开始计时
    }
}

function throttle(fn, delay) {
    let valid = true;
    return function() {
        if (!valid) {
            // 休息时间，暂不接客
            return false;
        }
        // 工作时间，执行函数并且在间隔时间内把状态设为无效
        valid = false;
        setTimeout(() => {
            fn();
            valid = true;
        }, delay)
    }
}

// 手写call、apply、bind√
// call函数的实现
Function.prototype.myCall = function(context) {
    // 判断调用对象
    if (typeof this !== "function") {
        console.error("type error");
    }
    // 获取参数
    let args = [...arguments].slice(1),
    result = null;
    // 判断context是否传入，如果未传入则设置为window
    context = context || window;
    // 将调用函数设为对象的方法
    context.fn = this;
    // 调用函数
    result = context.fn(...args);
    // 将属性删除
    delete context.fn;
    return result;
};

// apply函数实现
Function.prototype.myApply = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "funciton") {
        throw new TypeError("Error");
    }
    let result = null;
    // 判断context是否存在，如果未传入则为window
    context = context || window;
    // 将函数设为对象的方法
    context.fn = this;
    // 调用方法
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    // 将属性删除
    delete context.fn;
    return result;
}

// bind函数的实现
Function.prototype.myBind = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== " function") {
        throw new TypeError("Error");
    }
    // 获取参数
    var args = [...arguments].slice(1);
    fn = this;
    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        );
    };
 };

 // 手写Promise   
 const PENDING = "pending";
 const RESOLVED = "resolved";
 const REJECTED = "rejcted";
 function MyPromsie(fn) {
     // 保存初始化状态
     var slef = this;
     // 初始化状态
     this.state = PENDING;
     // 用于保存resolved或rejected传入的值
     this.value = null;
     // 用于保存resolved的回调函数
     this.resolvedCallbacks = [];
     // 用于保存rejected的回调函数
     this.rejectedCallbacks = [];
     // 状态变为resolved方法
     function resolve(value) {
         // 判断传入元素是否为promsie值，如果是，则状态改变必须等待前一个状态改变后再进行
         if (value instanceof MyPromsie) {
             return value.then(resolve, reject);
         }
         // 保证代码的执行顺序为本轮事件循环末尾
         setTimeout(() => {
             // 只有状态为pending时才能转变
             if (self.state === PENDING) {
                 // 修改状态
                 self.state = RESOLVED;
                 // 设置传入的值
                 self.value =value;
                 // 执行回调函数
                 self.resolvedCallbacks.forEach(callback => {
                     callback(value);
                 });
             }
         }, 0);
     }
     // 状态变为rejected方法
     function reject(value) {
        // 保证代码的执行顺序为本轮事件循环末尾
        setTimeout(() => {
            // 只有状态为pending时才能转变
            if (self.state === PENDING) {
                // 修改状态
                self.state = REJECTED;
                // 设置传入的值
                self.value =value;
                // 执行回调函数
                self.rejectedCallbacks.forEach(callback => {
                    callback(value);
                });
            }
        }, 0);
    }
    // 将两个方法传入函数执行
    try{
        fn(resolve, reject);
    } catch(e) {
        // 遇到错误，捕获错误并执行reject函数
        reject(e);
    }
 }

 MyPromsie.prototype.then = function(onResolved, onRejected) {
     // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
     onResolved = 
     typeof onResolved === "function"
     ? onResolved
     : function(value) {
         return value;
     };
     onRejected = 
     typeof onRejected === "function"
     ? onRejected
     : function(error) {
         throw error;
     };
     // 如果是等待状态，则将函数加入对应列表中
     if (this.state === PENDING) {
         this.resolvedCallbacks.push(onResolved);
         this.rejectedCallbacks.push(onREjected);
     }
     // 如果状态已经凝固，则直接执行对应状态函数
     if (this.state === RESOLVED) {
         onResolved(this.value);
     }
     if (this.state === REJECTED) {
         onRejected(this.value);
     }
 };

// instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
// instanceof的实现
function MyInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left); // 获取对象的原型
    let prototype = right.prototype;  // 获取构造函数指向原型的prototype指针
    while(true) {
        if (!proto) return false; // 如果proto为null 返回false
        if (proto === prototype) return true; 
        proto = Object.getPrototypeOf(proto); // 继续向上面的原型链查找
    }
}

// new操作符具体干了什么
// 1. 首先创建一个新的空对象
// 2. 设置原型，讲对象的原型设置为函数的prototype对象
// 3. 让函数的this指向这个对象，执行构造函数的代码(为这个新对象添加属性)
// 4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象
function objectFactory() {
    let newObject = null,
    constructor = Array.prototype.shift.call(arguments),
    result = null;
    // 参数判断
    if (typeof constructor !== "function") {
        return new TypeError("type error");
    }
    // 新建一个空对象，对象的原型为构造函数的prototype对象
    newObject = Object.create(constructor.prototype);
    // 将this指向新建对象，并执行函数
    result = constructor.apply(newObject, arguments);
    // 判断返回对象
    let flag = 
    result && (typeof result === "object" || typeof result === "function");
    // 判断返回结果
    return flag ? result : newObject;
}
// 使用方法
// objectFactory(构造函数, 初始化参数);

