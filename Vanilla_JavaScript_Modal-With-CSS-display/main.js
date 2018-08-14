var editvalueButton = document.querySelector("button");
var demoContainer = document.querySelector('.demoContainer');
var backdrop;
var modal;

let outputPara = document.querySelector("#quote");

let quote = "A modal component on a webpage - how hard could it be?";
let editedQuote = '';

function updatePara() {
    outputPara.textContent = quote;
}

function closeModal() {
    if (backdrop) {
        backdrop.remove();
    }
    if (modal) {
        modal.remove();
    }
}

updatePara();

editvalueButton.addEventListener('click', function() {

    // backdrop
    backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    document.body.insertBefore(backdrop, demoContainer);
    backdrop.addEventListener("click", closeModal);

    // modal
    modal = document.createElement('div');
    modal.classList.add('modal'); 

    var modalHeading = document.createElement('h1');
    modalHeading.textContent = 'Edit your Statment';
    modal.appendChild(modalHeading);

    var textEditContainer = document.createElement('div');
    textEditContainer.classList.add('modal-input');
    modal.appendChild(textEditContainer);

    var textEditArea = document.createElement('textarea');
    textEditArea.rows = '3';
    textEditArea.addEventListener("input", function() {
        editedQuote = textEditArea.value;
    });
    textEditArea.value = quote;

    textEditContainer.appendChild(textEditArea);

    var modalActionsContainer = document.createElement('div');
    modalActionsContainer.classList.add('modal-actions');
    modal.appendChild(modalActionsContainer);

    var cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.classList.add('btn-cancel');
    cancelButton.textContent = 'cancel';
    cancelButton.addEventListener('click', closeModal);
    modalActionsContainer.appendChild(cancelButton);

    var confirmButton = document.createElement('button');
    confirmButton.setAttribute('type', 'button');
    confirmButton.classList.add('btn-confirm');
    confirmButton.textContent = 'Confirm';
    confirmButton.addEventListener('click', function() {
        closeModal();
        if (editedQuote.trim().length > 0) {
            quote = editedQuote;
            updatePara();
        }
    });
    modalActionsContainer.appendChild(confirmButton);

    document.body.insertBefore(modal, demoContainer);

    editedQuote = quote;
});
