let link =document.getElementsByClassName("link");
let btn1 = document.querySelector('.btn1');
let currentValue = 1;

function activeLink(){
    for(l of link){
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value;

    // Kiểm tra giá trị để ẩn/hiện nút back
    if (currentValue === 1) {
        btn1.style.visibility = 'hidden';
    } else {
        btn1.style.visibility = 'visible';
    }
}

function backBtn(){
    if(currentValue > 1){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue--;
        link[currentValue-1].classList.add("active");
       
        // Kiểm tra giá trị để ẩn/hiện nút back
        if (currentValue === 1) {
            btn1.style.visibility = 'hidden';
        } else {
            btn1.style.visibility = 'visible';
        }

    }
}

function nextBtn(){
    if(currentValue < 4){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue++;
        link[currentValue-1].classList.add("active");

        // Kiểm tra giá trị để ẩn/hiện nút back
        if (currentValue === 1) {
            btn1.style.visibility = 'hidden';
        } else {
            btn1.style.visibility = 'visible';
        }
    }
}

// Ẩn hình khi trang web được tải
btn1.style.visibility = 'hidden';