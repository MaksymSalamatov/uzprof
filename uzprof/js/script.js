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

// slider


let links = document.querySelectorAll('.itemLinks'),
    wrapper = document.querySelector('#wrapper');

let activeLink = 0;

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', setClickedItem, false);
    link.itemID = i;
}

links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();

    let clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for(let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

function changePosition(link) {
    link.classList.add("active");

    let position = link.getAttribute("data-pos");
    wrapper.style.left = position;
}