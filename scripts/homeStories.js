const getStories = async () => {
    try{
        const userStories = await fetch('https://api.npoint.io/5a5075a664b54ae81c25');
        const userStoriesData = await userStories.json();

        return userStoriesData;
    }catch(error){
        console.log(error);
    }
}

const storyContent = document.querySelector('.story-content');
const fullStory = document.querySelector('.view-story');

const showStories = (datas) => {
    storyContent.innerHTML += 
    `
    <div class="story">
        <div class="story-img">
            <img src="${datas.reel.user.profile_pic_url}" alt="" />
        </div>
        <p>${datas.reel.user.username}</p>
    </div>
    `

    const story = document.querySelector('.story');
    // const storyViewFull = document.querySelector('.view-story');
    const storyImg = document.querySelector('#story-img');
    const storyUserName = document.querySelector('#story-username');
    

    story.addEventListener('click', () => {
        fullStory.style.display = "flex";
        storyImg.src = `${datas.reel.user.profile_pic_url}`;
        storyUserName.innerHTML = `${datas.reel.user.username}`;
        let stories = datas.reel.items;

        console.log(stories);

        stories.forEach(story => {
            const videoContainer = document.querySelector('.stories-images'); 
            const videoVersions = story.video_versions[1];
            const videoUrl = videoVersions.url;
            // console.log(videoUrl);

            videoContainer.innerHTML += `
                <video class="video"><source src="${videoUrl}" type="video/mp4"></video>
            `
            ;        
           
            var slides = document.querySelector('#stories-images').children;
            var slideLeft = document.querySelector('#left-slide-story');
            var slideRight = document.querySelector('#right-slide-story');
            var totalSlides = stories.length;
            var index = 0;

            // const videoElements = document.querySelectorAll('.stories-images');
            
            // videoElements.forEach(video => {
            //     video.onended = function() {
            //         next("next");
            //     }
            // });

            slideRight.addEventListener('click', () =>{
                next("next");
            })

            slideLeft.addEventListener('click', () =>{
                next("prev");
            })
 

            const closeStoriesBtn = document.querySelector('.view-story-close');

            closeStoriesBtn.addEventListener('click', () => {
                videoContainer.innerHTML = '';
                fullStory.style.display = "none";
            })

            document.querySelector('.stories-images video:nth-child(1)').classList.add("active");
            document.querySelector('.stories-images video:nth-child(1)').setAttribute("autoplay", "");

            function next(direction){    
                const currentActive = document.querySelector('.stories-images video.active');                  

                function enableAutoplay() { 
                    currentActive.autoplay = true;
                    currentActive.load();
                }                

                if(direction == "next"){
                    index++;
                    
                    if(index==totalSlides){
                        videoContainer.innerHTML = '';
                        fullStory.style.display = "none";
                    }
                }else{
                    if(index==0){
                        index=totalSlides - 1;
                    }else{
                        index--;
                    }
                }

                for(let i = 0; i < slides.length; i++){
                    slides[i].classList.remove("active");
                    slides[i].autoplay = false;
                    slides[i].pause();
                }

                const nextActive = slides[index];
                nextActive.classList.add("active");
                enableAutoplay();
            }
            
        });         
    })
}

getStories()
    .then(res => {showStories(res)});

// Move Right with the right arrow button
const rightArrowButton = document.querySelector('.move-right .arrow-button');
rightArrowButton.addEventListener('click', scrollRight);

function scrollRight() {
    storyContent.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
}


// Move Left with the left arrow button
const leftArrowButton = document.querySelector('.move-left .arrow-button');
leftArrowButton.addEventListener('click', scrollLeft);

function scrollLeft() {
    storyContent.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
}