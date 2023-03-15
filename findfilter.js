let users=[
    {
        name: 'Yess',
        age: 23
    },
    {
        name: 'Whynot',
        age: 35
    },
    {
        name: 'Ofcourse',
        age: 28
    },
    {
        name: 'Finish',
        age: 26
    },
]
//  let filterUsers=users.filter(user=>{
//     return user.age>26
//  })
//  console.log(filterUsers);

 let findUsers=users.find(user=>{
    return user.age <27
 })
 console.log(findUsers);

 //find ile filter ferqi odur ki filter axtardığımız bütün nəticələri verir.Find isə qarşısına çıxan ilk və yalnız bir nəticəni göstərir.
//filterden daha cox istifade olunur.