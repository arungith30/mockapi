fetch("https://www.breakingbadapi.com/api/characters")
.then((response)=>{
    return response.json();
})
.then((result)=>{
   
    display(result);
})
.catch((err)=>{
    console.log(err);
});

function display(data){

    
    let row = document.getElementById("row");
   
    data.forEach((element) => {
            
            let col =createMyElement("div","col-sm-12 col-md-4 col-lg-4");
    
            col.style.padding='5px';
        
    
            let card = createMyElement("div","card");
    
            let cardImg=createMyElement("img","card-img-top");
    
            cardImg.src=element.img;
    
            let cardBody= createMyElement("div","card-body");
    
            let h2=createMyElement("h2");
    
            h2.innerHTML = element.name;
    
            let pTag= createMyElement("p","card-text");
    
            pTag.innerHTML = element.nickname;
    
            let h5 = createMyElement("h5");
    
            h5.innerHTML = ` Played by:${element.portrayed}<br>Role: ${element.occupation[0]}`;
            
            cardBody.append(h2,pTag,h5);
    
            card.append(cardImg,cardBody);
    
            col.append(card);
            
            row.append(col);
           
        });
    }
        function createMyElement(elemName,elemClass="",elemId=""){
            let elem =document.createElement(elemName);
            elem.setAttribute("class",elemClass);
            elem.setAttribute("id",elemId);
            return elem;
        }
    

