const modal_lg = document.querySelector('.js-modal-log')
modal_lg.addEventListener('click',function(event){
    alert("Đăng ký thành công !")

    window.location.href = './log_in.html';
})