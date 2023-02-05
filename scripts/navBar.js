// Change Icons
const instaLogo1 = document.querySelector('.insta-logo1')
const instaLogo2 = document.querySelector('.insta-logo2')

const tabletWindow = window.matchMedia('(max-width: 1200px)');

function changeIcon(mediaQueryList){
    if(mediaQueryList.matches){
        instaLogo1.style.display = "none";
        instaLogo2.style.display = "block";
    }else{
        instaLogo1.style.display = "block";
        instaLogo2.style.display = "none";
    }
}

tabletWindow.addListener(changeIcon);
changeIcon(tabletWindow);

// Nav Bar Selection
const navBar = document.querySelector('.nav-bar');
const navMenu = document.querySelectorAll('.menu');

// Menu Buttons
const menuButtons = document.querySelectorAll('.menu-button');

// Icons
var icons = document.querySelectorAll(`[id^="menu-icon"]`);
var iconsActive = document.querySelectorAll(`[id^="menuActive"]`);

// Add an event listener to each button
menuButtons.forEach(button => {
    button.addEventListener('click', function() {
        // check which button is active
        if(this.classList.contains('active')){
            this.classList.remove('active');

        }else{
        // Remove the active class from all menuButtons
        menuButtons.forEach(b => b.classList.remove('active'));

        // Return to default Home Menu
        homeIcon.style.display = "block";
        homeIconActive.style.display = "none";
        homeText.style.fontWeight = "normal";

        // Return to default Search Menu
        searchIcon.style.display = "block";
        searchIconActive.style.display = "none";
        searchBar.classList.remove('active');

        // Return to default Explore Menu
        exploreIcon.style.display = "block";
        exploreIconActive.style.display = "none";
        exploreText.style.fontWeight = "normal";

        // Return to default Notification Menu
        notificationIcon.style.display = "block";
        notificationIconActive.style.display = "none";
        notificationBar.classList.remove('active');

        // Return to default Profile Menu
        profileIcon.style.display = "block";
        profileIconActive.style.display = "none";
        profileText.style.fontWeight = "normal";

        // Return to default More Menu
        dropUpItems.style.display = 'none';
        moreMenuIcon.style.display = "block";
        moreIconActive.style.display = "none";
        moreText.style.fontWeight = "normal";

        // Return to default Navigation Bar
        navBar.classList.remove('transition');
        for (const element of navMenu) {
            element.classList.remove('transition');
        }
        instaLogo1.style.display = "block";
        instaLogo2.style.display = "none";
        tabletWindow.addListener(changeIcon);
        changeIcon(tabletWindow);
        // Add the active class to the clicked button
        this.classList.add('active');
        }
    });

});

// Zoom In, Zoom Out
for(let i = 0; i < menuButtons.length; i++){
    // Zoom In While Hover
    menuButtons[i].onmouseover = function(){
        for (let j = 0; j < icons.length; j++) {
            icons[i].style.transform = "scale(1.15)";
        }
        // for (let k = 0; k < iconsActive.length; k++) {
        //     iconsActive[i].style.transform = "scale(1.15)";
        // }
    }

    // Zoom Out While Leaving Hover
    menuButtons[i].onmouseleave = function(){
        for (let j = 0; j < icons.length; j++) {
            icons[i].style.transform = "scale(1)";
        }
        // for (let k = 0; k < iconsActive.length; k++) {
        //     iconsActive[i].style.transform = "scale(1)";
        // }
    }
}

// Logo Display for Tablet Media Query
function tablet(media){
    if(media.matches){
        instaLogo1.style.display = "none";
        instaLogo2.style.display = "block";
    }
}

// Home
const homeButton = document.querySelector('#home-button');
const homeIcon = document.querySelector('.home-icon');
const homeIconActive = document.querySelector('.home-icon-active');
const homeText = document.querySelector('#home-menu');

