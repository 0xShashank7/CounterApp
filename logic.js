const count = document.querySelector(".count");
const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const sub = document.querySelector(".sub");

add.addEventListener('click',function(){
    count.innerHTML++;
    setColor();
})
sub.addEventListener('click',function(){
    count.innerHTML--;
    setColor();
})
reset.addEventListener('click',function(){
    count.innerHTML= 0;
    setColor();
})

function setColor(){
    if(count.innerHTML > 0 ){
        count.style.color="green";
    } else if(count.innerHTML < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "black"
    }
}