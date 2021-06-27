//executor의 resolve 함수를 실행할때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있음

function p(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('hello'); //문자열을 인자로 넣음
        },1000);
    });
}

p().then((message)=>{ //message라는 함수의 인자로 받음
    console.log('1000ms 후에 fulfilled 됩니다.', message);
}).catch(()=>{
    console.log('1000ms 후에 rejected 됩니다.');
});