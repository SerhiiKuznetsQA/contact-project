import * as basicLightbox from "basiclightbox";
import 'basiclightbox/dist/basicLightbox.min.css';
import { createUserService } from "./api";

const instanceRegister = basicLightbox.create(
  document.querySelector('#register')
);

export function handlerReg() {
    instanceRegister.show();
    const regForm = document.querySelector(".register-form")
    regForm.addEventListener("submit" , createUser)
}

export function createUser(evt) {
    evt.preventDefault()
    const { name, email, password } = evt.currentTarget.elements
    createUserService({
        name: name.value,
        email: email.value,
        password: password.value,
    })
        .then(console.log)
}