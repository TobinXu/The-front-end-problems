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