import { createContactService, deleteContactService, getAllContacts, loginUserService, logoutService } from "./api";
import { markupContact } from "./markup";
import { contactForm, listContacts, logoutBtn, STORAGE_KEY } from "./refs";

const token = localStorage.getItem(STORAGE_KEY);

if (token === null) {
  location.replace('/');
}


contactForm.addEventListener('submit', handlerCreateContact)
logoutBtn.addEventListener('click', handlerLogout)
listContacts.addEventListener('click', handlerDeleteContact);



export function handlerCreateContact(evt) {
  evt.preventDefault();
  const { name, number } = evt.currentTarget.elements;
  createContactService({
    name: name.value,
    number: number.value,
  }).then(data => {
      listContacts.insertAdjacentHTML("beforeend", markupContact(data))
      contactForm.reset();
  });
}

 function reloadPage() { 
    getAllContacts().then((data) => { 
        listContacts.insertAdjacentHTML('beforeend', data.map(markupContact).join(''));
    })
}


reloadPage()

function handlerLogout() { 
    logoutService().then(() => { 
        localStorage.removeItem(STORAGE_KEY)
        location.replace("/")
    })
}


function handlerDeleteContact(evt) {
    // console.log(evt.target.nodeName);
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
    
  deleteContactService(evt.target.parentNode.id).then(() => {
    evt.target.parentNode.remove();
  });
}
