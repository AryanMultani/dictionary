let url="https://api.dictionaryapi.dev/api/v2/entries/en/";


let btn=document.querySelector("#srchbtn");
let ul=document.querySelector("ul");


async function getMeaning(word){
    try{
    let data=await axios.get(url+word);
    console.log(data);
    // console.log(data.data[0]['meanings'][0]['definitions'][0]['definition'])
    return data;
}catch(err){
    return "AIYYO";
}
}

btn.addEventListener('click',async ()=>{
    
    let word=document.querySelector("#word").value;
    let meaningObj=await getMeaning(word);
    getDefinitions(meaningObj);
    
});

function getDefinitions(meaningObj){
    let item=document.querySelector('#mean');
    item.innerText='';
    let dataArr=meaningObj['data'];
    for(data of dataArr){
        let meanings=data['meanings'];
        for(defs of meanings){
            let means=defs['definitions'];
            
            for(value of means){
                console.log("THE DEFINITIONS IS",value['definition']);
                let str=value['definition'];
                let li=document.createElement('li');
                li.innerText=str;
                ul.appendChild(li);
                // printDef(str);
            }
        }
    }
}

function printDef(str){ 
    

}