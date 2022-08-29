var postsAPI = "http://localhost:3000/posts";

// START
function start() {
  getPosts(renderPosts);
  handleCreateForm();
}

start();

function getPosts(callback) {
  fetch(postsAPI)
    .then(function (reponse) {
      return reponse.json();
    })
    .then(callback);
}
// CREATE
function createPost(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  fetch(postsAPI, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}
// DELETE
function handleDeletePost(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetch(postsAPI + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      // var dele = document.querySelecttor(".post-item-" + id);
      // if (dele) {
      //   dele.remove();
      // }
      getPosts(renderPosts);
    });
}

//RENDER
function renderPosts(posts) {
  var listPost = document.querySelector("#list-posts");
  var htmls = posts.map(function (post) {
    return `
    <table class='container-fluid text-center'>
        <tr class='row post-item-${post.id}'>
          <th class='col-4'>
            ${post.title}
          </th>
          <th class='col-4'>
            ${post.author}
          </th>

          <th class='col-4'>
          <button  onClick="handleDeletePost(${post.id})">Xóa
          <button onClick="handleFixPost(${post.id})">Sửa
          </button>
          </button>
          </th>
          <th class='col-2' >
           
          </th>
        </tr>
        </table >
        `;
  });
  let titleTB = `
    <div class="tieuDe container-fluid text-center">
      <div class="row ">
            <div class="username col-4">Title </div>
            <div class="company col-4">Author </div>
            <div class="company col-4">Chức năng</div>
      </div>
        
    </div>`;
  let html = htmls.join("");
  // document.getElementById("demo").innerHTML = titleTB + html;
  listPost.innerHTML = titleTB + html;
}

// SỬ LÝ CREATE
function handleCreateForm() {
  let createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    // TẠO GIÁ TRỊ TRONG INPUT
    var title = document.querySelector('input[name="title"]').value;
    var author = document.querySelector('input[name="author"]').value;
    // TẠO ĐỐI TƯỢNG
    var formData = {
      title: title,
      author: author,
    };
    // GỌI HÀM TẠO
    createPost(formData, function () {
      getPosts(renderPosts);
    });
    // alert(title);
  };
}

// SỬA

function handleFixPost(data, callback) {
  let options1 = {
    method: "PATCH",
    // method: "POST",
    // crossDomain: true,
    // xhrFields: {
    //   withCredentials: true,
    // },
    headers: {
      // Accept: "application/json",
      // "Content-Type": "application/json",
      // _method: "PATCH",
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  fetch(postsAPI + "/" + id, options1)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function inputFix(id) {
  var iFix = document.querySelector("#list-posts");
  iFix.onclick = function () {
    var title = document.querySelector('input[name="title"]').innerHTML;
    var author = document.querySelector('input[name="author"]').innerHTML;
    var dataForm1 = {
      title: title,
      author: author,
    };
    handleFixPost(dataForm1, function () {
      getPosts(renderPosts);
    });
  };
}
