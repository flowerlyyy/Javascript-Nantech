/*const div=document.querySelector('div');
console.log(div.parentNode.children);
console.log(div.parentNode.hasChildNodes);
console.log(div.parentNode.firstChild);
console.log(div.parentNode.lastChild);
console.log(div.parentNode.firstElementChild);
console.log(div.parentNode.lastElementChild);
element dedikde taglar nezerde tutulur. */

const listItem=document.querySelectorAll('ul li');
listItem.forEach(function(item){
   item.firstElementChild.addEventListener('click',function(){
   this.parentNode.classList.toggle('active')
})
item.lastElementChild.addEventListener('click',function(){
    this.parentNode.remove()
})
});

document.querySelector('button').addEventListener('click',function(){
    event.preventDefault()
    const name=document.querySelector('input').value
    const text=document.querySelector('textarea').value
    const newItem=document.createElement('li');
    const newHeader=document.createElement('h1');
    newHeader.innerText=name
    newHeader.addEventListener('click',function(){
        this.parentNode.classList.toggle('active')
    })
    const newText=document.createElement('p')
    newText.innerText=text
    const btn=document.createElement('button')
    btn.innerText='remove'
    btn.addEventListener('click',function(){
        this.parentNode.remove()
    })

newItem.appendChild(newHeader)
newItem.appendChild(newText)
newItem.appendChild(btn)
document.querySelector('ul').appendChild(newItem)
document.querySelector('form').reset()
})