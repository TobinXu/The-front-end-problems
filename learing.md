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
 git config --global user.email "you@example.com"
  git config --global user.name "Your Name"