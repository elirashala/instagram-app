// const postFeed = document.querySelector('.posts-content');
// const userId = `https://api.npoint.io/ad27d2a267a4669527c8`;

// const getPosts = async () => {
//     try{
//     // const userIdRes = await fetch(userId);
//     // const userIdData = await userIdRes.json();

//     // const userInfo = `https://api.npoint.io/9547d5a7739c9e283f62?pk=${userIdData.id}`;

    

//     // const userInfoRes = await fetch(userInfo);
//     // const userInfoData = await userInfoRes.json();

//     const userPosts = `https://api.npoint.io/b743418638800ff41502`;
//     const postsRes = await fetch(userPosts);
//     const postsData = await postsRes.json();

//     // console.log(userIdData);
//     // console.log(userInfoData);
//     console.log(postsData);

    
//     return postsData;
    
//     }catch(error){
//         console.error(error);
//     }
// }

// const showPosts = (element) => {
//     for(let i = 0; i < 8; i++){     
//             postFeed.innerHTML +=
//             `
//             <div class="post">
//                 <div class="post-user">
//                     <img src="https://source.unsplash.com/random/200x200?sig=imgId" alt="">
//                     <h4></h4>
//                 </div>
//                 <div class="post-image">
//                     <img src="https://source.unsplash.com/random/300x400?sig=imgId" alt="">
//                 </div>
//                 <div class="post-container">
//                     <div class="post-lmsh">
//                         <svg id="" class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 -4.5 32 38">
//                             <path
//                             d="M13.83,18.08l.16.18-.17-.17Z"/><path d="M29,18.39C26.25,21,23.37,23.45,20.54,26c-1.22,1.09-2.45,2.16-3.67,3.23l-.46.39a1.39,1.39,0,0,1-2-.07c-.95-.9-1.88-1.84-2.83-2.76C8.79,24.07,6,21.4,3.27,18.7A10.37,10.37,0,0,1,.21,13.43C-.77,8.82,1.79,4,6.05,2.52A8.47,8.47,0,0,1,15.61,5.1l.29.34a24.65,24.65,0,0,1,2.25-1.92,8.78,8.78,0,0,1,13.35,5A9.19,9.19,0,0,1,29,18.39Z"/>
//                         </svg>
//                     </div>
//                     <div class="post-likes">
//                         <p>${element.data.user.edge_owner_to_timeline_media.edges[i].node.edge_media_preview_like.count} 1 00000 likes</p>
//                     </div>
//                     <div class="post-dc">
//                         <p>USER - description</p>
//                     </div>
//                     <div class="post-comments">
//                         <p>View all 100 comments</p>
//                     </div>
//                 </div>
//             </div>
//         `;
//     };
// }




// getPosts()
// .then(res => {showPosts(res)});


const postFeed = document.querySelector('.posts-content');
let userId;

const getUserId = async () => {
    try {
        const userIdRes = await fetch(`https://api.npoint.io/ad27d2a267a4669527c8`);
        const userIdData = await userIdRes.json();
        userId = userIdData.id;
        console.log(userIdData);
    }catch(error){
        console.error(error);
    }
}

const getPosts = async () => {
    try{
        const userInfoRes = await fetch(`https://api.npoint.io/9547d5a7739c9e283f62?pk=${userId}`);
        const userInfoData = await userInfoRes.json();

        const userPosts = `https://api.npoint.io/b743418638800ff41502?id=${userInfoData.pk}`;
        const postsRes = await fetch(userPosts);
        const postsData = await postsRes.json();

        console.log(userInfoData);
        console.log(postsData);

        return {userInfo: userInfoData, posts: postsData};
    }catch(error){
        console.log(error);
    }
}


const showPosts = (datas) => {
    const {userInfo, posts} = datas;
    
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
                    <p> ${posts.data.user.edge_owner_to_timeline_media.edges[i].node.edge_media_preview_like.count} likes</p>
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
        
        const postCommentElement = document.querySelectorAll('.postComments');

        for (let j = 0; j < postCommentElement.length; j++) {
            if(posts.data.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_comment.count === 0){
                postCommentElement[i].innerHTML = "";
                postCommentElement[i].innerHTML = "The comments have been turned off by the creator";
            }
        }

        const noLike = document.querySelector('.no-like');
        const likeHeart = document.querySelector('.like-heart');

        noLike.addEventListener('click', () => {
            noLike.style.display = "none";
            likeHeart.style.display = "block";
        })

        likeHeart.addEventListener('click', () => {
            noLike.style.display = "block";
            likeHeart.style.display = "none";
        })

    }
}

getUserId().then(() => {getPosts()
    .then(res => {
        showPosts(res);
    });
});

// ${posts[i].images.standard_resolution.url}
// ${posts[i].likes.count}
// ${posts[i].caption.text}
// ${posts[i].comments.count} 