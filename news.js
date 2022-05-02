import { navbar } from "./components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();


import { sidebar } from "./components/navbar.js";
let s=document.getElementById("sidebar")
s.innerHTML=sidebar();


let newsData=JSON.parse(localStorage.getItem("news"))
console.log(newsData)
let arr= [];
arr.push(newsData)

arr.forEach(function(el){

    let div=document.createElement("div")

    let content=document.createElement("p")
        content.innerText=el.content;
        content.style.marginLeft="20%"


        let title=document.createElement("h3")
        title.innerText=el.title;
        title.style.marginLeft="20%"

        let img=document.createElement("img")
        img.src= el.urlToImage;
        img.style.height="300px"
        img.style.width="90%";
        img.style.marginTop="30px";
        img.style.margin="auto";

        div.append(img,title,content)

        results.append(div)


})