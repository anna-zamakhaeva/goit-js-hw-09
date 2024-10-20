const form = document.querySelector(".feedback-form");
const textArea = document.querySelector("textarea")
const formData = {
    email: "",
    message: "",
}

const FORMDATA_LS = "feedback-form-state";
localStorage.setItem(FORMDATA_LS, "formData");


textArea.addEventListener("input", handleInput);
popText();
function handleInput(event) {
    const message = event.target.value;
    console.log(message);
    
    localStorage.setItem(FORMDATA_LS, JSON.stringify(formData));
};
function popText() {
    const savedMsg = localStorage.getItem(JSON.parse(FORMDATA_LS).message);
    if (savedMsg) {
        textArea.value = savedMsg;
    }
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    form.reset();
    localStorage.removeItem(FORMDATA_LS);
}

