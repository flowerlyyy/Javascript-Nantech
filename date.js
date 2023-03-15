let date= new Date();
console.log(date);    //indiki tarixi gostermek ucun istifade olunur.
console.log(date.getDay());   //get metodu vasitesile gun ay ili tapmaq olur sadece birini.
date.setFullYear(2018);  //set metodu vasitesile il ay gunu deyisib teyin elemek olur.
console.log(date);
console.log(date.getDay());


let date2=new Date(2022,8,29,18,15,2); //arrayin icindeki il,ay,gun,saat,deqiqe,saniye,salise de ola biler.Aylar ucun 0dan 
//baslayir yeni 11de bitir.Eger ye3rlerine yazmasaq avtomatik 0 olaraq qeyde alacaq.
console.log(date2);   


