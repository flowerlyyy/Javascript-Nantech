//Qrup məlumatları və ya hansısa məlumatın məlumatları obyekt şəklində saxlanılır.
//A constructor is a special function that creates and initializes an object instance of a class.
function User(x,y){
    // const obj=new Object();       //onsuz da constructor obyekt yaratmaq oldugu ucun artiq buna ehtiyac duymuruq.
     this.name= x ;  //obj.name = 'Gullu';
    this.surname=y; //obj.surname='Shammadli';
    this.getData=function(){
       return this.name  + ' ' + this.surname;     //return obj.name + ' ' + obj.surname;
    }
   // return obj;   constructora gore buna da ehtiyac duymuruq.
}
const user1= new User('Me','Me');
console.log(user1);
const user2= new User('You','You');
console.log(user2);