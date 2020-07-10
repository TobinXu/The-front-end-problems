// // Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。


// // array like object
// // var obj = { 0: 'a', 1: 'b', 2: 'c' };
// // console.log(Object.keys(obj)); // console: ['0', '1', '2']


// var providerList = [
//     {
//         "id":44,
//         "name":"WST供应商"
//     },
//     {
//         "id":22,
//         "name":"供应商1"
//     },
//     {
//         "id":45,
//         "name":"迎男测试供应商"
//     },
//     {
//         "id":23,
//         "name":"供应商2"
//     },
//     {
//         "id":46,
//         "name":"LYN测试供应商"
//     },
//     {
//         "id":24,
//         "name":"供应商3"
//     },
//     {
//         "id":47,
//         "name":"李迎男供应商"
//     },
//     {
//         "id":25,
//         "name":"供应商4"
//     },
//     {
//         "id":26,
//         "name":"娟娟供应商"
//     },
//     {
//         "id":27,
//         "name":"孔亚杰供应商"
//     },
//     {
//         "id":28,
//         "name":"娟娟供应商111"
//     },
//     {
//         "id":29,
//         "name":"小星星"
//     },]

//     // console.log(Object.keys(providerList));
// //    forEach() 方法对数组的每个元素执行一次给定的函数。



//     Object.keys(providerList).forEach(idx => {
//         providerList[idx].forEach(item => {
//           if (item['id'] == 28) {
//             tmp = item['name'];
//           }
//         }
//         )
//         console.log(tmp);
//       })
console.log('fuck');