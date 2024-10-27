const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const textArea = document.querySelector("textarea");

const FORMDATA_LS = "feedback-form-state";
const formData = {
    email: "",
    message: ""
};

textArea.addEventListener("input", handleInput);
emailInput.addEventListener("input", handleEmailInput);
form.addEventListener("submit", handleSubmit);

loadData();

function handleInput(event) {
    const messageText = event.target.value;
    formData.message = messageText.trim();
    localStorage.setItem(FORMDATA_LS, JSON.stringify(formData));
}
function handleEmailInput(event) {
    const emailData = event.target.value;
    formData.email = emailData.trim();
    localStorage.setItem(FORMDATA_LS, JSON.stringify(formData));
}

function loadData() {
    const savedData = localStorage.getItem(FORMDATA_LS);
    
    if (savedData) {
        const parsedData = JSON.parse(savedData);

        formData.email = parsedData.email;
        formData.message = parsedData.message;

        emailInput.value = formData.email;
        textArea.value = formData.message;

            console.log(savedData);
    console.log(parsedData);  
        }
}

function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log("Form data: ", formData);
    
    form.reset();
    localStorage.removeItem(FORMDATA_LS);
}

