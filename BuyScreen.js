document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các ảnh
    var images = document.querySelectorAll('img');

    // Gán sự kiện click cho mỗi ảnh
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Lấy id của ảnh được click
            var imageId = this.id;

            // Chuyển hướng đến trang khác dựa trên id
            window.location.href = 'BuyScreen.html?id=' + imageId;
        });
    });
});

var Price;
var firstPrice;

function updateProductInfo(id, src, intro, name, price, description) {
    document.getElementById('product-show').src = src;
    document.getElementById('smallpicture-id').src = src;
    document.getElementById('product-description').textContent = description;
    document.getElementById('intro-id').textContent = intro;
    document.getElementById('product-name').textContent = name;
    var formattedPrice =  price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    document.getElementById('product-price-id').textContent = formattedPrice;
    Price = price;
    firstPrice = price;
}

document.addEventListener('DOMContentLoaded', function() {
    // Lấy tham số id từ URL
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');

    // Kiểm tra giá trị của id và hiển thị thông tin tương ứng
    if (id === 'PHINDI') {
        updateProductInfo('PHINDI', 'Ảnh/Cà phê/Phindi.png', 'Menu / Cafe / PHINDI', 'PHINDI', 45000, 
        'Cà phê Phindi mang đến hương thơm nồng nàn của đất trái và cỏ dại từ vùng cao nguyên Việt Nam. Với vị đắng nhẹ và êm dịu, mỗi giọt cà phê Phindi là một chuyến phiêu lưu đầy tinh tế, khám phá hương vị độc đáo và tận hưởng sự trọn vẹn của khoảnh khắc.');
    } 

    else if (id === 'Macchiato'){
        updateProductInfo('Macchiato', 'Ảnh/Cà phê/Macchiato.png', 'Menu / Cafe / Macchiato', 'Macchiato', 65000, 
        'Macchiato - một tác phẩm ngắn gọn của nghệ thuật cà phê. Hòa quyện giữa hương thơm nồng nàn của hạt cà phê và vị ngọt mát của sữa tươi, macchiato là sự kết hợp tinh tế giữa đắng và ngọt. Mỗi giọt macchiato không chỉ là một cảm xúc, mà còn là một chuyến du hành ngắn qua thế giới hương vị, để lại ấn tượng đậm sâu trong vị giác của người thưởng thức.')
    }

    else if (id === 'Latte'){
        updateProductInfo('Latte', 'Ảnh/Cà phê/Latte.png', 'Menu / Cafe / Latte', 'Latte', 65000,
        'Latte - một bức tranh ấm áp và tinh tế của cà phê. Hòa quyện giữa hương thơm độc đáo của hạt cà phê và sự mềm mại của sữa hấp, latte là một trải nghiệm đẳng cấp và êm dịu. Với lớp bọt sánh mịn, mỗi giọt latte không chỉ là một đồ uống, mà là một cuộc phiêu lưu ngọt ngào đưa người uống vào thế giới ấm áp của sự thư giãn và hưởng thụ.')
    }


}
);

//nut bam dat hang
const buyBtns =document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalcontainer = document.querySelector('.js-modal-container')
const modalBuy = document.querySelector('#buy-ticket')


    //ham hien thi form mua ve
    function showBuyTickets(){
        modal.classList.add('open')
    }
    //go bo class modal 
    function hideBuyTickets(){
        modal.classList.remove('open')
    }

    //lap qua tung the bottom va nghe hanh vi click
    for(const buyBtn of buyBtns){
        buyBtn.addEventListener('click',showBuyTickets)
    }

    //nghe hanh vi click vao nut xoa
    modalClose.addEventListener('click',hideBuyTickets)
    modalBuy.addEventListener('click',hideBuyTickets)
    //modal.addEventListener('click',hideBuyTickets)
    modal.addEventListener('click',function(event){
        event.stopImmediatePropagation()
    })

    modalcontainer.addEventListener('click',function(event){
        event.stopImmediatePropagation()
    })

    //size
var selectedSize = 'off';
var PriceIncrease = 0;

if (selectedSize === 'off')
{
    Price = firstPrice;
    var formattedPrice =  Price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    document.getElementById('product-price-id').textContent = formattedPrice;
}

