/*
length - arrayin uzunluğunu göstərir.
sort - arrayin içindəkiləri əlifba sırası ilə düzülür.
reverse - arrayin içindəkiləri sondan əvvəkə doğru düzür.
join - arrayin içindəkiləri birləşdirir.
tostring- istənilən tipi stringə çevirir.
push - arraye yeni element daxil etmek ucun istifade olunur.
pop - sondaki elementi silmek ucun istifade olunur.
concat - arraye yeni array ve ya string birlesdirmek ucun istifade olunur.
shift - arraydeki ilk elementi silmek ucun istifade olunur.
unshift - arrayde ilk element kimi yeni element daxil edir.
splice - bircur yeni element daxil etmek ucun istifade olunur.Pushdan ferqi odur ki yeni elementi istediyimiz indekse elave ede bilerik.
ve istediyimiz elementi sile bilerik.
slice - elementi kesmek ucun istifade olunur.
*/  
let users=['Omer','Resad','Esmer','Gullu'];
// console.log(users.length);
// console.log(users.sort());
// console.log(users.reverse());
// console.log(users.join(','));

// console.log(users.toString());
// document.write(users); //document.write ile yazanda avtomatik string seklinde yazir.

// users.push('Ferid');
// console.log(users);
// console.log(users.push('Leyla')); // pushu consolun icinde yazanda yeni elementin nomresini gosterir. 6

// console.log(users.concat('Hi'));

// users.pop()
// console.log(users);
// console.log(users.pop()); //popu burda yazanda silinen elementi gosterir.  

// users.shift();
// console.log(users);
// console.log(users.shift()); // silinmis elementi consolda gosterecek.

// users.unshift('Nurlan');    
// console.log(users);
// console.log(users.unshift('Hay')); //arrayin uzunlugunu gosterecek.

// users.splice(1,1,'Finish'); //1.hansi indeksin yerine kecdiyini gosterir. 2.Neçe elementi silmek istediyimizi gosterir yrni elementi ora daxil edir. 3.Yeni element
// console.log(users);
// console.log(users.splice(3,1,'Finish'));  //silinmis elementleri gosterir.

users.splice(1,2);
console.log(users); //splicedan ferqli olaraq slice esas arrayin icinde isletmedikde onu consolda gostermek isteyende hec bir deyisiklik gostermeyeceyini goreceyik.
console.log(users.slice(1,3)); //kesilmis hisseni gosterir.
