

let search= async(url)=>{
 try{

    let res=await fetch(url)

    let data=await res.json();

    return data.articles;
 }
 catch(err){
     console.log(err)
 }

}





function append(data,results){
    data.forEach(function(el){
        
        let div=document.createElement("div")
        div.setAttribute("class","div")
        div.addEventListener("click",function(){
            news(el)
        })

        let content=document.createElement("p")
        content.innerText=el.content;
        content.style.marginLeft="25%"


        let title=document.createElement("h3")
        title.innerText=el.title;
        title.style.marginLeft="25%"

        let img=document.createElement("img")
        img.src= el.urlToImage;
        img.setAttribute("class","img")

        div.append(img,title,content)

        results.append(div)

    })


}
export {search ,append}


function news(el){
    window.location.href="news.html"
    localStorage.setItem("news",JSON.stringify(el))
}