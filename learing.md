1、关于Devtools解决不显示问题
 
1、vue调试工具 vue devtools 安装配置和使用
如果勾选了还是没有显示，说明采用了压缩版/生产版的Vuejs，则继续采用如下方案：
解决方案一：
采用script方式引入，需要在webpack.base.config.js添加externals
externals: {
   'vue': 'Vue',
},
然后在index.html引入https://cdn.bootcss.com/vue/2.5.16/vue.js，在main.js中干掉import vue from 'vue'，
放到生产环境时，换成https://cdn.bootcss.com/vue/2.5.16/vue.min.js,
此种方式可以减少vendor打包体积
 
方案二：
在main.js中添加
Vue.config.devtools = true
// 若是没有开启Devtools工具，在开发环境中开启，在生产环境中关闭
if (process.env.NODE_ENV == 'development') {
   Vue.config.devtools = true;
} else {
   Vue.config.devtools = false;
}
2、vue为什么要是用template
template不会渲染成元素，用div的话会被渲染成元素。把if,show,for等语句抽取出来放在template上面，把绑定的事件放在temlpate里面的元素上，可以使html结构更加清晰，还可以改善一个标签过长的情况。
3、标签中scoped属性
当 <style> 标签有 scoped 属性时，它的CSS 只作用于当前组件中的元素。

Vue父子间通信
语雀文档：https://www.yuque.com/docs/share/4167c387-2ef3-4cf4-bacc-6d2e6d2251d2?# 《学习笔记》

vscode链接Git初始化
 git config --global user.email "you@example.com"
  git config --global user.name "Your Name"


1.完成培训视频学习，并撰写相关学习笔记0708强国培训学习笔记 。
2.完成培训考试。
3.雏鹰4班分享环节代表小组，制作售后模块分享PPT并完成售后模块的分享。
4.详解vue中的ref和$refs的使用：
目的：获取dom
$("#id").text('xxx')   // 使用Jquery
document.getElementById("id")  // 使用原生Dom
使用VUE:通过在dom或组件上面注册ref，然后使用对象refs来进行调用。（）
尽管存在 prop 和事件，有的时候你仍可能需要在 JavaScript 里直接访问一个子组件。为了达到这个目的，你可以通过 ref 这个 attribute 为子组件赋予一个 ID 引用。例如：
<base-input ref="usernameInput"></base-input>
现在在你已经定义了这个 ref 的组件里，你可以使用：
this.$refs.usernameInput
来访问这个 <base-input> 实例，以便不时之需。比如程序化地从一个父级组件聚焦这个输入框。在刚才那个例子中，该 <base-input> 组件也可以使用一个类似的 ref 提供对内部这个指定元素的访问，例如：
<input ref="input">
甚至可以通过其父级组件定义方法：
methods: {
  // 用来从父级组件聚焦输入框
  focus: function () {
    this.$refs.input.focus()
  }
}
这样就允许父级组件通过下面的代码聚焦 <base-input> 里的输入框：
this.$refs.usernameInput.focus()

