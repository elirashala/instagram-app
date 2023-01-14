
    // More Options
    const dropUp = document.getElementById('more-menu');
    const dropUpItems = document.getElementById('dropup-items');

    dropUpItems.style.display = 'none';

    dropUp.addEventListener('click', (event) => {
        if (dropUpItems.style.display == 'none') {
            dropUpItems.style.display = 'flex';
        } else {
            dropUpItems.style.display = 'none';
        }
    })

    // window.onclick = function(event){
    //     if(event.target == dropUpItems){
    //         dropUpItems.style.display = 'none';
    //     }
    // }

    // Modal for Create Post
    const createPostModal = document.querySelector('.create-post');
    const createPost = document.getElementById('createPostBtn');
    const closeBtn = document.querySelector('.closeBtn')

    createPost.addEventListener('click', () => {
            createPostModal.style.display = "flex";
    })
    closeBtn.addEventListener('click', () => {
            createPostModal.style.display = "none";
    })
    window.onclick = function (event) {
        if (event.target == createPostModal) {
            createPostModal.style.display = "none";
        }
    }

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

    // Search
    const searchButton = document.querySelector('#search-button');
    const searchBar = document.querySelector('.search');
    const navBar = document.querySelector('.nav-bar');
    const navMenu = document.querySelectorAll('.menu');

    searchButton.addEventListener('click', () => {
        searchButton.classList.toggle('active');
        searchBar.classList.toggle('active');


        // instaLogo1.style.display = "none";
        // instaLogo2.style.display = "block";

        if (instaLogo1.style.display === "block") {
            instaLogo1.style.display = "none";
            instaLogo2.style.display = "block";
        }
        else {
            instaLogo1.style.display = "block";
            instaLogo2.style.display = "none";
        }

        // navbar.style.cssText = 'width: 95px; transition: 0.7s;';
        navBar.classList.toggle('transition');
        for (const element of navMenu) {
            element.classList.toggle('transition');
        }

    })

    // Clear Input Value
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('#search-input');
    const clearInput = document.querySelector('.clear-input');

    searchInput.addEventListener('click', () => {
        // console.log('input is clicked');
        if (clearInput.style.display === "none"){
            clearInput.style.display = "block";
            searchIcon.style.display = "none";
        }
    })

    clearInput.addEventListener('click', () => {
        // console.log('clear');
        searchInput.value = '';
        clearInput.style.display = "none";
        searchIcon.style.display = "block";
    })


    // Notification
    const notificationButton = document.querySelector('#notification-button');
    const notificationBar = document.querySelector('.notification');

    notificationButton.addEventListener('click', () => {
        notificationButton.classList.toggle('active');
        notificationBar.classList.toggle('active');

        if (instaLogo1.style.display === "block") {
            instaLogo1.style.display = "none";
            instaLogo2.style.display = "block";
        }
        else {
            instaLogo1.style.display = "block";
            instaLogo2.style.display = "none";
        }

        navBar.classList.toggle('transition');
        for (const element of navMenu) {
            element.classList.toggle('transition');
        }

    })

    // Mi rishiku perseri
    // const menuButtons = document.querySelectorAll('.menu-button');

    // menuButtons.forEach(button => {
    //     button.addEventListener('click', function() {
    //     menuButtons.forEach(button => {
    //         button.classList.remove('active');
    //     });
    //     this.classList.add('active');
    //     });
    // });
