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
fetch('https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px')
    .then(status)
    .then(json)
    .then(function(data) {
        console.log(data);
        console.log(data.variables[0].valueTexts);
        let html = document.querySelector('.data');
        for (let i in data.variables[0].valueTexts){
            html.innerHTML+=' '+data.variables[0].valueTexts[i];
        }
        
    }).catch(function(error) {  
        console.log('Request failed', error);  
    });
    
