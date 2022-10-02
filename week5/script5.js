function status(response) {  
    if (response.status >= 200 && response.status < 300) {  
      return Promise.resolve(response)  
    } else {  
      return Promise.reject(new Error(response.statusText))  
    }  
  }
  
  function json(response) {  
    return response.json()  
  }
fetch('https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326')
.then(status)
.then(json)  
.then(function(data) {
    console.log(data);
}).catch(function(error) {  
  console.log('Request failed', error);  
});