function toggleBackgroundColor(sizeId) {
        //size small is clicked?
        if (sizeId === 'size-small' && selectedSize === 'off')
        {
            selectedSize = sizeId;
            PriceIncrease = 0;
            document.getElementById(sizeId).style.backgroundColor = 'darkorange';
        }
        else if (sizeId === 'size-small' && selectedSize === 'size-small')
        {
            selectedSize = 'off';
            PriceIncrease = 0;
            document.getElementById(sizeId).style.backgroundColor = 'white';
        }
        else if (sizeId === 'size-small' && selectedSize === 'size-normal')
        {    
            PriceIncrease = -10000;
            document.getElementById(sizeId).style.backgroundColor = 'darkorange';
            document.getElementById(selectedSize).style.backgroundColor = 'white';
            selectedSize = sizeId;
        }
        else if (sizeId === 'size-small' && selectedSize === 'size-big')
        {
            document.getElementById(sizeId).style.backgroundColor = 'darkorange';
            document.getElementById(selectedSize).style.backgroundColor = 'white';
            selectedSize = sizeId;
            PriceIncrease = -16000;
        }
        
        //size normal is clicked?
        else if (sizeId === 'size-normal' && selectedSize === 'off')
        {
            selectedSize = sizeId;
            PriceIncrease = 10000;
            document.getElementById(sizeId).style.backgroundColor = 'darkorange';
        }
        else if (sizeId === 'size-normal' && selectedSize === 'size-normal')
        {
            selectedSize = 'off';
            PriceIncrease = -10000;
            document.getElementById(sizeId).style.backgroundColor = 'white';
        }
        else if (sizeId === 'size-normal' && selectedSize === 'size-small')
        {
            document.getElementById(sizeId).style.backgroundColor = 'darkorange';
            document.getElementById(selectedSize).style.backgroundColor = 'white';
            selectedSize = sizeId;
            PriceIncrease = 10000;
        }
        else if (sizeId === 'size-normal' && selectedSize === 'size-big')
        {
            document.getElementById(sizeId).style.backgroundColor = 'darkorange';
            document.getElementById(selectedSize).style.backgroundColor = 'white';
            selectedSize = sizeId;
            PriceIncrease = -6000;
        }

        // size big is clicked?
        //size normal is clicked?
        else if (sizeId === 'size-big' && selectedSize === 'off')
        {
            selectedSize = sizeId;
            PriceIncrease = 16000;
            document.getElementById(sizeId).style.backgroundColor = 'darkorange';
        }
        else if (sizeId === 'size-big' && selectedSize === 'size-big')
        {
            selectedSize = 'off';
            PriceIncrease = -16000;
            document.getElementById(sizeId).style.backgroundColor = 'white';
        }
        else if (sizeId === 'size-big' && selectedSize === 'size-small')
        {
            document.getElementById(sizeId).style.backgroundColor = 'darkorange';
            document.getElementById(selectedSize).style.backgroundColor = 'white';
            selectedSize = sizeId;
            PriceIncrease = 16000;
        }
        else if (sizeId === 'size-big' && selectedSize === 'size-normal')
        {
            document.getElementById(sizeId).style.backgroundColor = 'darkorange';
            document.getElementById(selectedSize).style.backgroundColor = 'white';
            selectedSize = sizeId;
            PriceIncrease = 6000;
        }
    Price += PriceIncrease;
    var formattedPrice =  Price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    document.getElementById('product-price-id').textContent = formattedPrice;
    }

    var KPM = 'null';
    var TV = 'null';
    var HS = 'null';
    var TOL = 'null';
    function ToppingChoosing(Topping)
    {
        var paragraphElement = document.getElementById(Topping).getElementsByTagName('p')[0];
        if (Topping === 'KPM' && KPM === 'null')
        {
            paragraphElement.style.backgroundColor = 'darkorange';
            //document.getElementById(Topping).style.backgroundColor = 'darkorange';
            KPM = Topping;
            PriceIncrease = 10000;
        }
        else if (Topping === 'KPM' && KPM === 'KPM')
        {
            paragraphElement.style.backgroundColor = 'white';
            //document.getElementById(Topping).style.backgroundColor = 'white';
            PriceIncrease = -10000;
            KPM = 'null';
        }

        else if (Topping === 'TV' && TV === 'null')
        {
            paragraphElement.style.backgroundColor = 'darkorange';
            //document.getElementById(Topping).style.backgroundColor = 'darkorange';
            TV = Topping;
            PriceIncrease = 5000;
        }
        else if (Topping === 'TV' && TV === 'TV')
        {
            paragraphElement.style.backgroundColor = 'white';
            //document.getElementById(Topping).style.backgroundColor = 'white';
            PriceIncrease = -5000;
            TV = 'null';
        }

        else if (Topping === 'HS' && HS === 'null')
        {
            //paragraphElement.style.backgroundColor = 'darkorange';
            document.getElementById(Topping).style.backgroundColor = 'darkorange';
            HS = Topping;
            PriceIncrease = 10000;
        }
        else if (Topping === 'HS' && HS === 'HS')
        {
            //paragraphElement.style.backgroundColor = 'white';
            document.getElementById(Topping).style.backgroundColor = 'white';
            PriceIncrease = -10000;
            HS = 'null';
        }

        else if (Topping === 'TOL' && TOL === 'null')
        {
            //paragraphElement.style.backgroundColor = 'darkorange';
            document.getElementById(Topping).style.backgroundColor = 'darkorange';
            TOL = Topping;
            PriceIncrease = 10000;
        }
        else if (Topping === 'TOL' && TOL === 'TOL')
        {
            //paragraphElement.style.backgroundColor = 'white';
            document.getElementById(Topping).style.backgroundColor = 'white';
            PriceIncrease = -10000;
            TOL = 'null';
        }

        Price += PriceIncrease;
        var formattedPrice =  Price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        document.getElementById('product-price-id').textContent = formattedPrice;
    }