document.addEventListener("DOMContentLoaded", function () {
   const url = "https://api.github.com/users/zeharoldoparente";

   fetch(url)
      .then((response) => {
         if (!response.ok) {
            throw new Error("Não foi possível obter os dados do usuário");
         }
         return response.json();
      })
      .then((data) => {
         const avatar = document.querySelector(".profile-avatar");
         avatar.src = data.avatar_url;

         const name = document.querySelector(".profile-name");
         name.textContent = data.name;

         const username = document.querySelector(".profile-username");
         username.textContent = "@" + data.login;

         const repositories = document.querySelectorAll(".numbers-item")[0];
         repositories.lastElementChild.textContent = data.public_repos;

         const followers = document.querySelectorAll(".numbers-item")[1];
         followers.lastElementChild.textContent = data.followers;

         const following = document.querySelectorAll(".numbers-item")[2];
         following.lastElementChild.textContent = data.following;

         const githubLink = document.querySelector(".profile-link");
         githubLink.href = data.html_url;
      })
      .catch((error) => {
         console.error("Erro:", error);
      });
});
