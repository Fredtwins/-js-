function delay(name) {
    //可以理解为Promise一个承诺
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            //2秒后成功返回
            reslove(name)
        },2000)
    })
}

//1. 链式
// delay('Fred')
//     .then((name) => {
//         console.log(name);
//         //如果想返回多个就return
//         return delay('小仙女')
//     })
//     .then((name) => {
//         console.log(name);
//         return delay('叶子')
//     })
//     .then((name) => {
//         console.log(name)
//     })

//2.利用async 和 await来完成异步操作
//async必须是放在外部来当成一个函数
async function statr() {
    //await可以理解为等你的意思,等你的Promise完成才执行下面的代码
    const params = await delay('小仙女');
    console.log(params);
    const name = await delay('叶子');
    console.log(name);
    const flider = await delay('Fred');
    console.log(flider);
    /**
     * 使用async + await更像是一个函数，看不出是一个异步
     */
}

//最后调用这个async的函数
statr();