homeButton.addEventListener('click', function(){
        homeIcon.style.display = "none";
        homeIconActive.style.display = "block";
        homeText.style.fontWeight = "bold";
})

// Search
const searchButton = document.querySelector('#search-button');
const searchBar = document.querySelector('.search');
const searchIcon = document.querySelector('.search-icon')
const searchIconActive = document.querySelector('.search-icon-active')
const searchContent = document.querySelector('.search-content');

searchButton.addEventListener('click', function(){
    // this.classList.toggle('active');

    if(this.classList.contains('active')){
        searchBar.classList.toggle('active');
        searchContent.classList.toggle('active');
    }else{
        searchBar.classList.remove('active');
        searchContent.classList.remove('active');
    }
    if (instaLogo1.style.display === "block") {
        instaLogo1.style.display = "none";
        instaLogo2.style.display = "block";
    }
    else {
        instaLogo1.style.display = "block";
        instaLogo2.style.display = "none";
    }
    tabletWindow.addListener(tablet);
    tablet(tabletWindow);
    navBar.classList.toggle('transition');
    for (const element of navMenu) {
        element.classList.toggle('transition');
    }

    if (searchIcon.style.display === "block") {
        searchIcon.style.display = "none";
        searchIconActive.style.display = "block";
    }
    else {
        searchIcon.style.display = "block";
        searchIconActive.style.display = "none";
    }

})

// Clear Input Value
const searchIconInput = document.querySelector('.search-icon');
const searchInput = document.querySelector('#search-input');
const clearInput = document.querySelector('.clear-input');

searchInput.addEventListener('click', () => {
    // console.log('input is clicked');
    if (clearInput.style.display === "none"){
        clearInput.style.display = "block";
        searchIconInput.style.display = "none";
    }
})

clearInput.addEventListener('click', () => {
    // console.log('clear');
    searchInput.value = '';
    clearInput.style.display = "none";
    // searchIconInput.style.display = "block"; kur klikohet bon bug
})

// Explore
const exploreButton = document.querySelector('#explore-button');
const exploreIcon = document.querySelector('.explore-icon');
const exploreIconActive = document.querySelector('.explore-icon-active');
const exploreText = document.querySelector('#explore-menu');

exploreButton.addEventListener('click', function(){
        exploreIcon.style.display = "none";
        exploreIconActive.style.display = "block";
        exploreText.style.fontWeight = "bold";
})

// Notification
const notificationButton = document.querySelector('#notification-button');
const notificationBar = document.querySelector('.notification');
const notificationIcon = document.querySelector('.notification-icon');
const notificationIconActive = document.querySelector('.notification-icon-active');

    notificationButton.addEventListener('click', function(){
        // this.classList.toggle('active');
        if(this.classList.contains('active')){
            notificationBar.classList.toggle('active');
        }else{
            notificationBar.classList.remove('active');
        }
        if (instaLogo1.style.display === "block") {
            instaLogo1.style.display = "none";
            instaLogo2.style.display = "block";
        }
        else {
            instaLogo1.style.display = "block";
            instaLogo2.style.display = "none";
        }

        tabletWindow.addListener(tablet);
        tablet(tabletWindow);

        navBar.classList.toggle('transition');
        for (const element of navMenu) {
            element.classList.toggle('transition');
        }

        if (notificationIcon.style.display === "block") {
            notificationIcon.style.display = "none";
            notificationIconActive.style.display = "block";
        }
        else {
            notificationIcon.style.display = "block";
            notificationIconActive.style.display = "none";
        }

        const md = new MobileDetect(window.navigator.userAgent);
        if (md.mobile()) {
            window.location.href = "notification.html";
        }
    });

// Modal for Create Post
const createPostModal = document.querySelector('.create-post');
const createPost = document.getElementById('createPostBtn');
const closeBtn = document.querySelector('.closeBtn')
const createIcon = document.querySelector('.create-icon');
const createIconActive = document.querySelector('.create-icon-active');
const createText = document.querySelector('#create-menu');

