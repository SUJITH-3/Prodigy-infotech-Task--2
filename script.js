
function Add(event)
{
    event.preventDefault()
    let text=document.getElementById("input").value
    if(!text){
        alert("Please enter the field")
    }
    else{
        let result=document.getElementById("result")
        let para=document.createElement("p")
        let div=document.createElement("div")
        let icon=document.createElement("i")
         let checkbox=document.createElement("input")
        checkbox.setAttribute("type","checkbox")
       icon.setAttribute("class","fa-solid fa-xmark")
        para.innerText=text
        div.append(checkbox,para,icon)
        result.append(div)
        div.style.cssText="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;box-shadow:7px 7px 6px rgb(23, 22, 22);width:100%;border-radius:10px;"
        icon.style.cssText="font-size:28px;color:red;margin-left:15px"
        checkbox.style.cssText="width:18px;height:48px;margin-right:15px"
        checkbox.addEventListener("click",(e)=>{
            if(e.target.checked){
              para.style.cssText="text-decoration:line-through"
          }
            else{
              para.style.cssText="text-decoration:none"
          }
          })
             icon.addEventListener("click",(e)=>{
            if(e.target==icon){
                  div.remove()
              }
          })  

    }
}
let text=document.getElementById("input")
text.addEventListener("keypress",(e)=>{
  if(e.key=="Enter"){
    let text=document.getElementById("input").value
    let result=document.getElementById("result")
    let para=document.createElement("p")
    let div=document.createElement("div")
    let icon=document.createElement("i")
     let checkbox=document.createElement("input")
     checkbox.setAttribute("type","checkbox")
   icon.setAttribute("class","fa-solid fa-xmark")
   para.innerText=text
   div.append(checkbox,para,icon)
   result.append(div)
   div.style.cssText="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;box-shadow:7px 7px 6px rgb(23, 22, 22);border-radius:10px;"
   icon.style.cssText="font-size:28px;color:red;margin-left:15px"
   checkbox.style.cssText="width:18px;height:48px;margin-right:15px"
   checkbox.addEventListener("click",(e)=>{
  if(e.target.checked){
    para.style.cssText="text-decoration:line-through"
}
  else{
    para.style.cssText="text-decoration:none"
}
})
   icon.addEventListener("click",(e)=>{
  if(e.target==icon){
        div.remove()
    }
})  

  }
})








