// promise 객체 ES6 부터 표준 내장 객체로 추가됨 

console.log(Promise);

// 생성자를 통해서 프로미스 객체를 만들 수 있음
// 생성자의 인자로 executor 라는 함수를 이용한다
// executor 함수는 resolve와 reject를 인자로 가짐
// (resolve, reject) => {...}
// resolve 와 reject는 함수
new Promise (/*executor*/ (resolve, reject) =>{}); //pending 상태로 돌임

// 1.생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태라고 함
// 2.executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 됨

new Promise((resolve, reject) =>{
    //
    //.. 비동기 적인 처리가 이루짐
    resolve(); // fulfilled 상태로 돌임

})

// 3. executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태가 됩니다.

new Promise((resolve, reject) =>{
    reject(); // rejected 상태가 됨
})