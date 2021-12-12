const burger = document.querySelector('.burger'),
      change = document.querySelectorAll('.header__change');


function toggle(){
    burger.classList.toggle('show');
    change.classList.toggle('show')
}

function listener(list, event = 'click', callback){
    list.addEventListener(event, callback);
}
listener(burger, 'click', toggle);

burger.addEventListener('click', () => {
    change.forEach(item => {
        item.classList.toggle('show')
    })
})

// // slider
//
//
// let links = document.querySelectorAll('.itemLinks'),
//     wrapper = document.querySelector('#wrapper');
//
// let activeLink = 0;
//
// for (let i = 0; i < links.length; i++) {
//     let link = links[i];
//     link.addEventListener('click', setClickedItem, false);
//     link.itemID = i;
// }
//
// links[activeLink].classList.add("active");
//
// function setClickedItem(e) {
//     removeActiveLinks();
//
//     let clickedLink = e.target;
//     activeLink = clickedLink.itemID;
//
//     changePosition(clickedLink);
// }
//
// function removeActiveLinks() {
//     for(let i = 0; i < links.length; i++) {
//         links[i].classList.remove("active");
//     }
// }
//
// function changePosition(link) {
//     link.classList.add("active");
//
//     let position = link.getAttribute("data-pos");
//     wrapper.style.left = position;
// }



/// forex

document.querySelectorAll('.forex__tab-title').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        const heightRow = item.nextSibling;
        console.log(heightRow)

        if(parent.classList.contains('forex__tab-active')) {
            parent.classList.remove('forex__tab-active')
        } else {
            document
                .querySelectorAll('.forex__tab')
                .forEach(child => {
                    child.classList.remove('forex__tab-active')
                })
            parent.classList.add('forex__tab-active')
        }
    })
})


document.querySelectorAll('.forex__tab-content').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        parent.classList.remove('forex__tab-active')
    })
})


// analytics



//registration

const form = document.querySelector('#form'),
      username = document.querySelector('#username'),
      password = document.querySelector('#password'),
      email = document.querySelector('#email'),
      password2 = document.querySelector('#password2'),
      phone = document.querySelector('#phone');

form.addEventListener('click', (e) => {
    e.preventDefault()

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phoneValue = phone.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blanked');
    } else {
        setSuccessFor(username, 'Username is valid');
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blanked');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email, 'Email is valid')
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blanked');
    } else {
        setSuccessFor(password, 'Password is valid');
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Repeat of password cannot be blanked');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else if(passwordValue === password2Value) {
        successMessage(password2, 'Password is valid');
    }else {
        setSuccessFor(password2, 'Password is valid');
    }

    if(!isPhone(phoneValue)){
        setErrorFor(phone, 'Phone number is not success');
    } else{
        setSuccessFor(phone, 'Phone is valid');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const smallPass = formControl.querySelector('small');
    smallPass.innerText = message;
    formControl.className = 'form-control success';
}

function successMessage(item, message) {
    const formControl = item.parentElement;
    const smallPass = formControl.querySelector('small');
    smallPass.innerText = message;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
    return /^\d[\d\(\)\ -]{4,14}\d$/.test(phone);
}


// footer


    document.querySelectorAll('.about__title ').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;

            if(parent.classList.contains('active')) {
                parent.classList.remove('active')
            } else {
                document
                    .querySelectorAll('.about__row')
                    .forEach(child => {
                        child.classList.remove('active')
                    })
                parent.classList.add('active')
            }
        })
    })

    document.querySelectorAll('.about__column').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;

            parent.classList.remove('active')
        })
    })


