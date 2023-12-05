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
        updateProductInfo('PHINDI', './assets_buyscreen/Ảnh/Cà phê/BacXiu.png', 'Menu / Cafe / PHINDI', 'PHINDI', 45000, 
        'Cà phê Phindi mang đến hương thơm nồng nàn của đất trái và cỏ dại từ vùng cao nguyên Việt Nam. Với vị đắng nhẹ và êm dịu, mỗi giọt cà phê Phindi là một chuyến phiêu lưu đầy tinh tế, khám phá hương vị độc đáo và tận hưởng sự trọn vẹn của khoảnh khắc.');
    } 

    else if (id === 'Macchiato'){
        updateProductInfo('Macchiato', './assets_buyscreen/Ảnh/Cà phê/Macchiato.png', 'Menu / Cafe / Macchiato', 'Macchiato', 65000, 
        'Macchiato - một tác phẩm ngắn gọn của nghệ thuật cà phê. Hòa quyện giữa hương thơm nồng nàn của hạt cà phê và vị ngọt mát của sữa tươi, macchiato là sự kết hợp tinh tế giữa đắng và ngọt. Mỗi giọt macchiato không chỉ là một cảm xúc, mà còn là một chuyến du hành ngắn qua thế giới hương vị, để lại ấn tượng đậm sâu trong vị giác của người thưởng thức.')
    }

    else if (id === 'Latte'){
        updateProductInfo('Latte', './assets_buyscreen/Ảnh/Cà phê/Latte.png', 'Menu / Cafe / Latte', 'Latte', 65000,
        'Latte - một bức tranh ấm áp và tinh tế của cà phê. Hòa quyện giữa hương thơm độc đáo của hạt cà phê và sự mềm mại của sữa hấp, latte là một trải nghiệm đẳng cấp và êm dịu. Với lớp bọt sánh mịn, mỗi giọt latte không chỉ là một đồ uống, mà là một cuộc phiêu lưu ngọt ngào đưa người uống vào thế giới ấm áp của sự thư giãn và hưởng thụ.')
    }

    else if (id === 'CoffeePhin'){
        updateProductInfo('CoffeePhin', './assets_buyscreen/Ảnh/Cà phê/Phin.png', 'Menu / Cafe / Phin', 'Phin', 35000,
        'Cà phê phin - một hành trình giữa hương vị truyền thống và sự tươi mới. Vị cà phê đắng ngắt nhẹ nhàng hòa quyện với hương thơm của đất trái, làm cho mỗi giấc nhấm nháp trở thành một trải nghiệm độc đáo, làm dịu đi nhiệt độ và làm tỉnh táo tâm hồn. Cà phê phin đá không chỉ là đồ uống, mà còn là nguồn cảm hứng cho những khoảnh khắc tận hưởng sự sôi động của cuộc sống.')
    }

    else if (id === 'BacXiu') {
        updateProductInfo('BacXiu', './assets_buyscreen/Ảnh/Cà phê/BacXiu.png', 'Menu / Cafe / Bạc Xỉu', 'Bạc Xỉu', 40000, 
        'Bạc xỉu - một biểu tượng của sự đơn giản và ngon miệng. Cà phê đen mạnh mẽ kết hợp với sữa béo ngậy, tạo ra một hòa quyện hương vị đặc trưng. Với tỷ lệ cân đối, bạc xỉu không chỉ là sự kết hợp hoàn hảo giữa đắng và ngọt, mà còn là một hành trình vị giác đơn giản, đem đến cảm giác thư giãn và thỏa mãn. Mỗi giọt bạc xỉu là một chuyến phiêu lưu qua vùng đất tinh tế của hương vị cà phê truyền thống, làm say đắm trái tim người thưởng thức.');
    } 

    else if (id === 'Americano') {
        updateProductInfo('Americano', './assets_buyscreen/Ảnh/Cà phê/Americano.png', 'Menu / Cafe / Americano', 'Americano', 45000, 
        'Americano - sự hòa quyện của đơn giản và mạnh mẽ trong mỗi giọt cà phê. Với hương thơm độc đáo và vị đắng nhẹ, americano là cuộc phiêu lưu của sự tinh tế giữa nước và cà phê. Mỗi giọt americano là một chuyến hành trình đơn sơ, nhưng đầy sức mạnh, mang đến sự tỉnh táo và hứng khởi. Khám phá một thế giới độc đáo qua hương vị, americano không chỉ là một cốc cà phê, mà là một trải nghiệm độc đáo cho người thưởng thức đam mê hương vị thuần túy.');
    } 

    else if (id === 'TraXanh') {
        updateProductInfo('TraXanh', './assets_buyscreen/Ảnh/Trà/TraXanhDauDo.png', 'Menu / Trà / Trà Xanh', 'Trà Xanh Đậu Đỏ', 55000, 
        'Mỗi ly Trà Xanh Đậu Đỏ là một sự hòa quyện giữa vị trà xanh thơm với đậu đỏ bùi bùi tạo nên sức hút không thể chối từ. Không chỉ có hương vị hấp dẫn, Trà Xanh còn chứa nhiếu chất chống oxy hóa và rất có lợi cho làn da bạn nữa đó.');
    } 

    else if (id === 'TraDao') {
        updateProductInfo('TraDao', './assets_buyscreen/Ảnh/Trà/TraThanhDao.png', 'Menu / Trà / Trà Đào', 'Trà Thanh Đào', 45000, 
        'Một trải nghiệm thú vị khác! Sự hài hòa giữa vị trà cao cấp, vị sả thanh mát và những miếng đào thơm ngon mọng nước sẽ mang đến cho bạn một thức uống tuyệt vời.');
    } 

    else if (id === 'TraVai') {
        updateProductInfo('TraVai', './assets_buyscreen/Ảnh/Trà/TraThachVai.png', 'Menu / Trà / Trà Vải', 'Trà Thanh Vải', 45000, 
        'Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!');
    } 

    else if (id === 'TraThachDao') {
        updateProductInfo('TraThachDao', './assets_buyscreen/Ảnh/Trà/TraThachDao.png', 'Menu / Trà / Trà Thạch Đào', 'Trà Thạch Đào', 40000, 
        'Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào giòn dai. Thêm vào ít sữa để gia tăng vị béo.');
    } 

    else if (id === 'TraSen') {
        updateProductInfo('TraSenVang', './assets_buyscreen/Ảnh/Trà/TraSenVang.png', 'Menu / Trà / Trà Sen Vàng', 'Trà Sen Vàng', 55000, 
        'Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.');
    } 

    else if (id === 'DetoxThanhLoc') {
        updateProductInfo('DetoxThanhLoc', './assets_buyscreen/Ảnh/Detox/DetoxThanhLoc.png', 'Menu / Detox / Detox Thanh Lọc', 'Detox Thanh Lọc', 25000, 
        'Detox thanh lọc - một hành trình tươi mới cho cơ thể và tâm hồn. Sự kết hợp của các thành phần tự nhiên như cây lúa mạch, tảo spirulina và trái cây tươi, tạo ra một đồ uống thanh lọc độc đáo. Với hương thơm tinh tế và vị tươi mới, mỗi giọt detox không chỉ là sự tận hưởng hương vị tự nhiên mà còn là cơ hội để cơ thể bạn trải qua quá trình làm mới và làm sạch. Detox thanh lọc không chỉ là một đồ uống, mà là một chuyến hành trình đều đặn để tái tạo năng lượng và cân bằng cho cả cơ thể và tâm hồn.');
    } 

    else if (id === 'DetoxGiamCan') {
        updateProductInfo('DetoxGiamCan', './assets_buyscreen/Ảnh/Detox/detox giam can.jpg', 'Menu / Detox / Detox Giảm Cân', 'Detox Giảm Cân', 25000, 
        'Detox giảm cân - một hành trình nhẹ nhàng để tạo ra sự thay đổi tích cực trong cơ thể. Sự phối hợp tinh tế giữa các thành phần detox như nước lọc, chanh và gừng, tạo nên một đồ uống không chỉ thanh lọc cơ thể mà còn hỗ trợ quá trình giảm cân. Với hương thơm tươi mới và vị nhẹ nhàng, mỗi giọt detox giảm cân là một bước chuyển mình dễ dàng, mang đến sự hỗ trợ cho cả cơ thể và tâm hồn. Đây không chỉ là một đồ uống, mà là một phương tiện tự nhiên để đạt được mục tiêu làm đẹp và khám phá sức khỏe mới.');
    } 

    else if (id === 'Tiramisu') {
        updateProductInfo('Tiramisu', './assets_buyscreen/Ảnh/Bánh/Tiramisu.png', 'Menu / Bánh / Tiramisu', 'Tiramisu', 30000, 
        'Tiramisu - một tác phẩm ngọt ngào, hòa quyện giữa lớp kem sáng mịn, hương cacao ngọt ngào và vị đắng dịu của cà phê. Mỗi lớp tiramisu là một chuyến du hành qua thế giới hương vị phức tạp, tạo nên một trải nghiệm thưởng thức độc đáo. Hương thơm thơm ngon và vị đắng ngọt, mỗi miếng tiramisu không chỉ là một món tráng miệng, mà còn là một chuyến phiêu lưu tinh tế trong thế giới ngọt ngào và thỏa mãn.');
    } 

    else if (id === 'Tart') {
        updateProductInfo('Tart', './assets_buyscreen/Ảnh/Bánh/Tart.png', 'Menu / Bánh / Tart Trứng', 'Tart Trứng', 10000, 
        'Tart trứng - một sự hòa quyện tuyệt vời giữa lòng trứng mềm mại và vỏ bánh giòn tan. Mỗi miếng tart trứng là một tác phẩm nghệ thuật của sự kết hợp hoàn hảo giữa vị ngọt béo và hương thơm nhẹ nhàng. Với lớp trứng nhẹ và vị bánh nhân độc đáo, mỗi miếng tart trứng không chỉ là một món tráng miệng ngon lành, mà còn là một hành trình thưởng thức hương vị tinh tế, làm đắm chìm người thưởng thức trong sự hài lòng và hạnh phúc.');
    } 

    else if (id === 'PannaCotta') {
        updateProductInfo('PannaCotta', './assets_buyscreen/Ảnh/Bánh/PannaCotta.png', 'Menu / Bánh / Panna Cotta', 'Panna Cotta', 10000, 
        'Panna cotta - một biểu tượng của sự mềm mại và đẳng cấp trong thế giới tráng miệng. Với lớp kem sáng mịn và vị ngọt nhẹ, mỗi đơn vị panna cotta là một chuyến phiêu lưu ngon lành qua thế giới hương vị tinh tế. Hương vani êm dịu và vị kem ngon lành, tạo nên một trải nghiệm thưởng thức độc đáo. Panna cotta không chỉ là một món tráng miệng, mà còn là một thưởng thức sang trọng, làm cho mỗi hương vị trở nên đặc biệt và đáng nhớ.');
    } 

    else if (id === 'Mousse') {
        updateProductInfo('Mousse Cake', './assets_buyscreen/Ảnh/Bánh/MousseCake.png', 'Menu / Bánh / Mousse Cake', 'Mousse Cake', 30000, 
        'Mousse cake - một hòa quyện tuyệt vời giữa lớp mousse nhẹ nhàng và vị bánh ngọt ngào. Mỗi lớp mousse cake là một sự kết hợp tinh tế của vị ngọt và hương thơm phức tạp. Với độ mịn màng và vị kem tươi mát, mỗi miếng mousse cake không chỉ là một trải nghiệm ngon lành mà còn là một chuyến phiêu lưu trong thế giới hương vị đa dạng. Hương thơm nồng nàn và vị kem béo ngậy, mousse cake không chỉ là một món tráng miệng, mà còn là một tác phẩm nghệ thuật ngọt ngào đẹp mắt.');
    } 

    else if (id === 'BongLan') {
        updateProductInfo('BongLan', './assets_buyscreen/Ảnh/Bánh/bong-lan-trung-muoi.jpg', 'Menu / Bánh / Bông Lan', 'Bông Lan Trứng Muối', 25000, 
        'Bông lan trứng muối - một hòa quyện tuyệt vời giữa vị bánh ngọt ngào và hương vị đặc trưng của muối. Mỗi lớp bông lan trứng muối là một sự kết hợp độc đáo của vị ngọt êm dịu và hương muối mặn mòi. Với độ nhẹ nhàng và hương thơm đặc trưng, mỗi chiếc bánh không chỉ là một trải nghiệm ngon lành mà còn là một chuyến hành trình hương vị đặc sắc. ');
    } 

    else if (id === 'Biscotti') {
        updateProductInfo('Biscotti', './assets_buyscreen/Ảnh/Bánh/Bicossti.png', 'Menu / Bánh / Biscotti', 'Biscotti', 40000, 
        'Biscotti - một sự kết hợp độc đáo giữa vị giòn và hương thơm ngọt ngào. Mỗi chiếc biscotti là một tác phẩm nghệ thuật của sự bánh giòn và độ thơm mát. Với vị ngọt nhẹ và hương vani ấm áp, mỗi chiếc biscotti không chỉ là một trải nghiệm ăn vặt, mà còn là một hành trình ngon miệng qua thế giới hương vị. Hương thơm quyến rũ và vị bánh giòn, biscotti không chỉ là một loại bánh, mà còn là một biểu tượng của sự thưởng thức bánh ngọt tinh tế.');
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

    if (selectedSize === 'off' && KPM === 'null' && TV === 'null' && HS === 'null' && TOL === 'null')
{
    Price = firstPrice;
    var formattedPrice =  Price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    document.getElementById('product-price-id').textContent = formattedPrice;
}