
const cards=document.querySelectorAll('.card');
cards.forEach(c=>{
 c.addEventListener('mousemove',()=>{
   c.style.transform='translateY(-8px) scale(1.02)';
 });
 c.addEventListener('mouseleave',()=>{
   c.style.transform='translateY(0) scale(1)';
 });
});
