// https://api.npoint.io/edaa98bc6b3b2a0f645e lifefromgjirafa profile



// const a = fetch('https://api.npoint.io/edaa98bc6b3b2a0f645e')
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// fetch("https://api.npoint.io/edaa98bc6b3b2a0f645e")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.data.user.edge_owner_to_timeline_media.edges[0].node.display_url);
//     })
//     .catch(error => console.error(error));

// // console.log (a)
// console.log (b)

// async function getData(index){
//     try{
//         let res = await fetch("https://api.npoint.io/edaa98bc6b3b2a0f645e");
//         let data = await res.json();
//         let photo = data.data.user.edge_owner_to_timeline_media.edges[index].node.display_url
//         return photo
//     }catch(err){
//         console.error(err);
//     }
//  }

// const a = getData(0)
// console.log(a)
// let data;
async function getData(){
   try{
       let res = await fetch("https://api.npoint.io/edaa98bc6b3b2a0f645e");
       let data = await res.json();
       const photos = [];
       for (let i = 0; i < 10; i++) {
        photos.push(data.data.user.edge_owner_to_timeline_media.edges[i].node.display_url);
       }
       return photos;
   }catch(err){
       console.error(err);
   }
}

// const a = getData().then(res => console.log(res))
// var results;
// getData().then(res => results = res)

//  console.log(results)

// const feed1 = document.querySelector(".feed1");
// feed1.style.backgroundImage = `url("${results}")`
