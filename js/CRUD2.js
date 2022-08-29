let postsAPI = "http://localhost:3000/posts";

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
  let options = {
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
  let options = {
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
      // let dele = document.querySelecttor(".post-item-" + id);
      // if (dele) {
      //   dele.remove();
      // }
      getPosts(renderPosts);
    });
}

//RENDER
function renderPosts(posts) {
  let listPost = document.querySelector("#list-posts");
  let htmls = posts.map(function (post) {
    return `
    <table class="table">
      <tr>
            <th scope="row">${post.id}</th>
            <td>${post.title}</td>
            <td> ${post.author}</td>
            <td>
              <button type="button" class="btn btn-primary " onClick="handleDeletePost(${post.id})">Xóa</button>
              <button type="button" class="btn btn-secondary" onClick="handleFixPost(${post.id})">Sửa</button>
            </td>
      </tr>
    </table>
    `;
  });
  let titleTB = `
  <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Chức năng</th>
        </tr>
      </thead>
    </table>`;
  let html = htmls.join("");
  // document.getElementById("demo").innerHTML = titleTB + html;
  // listPost.innerHTML = titleTB + html;
  listPost.innerHTML = html;
}

// SỬ LÝ CREATE
function handleCreateForm() {
  let createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    // TẠO GIÁ TRỊ TRONG INPUT
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    // TẠO ĐỐI TƯỢNG
    let formData = {
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

// function handleFixPost(data, callback) {
//   const formData = new FormData();
//   const fileField = document.querySelector('input[name="title"]');

//   formData.append("123", "abc123");
//   formData.append("avatar", fileField.files[0]);
//   let options1 = {
//     method: "PUT",
//     body: formData,
//   };
//   fetch(postsAPI, options1)
//     .then(function (response) {
//       response.json();
//     })
//     // .then(callback)
//     .then(function (result) {
//       console.log("Success:", result);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

function handleFixPost(id) {
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
      "Content-Type": "application/json;  charset=UTF-8",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // body: JSON.stringify(data),
  };
  fetch(postsAPI + "/" + id, options1)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      getPosts(renderPosts);
    });
  // .then(function (data) {
  //   console.log(data);
  // })
  // .catch(function () {
  //   console.log("lỗi");
  // });
  // .then(callback);
}

function inputFix(id) {
  let iFix = document.querySelector("#save");
  iFix.onclick = function () {
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    let dataForm1 = {
      title: title,
      author: author,
    };
    handleFixPost(dataForm1, function () {
      getPosts(renderPosts);
    });
  };
}
