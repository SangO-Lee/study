//super

class Parent{
    name;

    constructor(name){
        this.name = name;
    }

    hello(){
        console.log('hello',this.name);
    }
}

 class Child extends Parent{
     age;

     constructor(name, age){
         super(name);// super는 부모의 constructor를 의미. 부모에서 name을 가져옴
         this.age = age;
     }

     hello(){
         console.log('hello',this.name,this.age);
     }
 }

 const p = new Parent('mark');
 const c = new Child('mark2', 32);

 console.log(p, c);
 C.hello();