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
function fetching(){
  fetch('https://api.tvmaze.com/search/shows?q=friends')  
.then(status)  
.then(json)  
.then(function(data) {
    newDiv = createElement('img');
    
}).catch(function(error) {  
console.log('Request failed', error);  
});
}