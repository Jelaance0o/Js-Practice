// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
      
    
    // async function getWeather(city){
        
    //     try{        let apikey = `815e2c4f654ae30c98bf698be2e5b9ae`
    //         let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    //         /// try block se koi bhi error throw karo toh catch usko hold kr leta hai
    //         if(!raw.ok){
    //             throw new Error("Something Went Wrong")
    //         }
    //         let data = await raw.json()
    //         if (data.main.temp<0){
    //             console.warn(data.main.temp + `deg celcius in ${city}`); // agar site mein sab sahi ni aati toh **ok** ki value false aati hai.
    //         }
    //         else if(data.main.temp>40){
    //             console.warn(data.main.temp + `deg celcius in ${city}`)
    //         }
    //         else{
    //             console.log(data.main.temp + `deg celcius in ${city}`);
    //         }
    //     }
    //     catch(err){
    //         console.error(err)
    //     }
    // }
    
    // getWeather("egypt");

    // await Promise ke pehle lagta hai kyu ki promise ayuncrones statement