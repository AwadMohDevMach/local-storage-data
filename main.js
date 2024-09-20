// select all elements
let allSpans = document.querySelectorAll(".button span");
let reasult = document.querySelector(".reasults > span");
let theInput = document.getElementById("the-input");


allSpans.forEach(span => {
    span.addEventListener("click" , (e) => {
        if (e.target.classList.contains("check-item")){
            checkItem()
        }
        if (e.target.classList.contains("add-item")){
            addItem()
        }
        if (e.target.classList.contains("delete-item")){
            deleteItem()
        }
        if (e.target.classList.contains("show-item")){
            showItem()
        }
    })
})

// create function check input empty
function showMassege(){
        reasult.innerHTML = `input cant be empty`
}

// create check item
 function checkItem(){
    if (theInput.value !== ''){
        if(localStorage.getItem(theInput.value)){
            reasult.innerHTML = `found local item called <span>${theInput.value}</span>`;
        }else{
            reasult.innerHTML = `no local storage item with the name <span>${theInput.value}</span>`
        }

    }else{
        showMassege()
    }
 }

 // create add Item
 function addItem(){
    if (theInput.value !== ''){
        localStorage.setItem(theInput.value , "test");
        reasult.innerHTML = `local storage item <span>${theInput.value}</span> added`
        theInput.value = ''

    }else{
        showMassege()
    }
 }

 // create delete Item
 function deleteItem(){
    if (theInput.value !== ''){

        if(localStorage.getItem(theInput.value)){
            localStorage.removeItem(theInput.value)
            reasult.innerHTML = ` local storage item called <span>${theInput.value}</span> deleted`;
            theInput.value = '';
        }else{
            reasult.innerHTML = `no local storage item with the name <span>${theInput.value}</span>`
        }


    }else{
        showMassege()
    }
 }

 // create show Item
 function showItem(){
   if(localStorage.length){

    reasult.innerHTML = ''
    // console.log(`found element ${localStorage.length}`)
    for (let [key , value] of Object.entries(localStorage)){
        reasult.innerHTML += `<span> ${key} =></span>`
    }
   }else{
    reasult.innerHTML = `local storeg is empty`
   }
 }