import { regBtn, logBtn } from "./js/refs";
import { handlerReg } from "./js/reg";
import { handlerLogin } from "./js/login";
import { STORAGE_KEY } from "./js/refs";


regBtn.addEventListener("click", handlerReg)

logBtn.addEventListener("click", handlerLogin)




const token = localStorage.getItem(STORAGE_KEY);

if (token !== null) {
    location.replace('/contacts.html')
}