createPost.addEventListener('click', () => {
        createPostModal.style.display = "flex";
        createIcon.style.display = "none";
        createIconActive.style.display = "block";
        createText.style.fontWeight = "bold";
})

closeBtn.addEventListener('click', () => {
        createPostModal.style.display = "none";
        createIcon.style.display = "block";
        createIconActive.style.display = "none";
        createText.style.fontWeight = "normal";
})

window.onclick = function (event) {
    if (event.target == createPostModal) {
        createPostModal.style.display = "none";
        createIcon.style.display = "block";
        createIconActive.style.display = "none";
        createText.style.fontWeight = "normal";
    }
    // if(event.target == dropUpItems){
    //     dropUpItems.style.display = 'none';
    // }
}


// Profile
const profileButton = document.querySelector('#profile-button');
const profileIcon = document.querySelector('.profileOne');
const profileIconActive = document.querySelector('.profile');
const profileText = document.querySelector('#profile-menu');

profileButton.addEventListener('click', function(){
        profileIcon.style.display = "none";
        profileIconActive.style.display = "block";
        profileText.style.fontWeight = "bold";
})


// More Options
const dropUp = document.getElementById('more-menu');
const dropUpItems = document.getElementById('dropup-items');
const moreMenuIcon = document.querySelector('.more-menu-icon');
const moreIconActive = document.querySelector('.more-icon-active');
const moreText = document.querySelector('#more-menu');

dropUpItems.style.display = 'none';

dropUp.addEventListener('click', () => {
    if (dropUpItems.style.display == 'none') {
        dropUpItems.style.display = 'flex';
        moreMenuIcon.style.display = "none";
        moreIconActive.style.display = "block";
        moreText.style.fontWeight = "bold";
    } else {
        dropUpItems.style.display = 'none';
        moreMenuIcon.style.display = "block";
        moreIconActive.style.display = "none";
        moreText.style.fontWeight = "normal";
    }
});

const toggleButton = document.getElementById("mode-toggle");
const content = document.querySelectorAll(".content");
const selectors = ['.nav-bar', '.dropup', '.stories-container', '.story-content', '.posts-content', '.search', '.notification'];
const svgIcons = document.querySelectorAll('#menu-icon, #more-icon, #moreActive, #insta-icon, #insta-icon-two');
const links = document.querySelectorAll('a');
const elementsHover = document.querySelectorAll('.menu-button, .dropup-hover');

const setElementsColor = (isDark) => {
    content.forEach(c => c.classList.toggle("dark-mode"));
    localStorage.setItem("mode", isDark ? "dark" : "light");
    selectors.forEach(s => {
        document.querySelector(s).style.backgroundColor = isDark ? '#0f0f0f' : '#ffffff';
    });
    svgIcons.forEach(icon => {
        const pathElements = icon.querySelectorAll('path');
        pathElements.forEach(path => path.style.fill = isDark ? '#ffffff' : '#0f0f0f');
    });
    links.forEach(link => link.style.color = isDark ? '#ffffff' : '#0f0f0f');
    elementsHover.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.backgroundColor = isDark ? '#343a40' : '#fafafa';
        });
        element.addEventListener('mouseout', function() {
            this.style.backgroundColor = isDark ? '#0f0f0f' : '#ffffff';
        });
    });
};

toggleButton.addEventListener("click", function() {
    const isDark = content[0].classList.contains("dark-mode");
    setElementsColor(!isDark);
});


// More Icon
var moreIcon = document.getElementById("more-icon");
var moreActive = document.getElementById("moreActive");

// Zoom In
dropUp.onmouseover = function(){
    moreIcon.style.transform = "scale(1.15)";
    moreActive.style.transform = "scale(1.15)";
}

// Zoom Out
dropUp.onmouseleave = function(){
    moreIcon.style.transform = "scale(1)";
    moreActive.style.transform = "scale(1)";
}
