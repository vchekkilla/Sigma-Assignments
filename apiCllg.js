let url ="https://universities.hipolabs.com/search?name=";
async function getUniversities(country) {
    try {
    
        let res = await axios.get(url+country);
        return res.data; // you can loop through and display as needed
    } catch (err) {
        console.log("error",err);
       return [];
    }

}
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let cllgArr=await getUniversities(country);
    //this country after its passed in api call function it rturns a array of colleg names in country


    show(cllgArr);
//we call anopther function so that we can print individual cllg names from the array of a country
}
)
function show(cllgArr){
    let ul=document.querySelector("#list");
    ul.innerText="";
     
    for(clg of cllgArr){
     console.log(clg.name);
     let li=document.createElement("li");
     li.innerText=clg.name;
     ul.appendChild(li);
    }
}


