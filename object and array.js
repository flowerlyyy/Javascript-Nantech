//objects
let user={
    name: 'Gullu',
    surname : 'Shammadli',                   //melumatlari ayri yogmaqdansa oyket seklinde yigmaq mumkundur.
    age: 21
}
user.age=22;
user.city='Sumgait';
console.log(user);
console.log(user.name + ' ' + user['surname'] + ' ' + user.age);  //2yolla cagirmaq olar user.name ve ya user['name']

//arrays
// Massivlər(array) - özündə çoxlu saydaməlumat saxlayan dəyişən tipidir.
// 1. let students= ["Eli", "Vaqif", "Konul"];
//    document.write(students[2]);

// 2. let students=new Array("Eli", "Vaqif", "Konul");
//    document.write(students[2]);
// 
let users=['Gullu','Nigar','Yerli','Ceyran'];
console.log(users.length);  //length vasitesile arrayimizin uzunlugunu oyrene bilerik.
users[4]='Noone'; // istenilen vaxt arraye yeni element daxil etmek mumkundur.
console.log(users[2]);
console.log(users);

let children=new Array('Gullu','Nigar','Yerli','Ceyran') //array yaratmagin ikinci bir yolu da budur.New Array vasitesile.Amma birinci
//  daha cox islenir.//

//arrayin her bir qiymetibir obyekt ola biler.
let boxes=[
    {
        username: 'Gullu',
        usersurname: 'Shammadli',
        userage: 21,
    },{
        username: 'Gul',
        usersurname: 'Memmedli',
        userage: 22,
    }
]
console.log(boxes); // ikisi de consolda gorunecek. 
console.log(boxes[0].usersurname); //bir obyektin elementini gosterecek.
console.log(boxes[1]['userage']);//bir obyektin elementini gosterecek. 