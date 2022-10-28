let menu = document.getElementById('menu')
let item = document.getElementById('item-lists')
menu.addEventListener("click",function(){
   if(item.style.display==='none'){
        item.style.display = 'block'
   }else{
    item.style.display = 'none'
   }
})