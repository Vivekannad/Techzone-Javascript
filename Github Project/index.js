const form = document.getElementById("form");
const render = document.getElementById('render')
console.log(render)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.finder.value;
  if(!input){
    alert('fill the name');
    return
  };
  console.log(input);
  fun(input);
  form.reset()
});

const renderDetails = (user) => {
    render.innerHTML = `
    <div class="render">
    <div class="image-center">
        <img src='${user.avatar_url}' alt="A picture whom you searched" id="image">
    </div>
    <div class="details">
        <div class="name flex">
            <h3>Name:</h3>
            <p id="username">${user.name}</p>
        </div>
        <div class="bio flex">
            <h3>Bio:</h3>
            <p>${user.bio}</p>
        </div>
        <div class="followers flex">
            <h3>Followers:</h3>
            <p>${user.followers}</p>
        </div>
        <div class="following flex">
            <h3>following:</h3>
            <p>${user.following}</p>
        </div>
        <div class="public-repos flex">
            <h3>Public repos:</h3>
            <p>${user.public_repos}</p>
        </div>
    </div>
</div>

    `
}

async function fun(user){
   const response = await fetch(`https://api.github.com/users/${user}`)
   console.log(response);
   if(response.status !== 200){
    alert('fill the right username');
    return;
   }
   const detailsObj = await response.json()
   console.log(detailsObj);
   renderDetails(detailsObj);
}

document.addEventListener('DOMContentLoaded',() => {
    fun('vivekannad');
})