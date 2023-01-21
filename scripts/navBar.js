
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


    // Nav Bar Selection
    const navBar = document.querySelector('.nav-bar');
    const navMenu = document.querySelectorAll('.menu');

    // Menu Buttons
    const menuButtons = document.querySelectorAll('.menu-button');

    // Add an event listener to each button
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // check which button is active
            if(this.classList.contains('active')){
                this.classList.remove('active');

            }else{
            // Remove the active class from all menuButtons
            menuButtons.forEach(b => b.classList.remove('active'));
            searchBar.classList.remove('active');
            notificationBar.classList.remove('active');
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
            console.log('active');
            }
        });
    });

    // Logo Display for Tablet Media Query
    function tablet(media){
        if(media.matches){
            instaLogo1.style.display = "none";
            instaLogo2.style.display = "block";
        }
    }

    // Search
    const searchButton = document.querySelector('#search-button');
    const searchBar = document.querySelector('.search');

    searchButton.addEventListener('click', function(){
        // this.classList.toggle('active');

        if(this.classList.contains('active')){
            searchBar.classList.toggle('active');
        }else{
            searchBar.classList.remove('active');
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

    })

    // Notification
    const notificationButton = document.querySelector('#notification-button');
    const notificationBar = document.querySelector('.notification');

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
