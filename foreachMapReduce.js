//foreach vasitesile arraylerin içindəki məlumatlar üzərində dövrlər edirik.
const users=[
    {
        class: 'B',
        luck: 'No',
        age: 23
    },
    {
        class: 'C',
        luck: 'No',
        age: 21
    },
    {
        class: 'A',
        luck: 'Yes',
        age: 32
    },
]
users.forEach((user,index,array)=>{      //forEach arrayler üçün dövr aparatıdır.Hər birini ayrı ayrı ekranda çap edir.ForEach bizə heç bir dəyər return etmir.
    console.log(user);     //Sadəcə arrayin içərisində sətirlər içərisində gəzir.Yeni bir sətir yaratmır.
})                         //dəyişən kimi user və indexdən istifadə olunur.Arraydən deyil.
                           //ForEach heç bir nüsxə yaratmır.
                           //Yaln;z arrayin içində fırlanıb nəyisə yoxlaya bilərik, cem tapa bilerik.

let sum=0;
users.forEach(userAge=>{
sum+=userAge.age;           
})
console.log(sum);

users.forEach((words,index,array)=>{
    console.log(++index + ')' + words.luck + '-' + words.age);
})

let newUser=users.map(user=>{    //Arrayin bir kopyasını yaradıb başqa bir arrayə mənimsədə bilərik.
    return {name: user.luck, age : user.age*2};
})
console.log(newUser);