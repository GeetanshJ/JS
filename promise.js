// const promise = () => {
//     return new Promise((resolve, reject) => {
//         console.log(1);
//         resolve("done");
//         reject("not done");
//     });
// };

// let pro = promise();
// pro.then( () =>  {console.log("done")})
// pro.catch( () =>  {console.log("!done")})



// three stages are there resolve,reject, pending
// .then is used to call function after promise is fulfilled




// PROMISE CHAINING
const getData = ((id)=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(id);
            resolve("done");
        }, 2000)
    })
});

getData(1).then(()=>{
    return getData(2);
}).then((res) => {
    console.log(res);
})