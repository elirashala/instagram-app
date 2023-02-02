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