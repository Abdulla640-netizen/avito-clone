let count=0
let score=document.getElementById('score');
const minus=document.getElementById('minus');
minus.addEventListener('click',function(){
    count--;
    score.textContent=count
});
const plus=document.getElementById('plus')
plus.addEventListener('click',function(){
    count++
 
    score.textContent=count
})
