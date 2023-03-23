const divElement = document.getElementById("text");

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.code === "KeyE") {
        event.preventDefault();
        replaceWithTextArea();
    } else if (event.ctrlKey && event.code === "KeyS") {
        event.preventDefault();
        replaceWithDiv();
    }
});

function replaceWithTextArea() {
    const text = divElement.innerText;
    const textareaElement = document.createElement("textarea");
    textareaElement.value = text;
    divElement.replaceWith(textareaElement);
    textareaElement.focus();
}

function replaceWithDiv() {
    const textareaElement = document.getElementsByTagName("textarea")[0];
    const text = textareaElement.value;
    const divElement = document.createElement("div");
    divElement.innerText = text;
    textareaElement.replaceWith(divElement);
}

