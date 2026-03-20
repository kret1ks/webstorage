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

/////////////////////////////////////////////////////////////////



// const nameRef = document.querySelector(".name");
// const surname = document.querySelector(".surname");
// const saveBtn = document.querySelector(".save");

// let contacts = JSON.parse(localStorage.getItem("contacts")) || [];


// saveBtn.addEventListener("click", () => {
// const newContact = {
//     name: nameRef.value,
//     surname: surname.value,
// }

// contacts.push(newContact)

// localStorage.setItem("contacts", JSON.stringify(contacts))

// nameRef.value = "";
// surname.value = "";
// })


///////////////////////////////////////////////////////////////


// const timerRef = document.querySelector('.timer');
// const startRef = document.querySelector('.start');
// const stopRef = document.querySelector('.stop')


// let s = 20;
// let id = null;


// startRef.addEventListener("click", () => {
//     if(id)  return;
//  id = setInterval(() => {
//         s--
//         timerRef.textContent = s

//         const minutes = Math.floor(s / 60).toString().padStart(2, "0")
//         const second = (s % 60).toString().padStart(2, "0")

//         timerRef.textContent = `${minutes}:${second}`


//         if(s === 10){
//             timerRef.classList.add("active")
//         }

//         if(s === 0){
//             clearInterval(id)
//             id = null;
//         }
//     },1000)
// })


// stopRef.addEventListener("click", () => {
//     clearInterval(id)
//     id = null;
// })





////////////////////////////////////////////////////////////////////////



// const students = [
//     { name: "Назарій", isOnline: true },
//     { name: "Олександр", isOnline: false },
//     { name: "Максим", isOnline: true },
//     { name: "Дмитро", isOnline: false },
//     { name: "Артем", isOnline: true }
// ];


// students.forEach((student) => {
//     if(student.isOnline){
//         console.log(`${student.name} зара вчиця`);
//     } else{
//         console.log(`${student.name} відпочиває`);
        
//     }
    
// })



////////////////////////////////////////////////////////////////////////////////////





const players = [
    "Vinicius Junior",
    "Jude Bellingham",
    "Kylian Mbappe",
    "Federico Valverde",
    "Rodrygo",
    "Luka Modric",
    "Eduardo Camavinga",
    "Aurelien Tchouameni",
    "Dani Carvajal",
    "Thibaut Courtois",
    "Antonio Rudiger",
    "Arda Guler",
    "Brahim Diaz",
    "Endrick"
];





const nameRef = document.querySelector(".name")


nameRef.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();

   const filteredPlayers = players.filter((player) => {
   
        const lowerPlayer = player.toLowerCase();

        return lowerPlayer.includes(value);   
    })
    console.log(filteredPlayers);
    
})

