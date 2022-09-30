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
document.querySelector('#submit-data').onclick = fetching;

function fetching(){
   let word = document.querySelector('#input-show').value;
  fetch(`https://api.tvmaze.com/search/shows?q=${word}`)  
.then(status)  
.then(json)  
.then(function(data) {
    data.map(film => {
        let elem =`<img src="${film.show.image.medium}"><div class="show-info"><h1>${film.show.name}</h1><p>${film.show.summary}</p></div>`;
        document.querySelector('.show-data').innerHTML+=elem;
    })
        
}).catch(function(error) {  
console.log('Request failed', error);  
})};
