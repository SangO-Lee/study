// 보통 reject 함수를 실행하며 reject 되는 이유를 넘기는데, 표중 내장객체인 Error의 생성자를 이용하여 Error객체를 만들 수 있음

function p(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(new Error('bad')); //에러 객체를 넘김
        },1000);
    });
}

p().then((message)=>{ //message라는 함수의 인자로 받음
    console.log('1000ms 후에 fulfilled 됩니다.', message);
}).catch((error)=>{
    console.log('1000ms 후에 rejected 됩니다.', error);
});