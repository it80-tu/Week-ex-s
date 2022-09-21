document.querySelector("#my-button").onclick = function(){
    console.log("hello world");
    document.getElementsByClassName("h1-title")[0].innerHTML = "My notebook";
  }
  document.querySelector("#add-data").onclick = function(){
    const newLi = document.createElement('li');
    const ul = document.querySelector("ul");
    ul.appendChild(newLi)
  }

