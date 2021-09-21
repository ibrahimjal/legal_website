const navLinks = document.getElementById('navLinks')
const closeBtn = document.getElementById('closeBtn')
const menuBtn = document.getElementById('menuBtn') 

menuBtn.addEventListener('click', ()=>{
    navLinks.style.right = '0';
})
closeBtn.addEventListener('click', ()=>{
    navLinks.style.right = '-50vw';
})

// cursor
const cursor = document.getElementById('cursor');

document.onmousemove = function(e){
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";
    cursor.style.display = "block";
}


