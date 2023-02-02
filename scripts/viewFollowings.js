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

 const userfollowings = document.querySelector('.followingsModal-container');

const getfollowings = async () => {
    try {
        const followingsRes = await fetch("https://api.npoint.io/d215d2f8d900dbb14b3f");
        const followingsData = await followingsRes.json();

        return followingsData;

        } catch(error) {
            console.error(error);
            return {};

}
}

const showfollowings = (data) => {
    const followingsData = data.users;
    let followingsList = "";

    for (let i = 0; i < followingsData.length; i++) {
        let profilePicUrl = followingsData[i].profile_pic_url || "";
        let fullName = followingsData[i].full_name || "";
        let username = followingsData[i].username || "";
    
        followingsList +=
            `<div class="followings-content">
                 <img class="followings-user-profile" src="https://source.unsplash.com/random/200x200?sig=${profilePicUrl}" alt="">
                    <div class="followings-username">
                        <p>${fullName}</p>
                        <p>${username}</p>
                     </div>
             </div>`;
    }
    
    userfollowings.innerHTML += followingsList;
}

getfollowings().then(res => {
    showfollowings(res);
});