
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


document.addEventListener('DOMContentLoaded', function() {
    // Lấy tham số id từ URL
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');

    // Kiểm tra giá trị của id và hiển thị thông tin tương ứng
    if (id === 'PhinSuaDa') {
        document.getElementById('product-show').src = 'Ảnh/Cà phê/Phin.png';
        document.getElementById('smallpicture-id').src = 'Ảnh/Cà phê/Phin.png';
        document.getElementById('product-description').textContent = 'Phin Sữa Đá hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.';
        document.getElementById('intro-id').textContent = 'Menu / Cafe / Phin Sữa Đá';
        document.getElementById('product-name').textContent = 'Cafe Sữa Đá';
        document.getElementById('product-price-id').textContent = '29.000 đ';
    } 

    else if (id === 'PhinHatDe') {
        document.getElementById('product-show').src = 'Ảnh/Cà phê/Phindi.png';
        document.getElementById('smallpicture-id').src = 'Ảnh/Cà phê/Phindi.png';
        document.getElementById('product-description').textContent = 'Phindi Hạt Dẻ Cười là sự kết hợp tinh tế giữa hương vị đậm đà của cà phê và sự mịn màng, thơm ngon của sốt phistiachio. ';
        document.getElementById('intro-id').textContent = 'Menu / Cafe / Phin Hạt Dẻ';
        document.getElementById('product-name').textContent = 'Phin Hạt Dẻ';
        document.getElementById('product-price-id').textContent = '55.000 đ';
    } 

    else if (id === 'TraThachVai') {
        document.getElementById('product-show').src = 'Ảnh/Trà/TraThachVai.png';
        document.getElementById('smallpicture-id').src = 'Ảnh/Trà/TraThachVai.png';
        document.getElementById('product-description').textContent = 'Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!';
        document.getElementById('intro-id').textContent = 'Menu / Cafe / Trà Thạch Vải';
        document.getElementById('product-name').textContent = 'Trà Thạch Vải';
        document.getElementById('product-price-id').textContent = '45.000 đ';
    } 

    else if (id === 'DauChanhMat') {
        document.getElementById('product-show').src = 'Ảnh/Trà/TraXanhDauDo.png';
        document.getElementById('smallpicture-id').src = 'Ảnh/Trà/TraXanhDauDo.png';
        document.getElementById('product-description').textContent = 'Nước dâu tây chanh detox với công thức đơn giản và chưa đến 15 phút thực hiện à bạn đã có ngay cho mình một chai detox giảm cân, xả stress, loại bỏ căng thẳng mệt mỏi và cải thiện làn da rồi.';
        document.getElementById('intro-id').textContent = 'Menu / Cafe / Nước dâu tây chanh detox';
        document.getElementById('product-name').textContent = 'Nước dâu tây chanh detox';
        document.getElementById('product-price-id').textContent = '45.000 đ';
    } 
}
);

