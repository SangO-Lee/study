//  p라는 프로미스 객체는 1000ms 후에 fulfilled 됨

const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(); //fulfilled
    },1000);
});
//p라는 프로미스 객체가 fulfilled 되는 점에 p.then 안에 설정한 callback 함수가 실행됩니다.
p.then(()=>{
//callback을 작성하는 공간
    console.log('1000ms 후에 fulfilled 됩니다.');
});