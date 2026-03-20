// const firstRef = document.querySelector('#firstName');
// const lastRef = document.querySelector('#lastName')
// const phoneRef = document.querySelector('#phone')
// const emailRef = document.querySelector('#email')
// const btnRef = document.querySelector('#saveBtn')
// const listRef = document.querySelector(".list")


// let contacts = JSON.parse(localStorage.getItem("contacts")) || [];


// function render () {
//     const markup = contacts.map((contact, index) => {
//         return `<li>
//             <strong>${contact.firstName} ${contact.lastName}</strong>: ${contact.phone}
//             <button data-index="${index}" class="delete-btn">Видалити</button>
//             <button data-index="${index}" class="edit-btn">Редагувати</button>
//         </li>`;
//     }).join("")
//     listRef.innerHTML = markup
// }
// render()


// btnRef.addEventListener("click", () => {
//     const newContact = {
//         firstName: firstRef.value,
//         lastName: lastRef.value,
//         phone: phoneRef.value,
//         email: emailRef.value,
//     }
//     contacts.push(newContact)

//     localStorage.setItem("contacts", JSON.stringify(contacts));
//     render()

//     firstRef.value = "";
//     lastRef.value = "";
//     phoneRef.value = "";
//     emailRef.value = "";
// })


// listRef.addEventListener("click", (event) => {

//     if(event.target.classList.contains("delete-btn")){
//         const index = event.target.dataset.index
//         contacts.splice(index, 1)
//         localStorage.setItem("contacts", JSON.stringify(contacts))
//         render()
//     }
//     if(event.target.classList.contains("edit-btn")){
//         const index = event.target.dataset.index
//         const contact = contacts[index];


//         firstRef.value = contact.firstName;
//         lastRef.value = contact.lastName;
//         phoneRef.value = contact.phone;
//         emailRef.value = contact.email;


//         contacts.splice(index, 1);

//         localStorage.setItem("contacts", JSON.stringify(contacts))
//         render()
//     }
// })


///////////////////////////////////////////////////////////////////




// const firstRef = document.querySelector('#firstName');
// const lastRef = document.querySelector('#lastName')
// const phoneRef = document.querySelector('#phone')
// const emailRef = document.querySelector('#email')
// const btnRef = document.querySelector('#saveBtn')
// const listRef = document.querySelector(".list")

// let contacts = JSON.parse(localStorage.getItem("contacts")) || [];


// function render () {
//     const markup = contacts.map((contact, index) => {
//         return `
//             <li>
//                 <strong>${contact.firstName} ${contact.lastName}</strong>
//                 <p>Тел: ${contact.phoneRef}</p> 
//                 <p>Email: ${contact.emailRef}</p> <div class="actions">
//                     <button data-index="${index}" class="delete-btn">Видалити</button>
//                     <button data-index="${index}" class="edit-btn">Редагувати</button>
//                 </div>
//             </li>
//         `;
//     }).join("")
//     listRef.innerHTML = markup
// }
// render()


// btnRef.addEventListener("click", () => {
//     const newContact = {
//         firstName: firstRef.value,
//         lastName: lastRef.value,
//         phoneRef: phoneRef.value,
//         emailRef: emailRef.value,
//     }
//     contacts.push(newContact)

//     localStorage.setItem("contacts", JSON.stringify(contacts))

//     render()

//     firstRef.value = "";
//     lastRef.value = "";
//     phoneRef.value = "";
//     emailRef.value = "";
// })



// listRef.addEventListener("click", (event) => {
//     if(event.target.classList.contains("delete-btn")){
//         const index = event.target.dataset.index;

//         contacts.splice(index, 1)

//         localStorage.setItem("contacts", JSON.stringify(contacts))
//         render()
//     }

//     if(event.target.classList.contains("edit-btn")){
//         const index = event.target.dataset.index;
//         const contactToEdit = contacts[index];

//         firstRef.value = contactToEdit.firstName;
//         lastRef.value = contactToEdit.lastName;
//         phoneRef.value = contactToEdit.phoneRef;
//         emailRef.value = contactToEdit.emailRef;

//         contacts.splice(index, 1)

//         localStorage.setItem("contacts", JSON.stringify(contacts))
//         render()
//     }
// })




// const nameRef = document.querySelector(".name")
// const surnameRef = document.querySelector(".surname")
// const btnSave = document.querySelector(".save")



// let contacts = JSON.parse(localStorage.getItem("contacts")) || []


// btnSave.addEventListener("click", () => {
//  const newContact = {
//     name: nameRef.value,
//     surname: surnameRef.value,
//  }

//  contacts.push(newContact)

//  localStorage.setItem("contacts", JSON.stringify(contacts))

//  nameRef.value = "";
//  surnameRef.value = "";
// })


///////////////////////////////////////////////////////////////


const timerRef = document.querySelector(".timer")
const startRef = document.querySelector(".start")
const stopRef = document.querySelector(".stop")


let sec = 60
let id = null;


startRef.addEventListener("click", () => {
if(id) return;
sec--
timerRef.textContent = sec
id = setInterval(() => {
sec--
timerRef.textContent = sec

if(sec === 0){
    clearInterval(id)
    id = null;
}

if(sec === 10){
    timerRef.classList.add("active")
}
},1000)




})


stopRef.addEventListener("click", () => {
clearInterval(id)
id = null;
})






