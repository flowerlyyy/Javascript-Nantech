//looplar sadece tekrarlanmanin qarsisini almaq ucun istifade olunur
let cem=0; 
for(let i=0; i<15; i++){    //burda birinci elan etmeni yuxarida,ucuncu hisseni asagida yazmaq mumkundur.
    cem+=i;
}
console.log(cem);

 let i1=0, sum = 0;
 for(;i1<15;){    //noqte verguller mutleq yerinde olmalidir.
     sum+=i1;
       i1++;
 }
 console.log(sum);

// //while da forun 2ci strukturundan yaranmisdir.Funksiyalarinda hec bir ferq yoxdur.
let j=0, sum2= 0;
while(j<15){    //noqte verguller mutleq yerinde olmalidir.
    sum2+=j;
      j++;  
}
console.log(sum2);


let users=['Gullu','Omer','Yeter'];
for(let i2=0; i2<users.length ;i2++){
    console.log(users[i2]);
}


let user={
    name:'Gullu',
    surname: 'Shammadli',
    age:21
}
let userabout= ' ';
for(key in user){     //ekranda yazilari yanasi cap edir. GulluShammadli21
    userabout +=user[key];
}
console.log(userabout);



let friends=['Niqar','Yerli','Ceri'];    //ekranda adlari sira ile cap edir.
for(let friend of friends){
    console.log(friend);
}

// //while da forun 2ci strukturundan yaranmisdir.Funksiyalarinda hec bir ferq yoxdur.
// let j2=0, sum3= 0;
// while(j2<15){    //noqte verguller mutleq yerinde olmalidir.
//     sum3+=j;
//       j2++;  
// }
// console.log(sum3);

//do while whiledan ferqi odur ki sert odenmedikde bele en az bir netice verir.
let j2=0, sum3= 0;
do{
    sum3+=j2; 
    j2++;  
}
while(j2<15)