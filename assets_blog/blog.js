// Khai báo một mảng chứa thông tin của từng bài
var blogList = [
  {
    content: "CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON",
    images: [
      "./assets_blog/assets/img/image_1.png",
      "./assets_blog/assets/img/image_2.png",
      "./assets_blog/assets/img/image_3.png",
    ],
    paragraphs: [
      "Mới đây, các tín đồ cà phê đang bàn tán xôn xao về SIGNATURE - Biểu tượng văn hóa cà phê của The Coffee House đã quay trở lại.",
      "Một lời hẹn làm bao người xao xuyến.",
      'Vừa qua, Fanpage Nhà đã hé mở những thông tin đầu tiên về "SIGNATURE by The Coffee House" kèm lời hẹn "Hôm nay bạn có hẹn chưa? Mình cà phê nhé!". ',
      "Theo đó, SIGNATURE by The Coffee House sẽ gửi đến các thành viên của Nhà những Cuộc hẹn tròn đầy với 3 trải nghiệm: Tách cà phê đặc sản với những mẻ rang mới mỗi ngày, chiều lòng mọi tâm hồn yêu cà phê hay những ai đang tò mò về loại trái cây đặc biệt này; Món ăn đa bản sắc, mang phong vị giao thoa từ nhiều nơi cho cuộc hẹn dài hơn, rôm rả hơn; Một không gian đầy cảm hứng, nơi hạt cà phê kể về hành trình tuyệt vời của mình theo cách gần gũi nhất. Bạn sẽ có cơ hội thưởng thức cà phê bằng đủ những giác quan - ngửi hương, lắng nghe, ngắm nhìn và nếm vị.",
      "Không gian rộng mở, được thiết kế như một xưởng rang cà phê nhưng vẫn tạo cảm giác thân thuộc, gần gũi với nhiều cây xanh và hai tông màu cam nâu ấm áp và trắng xám tinh tế. Trong đó, nổi bật nhất phải kể đến hệ thống các si lô cà phê và một máy rang lớn đặt ở sảnh tầng 1, cùng hệ thống các ống đồng chứa cà phê rang, khu vực quầy bar trải nghiệm. Khoảng 1 giờ, quán sẽ rang 1 mẻ nhỏ, tạo nên tiếng cà phê chạy trong các ống đồng rất vui tai, như 1 bản nhạc.",
      "Không chỉ được thưởng thức những ly cà phê đặc sản thơm ngon, đậm vị, đến với SIGNATURE by The Coffee House, bạn còn có thể thưởng thức nhiều món ăn mới lạ kết hợp Á - Âu, thích hợp cho mọi cuộn hẹn.",
      'SIGNATURE by The Coffee House đánh thức nguồn cảm hứng qua 4 giác quan: ngửi hương cà phê từ cửa - ngắm chuyện cà phê ở mỗi ngóc ngách - nghe những hạt cà phê reo trong hệ thống ống đồng, điểm xuyết trên nền nhạc chill, nghe chuyện của hạt cà phê qua lời chia sẻ của barista tại quầy bar - nếm thử vị cà phê đặc sản Signature. Xem và nghe bản "hòa tấu" của những hạt cà phê trên nền nhạc trống jazz mỗi khi bắt đầu mẻ rang mới, khách hàng sẽ “giải mã” được trọn vẹn hành trình thú vị của hạt cà phê. ',
      'SIGNATURE by The Coffee House đánh thức nguồn cảm hứng qua 4 giác quan: ngửi hương cà phê từ cửa - ngắm chuyện cà phê ở mỗi ngóc ngách - nghe những hạt cà phê reo trong hệ thống ống đồng, điểm xuyết trên nền nhạc chill, nghe chuyện của hạt cà phê qua lời chia sẻ của barista tại quầy bar - nếm thử vị cà phê đặc sản Signature. Xem và nghe bản "hòa tấu" của những hạt cà phê trên nền nhạc trống jazz mỗi khi bắt đầu mẻ rang mới, khách hàng sẽ “giải mã” được trọn vẹn hành trình thú vị của hạt cà phê. ',
      'Ngay khi vừa xuất hiện, SIGNATURE by The Coffee House đã nhận được sự hưởng ứng, chia sẻ nhiệt tình của giới trẻ. Bên dưới bài đăng là hàng loạt những bình luận khen ngợi về không gian cửa hàng, thức uống, đồ ăn và "rủ rê" bạn bè tới khám phá và trải nghiệm.      ',
      'Bạn Lan Anh, một "fan cứng" của The Coffee House Signature Phạm Ngọc Thạch đã tỏ ra rất hào hứng khi nghe tin bạn cũ sắp quay lại: "Lần đầu được trải nghiệm The Coffee House Signature từ mấy năm trước, mình đã mê như điếu đổ rồi. Cà phê và không gian đều rất hợp gu mình. Chớm hay tin bạn cũ đã quay trở lại tại Crescent Mall từ "cạ cứng" cà phê, chúng mình lên lịch ghé qua thăm liền, bạn vẫn ngon vậy mà còn hấp dẫn hơn xưa nữa".',
      'Trong quá trình tìm tòi để định hình mô hình cho SIGNATURE, chúng tôi tìm thấy sự tương đồng trong văn hóa cà phê "kiểu Úc", cụ thể là Australian Coffee Culture, với những loại cà phê đặc sản, thức ăn được phục vụ kiểu brunch và không gian rất phù hợp cho việc giao tiếp xã giao. Dù bố trí như thế nào, concept “Just Roasted” của chúng tôi được tạo nên dựa trên lời hứa: Tất cả các loại cà phê ở SIGNATURE by The Coffee House được rang tại chỗ để mang lại hương vị tươi ngon nhất có thể. Nguyên vật liệu được khắt khe lựa chọn với tiêu chuẩn cao nhất. Và bất cứ ai chọn đến SIGNATURE by The Coffee House cũng sẽ có một cuộc hẹn tròn đầy”.',
    ],
  },
  {
    content: "TẠI SAO CÀ PHÊ CÓ VỊ CHUA?",
    images: [
      "../assets_mainScreen/images/blog1.jpg",
      "../assets_mainScreen/images/blog2.png",
      "./assets_blog/assets/img/trà xanh đậu đỏ.jpg",
    ],
    paragraphs: [
      "Nhiều người khi uống cà phê cảm thấy có vị chua thường e ngại rằng cà phê hỏng, kém chất lượng hay gặp các vấn đề trong quá trình pha chế và bảo quản. Tuy nhiên, điều này chưa chính xác. Cả hương vị của Arabica hay Robusta nguyên chất, trải qua quá trình chế biến, rang xay đều có vị chua nhẹ. Vậy nên, cà phê có vị chua chua, vẫn giữ được hương thơm đặc trưng vốn có của nó thì bạn có thể yên tâm đó không phải là cà phê hỏng.",
      "The Coffee House sẽ chỉ ra những lý do khiến cà phê có vị chua tự nhiên. ",
      "Trong mỗi loại cà phê đều có độ chua (pH), và độ chua này khác nhau tùy loại. Ở nước ta, đối với hạt cà phê Arabica thường được sơ chế ướt (fully washed) nhằm đảm bảo tối đa hương vị và chất lượng thượng hạng của giống cà phê này. Và đặc trưng của phương pháp sơ chế ướt sẽ cho vị chua hơn là phương pháp sơ chế khô. ",
      "Lý do là trong quy trình sơ chế ướt, những trái cà phê được đem đi xay xát, cho qua bồn nước để lọc lớp vỏ nhớt bên ngoài, sau đó đem cà phê đi ủ lên men trong khoảng 12 / 36 tiếng. Chính lượng axit còn lại trên hạt cà phê sau khi rửa sẽ mang lại vị chua. Tuy nhiên, đây là phương pháp sơ chế lý tưởng nhất đối với hạt Arabica nên nó có vị chua thanh một cách thú vị, chứ không chua nhiều. ",
      "Đối với hạt Robusta khi sử dụng phương pháp sơ chế ướt cũng sẽ tạo nên vị chua rất gắt, vì hạt Robusta có hàm lượng axit cao hơn so với hạt Arabica. Vậy nên, để làm giảm độ chua của cà phê Robusta, người ta sẽ ưu tiên chọn phương pháp sơ chế khô. Lúc này vị của hạt Robusta cũng có vị chua nhưng nhẹ hơn nhiều.",
      "Ngoài việc sơ chế sẽ làm thay đổi đến độ chua của cà phê thì quá trình rang cũng sẽ có sự tác động. Vì khi rang sẽ làm thay đổi thành phần axit trong hạt cà phê. ",
      "Khi uống cà phê 100% Arabica rang nhạt (light roast hay medium roast), bạn sẽ cảm nhận vị chua nhiều. Tuy nhiên, nếu hạt Arabica này rang đậm (medium dark ro hay dark roast) bạn sẽ cảm nhận độ chua giảm dần. ",
      "Khi uống cà phê 100% Arabica rang nhạt (light roast hay medium roast), bạn sẽ cảm nhận vị chua nhiều. Tuy nhiên, nếu hạt Arabica này rang đậm (medium dark ro hay dark roast) bạn sẽ cảm nhận độ chua giảm dần. i dung thứ 8",
      "Như vậy, trên thực tế cà phê nguyên chất, cà phê ngon được rang mộc thường có một chút vị chua. Bên cạnh vị chua thanh tinh tế là vị đắng dịu nhẹ, mùi thơm nồng nàn quyến rũ, khác với vị đắng gắt và mùi hăng hắc của các loại cà phê pha tạp bởi đậu nành hay bắp rang cháy. ",
      "Với những chia sẻ của The Coffee House chắc hẳn bạn đã bớt bỡ ngỡ vì cà phê lại có vị chua. Đó là vị chua tự nhiên của cà phê, ngoài ra, vị chua từ việc thu hoạch nhiều trái xanh, chua do quá trình pha chế hay cà phê để lâu làm giảm chất lượng của cà phê là một câu chuyện khác. Vậy nên để thưởng thức cà phê là cả một nghệ thuật. Từ khi bạn cảm nhận được vị đắng dịu, vị chua thanh, hương thơm đặc trưng, đến hậu vị ngọt nơi cổ họng và cả những cung bậc cảm xúc để lại. Và đấy là khi bạn cảm nhận trọn vẹn hương vị cà phê bằng cả sự tinh tế của các giác quan. ",
      "Để thưởng thức những hương vị cà phê nguyên chất, hảo hạng, gói trọn đầy đủ vị chua, đắng, ngọt và cả hương thơm khác biệt đầy hấp dẫn ấy, mời bạn cùng đến với The Coffee House.      ",
    ],
  },
  {
    content: "NGHE NHÀ MÁCH NHỎ BÍ KÍP HEALTHY GỌN NHẸ, AI CŨNG ÁP DỤNG ĐƯỢC",
    images: [
      "../assets_mainScreen/images/blog5.png",
      "../assets_mainScreen/images/blog6.png",
      "./assets_blog/assets/img/BongLan.png",
    ],
    paragraphs: [
      "Sống lành mạnh (healthy) đang là xu hướng được nhiều người trẻ ưa chuộng. Tuy nhiên, không đơn thuần là việc chăm chút đi theo các chế độ ăn uống hoặc tập luyện khắt khe, ngày nay healthy phải “easy” để vừa khỏe mạnh, vừa thoải mái tận hưởng mọi cuộc vui!",
      "Tại Việt Nam, lối sống lành mạnh đang là xu hướng thịnh hành và ngày càng được nhiều người lựa chọn, nhất là giai đoạn hậu đại dịch.",
      "Theo một báo cáo của YouNet, ngay từ quý 03/2019, đã có tới hơn 600.000 cuộc thảo luận về chủ đề này trên các nền tảng mạng xã hội trong vòng 03 tháng. Đến nay, con số này đang không ngừng gia tăng với sự đón nhận tích cực từ người trẻ.",
      "Dạo quanh cộng đồng mạng, dễ dàng nhận thấy một đặc trưng thú vị trong lối sống healthy mà người trẻ ngày nay theo đuổi. Đó là yếu tố cân bằng giữa sự lành mạnh với những trải nghiệm sống thú vị đang chờ đợi các bạn – đặc biệt trong chuyện ăn uống. Theo đó, các bạn trẻ thường ưu tiên lựa chọn các món ăn bổ dưỡng nhưng phải tiện lợi, không quá rườm rà trong khâu chế biến. Đặc biệt, tuy đặt yếu tố dinh dưỡng lên hàng đầu nhưng cũng chú trọng việc thưởng thức, nuông chiều vị giác. Trớ trêu thay, đây cũng là lý do hàng đầu khiến nhiều bạn… “ngưng ngang” hành trình healthy của mình vì khó tìm ra lời giải ưng ý.",
      "Thấu hiểu được nỗi trăn trở này, với vai trò là bạn đồng hành thân thuộc của giới trẻ, vừa qua, The Coffee House đã giới thiệu bộ đôi Smoothie mát lành gồm Smoothie Phúc Bồn Tử Granola và Smoothie Xoài Nhiệt Đới Granola, thuộc Bộ sưu tập Đá Xay Frosty mới nhất. Đây hứa hẹn sẽ là câu trả lời hoàn hảo cho các bạn ưa chuộng lối sống healthy nhưng vẫn muốn tận hưởng trọn vẹn cuộc sống năng động.",
      "Với cách ra mắt độc – lạ theo concept “Nhà Băng - Vay Lạnh”, Smoothie nhanh chóng nhận được sự yêu thích từ khách hàng. “Nhà Băng” The Coffee House với Bộ sưu tập Đá Xay Frosty cung cấp những gói “vay lạnh” trong mùa hè oi bức, thông qua từng sản phẩm mới mẻ, được nghiên cứu để đáp ứng nhu cầu đa dạng của khách hàng. Trong đó, bộ đôi Smoothie mát lành, không chỉ gây kích thích vị giác bởi sự mát lạnh, sánh mịn, đậm vị cuốn hút vốn có từ Nhà, mà còn ghi điểm bởi việc nắm bắt tâm lý ưa chuộng sự healthy của người người, nhà nhà hiện nay.",
      'Cụ thể, với Smoothie Phúc Bồn Tử Granola, người dùng có thể dễ dàng tận hưởng mùa hè mát mẻ lan toả trong khoang miệng ngay từ cái chạm môi đầu tiên. Các “chuyên gia đồ uống" từ Nhà đã khéo léo kết hợp sữa chua sánh mịn hòa quyện với hương vị chua chua ngọt ngọt khó cưỡng của Phúc Bồn Tử, tạo nên thức uống giải nhiệt hấp dẫn và không kém phần bắt mắt.',
      "Dù không phải món uống quá xa lạ bởi đã từng xuất hiện trước đây, nhưng Smoothie quay trở lại lần này không chỉ là sự thăng cấp về ngoại hình và hương vị, là câu trả lời hoàn hảo The Coffee House dành cho các tín đồ đá xay. Hương vị sáng tạo, nguyên liệu tự nhiên, công thức healthy mà vẫn đảm bảo sự mát lạnh, sánh mịn và đậm vị, Smoothie là người bạn đồng hành tiện lợi, mọi nơi mọi lúc cho các bạn trẻ ưa chuộng healthy mà vẫn có thể tận hưởng trọn vẹn cuộc sống.",
      'Độc đáo hơn, bộ đôi Smoothie càng được bung tỏa hương vị với “đặc quyền topping” chỉ có ở dòng sản phẩm này. Sự hòa hợp giữa Granola dinh dưỡng giòn rụm, bắt miệng và trân châu sữa chua “vỡ tung” hương vị tươi mát sẽ là “bí mật” khiến Smoothie càng uống càng ghiền, cứ phải “xuýt xoa mãi thôi”!',
      ' Smoothie Phúc Bồn Tử Granola và Smoothie Xoài Nhiệt Đới Granola là gợi ý hoàn hảo cho bữa sáng tiện lợi, bữa phụ dinh dưỡng hoặc món tráng miệng nhẹ nhàng cho bữa tối.',
      '"Healthy” nay không còn là khái niệm lạ lẫm, hay lối sống “phù phiếm” chỉ dành cho một nhóm người. Ngày càng có nhiều phương pháp sống healthy để hoàn toàn cân bằng và làm chủ cuộc sống. Màn ra mắt ấn tượng của bộ đôi sản phẩm Smoothie từ The Coffee House chắc chắn sẽ là lựa chọn hàng đầu cho các tín đồ lành mạnh để tận hưởng mùa hè healthy đầy mát lạnh.',
    ],
  },
  // Thêm thông tin của các bài tiếp theo vào đây
];

