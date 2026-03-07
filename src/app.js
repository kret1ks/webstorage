// Створіть програму для зберігання контактів — ім'я, прізвище, телефон та електронна адреса. Зберігайте контакти в localStorage та дозволяйте користувачу додавати, видаляти та редагувати контакти.


const firstRef = document.querySelector('#firstName')
const lastRef = document.querySelector('#lastName')
const phoneRef = document.querySelector('#phone')
const emailRef = document.querySelector('#email')
const btnRef = document.querySelector('#saveBtn')
const listRef = document.querySelector(".list")

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];


function render() {
    const markup = contacts.map((contacts, index) => {
        return`<li>
            ${contacts.firstName} - ${contacts.phone}
            <button data-index="${index}" class="delete-btn">Видалити</button>
            <button data-index="${index}" class="edit-btn">Редагувати</button>
        </li>`;
    }).join("")
    listRef.innerHTML = markup
}


btnRef.addEventListener("click", (event) => {
    const newContact = {
        firstName: firstRef.value,
        lastName: lastRef.value,
        phone: phoneRef.value,
        email: emailRef.value
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
    
})



