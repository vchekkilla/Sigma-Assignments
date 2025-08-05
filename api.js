let url="https://catfact.ninja/fact";

let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let result=await getFacts();
    let p=document.querySelector("p");
    p.innerText=result;
});


async function getFacts(){
   try{
     let res=await axios.get(url);
    return res.data.fact;
    }
    catch(err){
        console.log("Network error ",err.message);
     return "No new fact";
    }

}

let url2="https://dog.ceo/api/breeds/image/random";

async function getImages(){
 try{
    let res=await axios.get(url2);
    return res.data.message;
//this is dog link being returned as image
}
catch(err){
    console.log("Error",err);
    return "No Image generated";
}
}

let btn2=document.querySelector("#btn2");
btn2.addEventListener("click", async ()=> {
    let link=await getImages();
    let image=document.querySelector("#dogImg");
    image.setAttribute("src",link);
    image.style.display = "block";

});



