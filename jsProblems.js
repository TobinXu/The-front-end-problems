// Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。


// array like object
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.keys(obj)); // console: ['0', '1', '2']


var providerList = [
    {
        "id":44,
        "name":"WST供应商"
    },
    {
        "id":22,
        "name":"供应商1"
    },
    {
        "id":45,
        "name":"迎男测试供应商"
    },
    {
        "id":23,
        "name":"供应商2"
    },
    {
        "id":46,
        "name":"LYN测试供应商"
    },
    {
        "id":24,
        "name":"供应商3"
    },
    {
        "id":47,
        "name":"李迎男供应商"
    },
    {
        "id":25,
        "name":"供应商4"
    },
    {
        "id":26,
        "name":"娟娟供应商"
    },
    {
        "id":27,
        "name":"孔亚杰供应商"
    },
    {
        "id":28,
        "name":"娟娟供应商111"
    },
    {
        "id":29,
        "name":"小星星"
    },]


Object.keys(providerList).forEach(idx => {
    if(providerList[idx].id === 29) {
        console.log(providerList[idx].name);
    }     
    })
    
    



// var auxList = {
//     "11":[
//         {
//             "id":0,
//             "name":"无"
//         },
//         {
//             "id":11,
//             "name":"盒"
//         }
//     ],
//     "14":[
//         {
//             "id":0,
//             "name":"无"
//         },
//         {
//             "id":16,
//             "name":"手"
//         },
//         {
//             "id":17,
//             "name":"盒（袜子）"
//         },
//         {
//             "id":18,
//             "name":"一沓"
//         },
//         {
//             "id":26,
//             "name":"java新建辅助单位"
//         }
//     ],
//     "15":[
//         {
//             "id":0,
//             "name":"无"
//         },
//         {
//             "id":24,
//             "name":"java测试新建辅助单位16"
//         }
//     ],
//     "18":[
//         {
//             "id":0,
//             "name":"无"
//         },
//         {
//             "id":19,
//             "name":"java测试新建辅助单位"
//         },
//         {
//             "id":20,
//             "name":"java测试新建辅助单位2"
//         },
//         {
//             "id":21,
//             "name":"java测试新建辅助单位3"
//         },
//         {
//             "id":22,
//             "name":"java测试新建辅助单位4"
//         },
//         {
//             "id":23,
//             "name":"java测试新建辅助单位5"
//         }
//     ]};


    // console.log(Object.keys(providerList));
//    forEach() 方法对数组的每个元素执行一次给定的函数。



    // Object.keys(auxList).forEach(idx => {
    //     auxList[idx].forEach(item => {
    //       if (item['id'] == 22) {
    //         tmp = item['name'];
    //         console.log(tmp);
    //       }
    //     }
    //     )
    //   })
