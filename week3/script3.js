let municipallities = {};
let values = [];
let mun = [];
let employment = [];
const table = document.querySelector('.data');  
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
    fetch('https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff')  
    .then(status)  
    .then(json)  
    .then(function(data) {
      municipallities = data.dataset.dimension.Alue.category.label;
      data.dataset.value.map(val=>values.push(val));
      Object.values(municipallities).map(el=>mun.push(el))
            for (let i=0;i<values.length;i++){
                let row = document.createElement('tr')
                row.innerHTML= `<td>${mun[i]}</td><td>${values[i]}</td>`
                table.appendChild(row);
            }

    }).catch(function(error) {  
      console.log('Request failed', error);  
    });


    fetch('https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065')  
    .then(status)  
    .then(json)
    .then(function(data) {
      data.dataset.value.map(val=>employment.push(val));
      let trs = document.querySelectorAll('tbody tr');
      let i = 0;
      for (let tr of trs){
        let newTd3 = document.createElement('td')
        newTd3.textContent = employment[i];
        tr.appendChild(newTd3);
        let newTd4 = document.createElement('td')
        newTd4.textContent = (Math.round((employment[i]/values[i])*10000))/100 + '%';
        tr.appendChild(newTd4);
        i++
    }
    }).catch(function(error) {  
      console.log('Request failed', error);  
    });
