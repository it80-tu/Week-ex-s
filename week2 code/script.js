if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

let noteCounter = 0;

function initializeCode() {
  const addNoteButton = document.getElementById("add-note");
  const removeNoteButton = document.getElementById("remove-note");

  addNoteButton.addEventListener("click", function () {
    const notes = document.getElementById("notes");

    let newParagraph = document.createElement("p");

    newParagraph.innerText =
      ++noteCounter + ". " + document.getElementById("message").value;

    notes.appendChild(newParagraph);
  });

  removeNoteButton.addEventListener("click", function () {
    const notes = document.getElementById("notes");

    notes.removeChild(notes.lastChild);
    noteCounter--;
  });
}
