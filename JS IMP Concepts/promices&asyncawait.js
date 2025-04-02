const fakeApi = new Promise((resolve, reject)=>{
    setTimeout(()=>{ return resolve("Data Received")}, 2000);
})

const fetchData = async ()=>{
    console.log("Loading...");
    const result = await fakeApi;
    console.log(result);
}

fetchData();