const h = document.getElementById('hour');
const m = document.getElementById('min');
const s = document.getElementById('sec');
setInterval(()=>
{
    let date = new Date();
    let hr=date.getHours();
    let mn=date.getMinutes();
    let sc=date.getSeconds();
    h.style.transform=`rotateZ(${(30*hr)+(mn/12)}deg)`;
    m.style.transform=`rotateZ(${(6*mn)}deg)`;
    s.style.transform=`rotateZ(${(6*sc)}deg)`;
    
});