const api_key = "805d688fed360ee6da4a38cb03021419";

window.addEventListener('load', ()=> {
    let long; //longitude
    let lat; //latitude
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;
        });


    }else {
        h1.textContent = "Geolocation not enable";
    }
});