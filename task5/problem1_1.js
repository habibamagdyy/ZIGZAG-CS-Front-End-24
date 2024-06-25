let getdata =(apilink)=>{
   return new Promise ((resolve, reject)=>{
       let myRequest = new XMLHttpRequest();
       myRequest.onload= function(){
        if(this.readyState===4 && this.status===200){
            resolve(JSON.parse(this.responseText))
        }else{
            reject(Error("no data found"))
        }
       };
       myRequest.open("get", apilink);
       myRequest.send();
   });
}

getdata("./p1.json")
.then((result)=>{
    result.length=5;
    return result
}
)
.then((result)=>{
    for(let i=0; i<result.length;i++){
        let div=document.createElement("div");

        let title= document.createElement("h3");
        let titletext= document.createTextNode(result[i].title)
        title.appendChild(titletext);

        let description= document.createElement("p");
        let descriptiontext= document.createTextNode(result[i].description)
        description.appendChild(descriptiontext);
        
        div.appendChild(title);
        div.appendChild(description);
        
        document.body.appendChild(div);
    }
}
)
.catch((rej)=>{
    return(rej);
}
)
async function fetchdata(){
    try{
        let mydata=await fetch("./p1.json");
        let data = await mydata.json();
        data.length=5;
        for(let i=0; i<data.length;i++){
            let div=document.createElement("div");
    
            let title= document.createElement("h3");
            let titletext= document.createTextNode(data[i].title)
            title.appendChild(titletext);
    
            let description= document.createElement("p");
            let descriptiontext= document.createTextNode(data[i].description)
            description.appendChild(descriptiontext);
            
            div.appendChild(title);
            div.appendChild(description);
            
            document.body.appendChild(div);
        }
    }catch(error){
       console.log ("no data found");
    }
}
fetchdata();