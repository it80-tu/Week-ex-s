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
    console.log(data.variables);

    const labels = Object.values(data.variables[0].values);
    const country = Object.values(data.variables[1].values);
    const values = Object.values(data.variables[2].values); 
    
    console.log(labels)
    console.log(country)
    console.log(values)



    }).catch(function(error) {  
        console.log('Request failed', error);  
    });
    
    
