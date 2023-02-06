const viewHighlightModal = document.querySelector(".viewHighlight")
const viewHighlightBtn = document.getElementById("view-highlightBtn")
const highlightCloseBtn = document.querySelector(".viewHighlight-closeBtn")

viewHighlightBtn.addEventListener('click', () => {
    viewHighlightModal.style.display = "flex";
})

highlightCloseBtn.addEventListener('click', () => {
    viewHighlightModal.style.display = "none";
})


const userHighlights = document.querySelector('.viewHighlight-container');

const getHighlights = async () => {
    try{
        const highlightsRes = await fetch("https://api.npoint.io/53f7483bcbe14dd0f222");
        const highlightsData = await highlightsRes.json();
        return highlightsData.reels;
    }catch(error){
        console.error(error);
    }
}

const showHighlights = (highlightsData) => {
    let result = "";
    for (const item of highlightsData) {
        result += `<img class="highlight-photo" src="https://source.unsplash.com/random/200x200?sig=${item.cover_media.cropped_image_version.url}">`;
    }
    userHighlights.innerHTML = result;
}

getHighlights()
    .then(data => showHighlights(Object.values(data)))
    .catch(error => console.error(error));





