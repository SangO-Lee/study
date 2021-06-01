//static 변수, 함수

class A{
    static age = 37;
    static hello() {
        console.log(A.age); //A는 new A로 생성한 객체가 아니라, class의 변수, 함수로 생각해야함
    }
}

console.log(A, A.age);
A.hello();

class B{
    age = 32;
    static hello(){
        console.log(this.age);
    }
}

console.log(B, B.age);
// new B.hello();

class C{
    static name = '이 클래스의 이름은 C가 아니다.';
}

console.log(C);