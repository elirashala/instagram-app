/*** NOTIFICATIONS API URL's notes:

 - Like's url by rapid-api
 - https://instagram-scraper-2022.p.rapidapi.com/ig/likes/?shortcode=CXt13whLoaO
 * Because of reached limit we used n-point site to consume the data. Below is likes api mocked by n-point site
 - N-point likes: https://api.npoint.io/584992ba9231bb13e12c
 - N-point comments: https://api.npoint.io/18f5f11b0b73872e843d

 Options should be passed when using rapid-api, otherwise N-Point has open access.

 const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ffe2bd0197msh20c6c5f61a41434p118831jsn90a56f123202',
        'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
    }
};

 - CORS access error to handle image from the rapid api, so i used random image from unsplash site in link below.
 - https://source.unsplash.com/random/200x200?sig=${key} passed key as random id for image

 */

// const notifBtnEls = Array.from(document.getElementsByClassName("notification-button"));
const notifBtnEls = document.querySelectorAll(".notification-button");
const notifLikes = document.querySelectorAll(".notification-likes-content-wrapper");
const notifComments = document.querySelectorAll(".notification-comments-content-wrapper");

const notificationTemplate = (username, action, imgId) =>
    `<div class="notification-content">
    <img class="notification-users-pic" src="https://source.unsplash.com/random/200x200?sig=${imgId}" alt="user profile pic">
    <div class="user-notifications-details-content">
      <p class="notification-username">${username}</p>
      <p class="notification-action-done">${action}</p>
      <p class="notification-time">1d</p>
    </div>
    <img class="notification-action-pic" src="photos/userProfilePics/profilePic2.png" alt="user liked image">
  </div>`;

 notifBtnEls.forEach(notifBtnEl => {
    notifBtnEl.addEventListener('click', async () => {
        console.log("clicked");
        try {
            const [likesResponse, commentsResponse] = await Promise.all([
                fetch('https://api.npoint.io/584992ba9231bb13e12c'),
                fetch('https://api.npoint.io/18f5f11b0b73872e843d'),
            ]);

            const [likesData, commentsData] = await Promise.all([
                likesResponse.json(),
                commentsResponse.json(),
            ]);

            const likesOutput = likesData.data?.shortcode_media?.edge_liked_by?.edges?.map((edge, key) =>
                notificationTemplate(edge.node.username, "liked your post.", key.toString())
            ).join('');

            notifLikes.forEach(notifLike => {
                notifLike.innerHTML = likesOutput;
            })

            const commentsOutput = commentsData.comments?.map((comment, key) =>
                notificationTemplate(comment.user.username, `commented: ${comment.text}`, key.toString())
            ).join('');

            notifComments.forEach(notifComment => {
                notifComment.innerHTML = commentsOutput;
            })

        } catch (err) {
            console.error(err);
        }
    })
});
