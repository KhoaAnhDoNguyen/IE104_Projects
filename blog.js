


let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll('.list .article');

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((article, key) => {
        if (key >= beginGet && key <= endGet) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    })
    listPage();
}
loadItem();
function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for (i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if (thisPage != count) {
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i) {
    thisPage = i;
    loadItem();
}


/*phân các trang blog*/
function changeBlogContent(topicNumber) {
    // Lấy phần tử span trong thẻ a
    const blogSpan = document.querySelector('.body_tab-a span');

    switch (topicNumber) {
        case 1:
            blogSpan.innerText = 'Chuyện cà phê:';
            break;
        case 2:
            blogSpan.innerText = 'Pha cà phê:';
            changePage(1);
            break;
        case 3:
            blogSpan.innerText = 'Pha trà:';
            changePage(1);
            break;
        case 4:
            blogSpan.innerText = 'Chuyện trà:';
            changePage(1);
            break;
        case 5:
            blogSpan.innerText = 'In the moon';
            changePage(1);
            break;
        case 6:
            blogSpan.innerText = 'Review';
            changePage(1);
            break;

        // Thêm các trường hợp khác tương ứng với các chủ đề khác
    }
}

