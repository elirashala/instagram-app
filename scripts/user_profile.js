// https://api.npoint.io/edaa98bc6b3b2a0f645e lifefromgjirafa profile



async function getData(){
    try{
        let res = await fetch("https://api.npoint.io/edaa98bc6b3b2a0f645e");
        let data = await res.json();
         return data
    }catch(err){
        console.error(err);
    }
 }
 
 
 
 getData().then(res => {showPosts(res)})
 
 // CORS error --- net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin 200
 const showPosts = (allPosts) => {
     let feeds = document.querySelectorAll(`.feed`);
     for (let i = 0; i < 3; i++) {
         const photo = allPosts.data.user.edge_owner_to_timeline_media.edges[i].node.display_url
         feeds[i].style.backgroundImage = `url("${photo}")`
     }
 
 }
 
 
 const viewFollowersModal = document.querySelector('.followersModal');
 const viewFollowersBtn = document.getElementById('view-followers');
 const followerCloseBtn = document.querySelector('.follower-closeBtn')
 
 
 viewFollowersBtn.addEventListener('click', () => {
     viewFollowersModal.style.display = "flex"; 
 })
 
 followerCloseBtn.addEventListener('click', () => {
     viewFollowersModal.style.display = "none";
 })
 
 window.onclick = function (event) {
     if (event.target == viewFollowersModal) {
         viewFollowersModal.style.display = "none";
     }
 }
 
 
 const viewFollowingsModal = document.querySelector('.followingsModal');
 const viewFollowingsBtn = document.getElementById('view-followings')
 const followingCloseBtn = document.querySelector('.following-closeBtn')
 
 viewFollowingsBtn.addEventListener('click', () => {
     viewFollowingsModal.style.display = "flex"; 
 })
 
 followingCloseBtn.addEventListener('click', () => {
     viewFollowingsModal.style.display = "none";
 })
 
 window.onclick = function (event) {
     if (event.target == viewFollowingsModal) {
         viewFollowingsModal.style.display = "none";
     }
 }