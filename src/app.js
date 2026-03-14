const firstRef = document.querySelector('#firstName');
const lastRef = document.querySelector('#lastName')
const phoneRef = document.querySelector('#phone')
const emailRef = document.querySelector('#email')
const btnRef = document.querySelector('#saveBtn')
const listRef = document.querySelector(".list")


let contacts = JSON.parse(localStorage.getItem("contacts")) || [];


function render () {
    const markup = contacts.map((contact, index) => {
        return `<li>
            <strong>${contact.firstName} ${contact.lastName}</strong>: ${contact.phone}
            <button data-index="${index}" class="delete-btn">Видалити</button>
            <button data-index="${index}" class="edit-btn">Редагувати</button>
        </li>`;
    }).join("")
    listRef.innerHTML = markup
}
render()


btnRef.addEventListener("click", () => {
    const newContact = {
        firstName: firstRef.value,
        lastName: lastRef.value,
        phone: phoneRef.value,
        email: emailRef.value,
    }
    contacts.push(newContact)

    localStorage.setItem("contacts", JSON.stringify(contacts));
    render()

    firstRef.value = "";
    lastRef.value = "";
    phoneRef.value = "";
    emailRef.value = "";
})


listRef.addEventListener("click", (event) => {

    if(event.target.classList.contains("delete-btn")){
        const index = event.target.dataset.index
        contacts.splice(index, 1)
        localStorage.setItem("contacts", JSON.stringify(contacts))
        render()
    }


    if(event.target.classList.contains("edit-btn")){
        const index = event.target.dataset.index
        const contact = contacts[index];


        firstRef.value = contact.firstName;
        lastRef.value = contact.lastName;
        phoneRef.value = contact.phone;
        emailRef.value = contact.email;


        contacts.splice(index, 1);

        localStorage.setItem("contacts", JSON.stringify(contacts))
        render()
    }
})

