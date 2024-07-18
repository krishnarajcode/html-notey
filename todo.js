var backarea=document.querySelector(".backarea")
var popup=document.querySelector(".popup")
var btn=document.querySelector(".btn")

btn.addEventListener("click",function(event){
    event.preventDefault()
    backarea.style.display="block"
    popup.style.display="block"
})
var cancel=document.querySelector(".cancel")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    backarea.style.display="none"
    popup.style.display="none"
})

var inputbox1=document.querySelector(".inputbox1")
var inputbox2=document.querySelector(".inputbox2")
var container=document.querySelector(".container")
var addnote=document.querySelector(".addnote")

addnote.addEventListener("click",function(event){
    event.preventDefault()
    var newcontainer=document.createElement("div")
    newcontainer.setAttribute("class","container")
    newcontainer.innerHTML=`<h2>${inputbox1.value}</h2>
    <p>${inputbox2.value}</p>
    <button onclick="deletenote(event)">CLOSE</button>`
    document.body.insertBefore(newcontainer, backarea.nextSibling);
    backarea.style.display="none"
    popup.style.display="none"
    inputbox1.value = "";
    inputbox2.value = "";
})

function deletenote(event)
{
    event.target.parentElement.remove()
}


