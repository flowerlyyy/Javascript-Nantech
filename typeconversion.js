let a=5;
console.log(typeof a);   //dəyişənin növünü öyrənmək üçün typeof üsulundan istifadə olunur.

let b=8;
let c='dhgcv';   //NaN ədəd tipidir.
console.log(b/c);   //NaN not a number.Əgər riyazi əməliyyat string ya obyektin üzərində yerinə yetirilirsə NaNla rastlaşacayıq.

//Arraylər,setlər, maplər, date, null bunlar hamısının növü obyektdir.New ilə yazılan hər şey obyektdir. typeof
//Funksiyalar funksiya tipidir.
//  dəyişənləri stringə çevirmək üçün toString metodundan istifadə olunur.
let d='5azn';
let e=parseInt(d);
console.log(e);

let h='51.5jsks';
let g=parseFloat(h);
console.log(g);

let empty='';       //Əgər '' olsa false verəcək. ' 'olsa true verəcək.
if(a){
    alert('false olacaq');
}  
else{
    alert('true olacaq.');
}   

let array=[];         //0 verecek.Icinde bir eded olsaydi onu eded kimi gosterecekdi. 2 ve daha cox olsaydi NaN kimi gosterecekdi.
let hi= Number(array);
console.log(hi);