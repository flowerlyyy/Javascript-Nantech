const user={
    name: 'Gullu',
    surname: 'Shammadli',
    age: 21
}
console.log(user);
user.name='Omer';
console.log(user);

//Short hand property
// const name= user.name;    //bele yazmaq uzun yoldur.Bu kodu 1 setrde yaza bilerik.
// const surname= user.surname;
// const age= user.age;
// console.log(name);
// console.log(surname);
// console.log(age);
//^^^^
//Object desctructuring
const {name,surname,age}=user;   //eyni ad oldugu ucun bele yaza bilerik.
console.log(name);
console.log(surname);
console.log(age);

//Short hand
const _name='Memmedli';
const _age=22;
const _user={_name,_age};
console.log(_user);

//Object spread operator
const user3={
    name: 'Gullu',
    surname: 'Shammadli',
    age: 21
}
const user5={
    school: 'BANM',
    score :95
}//eger icerisinde bu xususiyyetler olan basqa bir obyekt yaratmaq isteyirikse spread operatorundan istifade edirik....
const user4={...user3};
console.log(user4);
const user6={...user3,...user5}; //hemcinin spread operatoru ile arrayleri birlesdirmek de olur.
console.log(user6);
const user7={...user3,...user5,address: 'Baku'}; //basqa property de elave ede bilerik.
console.log(user7);


//Rest    
const rest1={
    password:'Luckylife',
    word: 'sjjsh',
    class: 10
}
let {password,...rest}=rest1;  //qalnalari gostermek ucun restden istifade olunur.Cox istifae olunmur cox vaxt rest deye yazilir.
console.log(password)
console.log(rest);

//
const rest2={
    password:'Luckylife',
    word: 'sjjsh',
    class: 10
}
console.log(Object.keys(rest2)); //onun propertylerini sadalayir.
console.log(Object.values(rest2));  //deyerleri sadalayir.
console.log(Object.entries(rest2));  //property valueni bu cutu array kimigosterir. Meselen [password, Lucklife] kimi