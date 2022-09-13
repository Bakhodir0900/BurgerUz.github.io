let modal = document.querySelector('.modal'),
    anbtn = document.querySelector('.anBtn'),
    animatedBtnImg = document.querySelector('.animatedBtn-img'),
    notAnimated = document.querySelector('.notAnimatedImg'),
    close = document.querySelector('.modal-close');


anbtn.onclick = (boxEvent) => {
    boxEvent.preventDefault();
    modal.style.display = 'block';
    notAnimated.style.display = 'block';
    animatedBtnImg.style.display = 'none'
}
close.onclick = (closeEvent) => {
    closeEvent.preventDefault();
    animatedBtnImg.style.display = 'block'
    modal.style.display = 'none';
    notAnimated.style.display = 'none';
}

let tab = function (){
    let tabsItem = document.querySelectorAll('.tabs__header-item'),
        tabsCont = document.querySelectorAll('.tabs__main-content'),
        tabName;

    tabsItem.forEach(item => {
        item.addEventListener('click', selectTabsItem)
    });
    function selectTabsItem() {
        tabsItem.forEach(item => {
            item.classList.remove('active')
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabCont(tabName);
    }

    function selectTabCont(tabName) {
        tabsCont.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }

};

tab();