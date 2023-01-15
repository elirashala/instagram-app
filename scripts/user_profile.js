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
