const postFeed = document.querySelector('.posts-content');
let userId;

const getUserId = async () => {
    try {
        const userIdRes = await fetch(`https://api.npoint.io/eb60f75762f2c5389545`);
        const userIdData = await userIdRes.json();
        userId = userIdData.id;
        console.log(userIdData);
    }catch(error){
        console.error(error);
    }
}

const getPosts = async () => {
    try{
        const userInfoRes = await fetch(`https://api.npoint.io/4a66cee8042b74b50f21?pk=${userId}`);
        const userInfoData = await userInfoRes.json();

        const userPosts = `https://api.npoint.io/f95b9648808eedd37ac1?id=${userInfoData.pk}`;
        const postsRes = await fetch(userPosts);
        const postsData = await postsRes.json();

        console.log(userInfoData);
        console.log(postsData);

        return {userInfo: userInfoData, posts: postsData};
    }catch(error){
        console.log(error);
    }
}

const commentsContent = document.querySelector('.comments-content');
        
const showPosts = (datas) => {
    const {userInfo, posts} = datas;
    
    const profilePic = document.querySelector('.profile-pic');
    const profileUsername = document.querySelector('.username-switchacc > p');
    
    const profileImg = document.createElement("img");
    profileImg.id = "profile-image";
    profilePic.appendChild(profileImg);

    const profilePicSel = document.getElementById("profile-image");


    profilePicSel.src = `${'https://source.unsplash.com/random/200x200?sig=imgId'}`
    profileUsername.textContent = `${userInfo.user.username}`;


    for(let i = 0; i <userInfo.user.media_count; i++){
        postFeed.innerHTML +=
        `
        <div class="post">
            <div class="post-user">
                <img src="https://source.unsplash.com/random/200x200?sig=imgId" alt="">
                <h4>${userInfo.user.username}</h4>
            </div>
            <div class="post-image">
                <img src="https://source.unsplash.com/random/300x400?sig=imgId" alt="">
            </div>
            <div class="post-container">
                <div class="post-lmsh">
                <svg xmlns="http://www.w3.org/2000/svg" class="no-like" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                    <path 
                    d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="like-heart" style="display:none; fill: rgba(255, 67, 67, 1)" width="36" height="36" viewBox="0 0 24 24">
                    <path 
                    d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="see-comments" width="36" height="36" viewBox="0 -1.3 25 25" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                    <path 
                    d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z">
                    </path>
                </svg>
                </div>
                <div class="post-likes">
                    <p class="postLikes">${posts.data.user.edge_owner_to_timeline_media.edges[i].node.edge_media_preview_like.count} likes</p>
                </div>
                <div class="post-dc">
                    <p>${userInfo.user.username} - ${posts.data.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text}</p>
                </div>
                <div class="post-comments">
                    <p class="postComments">View all ${posts.data.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_comment.count} comments</p>
                </div>
            </div>
        </div>
        `; 

        // Like and Unlike a post
        const noLike = document.querySelectorAll('.no-like');
        const likeHeart = document.querySelectorAll('.like-heart');

        for (let j = 0; j < noLike.length; j++) {
            noLike[j].addEventListener('click', () => {
                noLike[j].style.display = "none";
                likeHeart[j].style.display = "block";
            });
        }

        for (let k = 0; k < likeHeart.length; k++) {
            likeHeart[k].addEventListener('click', () => {
                noLike[k].style.display = "block";
                likeHeart[k].style.display = "none";
            });
        }

        //  Show Comments 
        const comments = document.querySelectorAll('.postComments');
        const allComments = document.querySelector('.all-comments');
        
        const getComments = async () => {
            try {
                const commentsResponse = await fetch('https://api.npoint.io/18f5f11b0b73872e843d');
                const commentsData = await commentsResponse.json();
                
                console.log(commentsData);
                return commentsData;
            } catch (err) {
                console.error(err);
            }
        }

        const showComments = (datas) => {
            const commentss = datas.comments;

            commentss.forEach(comm => {
                commentsContent.innerHTML += 
                `
                <div class="notification-content">
                    <img class="notification-users-pic" src="https://source.unsplash.com/random/200x200?sig="${comm.user.profile_pic_url}"" alt="user profile pic">
                    <div class="user-notifications-details-content">
                    <p class="notification-username">${comm.user.username}</p>
                    <p class="notification-action-done">${comm.text}</p>
                    <p class="notification-time">1d</p>
                    </div>
                </div>
                `;
            })
        }

        for (let m = 0; m < comments.length; m++){
            comments[m].addEventListener('click', () => {
                allComments.style.display = "flex";
                getComments()
                    .then(res => {
                        showComments(res);
                    })
            })
        }

        const commL = document.querySelectorAll('.see-comments');
        for (let u = 0; u < commL.length; u++){
            commL[u].addEventListener('click', () => {
                console.log(commL);
                allComments.style.display = "flex";
                getComments()
                    .then(res => {
                        showComments(res);
                    })
            })
        }

        // Show Likes
        const likes = document.querySelectorAll('.postLikes');
        const likesContent = document.querySelector('.likes-content');
        const allLikes = document.querySelector('.all-likes');
        
        const getLikes = async () => {
            try {
                const likesResponse = await fetch('https://api.npoint.io/584992ba9231bb13e12c');
                const likesData = await likesResponse.json();
                
                console.log(likesData);
                return likesData;
            } catch (err) {
                console.error(err);
            }
        }

        const showLikes = (datas) => {
            const likess = datas.data.shortcode_media.edge_liked_by.edges;

            likess.forEach(like => {
                likesContent.innerHTML += 
                `
                <div class="notification-content">
                    <img class="notification-users-pic" src="https://source.unsplash.com/random/200x200?sig" alt="user profile pic">
                    <div class="user-notifications-details-content">
                    <p class="notification-username">${like.node.username}</p>
                    </div>
                </div>
                `;
            })
        }

        for (let m = 0; m < likes.length; m++){
            likes[m].addEventListener('click', () => {
                allLikes.style.display = "flex";
                getLikes()
                    .then(res => {
                        showLikes(res);
                    })
            })
        }


        // Close Likes and Comments modal
        const closeComments = document.querySelector('.all-comments-close');   
        const closeLikes = document.querySelector('.all-likes-close');
        
        closeComments.addEventListener('click', () => {
            allComments.style.display = "none";
            commentsContent.innerHTML = '';
        })

        closeLikes.addEventListener('click', () => {
            allLikes.style.display = "none";
            likesContent.innerHTML = '';
        })

        window.onclick = (e) => {
            if(e.target == allLikes ){
                allLikes.style.display = "none";
                likesContent.innerHTML = '';
            }
            if(e.target == allComments){
                allComments.style.display = "none";
                commentsContent.innerHTML = '';
            }
        }
    }
}

