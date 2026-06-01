
setTimeout(()=>loader.style.display='none',1500);

const lenis=new Lenis();
function raf(t){lenis.raf(t);requestAnimationFrame(raf)}
requestAnimationFrame(raf);

const cur=document.getElementById('cursor');
document.addEventListener('mousemove',e=>{
cur.style.left=(e.clientX-9)+'px';
cur.style.top=(e.clientY-9)+'px';
});

document.querySelectorAll('section').forEach(s=>s.classList.add('reveal'));
const io=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')});
});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('.magnetic').forEach(btn=>{
btn.addEventListener('mousemove',e=>{
const r=btn.getBoundingClientRect();
btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)/6}px,${(e.clientY-r.top-r.height/2)/6}px)`;
});
btn.addEventListener('mouseleave',()=>btn.style.transform='translate(0,0)');
});
