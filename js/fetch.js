let fAPI = "http://localhost:3000/posts";

fetch(fAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts);
  });