// 备份二
 // 供应商名称
            <el-table-column prop="providerName" :label="$t('purchaseProvider.supplierName')"
                             align="center" width="150" sortable>
            </el-table-column>
            // 供应商编号
            <el-table-column prop="providerNo" :label="$t('purchaseProvider.supplierCode')"
                             align="center" width="130" sortable>
            </el-table-column>
            // 线上供货渠道
            <el-table-column prop="platformId" :label="$t('purchaseProvider.onlineSupplyChannels')"
                             align="center" width="150" sortable>
            </el-table-column>
            // 联系人
            <el-table-column prop="contact" :label="$t('purchaseProvider.contactPerson')"
                             align="center" width="100" sortable>
            </el-table-column>
            // 手机
            <el-table-column prop="mobile" :label="$t('purchaseProvider.mobilePhone')"
                             align="center" width="150" sortable>
            </el-table-column>
            // 固话
            <el-table-column prop="telno" :label="$t('purchaseProvider.telephone')"
                             align="center" width="100" sortable>
            </el-table-column>
            // 邮箱
            <el-table-column prop="email" :label="$t('purchaseProvider.email')"
                             align="center" width="100" sortable>
            </el-table-column>
            // QQ
            <el-table-column prop="qq" label="QQ" align="center" >
            </el-table-column>
            // 旺旺
            <el-table-column prop="wangwang" :label="$t('purchaseProvider.wantWant')"
                             align="center" width="100" >
            </el-table-column>
            // 传真
            <el-table-column prop="fax" :label="$t('purchaseProvider.fax')"
                             align="center" width="100" >
            </el-table-column>
            // 地址
            <el-table-column prop="address" :label="$t('purchaseProvider.address')"
                             align="center" width="300" >
              <template slot-scope="scope">
                {{getCountryName(scope.row.country)}} {{scope.row.province}} {{scope.row.city}} {{scope.row.district}} {{scope.row.address}}
              </template>
            </el-table-column>
            // 邮编
            <el-table-column prop="zip" :label="$t('purchaseProvider.postCode')" align="center" width="100">
            </el-table-column>
            // 自定义属性1
            <el-table-column prop="prop1" :label="$t('purchaseProvider.customAttribute1')" align="center" width="100">
            </el-table-column>
            // 自定义属性2
            <el-table-column prop="prop2" :label="$t('purchaseProvider.customAttribute2')" align="center" width="100">
            </el-table-column>
            // 自定义属性3
            <el-table-column prop="prop3" :label="$t('purchaseProvider.customAttribute3')" align="center" width="100">
            </el-table-column>
            // 自定义属性4
            <el-table-column prop="prop4" :label="$t('purchaseProvider.customAttribute4')" align="center" width="100">
            </el-table-column>
            // 启用状态
            <el-table-column prop="deleted" :label="$t('purchaseProvider.enableStatus')" align="center" width="100" sortable>
              <template slot-scope="scope">
                {{scope.row.deleted === 0?$t('purchaseProvider.enable'):$t('purchaseProvider.deactivate')}}
              </template>
            </el-table-column>
            // 备注
            <el-table-column prop="remark" :label="$t('purchaseProvider.remark')" align="center" width="100">
            </el-table-column>
            // 创建时间
            <el-table-column prop="created" width="150" :label="$t('purchaseProvider.createdTime')"
                             align="center" sortable>
            </el-table-column>


            // 备份二

            <el-tabs v-model="activeTag" @tab-click="changeTab">
            <el-tab-pane :label="$t('goodsSuite.specTag')" name="0">
              <SubTable :table-data="suiteDetailList" :table-title="specTitle"
                        :currency="currency"></SubTable>
            </el-tab-pane>
            <el-tab-pane :label="$t('goodsSuite.logTag')" name="1">
              <SubTable :table-data="suiteLogList" :table-title="suiteLogTitle"></SubTable>
            </el-tab-pane>
            </el-tabs>


typeof null的值; // object
typeof undefined的值; // undefined
typeof NaN的值; number
typeof []的值 // object
typeof {}的值 // object

哪些操作会造成内存泄漏:

第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。

第二种情况是我们设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留
在内存中，而无法被回收。

第三种情况是我们获取一个 DOM 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回
收。

第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。

深浅拷贝区别，手写深拷贝。如何对function进行拷贝:


// 浅拷贝的实现：
function shallowCopy(object) {
  // 只拷贝对象
  if (!object || typeof object !== "object") return;
  // 根据object的类型判断来创建一个数组或者对象
  let newObject = Array.isArray(object) ? [] : {};
  // 遍历object，并且判断object的属性才拷贝
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

// 深拷贝的实现：
function deepCopy(object) {
  if (!object || typeof object !== "object") return;
  let newObjcet = Array.isArray(object) ? [] : {};
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObjcet[key] = 
      typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
    }
  }
  return newObject;
}


Number.EPSILON
浮点数的存储
JavaScript 如何存储小数。和其它语言如 Java 和 Python 不同，JavaScript 中所有数字包括整数和小数都只有一种类型 — Number。
相同点在于他们的实现遵循 IEEE 754 标准，使用 64 位固定长度来表示，也就是标准的 double 双精度浮点数来表示。

