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
    { id: 'trasenvang', name: 'Trà sen vàng', image: './assets_mainScreen/images/TraSenVang.png' },
    { id: 'phin', name: 'Cà phê Phin', image: './assets_mainScreen/images/Phin.png' },
    { id: 'trathachdao', name: 'Trà Thạch đào', image: './assets_buyscreen/Ảnh/Trà/TraThachDao.png' },
    { id: 'trasenvang', name: 'Trà sen vàng', image: './assets_mainScreen/images/TraSenVang.png' },
    // Thêm các sản phẩm khác vào đây
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

function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('menu_child2');
    resultsContainer.innerHTML = '';

    var normalizedString = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');

    const filteredProducts = input.trim() === ''
        ? products
        : products.filter(product =>
            product.id.toLowerCase().includes(normalizedString.toLowerCase())
        );

    filteredProducts.forEach(product => {
        const menuChildLi = document.createElement('li');
        menuChildLi.innerHTML = `<a href="./BuyScreen.html?id=Biscotti" class="searchItem">
        <img src="${product.image}" alt="menuItem" class="asideItemPic">
        <span>${product.name}</span>
    </a>`
        resultsContainer.appendChild(menuChildLi);
    });
}