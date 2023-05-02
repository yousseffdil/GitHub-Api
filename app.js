const form = document.getElementById("github-form");
const resultContainer = document.getElementById("result-container");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username-input").value;

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            resultContainer.style.display = "block";
            const name = data.name;
            const avatarUrl = data.avatar_url;
            const bio = data.bio;
            const numPosts = data.public_repos;
            const numFollowers = data.followers;
            const numFollowing = data.following;
            const login = data.login;
            console.log(data)
            const resultHtml = `
            <h1>${login}</h1>
        <h3>@${name}</h3>
        <img src="${avatarUrl}" alt="${name}'s avatar">
        <p class="Bio">${bio}</p>
        <div class= "repos">
            <p>Number of public repos: ${numPosts}</p>
            <p>Number of followers: ${numFollowers}</p>
            <p>Number of following: ${numFollowing}</p>
        </div>
      `;

            resultContainer.innerHTML = resultHtml;
        })
        .catch(error => {
            console.error(error);
            resultContainer.innerHTML = "<p>Error</p>";
        });
});

