import { navbar } from "./components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();



import { sidebar } from "./components/navbar.js";
let s=document.getElementById("sidebar")
s.innerHTML=sidebar();



document.getElementById("search_input").addEventListener("click",searching);

import{search ,append} from "./fetch.js"
function searching(){

// let searching =(e)=>{
//     if (e.key ==="Enter"){


let results=document.getElementById("results")
let query=document.getElementById("search_input").value ;
const url=`https://masai-mock-api.herokuapp.com/news?q=${query}`

search(url).then((res)=>{
    console.log(res);
    results.innerHTML=null;
    append(res,results)
    
})
}
