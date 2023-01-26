// Move Right with the right arrow button
const rightArrowButton = document.querySelector('.move-right .arrow-button');
rightArrowButton.addEventListener('click', scrollRight);

function scrollRight() {
    const storyContent = document.querySelector('.story-content');
    storyContent.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
}


// Move Left with the left arrow button
const leftArrowButton = document.querySelector('.move-left .arrow-button');
leftArrowButton.addEventListener('click', scrollLeft);

function scrollLeft() {
    const storyContent = document.querySelector('.story-content');
    storyContent.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
}