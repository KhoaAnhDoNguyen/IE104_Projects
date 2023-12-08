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

// Màn hình tìm kiếm

const products = [
    { checkName: 'trasenvangtea', id: 'TraSen', name: 'Trà sen vàng', image: './assets_buyscreen/Ảnh/Trà/TraSenVang.png', class:'tra' },
    { checkName: 'traxanhdaudotea', id: 'TraXanh', name: 'Trà xanh đậu đỏ', image: './assets_buyscreen/Ảnh/Trà/TraXanhDauDo.png', class:'tra' },
    { checkName: 'trathachvaitea', id: 'TraVai', name: 'Trà thạch vải', image: './assets_buyscreen/Ảnh/Trà/TraThachVai.png', class:'tra' },
    { checkName: 'trathachdaotea', id: 'TraThachDao', name: 'Trà thạch đào', image: './assets_buyscreen/Ảnh/Trà/TraThachDao.png', class:'tra' },
    { checkName: 'trathanhdaotea', id: 'TraDao', name: 'Trà thanh đào', image: './assets_buyscreen/Ảnh/Trà/TraThanhDao.png', class:'tra' },

    { checkName: 'detoxthanhlocdetox', id: 'DetoxThanhLoc', name: 'Detox thanh lọc', image: './assets_buyscreen/Ảnh/Detox/DetoxThanhLoc.png', class:'detox' },
    { checkName: 'detoxgiamcandetox', id: 'DetoxGiamCan', name: 'Detox giảm cân', image: './assets_buyscreen/Ảnh/Detox/DetoxGiamCan.png', class:'detox' },

    { checkName: 'banhtiramisucake', id: 'Tiramisu', name: 'Tiramisu', image: './assets_buyscreen/Ảnh/Bánh/Tiramisu.png', class:"banh" },
    { checkName: 'banhtarttrungcake', id: 'Tart', name: 'Tart trứng', image: './assets_buyscreen/Ảnh/Bánh/Tart.png', class:"banh"  },
    { checkName: 'banhpannacottacake', id: 'PannaCotta', name: 'Panna cotta', image: './assets_buyscreen/Ảnh/Bánh/PannaCotta.png', class:"banh"  },
    { checkName: 'banhbiscotticake', id: 'Biscotti', name: 'Bicostti', image: './assets_buyscreen/Ảnh/Bánh/Bicossti.png', class:"banh"  },
    { checkName: 'banhbonglantrungmuoicake', id: 'BongLan', name: 'Bông lan trứng muối', image: './assets_buyscreen/Ảnh/Bánh/BongLan.png', class:"banh"  },
    { checkName: 'banhcakemoussecakemousse', id: 'Mousse', name: 'Mousse cake', image: './assets_buyscreen/Ảnh/Bánh/MousseCake.png', class:"banh"  },

    { checkName: 'caphephindicafephindicoffeephindi', id: 'PHINDI', name: 'PhinDi', image: './assets_buyscreen/Ảnh/cà Phê/phindi.png', class:"caphe"  },
    { checkName: 'capheamericanocafeamericanocoffeeamericano', id: 'Americano', name: 'Americano', image: './assets_buyscreen/Ảnh/cà Phê/Americano.png', class:"caphe" },
    { checkName: 'caphemacchiatocafemacchiatocoffeemacchiato', id: 'Macchiato', name: 'Macchiato', image: './assets_buyscreen/Ảnh/cà Phê/Macchiato.png', class:"caphe" },
    { checkName: 'caphephincafephincoffeephin', id: 'CoffeePhin', name: 'Cà phê Phin', image: './assets_buyscreen/Ảnh/cà Phê/Phin.png', class:"caphe" },
    { checkName: 'caphelattecafelattecoffeelatte', id: 'Latte', name: 'Cà phê Latte', image: './assets_buyscreen/Ảnh/cà Phê/Latte.png', class:"caphe" },
    { checkName: 'caphebacxiucafebacxiucoffeebacxiu', id: 'BacXiu', name: 'Bạc xỉu', image: './assets_buyscreen/Ảnh/cà Phê/BacXiu.png', class:"caphe" },
];

function vietnameseToEnglish(inputString) {
    const vietnameseMap = {
        'à': 'a', 'á': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
        'è': 'e', 'é': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
        'ì': 'i', 'í': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
        'ò': 'o', 'ó': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
        'ù': 'u', 'ú': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
        'ỳ': 'y', 'ý': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
        'đ': 'd',
    };

    const englishString = inputString
        .toLowerCase()
        .split('')
        .map(char => vietnameseMap[char] || char)
        .join('');

    return englishString;
};

document.addEventListener('DOMContentLoaded', function() {
    // Lấy tham số id từ URL
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    if (id === 'Coffee1')
    {
        window.onload = function () {
            itemsNode.forEach((item) => {
                hiddenForID(item, 'Coffee')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Coffee sidebar__navbar')
            })
        }
    }

    else if (id === 'Tea1')
    {
        window.onload = function () {
            itemsNode.forEach((item) => {
                hiddenForID(item, 'Tea')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Tea sidebar__navbar')
            })
        }
    }

    else if (id === 'Detox1')
    {
        window.onload = function () {
            itemsNode.forEach((item) => {
                hiddenForID(item, 'Detox')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Detox sidebar__navbar')
            })
        }
    }

    else if (id === 'Cake1')
    {
        window.onload = function () {
            itemsNode.forEach((item) => {
                hiddenForID(item, 'Cake')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Cake sidebar__navbar')
            })
        }
    }

    else {
        const ListProducts = products.filter(product =>
            product.checkName.toLowerCase().includes(id.toLowerCase())
        );

        document.querySelectorAll('.content-item__product-item').forEach(productItem => {
            const productId = productItem.querySelector('a').id;
        
            // Kiểm tra xem sản phẩm có trong danh sách products hay không
            const isProductInList = ListProducts.some(product => product.id === productId);
            
            if (isProductInList) {
                // Nếu sản phẩm có trong danh sách, hiển thị nó
                productItem.style.display = 'block';
            } else {
                // Nếu sản phẩm không có trong danh sách, ẩn nó
                productItem.style.display = 'none';
            }
        });

        document.addEventListener('DOMContentLoaded', function () {
            // Lấy phần tử h2 trong phần tử "content-item"
            var h2Element = contentItemElement.querySelector('.content-item__title');
        
            // Lấy nội dung text từ phần tử h2
            var h2TextContent = h2Element.textContent;
            h2TextContent = h2TextContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
            // In ra console để kiểm tra kết quả
            const isTitleInList = ListProducts.some(product => product.class === h2TextContent);
            if (isTitleInList) {
                // Nếu sản phẩm có trong danh sách, hiển thị nó
                h2Element.style.display = 'block';
            } else {
                // Nếu sản phẩm không có trong danh sách, ẩn nó
                h2Element.style.display = 'none';
            }
        });
        
    }
})



