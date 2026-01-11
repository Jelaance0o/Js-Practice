//pehle pura code crash ho raha tha 
//abhi sirf error dikh raha hai but code bhi chal raha hai

// try{
//     a=12
//     console.log(a) //this error is handled by try and didt show any error in console
// }
// catch(err){   // and information of error is storted in this err variable
//     console.error(err.message)
//     console.error(err.name)
//     console.error(err.stack)
// }
// finally{
//     console.log("Still runing")
// }
// code run kiya toh try chalega warna catch chalega

// finally - ek aisa code jo try chale ya catch chale pr ye toh hamesha hi chlta hai ex - loader


try{
    let a = 12
    console.log(a.u.tr);
} catch(err){
    throw new Error("Something went Wrong from our side")
}