// header function for every page

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

// accordion function for forex and footer

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
                content.addEventListener('click', () => {
                    item.classList.remove('active');
                })
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

// main page call

(function () {
   let check = document.querySelector('.checkLoginMain')
    if(!check) return

    header()


/// forex accordion on main page call
    let checkForex = document.querySelector('.forex__tab-title')
    if(checkForex){
        accordionSlide('.forex__tab-title', '.forex__tab-content');
        accordionSlide('.about__title', '.about__column');
    } else if(!checkForex) {
        accordionSlide('.about__title', '.about__column');
    }

// slider on main page

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

// registration on main page

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


    (function () {
        let showPassIcon = document.querySelectorAll('.password-control');
        let input = document.querySelectorAll('.password');


        showPassIcon.forEach(elem => {
            elem.addEventListener('click', (e) => {
                input.forEach(item => {
                    if(item.getAttribute('type') === 'password') {
                        elem.classList.add('view');
                        item.setAttribute('type', 'text');
                    } else {
                        elem.classList.remove('view');
                        item.setAttribute('type', 'password');
                    }
                })
            })
        })
    })()
}

//second

(function() {
    let checkSecondPage = document.querySelector('.checkSecondPage')
    if(!checkSecondPage) return

    header()
    accordionSlide('.about__title', '.about__column');
})();


// loginPage call

(function () {
    const checkLogin = document.querySelectorAll('.checkLogin');
    checkLogin.forEach(item => {
        if(!checkLogin) return

        writeLogin()
        header()
    })
})();

// loginPage registration call

(function () {
    let registration = document.querySelector('.registration-login');
    if(!registration) return

    checkLogin()
    accordionSlide('.about__title', '.about__column');

})();

function checkLogin() {
    let foo = s => document.querySelector(s),
        form = document.querySelector('.formLogin'),
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

// loginPage tabs call

(function () {
    let registration = document.querySelector('.registration-login');

    if(!registration) return

    changeTabs()
})();

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

// Type of account call

(function () {
    let checkAboutPage = document.querySelector('.checkAboutPage');
    if(!checkAboutPage) return;

    header()

    accordionSlide('.about__title', '.about__column');
})();


// education page call
(function () {
    let checkEducationPage = document.querySelector('.checkEducation');
    if(!checkEducationPage) return;

    header()

    accordionSlide('.about__title', '.about__column');
})();

(function () {
    let checkNews = document.querySelector('.checkNews');
    if(!checkNews) return;

    header()

    accordionSlide('.about__title', '.about__column');
})();