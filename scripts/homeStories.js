const getStories = async () => {
    try{
        const userStories = await fetch('https://api.npoint.io/f5d2c58f55fdc2550580');
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
            <img src="https://source.unsplash.com/random/200x200?sig=imgId" alt="" />
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
            const videoVersions = story.video_versions ? story.video_versions[1] : undefined;
            const imageVersions = story.image_versions2.candidates[0];
            const videoUrl = videoVersions ? videoVersions.url : undefined;
            const imageUrl = imageVersions.url;
            // console.log(videoUrl);


            let content = ''

            if(videoUrl){
            content +=
                `
                <video class="video"><source src="${videoUrl}" type="video/mp4"></video>
            
                `
            }else{
                content +=
                `
               <img src="${imageUrl}" alt="Cant show photo bc of the net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin 200" />
            
                `
            }

            videoContainer.innerHTML += content;
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

            document.querySelector('.stories-images >*:nth-child(1)').classList.add("active");
            if(videoUrl){
                document.querySelector('.stories-images >*:nth-child(1)').setAttribute("autoplay", "");
            }

            function next(direction){   
                const currentActive = document.querySelector('.stories-images >.active');                  

                currentActive.classList.add("active");
                

                function enableAutoplay() { 
                    if(index !== totalSlides){
                        currentActive.autoplay = true;
                    }

                    if(currentActive instanceof HTMLMediaElement){
                        currentActive.load();    
                    }
                }                

                if(direction == "next"){
                    index++;
                    
                    if(index==totalSlides){
                        index = 0;
                        //     videoContainer.innerHTML = '';
                        //     fullStory.style.display = "none";
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
                    if(slides instanceof HTMLMediaElement){
                        slides[i].pause();
                    }
                }

                const nextActive = slides[index];
                if(index !== totalSlides){
                    nextActive.classList.add("active");
                }
                enableAutoplay();
                // setTimeout(() => {
                    
                // }, 10000);
            }
            // setTimeout(() => {
            //     next("next");
            // }, 10000);
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