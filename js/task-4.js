const form = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault();
  const userEmail = event.currentTarget.elements.email;
  const userPass = event.currentTarget.elements.password;
  if (userEmail.value.trim() === "" || userPass.value.trim() === "") {
    alert("All form fields must be filled in");
    event.preventDefault();
  } else {
    const formEl = event.currentTarget.elements;
    const info = {
      email: formEl.email.value.trim(),
      password: formEl.password.value.trim(),
    };
    console.log(info);
    event.currentTarget.reset();
  }
};

form.addEventListener("submit", onFormSubmit);
