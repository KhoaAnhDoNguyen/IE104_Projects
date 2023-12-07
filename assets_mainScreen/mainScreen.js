$(document).ready(function () {
    // Set initial variables
    var currentIndex = 0;
    var items = $('.bannerPic');
    var totalItems = items.length;

    // Show the first image
    items.eq(currentIndex).show();

    // Function to change the image
    function changeItem() {
        items.eq(currentIndex).fadeOut(0);
        currentIndex = (currentIndex + 1) % totalItems;
        items.eq(currentIndex).fadeIn(0);
    }

    // Start the auto change
    var autoChange = setInterval(changeItem, 5000); // Change every 3 seconds

    // Pause on hover (optional)
    $('.banner_home').hover(
        function () {
            clearInterval(autoChange);
        },
        function () {
            autoChange = setInterval(changeItem, 3000);
        }
    );
});

const products = [
    { checkName: 'trasenvangtea', id: 'TraSen', name: 'Trà sen vàng', image: './assets_buyscreen/Ảnh/Trà/TraSenVang.png' },
    { checkName: 'traxanhdaudotea', id: 'TraXanh', name: 'Trà xanh đậu đỏ', image: './assets_buyscreen/Ảnh/Trà/TraXanhDauDo.png' },
    { checkName: 'trathachvaitea', id: 'TraVai', name: 'Trà thạch vải', image: './assets_buyscreen/Ảnh/Trà/TraThachVai.png' },
    { checkName: 'trathachdaotea', id: 'TraThachDao', name: 'Trà thạch đào', image: './assets_buyscreen/Ảnh/Trà/TraThachDao.png' },
    { checkName: 'trathanhdaotea', id: 'TraDao', name: 'Trà thanh đào', image: './assets_buyscreen/Ảnh/Trà/TraThanhDao.png' },

    { checkName: 'detoxthanhlocdetox', id: 'DetoxThanhLoc', name: 'Detox thanh lọc', image: './assets_buyscreen/Ảnh/Detox/DetoxThanhLoc.png' },
    { checkName: 'detoxgiamcandetox', id: 'DetoxGiamCan', name: 'Detox giảm cân', image: './assets_buyscreen/Ảnh/Detox/DetoxGiamCan.png' },

    { checkName: 'banhtiramisucake', id: 'Tiramisu', name: 'Tiramisu', image: './assets_buyscreen/Ảnh/Bánh/Tiramisu.png' },
    { checkName: 'banhtarttrungcake', id: 'Tart', name: 'Tart trứng', image: './assets_buyscreen/Ảnh/Bánh/Tart.png' },
    { checkName: 'banhpannacottacake', id: 'PannaCotta', name: 'Panna cotta', image: './assets_buyscreen/Ảnh/Bánh/PannaCotta.png' },
    { checkName: 'banhbiscotticake', id: 'Biscotti', name: 'Bicostti', image: './assets_buyscreen/Ảnh/Bánh/Bicossti.png' },
    { checkName: 'banhbonglantrungmuoicake', id: 'BongLan', name: 'Bông lan trứng muối', image: './assets_buyscreen/Ảnh/Bánh/BongLan.png' },
    { checkName: 'banhcakemoussecakemousse', id: 'Mousse', name: 'Mousse cake', image: './assets_buyscreen/Ảnh/Bánh/MousseCake.png' },

    { checkName: 'caphephindicafephindicoffeephindi', id: 'PHINDI', name: 'PhinDi', image: './assets_buyscreen/Ảnh/cà Phê/phindi.png' },
    { checkName: 'capheamericanocafeamericanocoffeeamericano', id: 'Americano', name: 'Americano', image: './assets_buyscreen/Ảnh/cà Phê/Americano.png' },
    { checkName: 'caphemacchiatocafemacchiatocoffeemacchiato', id: 'Macchiato', name: 'Macchiato', image: './assets_buyscreen/Ảnh/cà Phê/Macchiato.png' },
    { checkName: 'caphephincafephincoffeephin', id: 'CoffeePhin', name: 'Cà phê Phin', image: './assets_buyscreen/Ảnh/cà Phê/Phin.png' },
    { checkName: 'caphelattecafelattecoffeelatte', id: 'Latte', name: 'Cà phê Latte', image: './assets_buyscreen/Ảnh/cà Phê/Latte.png' },
    { checkName: 'caphebacxiucafebacxiucoffeebacxiu', id: 'BacXiu', name: 'Bạc xỉu', image: './assets_buyscreen/Ảnh/cà Phê/BacXiu.png' },
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

function search(event) {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('menu_child2');
    resultsContainer.innerHTML = '';

    var normalizedString = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');

    const filteredProducts = input.trim() === ''
        ? products = []
        : products.filter(product =>
            product.checkName.toLowerCase().includes(normalizedString.toLowerCase())
        );

    filteredProducts.forEach(product => {
        const menuChildLi = document.createElement('li');
        menuChildLi.innerHTML = `<a href="./BuyScreen.html?id=${product.id}" class="searchItem">
        <img src="${product.image}" alt="menuItem" class="asideItemPic">
        <span>${product.name}</span>
    </a>`
        resultsContainer.appendChild(menuChildLi);
    });

    //Chuyển trang sau khi nhấn enter hoặc tìm kiếm
    document.getElementById('cartIcon').addEventListener('click', function () {
        checkAndRedirect(normalizedString);
    });
    if (event.key === 'Enter') {
        checkAndRedirect(normalizedString);
    }
}

function checkAndRedirect(normalizedString) {
    const matchingProducts = products.filter(product =>
        product.checkName.toLowerCase().includes(normalizedString.toLowerCase())
    );
    if ("caphecafecoffee".toLowerCase().includes(normalizedString.toLowerCase())) {
        window.location.href = './MenuPage.html?id=Coffee1';
    } else if ("tratea".toLowerCase().includes(normalizedString.toLowerCase())) {
        window.location.href = './MenuPage.html?id=Tea1';
    } else if ("detox".toLowerCase().includes(normalizedString.toLowerCase())) {
        window.location.href = './MenuPage.html?id=Detox1';
    } else if ("banhcake".toLowerCase().includes(normalizedString.toLowerCase())) {
        window.location.href = './MenuPage.html?id=Cake1';
    } else if (matchingProducts.length > 0) {
        const matchedProduct = matchingProducts[0];
        window.location.href = `./BuyScreen.html?id=${matchedProduct.id}`;
    }   
}