解决：
1.升阶
2.左边两数计算与右边结果相减如果小于es6的Number.EPSILON的话，认定两遍相等。

大数危机：
要想解决大数的问题你可以引用第三方库 bignumber.js，原理是把所有数字当作字符串，重新实现了计算逻辑，缺点是性能比原生的差很多。
现在 TC39 已经有一个 Stage 3 的提案 proposal bigint，大数问题有望彻底解决。

进程 ，资源分配的基本单位
进程控制块 (Process Control Block, PCB) 描述进程的基本信息和运行状态，所谓的创建进程和撤销进程，都是指对 PCB 的操作。

调度算法：
1.1 先来先服务 first-come first-serverd（FCFS）

非抢占式的调度算法，按照请求的顺序进行调度。

有利于长作业，但不利于短作业，因为短作业必须一直等待前面的长作业执行完毕才能执行，而长作业又需要执行很长时间，造成了短作业等待时间过长。

1.2 短作业优先 shortest job first（SJF）

非抢占式的调度算法，按估计运行时间最短的顺序进行调度。

长作业有可能会饿死，处于一直等待短作业执行完毕的状态。因为如果一直有短作业到来，那么长作业永远得不到调度。

1.3 最短剩余时间优先 shortest remaining time next（SRTN）

最短作业优先的抢占式版本，按剩余运行时间的顺序进行调度。 当一个新的作业到达时，其整个运行时间与当前进程的剩余时间作比较。如果新的进程需要的时间更少，则挂起当前进程，运行新的进程。否则新的进程等待。

1.4 时间片轮转

将所有就绪进程按 FCFS 的原则排成一个队列，每次调度时，把 CPU 时间分配给队首进程，该进程可以执行一个时间片。当时间片用完时，由计时器发出时钟中断，调度程序便停止该进程的执行，并将它送往就绪队列的末尾，同时继续把 CPU 时间分配给队首的进程。

时间片轮转算法的效率和时间片的大小有很大关系：

因为进程切换都要保存进程的信息并且载入新进程的信息，如果时间片太小，会导致进程切换得太频繁，在进程切换上就会花过多时间。
而如果时间片过长，那么实时性就不能得到保证。


线程，独立调度的基本单位
一个进程中可以有多个线程，它们共享进程资源。
QQ 和浏览器是两个进程，浏览器进程里面有很多线程，例如 HTTP 请求线程、事件响应线程、渲染线程等等，线程的并发执行使得在浏览器中点击一个新链接从而发起 HTTP 请求时，浏览器还可以响应用户的其它事件。

api的设计原则：create destory wait 暂停-》恢复
进程与线程的区别

进程通信：管道、消息队列、socket套接字、共享内存、信号、信号量


canvas和svg的区别？什么是矢量图？svg的优势？

矢量图形是计算机图形学中用点、直线或者多边形等基于数学方程的几何图元表示图像。

Canvas 是一种通过 JavaScript 来绘制 2D 图形的方法。Canvas 是逐像素来进行渲染的，因此当我们对 Canvas 进行缩放时，
会出现锯齿或者失真的情况。
 
SVG 是一种使用 XML 描述 2D 图形的语言。SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。我们可以为某个元素
附加 JavaScript 事件监听函数。并且 SVG 保存的是图形的绘制方法，因此当 SVG 图形缩放时并不会失真。

Canvas适用场景
Canvas提供的功能更原始，适合像素处理，动态渲染和大数据量绘制
（Canvas是基于位图的图像，它不能够改变大小，只能缩放显示；所以说Canvas更适合用来实现类似于Flash能做的事情）
SVG适用场景
SVG功能更完善，适合静态图片展示，高保真文档查看和打印的应用场景
（SVG更适合用来做动态交互，而且SVG绘图很容易编辑，只需要增加或移除相应的元素就可以了。）



如何用css写一个扇形、用css写一个三角形。
.triangle{
  position: absolute;
  width:0;
  height: 0;
  border-width:0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent white transparent;
}

    .shanxing { 
      position:absolute;
      width: 0;
      height: 0;
      border-width:100px;
      border-style:solid;
      border-color:transparent;
      border-top-color:#f00;
      border-radius:100px;  
      }

