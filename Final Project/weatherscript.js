function convert_from_kelvin(val){
    return (val - 273).toFixed(2)
  }
  function convert_to_fahrenheit(val){
    return ((val * (9/5)) + 32).toFixed(2)
  }
  var inputval = document.querySelector('#cityinput')
  var btn = document.querySelector('#add');
  var city = document.querySelector('#city_data')
  var temp = document.querySelector('#temp')
  var desc = document.querySelector('#description')
  var humid = document.querySelector('#humidity')
  var wind = document.querySelector('#wind')
  api = "25c0995fe136bf1ca1e89d1b419fef2d" //API documentation: https://openweathermap.org/current
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+api)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var temperature = data['main']['temp']
            var desc = data['weather']['0']['description']
            var humid = data['main']['humidity']
            var windspeed = data['wind']['speed']
            city.innerHTML=`Weather in <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convert_from_kelvin(temperature)}°C and ${convert_to_fahrenheit(convert_from_kelvin(temperature))} F</span>`
            description.innerHTML = `Sky Conditions: <span>${desc}<span>`
            humidity.innerHTML = `Humidity: <span>${humid}%<span>`
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h<span>`
        })
        .catch(err => alert('Please enter a valid city!'))
    })