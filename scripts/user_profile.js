// https://api.npoint.io/edaa98bc6b3b2a0f645e lifefromgjirafa profile

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02baacfa52msh1b1a709ad3e5678p14cb1djsn0e94e734e12d',
		'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
	}
};



async function getData(){
    try{
        let res = await fetch('https://instagram-scraper-2022.p.rapidapi.com/ig/posts/?id_user=51962853665', options)

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

