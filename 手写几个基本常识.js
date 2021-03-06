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

// 获取[m,n]之间的随机整数
var num = Math.floor(Math.random() * (m-n +1) + m);




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
// 2. 设置原型，讲对象的原型设置为构造函数的prototype对象
// 3. 让构造函数的this指向这个对象，执行构造函数的代码(为这个新对象添加属性)
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


// 自己写的睡眠函数
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve,ms)
    })
  }
  async function printNum(n) {
    for (let i = 0; i < n; i++) {
      await sleep(2000);
      console.log(i);
    }  
  }
  printNum(10)


// 使用reduce模拟map
Array.prototype.MyMap = function(fn, callbackThis) {
    // 最终返回的新数组
    let res = [];
    // 定义回调函数的执行环境
    // call第一个参数传入null，则this指向全局对象，同map的规则
    let CBThis = callbackThis || null;
    this.reduce((before, after, idx, arr) => {
        // 传入map回调函数拥有的参数
        // 把每一项的执行结果push进res中
        res.push(fn.call(CBThis, after, idx, arr));
    },null);
    return res;
}

https://juejin.im/post/6844903733860499463



// 函数柯里话（将一个具有多个参数的函数转化为具有单个参数的函数
// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

function curry(fn, args) {
    // 获取函数需要的参数长度
    let length = fn.length;
  
    args = args || [];
  
    return function() {
      let subArgs = args.slice(0);
  
      // 拼接得到现有的所有参数
      for (let i = 0; i < arguments.length; i++) {
        subArgs.push(arguments[i]);
      }
  
      // 判断参数的长度是否已经满足函数所需参数的长度
      if (subArgs.length >= length) {
        // 如果满足，执行函数
        return fn.apply(this, subArgs);
      } else {
        // 如果不满足，递归返回科里化的函数，等待参数的传入
        return curry.call(this, fn, subArgs);
      }
    };
  }


 // 经历了这么多次面试这种定长 curry 问题我好像一次都没遇到过. 反倒是不定长 curry 的考察频频出现:
 //  如实现这样一个 add: (头条一面, 腾讯一面考了同一题)
var add = function (m) {
 
    var temp = function (n) {
        return add(m + n);
    }
 
    temp.toString = function () {
        return m;
    }
 
    return temp;
};
 
 
add(3)(4)(5); // 12
add(3)(6)(9)(25); // 43
/*
让我们来解释这个过程：add(3)(4)(5)
1、先执行add(3)，此时m=3，并且返回temp函数；
2、执行temp(4)，这个函数内执行add(m+n)，n是此次传进来的数值4，m值还是上一步中的3，所以add(m+n)=add(3+4)=add(7)，此时m=7，并且返回temp函数
3、执行temp(5)，这个函数内执行add(m+n)，n是此次传进来的数值5，m值还是上一步中的7，所以add(m+n)=add(7+5)=add(12)，此时m=12，并且返回temp函数
4、关键性一步来了，后面没有传入参数，等于返回的temp函数不被执行而是打印，了解JS的朋友都知道对象的toString是修改对象转换字符串的方法，
因此代码中temp函数的toString函数return m值，而m值是最后一步执行函数时的值m=12，所以返回值是12。
看到这其实就很明白了，代码中temp.toString的重写只是为了函数不执行时能够返回最后运算的结果值
*/

/*
组合任意个函数
参数在函数间就好像通过‘管道’传输一样，最右边的函数接收外界参数，返回结果传给左边的函数，最后输出结果。
*/
var compose = function() {
    let args = Array.prototype.slice.call(...arguments);
    return function(x) {
      if (args.length >= 2) {
          return args.reverse().reduce((pre, cur) => {
          return pre = cur(pre)
        }, x)
      } else {
        return args[1] && args[1](x);
      }
    }
  }
  function fn1(arg) {
    return arg +1; // 14
    }
    function fn2(arg) {
    return arg +2; // 13
    }
    function fn3(arg) {
    return arg +3; // 11
    }
    const arr = [fn1, fn2, fn3];
    
  console.log(compose(arr)(8));

  // 翻转取第一个值
  var compose = function() {
    var args = Array.prototype.slice.call(arguments);
    
    return function(x) {
     if (args.length >= 2) {
     
        return args.reverse().reduce((p, c) => {
          return p = c(p)
       }, x)
       
     } else {
         return args[1] && args[1](x);
     }
    }
  }
 
  // 利用上面示例 测试一下。
  var arr = [1, 2, 3],
  reverse = function(x){ return x.reverse()},
  getFirst = function(x) {return x[0]},
  trace = function(x) {  console.log('执行结果：', x); return x}
  
  
  compseFunc = compose(trace, getFirst, trace, reverse);
  
compseFunc(arr);   
// 执行结果： (3) [3, 2, 1]
// 执行结果： 3
// 3

// 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出
function count(start, end) {
    console.log(start++);
      let timer = setInterval(function() {
          if (start <= end) {
              console.log(start++);
          } else {
              clearInterval(timer);
          }
      })
      return {
          cancel: function() {
              clearInterval(timer);
          }
      }
  }


  
/*构造函数里面要初始化信息和缓存订阅者、获取信息、设置信息、发布通知、添加订阅者*/
class Subject {
  constructor() {
    this.message = '暂无通知';
    this.observers = [];
  }
  getMessage() {
    return this.message;
  }
  setMessage(message) {
    this.message = message;
    this.notifyAllObservers();
  }
  notifyAllObservers() {
    this.observers.forEach(observer => observer.update());
  }
  attach(observer) {
    this.observers.push(observer);
  }
}

//绑定更新
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(`${this.name}收到通知：${this.subject.getMessage()}`);
  }
}

let subject = new Subject();
let a = new Observer('张三', subject);
let b = new Observer('李四', subject);
let c = new Observer('王五', subject);

subject.setMessage("明天开学");
subject.setMessage("今天提前放假");
subject.setMessage("在家记得踢足球");