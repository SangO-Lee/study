//get, set

class A{
    _name = 'no name';
    get name(){
        return this._name + '@@@';
    }

    set name(value){
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
a.name = 'mark';
console.log(a);
console.log(a.name);
console.log(a._name);

//readonly

class B{
    _name = 'no name';

    get name(){
        return this._name + '@@@';
    } // 세터가 없기 때문에 값이 들어와도 반환되는 것이 없음
}

const b = new B();
console.log(b);
b.name = 'brann';