var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

prevButton.addEventListener("click", navigateBlog.bind(null, -1));
nextButton.addEventListener("click", navigateBlog.bind(null, 1));

function navigateBlog(direction) {
  var currentIndex = parseInt(prevButton.getAttribute("data-index"));
  currentIndex = (currentIndex + direction + blogList.length) % blogList.length;

  updateBlogContent(currentIndex);

  prevButton.setAttribute("data-index", currentIndex);
  nextButton.setAttribute("data-index", currentIndex);
}

function updateBlogContent(index) {
  var paragraphs = document.querySelectorAll(".body_main-context p");
  var blogContents = blogList[index].paragraphs;

  for (var i = 0; i < paragraphs.length && i < blogContents.length; i++) {
    paragraphs[i].innerText = blogContents[i];
    paragraphs[i].style.fontWeight = i < 2 ? "bold" : "normal";
  }

  document.getElementById("blog_1").innerText = blogList[index].content;
  setImages(blogList[index].images);
}

function setImages(images) {
  var imageElements = document.querySelectorAll(".body_img1");

  for (var i = 0; i < images.length; i++) {
    imageElements[i].src = images[i];
  }
}

// Lấy tất cả các phần tử có class 'blog'
var blogElements = document.querySelectorAll(".blog");

blogElements.forEach(function (blogElement, index) {
  blogElement.addEventListener("click", function () {
    updateBlogContent(index);

    prevButton.setAttribute("data-index", index);
    nextButton.setAttribute("data-index", index);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Lấy tham số index từ URL
  var urlParams = new URLSearchParams(window.location.search);
  var index = parseInt(urlParams.get("index")) || 0; // Nếu không có tham số, sử dụng index mặc định là 0

  // Gọi hàm updateBlogContent với chỉ số index
  updateBlogContent(index);

  // Cập nhật chỉ số cho nút trước và nút sau
  prevButton.setAttribute("data-index", index);
  nextButton.setAttribute("data-index", index);
});