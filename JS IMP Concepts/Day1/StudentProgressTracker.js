const studentData = [
    {
        name: "ABC",
        age: 16,
        progress: 10
    },
    {
        name: "XYZ",
        age: 18,
        progress: 20
    },
    {
        name: "XYZ",
        age: 22,
        progress: 30
    }
]

const message = studentData.map((entity)=>{
    return `Welcome ${entity.name}`;
})

const doubledProgressStudents = studentData.map((entity)=>{
    return entity.name +" " + entity.age +" "+ entity.progress * 2;
})

const adultStudents = studentData.filter((entity)=>{
    return entity.age >= 18;
})

const studentNewData = new Promise((resolve)=>{
    setTimeout(()=> resolve("Progress Updated"), 2000);
})

const totalResult = ()=>{
    console.log(message);
    console.log(doubledProgressStudents);
    console.log(adultStudents);
}

const fetchdata = async ()=>{
    console.log("Loading...");
    const result = await studentNewData;
    console.log(result);
    totalResult();
}

fetchdata();