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
function fetching(id,word){
  fetch(`https://api.tvmaze.com/search/shows?q=${word}`)  
.then(status)  
.then(json)  
.then(function(data) {
    console.log(data)
    document.querySelector('.show-data').innerHTML = `<img src="${data[id].show.image.medium}"><div class="show-info"><h1>${data[id].show.name}</h1><p>${data[id].show.summary}</p></div>`  
}).catch(function(error) {  
console.log('Request failed', error);  
});
}
fetching(0,'friends');