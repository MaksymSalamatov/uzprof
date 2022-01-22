// burger

function header() {
    const burger = document.querySelector('.burger'),
          change = document.querySelectorAll('.header__change'),
          overlay = document.querySelector('.page-overlay'),
          body = document.querySelector('body');

    function toggle(){
        overlay.classList.toggle('show');
        burger.classList.toggle('show');
        body.classList.toggle('stop-scroll');
    }

    burger.addEventListener('click', () => {
        toggle();
    })

    burger.addEventListener('click', () => {
        change.forEach(item => {
            item.classList.toggle('show')
        })
    });
}

function accordionSlide(clickedItem, itemToShow) {
    document.querySelectorAll(clickedItem).forEach((item) => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;

            if(content.style.maxHeight) {
                document.querySelectorAll(itemToShow).forEach(element => {
                    element.style.maxHeight = null
                })

                document.querySelectorAll(clickedItem).forEach(item => {
                    item.classList.remove('active');
                })
            } else {
                document.querySelectorAll(itemToShow).forEach(element => {
                    element.style.maxHeight = null
                })
                content.style.maxHeight = content.scrollHeight + 'px'


                document.querySelectorAll(clickedItem).forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
            }
        })
    })

    document.querySelectorAll(itemToShow).forEach(item => {
        item.addEventListener('click', () => {
            if(item.style.maxHeight) {
                item.style.maxHeight = null
            }
        })
    })
}

(function () {
   let check = document.querySelector('.check')
    if(!check) return

    header()


/// forex
    let checkForex = document.querySelector('.forex__tab-title')
    if(checkForex){
        accordionSlide('.forex__tab-title', '.forex__tab-content');
        accordionSlide('.about__title', '.about__column');
    } else if(!checkForex) {
        accordionSlide('.about__title', '.about__column');
    }

// slide-show

    (function () {
        let position = 0;
        const slideToShow = 2;
        // const slideToScroll = 1;
        const container = document.querySelector('.slider-container');
        const track = document.querySelector('.slider-track');
        const btnNext = document.querySelector('.btn-next');
        const btnPrev = document.querySelector('.btn-prev');
        const items = document.querySelectorAll('.slider__item');
        const itemsCount = items.length;
        const itemWidth = container.clientWidth / slideToShow;
        // const movePosition = slideToShow * itemWidth;

        items.forEach((item) => {
            item.style.minWidth = `${itemWidth}px`;
        })

        btnNext.addEventListener('click', () => {
            // const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

            position -= itemWidth;
            console.log(position)
            setPosition()
            checkBtn()
        });

        btnPrev.addEventListener('click', () => {
             // const itemsLeft = Math.abs(position) / itemWidth;

            position += itemWidth;
            setPosition();
            checkBtn();
        });

        const setPosition = () => {
            track.style.transform = `translateX(${position}px)`;
        };

        const checkBtn = () => {
            btnNext.disabled = position <= -(itemsCount - slideToShow) * itemWidth;
            btnPrev.disabled = position === 0;
        };
        checkBtn();
    })();

    writeLogin();
})();

//registration

function writeLogin() {
    const foo = s => document.querySelector(s),
        form = document.querySelectorAll('.form'),
        username = foo('.username'),
        surname = foo('.surname'),
        password = foo('.password'),
        email = foo('.email'),
        password2 = foo('.password2'),
        phone = foo('.phone');

    form.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            checkInputs();
        })
    })


    function checkInputs() {
        const usernameValue = username.value.trim();
        const surnameValue = surname.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        const phoneValue = phone.value.trim();


        if(usernameValue === ''){
            setErrorFor(username, 'Username cannot be blanked');
        } else {
            setSuccessFor(username, 'Username is valid');
        }

        if(surnameValue === ''){
            setErrorFor(surname, 'Surname cannot be blanked');
        } else {
            setSuccessFor(surname, 'Surname is valid');
        }

        if(emailValue === ''){
            setErrorFor(email, 'Email cannot be blanked');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email, 'Email is valid');
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
}

//loginLogin

(function () {
    let registration = document.querySelector('.registration-login');
    if(!registration) return

    checkLogin()

})()

function checkLogin() {
    let foo = s => document.querySelector(s),
        form = document.querySelector('.form'),
        usernameLogin = foo('.username-login'),
        passwordLogin = foo('.password-login');

    form.addEventListener('click', (e) => {
        e.preventDefault();
        checkInputs();
    })

    function checkInputs() {
        const usernameLoginValue = usernameLogin.value.trim();
        const passwordLoginValue = passwordLogin.value.trim();

        if(usernameLoginValue === ''){
            setErrorFor(usernameLogin, 'Username cannot be blanked');
        } else {
            setSuccessFor(usernameLogin, 'Username is valid');
        }

        if(passwordLoginValue === '') {
            setErrorFor(passwordLogin, 'Password cannot be blanked');
        } else {
            setSuccessFor(passwordLogin, 'Password is valid');
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
    }
}

//second

(function() {
    let checkSecondPage = document.querySelector('.checkSecondPage')
    if(!checkSecondPage) return

    header()
    accordionSlide('.about__title', '.about__column');
})();


// login

(function () {
    const checkLogin = document.querySelectorAll('.checkLogin');
    checkLogin.forEach(item => {
        if(!checkLogin) return

        writeLogin()
        header()
    })
})();

//tabs

(function () {
    let registration = document.querySelector('.registration-login');

    if(!registration) return

    changeTabs()
})()

function changeTabs() {
    let tabNav = document.querySelectorAll('.tabs__nav'),
        tabContent = document.querySelectorAll('.tabs'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTab);
    })

    function selectTab() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        })
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
}