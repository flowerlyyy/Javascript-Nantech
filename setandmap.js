let set=new Set([    //array;e ferqi burda length deyil size islenir.Diger ferq set icinde tekrar element olsa onu gormezden gelir.
   ' item1',
    'item2',
    'item3',
    'item2' // bunu orda saymayacaq.
]);
set.add('item4'); //yeni element daxil etmek istedikde adddan istifade olunur.
set.delete('item1');  //elementi silmek ucun istifade olunur.
console.log(set);
console.log(set.has('item2'));  //hansisa elementin setin icinde olub olmadigini yoxlayiriq. true ya false verir.
console.log(set.size); // olcusunu gosterir.

let item=set.values();
console.log(item.next()); //ilk elementi gosterir.

let sets=set.values();//ikinci elementi gormek isteyirikse
sets.next();
console.log(sets.next());

//for of vasitesile butun elementleri ardicil gormek mumkundur.    sutun seklinde
for(item of set.values()){
    console.log(item);
}
// let array= [
//     'item1',
//     'item2',
//     'item3'
// ]console.log(array);

//MAP   burda da tekrar element olanda gorunmur.
let user=new Map([
    ['name','Gullu'],
    ['age','21']
]);
console.log(user);
user.set('surname','Shammadli'); //yeni property value daxil etmek ucun setden istifade olunur.
console.log(user);
console.log(user.get('name'));  // get vasitesile istediyimiz deyeri ala bilerik.Bunun ucun property adini yaziriq.  answer:Gullu
user.delete('age'); //propertyini silmek ucun istifade olunur.
console.log(user);    
console.log(user.has('name')); //hansisa propertynin burda olub olmadigini yoxlayir.
user.set('age','30');  // eger deyer deyismek isteyirikse eyni propertyini yazib deyerini deyisirik sadece.
console.log(user);
for(const item of user){
    console.log(item);
}

//Final arraylerden set ve mapin ferqi melumat saxlamaq deyil.Tekrarlayicilar yaratmaqdir.Tekrar melumatin olmadigini temin etmek ucun
