let municipallities = {};
let values = [];
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
  function start(){
    fetch('https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff')  
    .then(status)  
    .then(json)  
    .then(function(data) {  
      console.log('Request succeeded with JSON response', data);
      municipallities = data.dataset.dimension.Alue.category.label;
    //   data.dataset.value.map(val=>values.push(val));
    values.push(data.dataset.value);
      console.log(municipallities)

    }).catch(function(error) {  
      console.log('Request failed', error);  
    });
    tableFill()
  }

    function tableFill(){
        const table = document.getElementsByTagName('tbody');
        console.log(Object.values(municipallities));
            for (let i=0;i<values.length;i++){
                let row = document.createElement('tr')
                row.innerHTML= `<td><td/><td>${values[i]}</td>`
                table.appendChild(row);
                console.log(i);
    }
}
start();