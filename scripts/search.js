fetch("https://api.npoint.io/ffc19ce194a7f355decf")
  .then(response => response.json())
  .then(data => {
    const users = data.users;
    let searchTerm = document.querySelector('input[name="search"]').value;
    let output = '';
    users.forEach(user => {
      const { username, full_name, profile_pic_url } = user.user;
      if (full_name.includes(searchTerm)) {
      output += `<div class="search-user-content">
      <img src=https://source.unsplash.com/random/200x200?sig="${profile_pic_url}" alt="Profile Picture">
      <div class="search-user-detail">
        <h3>${username}</h3>
        <p>${full_name}</p>
        </div>
      </div>`;
      }
    });
    document.querySelector('.search-content').innerHTML = output;
  })
  .catch(error => console.error(error));