// Khai báo một mảng chứa thông tin của từng bài
var blogList = [
  {
    content: "CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON",
    images: [
      "/blog/assets/img/image_1.png",
      "/blog/assets/img/image_2.png",
      "/blog/assets/img/image_3.png",
    ],
  },
  {
    content: "TRÀ XANH ĐẬU ĐỎ THE COFFEE HOUSE - HƯƠNG VỊ TRUYỀN THỐNG",
    images: [
      "/blog/assets/img/image_1.png",
      "/blog/assets/img/image_2.png",
      "/blog/assets/img/trà xanh đậu đỏ.jpg",
    ],
  },
  {
    content:
      "BÁNH BÔNG LAN TRỨNG MUỐI THE COFFEE HOUSE - HƯƠNG VỊ TRUYỀN THỐNG",
    images: [
      "/blog/assets/img/image_1.png",
      "/blog/assets/img/image_2.png",
      "/blog/assets/img/BongLan.png",
    ],
  },
  // Thêm thông tin của các bài tiếp theo vào đây
];

// Lấy đối tượng nút Bài trước
var prevButton = document.getElementById("prevButton");

// Lấy đối tượng nút Bài kế tiếp
var nextButton = document.getElementById("nextButton");

// Lắng nghe sự kiện click cho nút Bài trước
prevButton.addEventListener("click", function () {
  // Lấy chỉ số hiện tại
  var currentIndex = parseInt(prevButton.getAttribute("data-index"));

  // Giảm chỉ số
  currentIndex--;

  // Kiểm tra nếu chỉ số là dưới 0, chuyển về bài cuối cùng
  if (currentIndex < 0) {
    currentIndex = blogList.length - 1;
  }

  // Thay đổi nội dung và hình ảnh
  document.getElementById("blog_1").innerText = blogList[currentIndex].content;
  setImages(blogList[currentIndex].images);

  // Cập nhật chỉ số mới
  prevButton.setAttribute("data-index", currentIndex);
});

// Lắng nghe sự kiện click cho nút Bài kế tiếp
nextButton.addEventListener("click", function () {
  // Lấy chỉ số hiện tại
  var currentIndex = parseInt(nextButton.getAttribute("data-index"));

  // Tăng chỉ số
  currentIndex++;

  // Kiểm tra nếu chỉ số vượt quá số lượng bài, chuyển về bài đầu tiên
  if (currentIndex >= blogList.length) {
    currentIndex = 0;
  }

  // Thay đổi nội dung và hình ảnh
  document.getElementById("blog_1").innerText = blogList[currentIndex].content;
  setImages(blogList[currentIndex].images);

  // Cập nhật chỉ số mới
  nextButton.setAttribute("data-index", currentIndex);
});
// Lấy tất cả các phần tử có class 'blog'
var blogElements = document.querySelectorAll(".blog");

// Lặp qua mỗi phần tử và thêm sự kiện click
blogElements.forEach(function (blogElement, index) {
  blogElement.addEventListener("click", function () {
    // Thay đổi nội dung và hình ảnh dựa trên chỉ số
    document.getElementById("blog_1").innerText = blogList[index].content;
    setImages(blogList[index].images);

    // Cập nhật chỉ số mới cho cả prevButton và nextButton
    prevButton.setAttribute("data-index", index);
    nextButton.setAttribute("data-index", index);
  });
});

// Hàm để đặt hình ảnh
function setImages(images) {
  var imageElements = document.querySelectorAll(".body_img1");

  // Đặt hình ảnh cho từng phần tử có class 'body_img1'
  for (var i = 0; i < images.length; i++) {
    imageElements[i].src = images[i];
  }
}
