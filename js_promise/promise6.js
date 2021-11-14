//executor의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch의 callback 함수의 인자로 받을 수 있음

function p(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('error'); //에러 이유가 보통 넘어감
        },1000);
    });
}

p().then((message)=>{ //message라는 함수의 인자로 받음
    console.log('1000ms 후에 fulfilled 됩니다.', message);
}).catch((reason)=>{
    console.log('1000ms 후에 rejected 됩니다.', reason);
});