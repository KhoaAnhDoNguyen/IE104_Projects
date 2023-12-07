function changeForm() {
    // Thay đổi chữ "Đăng nhập" thành "Đăng ký" khi click vào liên kết "Đăng ký ngay"
    document.querySelector('.log-in-btn').innerText = 'Đăng ký';
    
    // Hiển thị ô nhập lại mật khẩu khi click vào liên kết "Đăng ký ngay"
    document.getElementById('confirmPasswordBox').style.display = 'block';

    // Ẩn checkbox "Remember me" khi click vào liên kết "Đăng ký ngay"
    document.getElementById('rememberMeCheckbox').style.display = 'none';
    
    // Ẩn liên kết "Quên mật khẩu?" khi click vào liên kết "Đăng ký ngay"
    document.getElementById('forgotPasswordLink').style.display = 'none';
}
