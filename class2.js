//멤버 변수

class A{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new A('mark',37));

class B{
    name;
    age;
}
console.log(new B());

class C{
    name = 'no name';
    age = 0;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C('mark', 38));