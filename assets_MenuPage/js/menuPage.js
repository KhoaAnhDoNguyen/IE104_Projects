let coffeeNode = document.querySelector('.Coffee.menu_title'),
    teaNode = document.querySelector('.Tea.menu_title'),
    detoxNode = document.querySelector('.Detox.menu_title'),
    cakeNode = document.querySelector('.Cake.menu_title'),
    allNode = document.querySelector('.All.menu_title')
let itemsNode = document.querySelectorAll('.content-item'),
    sidebarNode = document.querySelectorAll('.sidebar__navbar')
let navbarItemcoffee = document.querySelector('.Coffee.navbar-item'),
    navbarItemtea = document.querySelector('.Tea.navbar-item')

function showAll(item) {
    item.style.display = 'block'
}

function hiddenForID(item, X) {
    if (item.id === X) {
        item.style.display = 'block'
    } else {
        item.style.display = 'none'
    }
}
function hiddenForClass(item, X) {
    if (item.className === X) {
        item.style.display = 'block'
    } else {
        item.style.display = 'none'
    }
}

allNode.onclick = function () {
    itemsNode.forEach((item) => {
        showAll(item)
    })
    sidebarNode.forEach((item) => {
        showAll(item)
    })
}

navbarItemcoffee.onclick = function () {
    itemsNode.forEach((item) => {
        hiddenForID(item, 'Coffee')
    })
    sidebarNode.forEach((item) => {
        hiddenForClass(item, 'Coffee sidebar__navbar')
    })
}

navbarItemtea.onclick = function () {
    itemsNode.forEach((item) => {
        hiddenForID(item, 'Tea')
    })
    sidebarNode.forEach((item) => {
        hiddenForClass(item, 'Tea sidebar__navbar')
    })
}

coffeeNode.onclick = function () {
    itemsNode.forEach((item) => {
        hiddenForID(item, 'Coffee')
    })
    sidebarNode.forEach((item) => {
        hiddenForClass(item, 'Coffee sidebar__navbar')
    })
}



teaNode.onclick = function () {
    itemsNode.forEach((item) => {
        hiddenForID(item, 'Tea')
    })
    sidebarNode.forEach((item) => {
        hiddenForClass(item, 'Tea sidebar__navbar')
    })
}

detoxNode.onclick = function () {
    itemsNode.forEach((item) => {
        hiddenForID(item, 'Detox')
    })
    sidebarNode.forEach((item) => {
        hiddenForClass(item, 'Detox sidebar__navbar')
    })
}

cakeNode.onclick = function () {
    itemsNode.forEach((item) => {
        hiddenForID(item, 'Cake')
    })
    sidebarNode.forEach((item) => {
        hiddenForClass(item, 'Cake sidebar__navbar')
    })
}


document.addEventListener('DOMContentLoaded', function () {
    // Lấy tham số id từ URL
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    if (id === 'Coffee1') {
        window.onload = function () {
            itemsNode.forEach((item) => {
                hiddenForID(item, 'Coffee')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Coffee sidebar__navbar')
            })
        }
    }

    else if (id === 'Tea1') {
        window.onload = function () {
            itemsNode.forEach((item) => {
                hiddenForID(item, 'Tea')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Tea sidebar__navbar')
            })
        }
    }

    else if (id === 'Detox1') {
        window.onload = function () {
            itemsNode.forEach((item) => {
                hiddenForID(item, 'Detox')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Detox sidebar__navbar')
            })
        }
    }

    else if (id === 'Cake1') {
        window.onload = function () {
            itemsNode.forEach((item) => {
                hiddenForID(item, 'Cake')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Cake sidebar__navbar')
            })
        }
    }
})


let mobileMenu = document.getElementById('mobile-menu');
let navbar = document.querySelector('.clearfix');

mobileMenu.onclick = function () {
    if (navbar.style.display == 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
}

let productItem = document.querySelectorAll('.item-wrap')


window.onresize = function () {
    // 4 item in row
    if (window.innerWidth >= 1200) {
        for (let i = 0; i < productItem.length; i++) {
            switch (true) {
                case productItem[i].classList.contains('grid__column-3-10'):
                    productItem[i].classList.remove('grid__column-3-10');
                    productItem[i].classList.add('grid__column-4-10');
                    break;
                case productItem[i].classList.contains('grid__col-half'):
                    productItem[i].classList.remove('grid__col-half');
                    productItem[i].classList.add('grid__column-4-10');
                    break;
                case productItem[i].classList.contains('grid__col-full'):
                    productItem[i].classList.remove('grid__col-full');
                    productItem[i].classList.add('grid__column-4-10');
                    break;
                default:
                    break;
            }
        }
    }
    // 3 item in row
    else if (window.innerWidth < 1200 && window.innerWidth >= 1024) {
        for (let i = 0; i < productItem.length; i++) {
            switch (true) {
                case productItem[i].classList.contains('grid__column-4-10'):
                    productItem[i].classList.remove('grid__column-4-10');
                    productItem[i].classList.add('grid__column-3-10');
                    break;
                case productItem[i].classList.contains('grid__col-half'):
                    productItem[i].classList.remove('grid__col-half');
                    productItem[i].classList.add('grid__column-3-10');
                    break;
                case productItem[i].classList.contains('grid__col-full'):
                    productItem[i].classList.remove('grid__col-full');
                    productItem[i].classList.add('grid__column-3-10');
                    break;
                default:
                    break;
            }
        }
    }
    

    // tablet  2 item in row
    else if (window.innerWidth < 1024 && window.innerWidth >= 740) {
        for (let i = 0; i < productItem.length; i++) {
            switch (true) {
                case productItem[i].classList.contains('grid__column-4-10'):
                    productItem[i].classList.remove('grid__column-4-10');
                    productItem[i].classList.add('grid__col-half');
                    break;
                case productItem[i].classList.contains('grid__column-3-10'):
                    productItem[i].classList.remove('grid__column-3-10');
                    productItem[i].classList.add('grid__col-half');
                    break;
                case productItem[i].classList.contains('grid__col-full'):
                    productItem[i].classList.remove('grid__col-full');
                    productItem[i].classList.add('grid__col-half');
                    break;
                default:
                    break;
            }
        }
    }

}