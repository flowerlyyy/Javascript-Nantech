let attributes=document.querySelector('a');
console.log(attributes.getAttribute('href'));  
/*getAttribute vasitesile attributin icindeki deyeri oyrenirik.
  setAttributes vasitesile attributun icindeki deyeri deyise bilirik.
*/
attributes.setAttribute('href','http://google.com');
console.log(attributes.getAttribute('href'));

/*
Deyek ki biz tagimizda class adlarini siyahi kimi gormek isteyirik.Bu zaman classlistden istifade edeceyik.
*/
const images=document.querySelector('img');
const classes=images.classList;
console.log(classes); //array kimi class adlarini gosterecek.
console.log(classes[0]); //array kimidi .istenilen elementini gormek olur.
console.log(classes.value); //class adlarini bir yerde string kimi gosterecek.

/*
class adi elave etmek isteyirikse  ad.classList.add('')
class adi silmek isteyirikse ad.classList.remove(')
toggle ise class varsa silir.Yoxdusa elave edir.
 */
images.classList.add('new');
console.log(classes.value);
images.classList.remove('redmi');
console.log(classes);
images.classList.toggle('Gullu');
console.log(classes);

let headers=document.querySelector('new-header');
headers.style.color='red';
console.log(headers);
