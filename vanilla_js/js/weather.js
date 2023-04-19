function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = 'a9f2271c83f32fda685fc4596091b9b9';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`; 
    fetch(url).then(response => response.json()).then(data => {
        const loading = document.querySelector('#weather .loading');
        const info = document.querySelector('#weather .info');
        const city = document.querySelector('#weather .city');
        const weather = document.querySelector('#weather .weather');
        const temp = document.querySelector('#weather .temp');
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = data.main.temp + '°C';
        loading.style.display = 'none';
        info.style.display = 'block';
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
//geolocation은 함수 2개를 파라미터로 설정. 성공시, 실패시