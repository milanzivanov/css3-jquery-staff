let buttons = document.querySelectorAll("button");
let modal = document.querySelector(".modal");
let backdrop = document.querySelector(".backdrop");

let outputPara = document.querySelector("#quote");
let textEdit = document.querySelector(".modal textarea");

let quote = "A modal component on a webpage - how hard could it be?";
let editedQuote = '';

// outputPara.textContent = quote;
function updatePara() {
    outputPara.textContent = quote;
}

function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}

updatePara();

buttons[2].addEventListener('click', function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
    editedQuote = quote;
    textEdit.value = quote;
});

buttons[0].addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

buttons[1].addEventListener('click', function() {
    closeModal();
    if (editedQuote.trim().length > 0) {
        quote = editedQuote;
        // outputPara.textContent = quote;
        updatePara();
    }
});

textEdit.addEventListener("input", function() {
    editedQuote = textEdit.value;
});
