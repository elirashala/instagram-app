const searchTermInput = document.querySelector('input[name="search"]');
const searchContent = document.querySelector('.search-content');

const createUserOutput = (username, full_name, profile_pic_url) =>
    `<div class="search-user-content">
    <img src=https://source.unsplash.com/random/200x200?sig="${profile_pic_url}" alt="Profile Picture">
    <div class="search-user-detail">
      <h3>${username}</h3>
      <p>${full_name}</p>
    </div>
  </div>`;

const updateSearchResults = (searchTerm) => {
    fetch("https://api.npoint.io/afd12250dad8960ae051")
        .then((response) => response.json())
        .then((data) => {
            let output = '';
            data.users.forEach((user) => {
                const { username, full_name, profile_pic_url } = user.user;
                if (username.toLowerCase().includes(searchTerm.toLowerCase())) {
                    output += createUserOutput(username, full_name, profile_pic_url);
                }
            });
            searchContent.innerHTML = output;
        })
        .catch((error) => console.error(error));
};

// searchTermInput.addEventListener('keyup', (event) => {
searchTermInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    updateSearchResults(searchTerm);
});

