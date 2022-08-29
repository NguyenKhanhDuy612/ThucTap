let fAPI = "http://localhost:3000/posts";
function start() {
  getPosts(function (posts) {
    renderPost(posts);
  });
  //   getPosts(renderPost);
  // gọi funtion
}
start();
function getPosts(callback) {
  fetch(fAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderPost(posts) {
  let outputPost = document.querySelector("#demo");
  // nhớ id là #, class là .
  //   let html = "";
  var html = posts.map(function (post) {
    return `
        <ul><h2>${post.title}</h2>
        <p>${post.author}</p></ul>
    `;
  });
  //   html += `${p.id}`;
  //   console.log(html.join(""));
  outputPost.innerHTML = html.join("");
}
// getPosts();
