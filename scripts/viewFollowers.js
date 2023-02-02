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



const userFollowers = document.querySelector('.followersModal-container');

const getFollowers = async () => {
    try {
        const followersRes = await fetch("https://api.npoint.io/0374b3176b9d71142be0");
        const followersData = await followersRes.json();

        return followersData;

        } catch(error) {
            console.error(error);
            return {};

}
}

const showFollowers = (data) => {
    const followersData = data.users;
    let followersList = "";

    for (let i = 0; i < followersData.length; i++) {
        let profilePicUrl = followersData[i].profile_pic_url || "";
        let fullName = followersData[i].full_name || "";
        let username = followersData[i].username || "";
    
        followersList +=
            `<div class="followers-content">
                 <img class="followers-user-profile" src="https://source.unsplash.com/random/200x200?sig=${profilePicUrl}" alt="">
                    <div class="followers-username">
                        <p>${fullName}</p>
                        <p>${username}</p>
                     </div>
             </div>`;
    }
    
    userFollowers.innerHTML += followersList;
}

getFollowers().then(res => {
    showFollowers(res);
});

