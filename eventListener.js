//1-ci yol
// const duyme=document.getElementById('duyme1');
// duyme.onclick= function(){
//     alert();
// };

//2-ci yol
//  const duyme1=document.getElementById('duyme1');
/* duyme1.addEventListener('click',hi)
 duyme1.addEventListener('mouseover',bye);
 function hi(){
    alert(1);
}
function bye(){
    alert(2);
}   */

/* duyme1.addEventListener('mouseover',function(){
    this.style.background='green';
});
duyme1.addEventListener('mouseout',function(){
    this.style.background='red';
})   */

// duyme1.addEventListener('click',function(){
//     console.log(event);   //buttona aid butun funksiyalari gosterir.
// })

const list=document.querySelector('ul');
const listitem=document.querySelectorAll('li');
const btn=document.querySelector('button');
const inpt=document.querySelector('input');

listitem.forEach(element => {
    element.addEventListener('click',function(){
        console.log();
        if (this.style.height=='100px') {
            this.style.height='12px'
        }else{
            this.style.height='100px'
        }
    })
});
btn.addEventListener('click',function(){
    list.innerHTML+=`<li>${document.querySelectorAll('li').length +1}) ${inpt.value}</li>`;
    inpt.value='';
})

