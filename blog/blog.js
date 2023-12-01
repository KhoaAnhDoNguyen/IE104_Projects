// Khai báo một mảng chứa thông tin của từng bài
var blogList = [
    {
        content: 'Nội dung mới của Bài 1',
        images: [
            '/assets/img/image_new_1_1.png',
            '/assets/img/image_new_1_2.png',
            '/assets/img/image_new_1_3.png'
        ]
    },
    {
        content: 'Nội dung mới của Bài 2',
        images: [
            '/assets/img/image_new_2_1.png',
            '/assets/img/image_new_2_2.png',
            '/assets/img/image_new_2_3.png'
        ]
    },
    {
        content: 'Nội dung mới của Bài 3',
        images: [
            '/assets/img/image_new_3_1.png',
            '/assets/img/image_new_3_2.png',
            '/assets/img/image_new_3_3.png'
        ]
    },
    // Thêm thông tin của các bài tiếp theo vào đây
];

// Lấy đối tượng nút Bài trước
var prevButton = document.getElementById('prevButton');

// Lấy đối tượng nút Bài kế tiếp
var nextButton = document.getElementById('nextButton');

// Lắng nghe sự kiện click cho nút Bài trước
prevButton.addEventListener('click', function () {
    // Lấy chỉ số hiện tại
    var currentIndex = parseInt(prevButton.getAttribute('data-index'));

    // Giảm chỉ số
    currentIndex--;

    // Kiểm tra nếu chỉ số là dưới 0, chuyển về bài cuối cùng
    if (currentIndex < 0) {
        currentIndex = blogList.length - 1;
    }

    // Thay đổi nội dung và hình ảnh
    document.getElementById('blog_1').innerText = blogList[currentIndex].content;
    setImages(blogList[currentIndex].images);

    // Cập nhật chỉ số mới
    prevButton.setAttribute('data-index', currentIndex);
});

// Lắng nghe sự kiện click cho nút Bài kế tiếp
nextButton.addEventListener('click', function () {
    // Lấy chỉ số hiện tại
    var currentIndex = parseInt(nextButton.getAttribute('data-index'));

    // Tăng chỉ số
    currentIndex++;

    // Kiểm tra nếu chỉ số vượt quá số lượng bài, chuyển về bài đầu tiên
    if (currentIndex >= blogList.length) {
        currentIndex = 0;
    }

    // Thay đổi nội dung và hình ảnh
    document.getElementById('blog_1').innerText = blogList[currentIndex].content;
    setImages(blogList[currentIndex].images);

    // Cập nhật chỉ số mới
    nextButton.setAttribute('data-index', currentIndex);
});

// Hàm để đặt hình ảnh
function setImages(images) {
    var imageElements = document.querySelectorAll('.body_img1');

    // Đặt hình ảnh cho từng phần tử có class 'body_img1'
    for (var i = 0; i < images.length; i++) {
        imageElements[i].src = images[i];
    }
}
