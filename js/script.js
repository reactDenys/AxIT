const tabBtn = document.querySelectorAll(".tab__button");
const tabItem = document.querySelectorAll(".tabs__item");


tabBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentItem = document.querySelector(tabId);
        
        
        tabBtn.forEach(function(item) {
            item.classList.remove("active");
        });
        
        tabItem.forEach(function(item) {
            item.classList.remove("active");
        });
        
        currentBtn.classList.add("active");
        currentItem.classList.add("active");
        
    });
});