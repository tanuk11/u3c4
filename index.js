

import { navbar } from "./components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();


import { sidebar } from "./components/navbar.js";
let s=document.getElementById("sidebar")
s.innerHTML=sidebar();

document.getElementById("search_input").addEventListener("input",searching);

import{search ,append} from "./fetch.js"
function searching(){

// let searching(e)=>{
//     if (e.key ==="Enter"){
window.location.href="search.html"
}


// let results=document.getElementById("results")
// let query=document.getElementById("search_input").value ;
// const url=`https://masai-mock-api.herokuapp.com/news?q=${query}`

// search(url).then((res)=>{
//     console.log(res);
//     results.innerHTML=null;
//     append(res,results)
    
// })
// }


document.getElementById("in").addEventListener("click",news);
document.getElementById("ch").addEventListener("click",news1);
document.getElementById("us").addEventListener("click",news2);
document.getElementById("uk").addEventListener("click",news3);
document.getElementById("nz").addEventListener("click",news4);




async function news(){

  try{

    // let news=document.getElementById("in") ;
    let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)
    


let data= await res.json();

// console.log(data)
let news=data.articles;
results.innerHTML=null;
appendData(news)

  }
  catch(err){
      console.log(err)
  }

}


async function news1(){

    try{
  
      // let news=document.getElementById("in") ;
      let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`)
      
  
  
  let data= await res.json();
  
//   console.log(data)
  let news=data.articles;
  results.innerHTML=null;
  appendData(news)
  
    }
    catch(err){
        console.log(err)
    }
  
  } 


  
async function news2(){

    try{
  
      // let news=document.getElementById("in") ;
      let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`)
      
  
  
  let data= await res.json();
  
//   console.log(data)
  let news=data.articles;
  results.innerHTML=null;
  appendData(news)
  
    }
    catch(err){
        console.log(err)
    }
  
  } 

  
async function news3(){

    try{
  
      // let news=document.getElementById("in") ;
      let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`)
      
  
  
  let data= await res.json();
  
//   console.log(data)
  let news=data.articles;
  results.innerHTML=null;
  appendData(news)
  
    }
    catch(err){
        console.log(err)
    }
  
  } 

  
async function news4(){

    try{
  
      // let news=document.getElementById("in") ;
      let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`)
      
  
  
  let data= await res.json();
  
//   console.log(data)
  let news=data.articles;
  results.innerHTML=null;
  appendData(news)
  
    }
    catch(err){
        console.log(err)
    }
  
  } 
  



function appendData(data){

    data.forEach(function(el){
        
        let div=document.createElement("div")
        div.setAttribute("class","div")

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




 



