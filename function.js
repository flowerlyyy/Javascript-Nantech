function button(){
    console.log('hi');
}
btn.addEventListener('click',button);
//burda btn htmldekinin idsidi.

function example(){
    console.log(this);   //burda this parametri olanda htmldeki kodu gosterir.
}
live.addEventListener('click',example);

function code(){
    console.log(this.innerText);  //burda innerText olanda icindeki yazini gosterir.Butov kodu deyil.
}
yes.addEventListener('click',code);

function parametr2(){
    console.log(event);  //icindeki melumatlari goruruk.Altkey,clientX, height kimi
}
goon.addEventListener('click',parametr2);

function finish (){
    console.log(this.text);    //icine istenilen texti yazmaq ucun isifade olunur.
}
last.addEventListener('click',finish);
last.text = 'yehhh';

function click2(x){
    console.log(x);
}

function returnWord(x){
 return x*x;
}
console.log(returnWord(2));

// Funksiyalar
// 1. function funksiyaAdı ( parametr  və ya parametrlər qəbul edir ){ #kod}
// 2.Funksiyanın adlarını istədiyiniz hərflərlə başlada bilərsiniz və yalnız ingilis əlifbasındakı hərflərdən istifadə etmək lazımdır.
// 3.Funksiyanın adları alt (_) xətt işarəsi ilə başlaya bilər. 
// 4.Funksiyanın adları dollar ($) işarəsi ilə başlaya bilər.
// 5.Funksiyanın adları rəqəmlə başlaya bilməz.Amma ikinci hərfdən başlayaraq rəqəm yaza bilərik.
// 6.Funksiyanın adlarına JS tərəfindən alınmış xüsusi ifadələri yaza bilmərik.Məsələn: if,for,function
// 7.Funksiya adları bir neçə dəfə elan oluna bilməz.
// 8.Funksiya adları kiçik və böyük hərflə fərqlənir.
// 9.Funksiyalarımız bir dəyişən kimi elan oluna bilər.
// normalda function salam(){document.write("salam");}    dəyişən kimi---- var salam=function(){  document.write("salam");}

// var - function block     let - block scope

// addEventListener - o zaman istifadə olunur ki htmldə hər hansı elementə klikliyəndə bizim funksiyamız gelsin.
// function funk(){
//     console.log(js);
//     }
// button.addEventListener('click',funk);
// Funksiya növləri
// 1. Parametr qəbul etməyən və  geriyə heç bir dəyər qaytarmayan.
// 2. Parametr və ya arqument qəbul edən və geriyə heç bir dəyər qaytarmayan.
// 3. Parametr qəbul edən və geriyə dəyər qaytaran.
// 4. Parametr qəbul etməyən və geriyə dəyər qaytaran.
// Funksiyaları avtomatik çağırmaq üçün (funksiya hamısı burda yazılır)();

function func(){
    if(true){
    var a=3;
    let b=4;
    document.writeln(a);
    document.writeln(b);
    }
    document.writeln(a);
    document.writeln(b);
}
func();
// 1-ci növ
function salamdunya(){
    let salam="Salam Dunya";
    document.write(salam);
}

// 2-ci növ
function topla(eded1,eded2){
    document.write(eded1 +eded2);
}
topla(5,8);

// 3-cü gün
function topla2(eded3, eded4){
    return eded3 + eded4;
}
topla2(5,8);

// 4-cü gün
function pi(){
    return 3.1415;
}
var pi=pi();
document.write(pi);