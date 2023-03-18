//html elementleriyle islemeyi DOM Javascript vasitesile edirik.
// document.getElementsByTagName
// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.querySelector
// document.querySelectorAll

//document.getElementsByTagName
let headers=document.getElementsByTagName('h1');
console.log(headers);
let inputs=document.getElementsByTagName('input');
/*Hemcinin biz htmldeki melumatlari burda deyise bilerik.
1.innerText  - sadece melumatlari deyise bilir.Html taglarini tanimir onlari melumat kimi qebul edir.
2.innerHTML  - html taglarini taniyaraq melumatlari deyisir
3.textContent   -  innerTextle tek ferqi slashdi /n
bu 3nu consolun icinde de isletmek olur.Sadece deyeri qaytarir.
*/
headers[0].innerText= 'New Header';
headers[1].innerText='<i>Second Header</i>'  //innerText burda i tagini tanimadi sadece melumat tipini qebul etdi.
console.log(headers);
console.log(headers);

headers[2].innerHTML='<i> Third Header </i>';
console.log(headers);

headers[3].textContent=' Forth \n Header';
console.log(headers);

inputs[0].value='djkshvkjfv';
console.log(inputs);


// document.getElementById ---------id vasitesile nese ede bilerik.Lakin her birinin oz ferdi idsi olmalidir.
let fifthHeader=document.getElementById('fifth');//eyni id-li iki deyer ola bilmez.He biri sexsi olmalidir.2eyni olsa bele 1ci gorduyunu secir.
fifthHeader.innerHTML='<b>New ID</b>';
console.log(fifthHeader);

//document.getElementsByClassName---class adina gore deyisiklik ede bilerik.Burda eyni classa aid butun elementlere aiddir.Yalniz birinciye yox


/* document.querySelector-----cssde elementlere hansi cur muraciet edirdikse burda da eyni cur muraciet edirik.
Qarsisina cixan ilk neticeni gosterir */

/* document.querySelector-----cssde elementlere hansi cur muraciet edirdikse burda da eyni cur muraciet edirik.
Qarsisina cixan butun neticeleri gosterir */