getUserId().then(() => {getPosts()
    .then(res => {
        showPosts(res);
    });
});

// Post a comment
const commentInput = document.querySelector("input[name='comment']"); 
const commentPost = document.querySelector("input[name='submit-comment']");
const commentForm = document.querySelector(".comment-form");

commentPost.addEventListener('click', (event) =>{
    event.preventDefault();
    const commentValue = commentInput.value;
    commentsContent.innerHTML += 
        `
        <div class="notification-content">
            <img class="notification-users-pic" src="https://source.unsplash.com/random/200x200" alt="user profile pic">
            <div class="user-notifications-details-content">
            <p class="notification-username">Real Madrid</p>
            <p class="notification-action-done">${commentValue}</p>
            <p class="notification-time">1d</p>
            </div>
        </div>
        `; 
    commentForm.reset();
})


//  ===========================
// const postFeed = document.querySelector('.posts-content');
// let userId;

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '56691ba022msh25a6f904d5ae5a9p174941jsna95afa4cf55c',
// 		'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
// 	}
// };

// const getUserId = async () => {
//     try {
//         const userIdRes = await fetch('https://instagram-scraper-2022.p.rapidapi.com/ig/user_id/?user=realmadrid', options);
//         const userIdData = await userIdRes.json();
//         userId = userIdData.id;
//         console.log(userIdData);
//         return userIdData;
//     }catch(error){
//         console.error(error);
//     }
// }

// async function getUserData(userId) {
//     // Get a list of user IDs that the user follows
//     const followingResponse = await fetch(`https://instagram-scraper-2022.p.rapidapi.com/ig/following/?id_user=${userId}`, options);
//     const following = await followingResponse.json();

//     console.log(following);
//     const userFollowing = following.users;
//     console.log(userFollowing);

//     const data = [];

//     const promises = userFollowing.map(async () => {
//         // for(let i = 0; i < userFollowing.length; i++){
//             var userIdFollowing = userFollowing[0].pk_id;
//             console.log(userIdFollowing);

//             // Get the user's information
//             const infoResponse = await fetch(`https://instagram-scraper-2022.p.rapidapi.com/ig/info/?id_user=${userIdFollowing}`, options);
//             const info = await infoResponse.json();

//             // Get the user's posts
//             const postsResponse = await fetch(`https://instagram-scraper-2022.p.rapidapi.com/ig/posts/?id_user=${userIdFollowing}`, options);
//             const posts = await postsResponse.json();

//             console.log(info);
//             console.log(posts);

//             data.push({
//                 userId: userIdFollowing,
//                 info,
//                 posts
//             });
//         // }
//     });
  
//     await Promise.all(promises);
//     console.log(data);
//     return data;
// }

// getUserId()
//     .then(() => {getUserData(userId)});
