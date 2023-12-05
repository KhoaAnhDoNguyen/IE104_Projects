
let coffeeNode = document.querySelector('.Coffee.menu_title'),
            teaNode = document.querySelector('.Tea.menu_title'),
            detoxNode = document.querySelector('.Detox.menu_title'),
            cakeNode = document.querySelector('.Cake.menu_title')
        allNode = document.querySelector('.All.menu_title')
        let itemNode = document.querySelectorAll('.content-item'),
            sidebarNode = document.querySelectorAll('.sidebar__navbar')


        function showAll(item) {
            item.style.display = 'block'
        }
        function hiddenForID(item, X) {
            if (item.id === X) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        }
        function hiddenForClass(item, X) {
            if (item.className === X) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        }

        allNode.onclick = function () {
            itemNode.forEach((item) => {
                showAll(item)
            })
            sidebarNode.forEach((item) => {
                showAll(item)
            })
        }

        coffeeNode.onclick = function () {
            itemNode.forEach((item) => {
                hiddenForID(item, 'Coffee')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Coffee sidebar__navbar')
            })
        }

        teaNode.onclick = function () {
            itemNode.forEach((item) => {
                hiddenForID(item, 'Tea')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Tea sidebar__navbar')
            })
        }

        detoxNode.onclick = function () {
            itemNode.forEach((item) => {
                hiddenForID(item, 'Detox')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Detox sidebar__navbar')
            })
        }

        cakeNode.onclick = function () {
            itemNode.forEach((item) => {
                hiddenForID(item, 'Cake')
            })
            sidebarNode.forEach((item) => {
                hiddenForClass(item, 'Cake sidebar__navbar')
            })
        }