/*二值语法纵向横向*/
/*三值语法上横向下*/

了解CSSmodule吗？如何避免css的属性污染？(所有的类名和动画名称默认都有各自的作用域的CSS文件)

CSS模块化： 使用CSS并使用JS来管理样式依赖，CSS Modules能最大化地结合现有CSS生态和JS模块化能力。
发布时依旧编译出单独的 JS 和 CSS。

CSS Modules 实现了以下几点：
所有样式都是 local 的，解决了命名冲突和全局污染问题
class 名生成规则配置灵活，可以此来压缩 class 名（自动生成class名并且用算法生成了一个序列码，保证了唯一性）
只需引用组件的 JS 就能搞定组件所有的 JS 和 CSS
依然是 CSS，几乎 0 学习成本。

使用了 CSS Modules 后，就相当于给每个 class 名外加加了一个 :local，以此来实现样式的局部化，如果你想切换到全局模式，使用对应的 :global。
.normal {
  color: green;
}

/* 以上与下面等价 */
:local(.normal) {
  color: green; 
}

/* 定义全局样式 */
:global(.btn) {
  color: red;
}

/* 定义多个全局样式 */
:global {
  .link {
    color: green;
  }
  .box {
    color: yellow;
  }
}

Compose 来组合样式
对于样式复用，CSS Modules 只提供了唯一的方式来处理：composes 组合
/* components/Button.css */
.base { /* 所有通用的样式 */ }

.normal {
  composes: base;
  /* normal 其它样式 */
}

.disabled {
  composes: base;
  /* disabled 其它样式 */
}

import styles from './Button.css';

buttonElem.outerHTML = `<button class=${styles.normal}>Submit</button>`

生成的 HTML 变为
<button class="button--base-daf62 button--normal-abc53">Submit</button>






eg：出现问题：要修改其中td的样式，因为是全局的，所以其他也会受到影响。所以使用局部作用:local或者页面引用解决。
tbody tr td{
    text-align: center!important;
    color: #00cc00
  }
解决方法：
（1）:local(.类名)


:local(.biaoge-duli){
  tbody tr td{
    text-align: center!important;
    color: #00cc00
  }
}

（2）页面引用

import styles from '../styles.css';//对应的文件名

---

<Table className={styg['biaoge-duli']} />


this.$nextTick学一下记忆一下
使用场景：在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
应用场景：需要在视图更新之后，基于新的视图进行操作。

Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是异步更新。
$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM

原理：
Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部尝试对异步队列使用原生的 Promise.then 和MessageChannel，如果执行环境不支持，会采用 setTimeout(fn, 0)代替。

例如，当你设置vm.someData = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在事件循环队列清空时的下一个“tick”更新。多数情况我们不需要关心这个过程，但是如果你想在 DOM 状态更新后做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员沿着“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们确实要这么做。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。


事件循环：
第一个 tick（图例中第一个步骤，即'本次更新循环'）：

首先修改数据，这是同步任务。同一事件循环的所有的同步任务都在主线程上执行，形成一个执行栈，此时还未涉及 DOM 。
Vue 开启一个异步队列，并缓冲在此事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。
第二个 tick（图例中第二个步骤，即'下次更新循环'）：

同步任务执行完毕，开始执行异步 watcher 队列的任务，更新 DOM 。Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MessageChannel 方法，如果执行环境不支持，会采用 setTimeout(fn, 0) 代替。

第三个 tick（图例中第三个步骤）：

此时就是文档所说的

下次 DOM 更新循环结束之后
此时通过 Vue.nextTick 获取到改变后的 DOM 。通过 setTimeout(fn, 0) 也可以同样获取到。

简单总结事件循环：

同步代码执行 -> 查找异步队列，推入执行栈，执行Vue.nextTick[事件循环1] ->查找异步队列，推入执行栈，执行Vue.nextTick[事件循环2]...

总之，异步是单独的一个tick，不会和同步在一个 tick 里发生，也是 DOM 不会马上改变的原因。


继承 有寄生组合继承和ES6的extends的区别
