let username = ['Webmaster', 'User123', 'AnotherUser222'];
let email = ['example@email.com','example@email.com','example@email.com'];
let address = ['Demoland123', 'UserPlace321', 'AnotherPlace21'];
let admin = [true,false,false];
let table = document.querySelector('.table');
const notes = document.getElementById("notes");

const Render = () => {
    table.innerHTML = '';
    for (let i=0; i<username.length;i++){
        table.innerHTML+= `<tr>
                                <td>${username[i]}</td>
                                <td>${email[i]}</td>
                                <td>${address[i]}</td>
                                <td>${admin[i] ? 'X': '-'}</td>
                           </tr>`
    };
};
Render();

// if (document.readyState !== "loading") {
//   console.log("Document is ready!");
//   Render();
// } else {
//   document.addEventListener("DOMContentLoaded", function () {
//     console.log("Document is ready after waiting!");
//     Render();
//   });
// }

let noteCounter = 0;
const unameValue = document.getElementById('uname');
const mailValue = document.getElementById('mail');
const addressValue = document.getElementById('address');
const adminValue = document.getElementById('admin');
const messageValue = document.getElementById('message');
const addNoteButton = document.getElementById("add-note");
const removeNoteButton = document.getElementById("remove-note");

const AddNote = () => {
    username.push(unameValue.value);
    email.push(mailValue.value);
    address.push(addressValue.value);
    admin.push(adminValue.checked);

    const notes = document.getElementById("notes");
    let newParagraph = document.createElement("p");

    newParagraph.innerText =
      ++noteCounter + ". " + document.getElementById("message").value;

    notes.appendChild(newParagraph);

    Render();
};

const RemoveNote = () => {
    notes.removeChild(notes.lastChild);
    username.pop(unameValue.value);
    email.pop(mailValue.value);
    address.pop(addressValue.value);
    admin.pop(adminValue.checked);
    noteCounter--;
    Render();
}

addNoteButton.addEventListener("click",AddNote);
removeNoteButton.addEventListener("click",RemoveNote);
