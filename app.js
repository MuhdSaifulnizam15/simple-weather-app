const api_key = "805d688fed360ee6da4a38cb03021419";

window.addEventListener('load', ()=> {
    let long; //longitude
    let lat; //latitude

    let tempDesc = document.querySelector('.temperature-description');
    let tempDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let icons = document.querySelector('#icon');
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;
            const iconUrl = 'http://openweathermap.org/img/wn/';

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                // Load data from the API
                const temp = data.main.temp;
                const location = data.name;
                const {description, icon } = data.weather[0];

                console.log(location);
                console.log(description);
                console.log(icon);


                let tempKtoDegree = (temp - 273.15).toFixed(2);
                console.log(tempKtoDegree);
                
                // Set DOM elements from the API
                tempDegree.textContent = tempKtoDegree;
                locationTimezone.textContent = location;
                tempDesc.textContent = description;
                icons.src = iconUrl + icon + '@2x.png';
            });
        });
    }
});