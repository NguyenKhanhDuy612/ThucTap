{
  /* <link rel="stylesheet" href="./style.css" />; */
}
let fAPI = "https://jsonplaceholder.typicode.com/users";

// fetch(fAPI)
//   .then(function (response) {
//     return response.json();
//     // return JSON.parse(response);
//   })
//   .then(function (json) {
//     var htmls = json.map(function (post) {
//       return `
//       <table class='main'>
//       <tr>
//         <td class='username'>
//             ${post.username}
//         </td>

//         <td class='company'>
//             ${post.company.name}
//         </td>
//     </tr>
//     </table>
//         `;
//     });

//     let titleTB = `
//     <div class="tieuDe">

//         <div class="username">Tên đăng nhập</div>

//         <div class="company">Tên công ty</div>
//     </div>`;
//     let html = htmls.join("");
//     document.getElementById("demo").innerHTML = titleTB + html;
//     console.log(html);
//   })
//   .catch(function (err) {
//     alert("Lỗi");
//   });
// .finally(function () {
//   alert("Ket thuc");
// });
// fetch(fAPI)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

function start() {
  getUsers(renderUser);
}

start();

// GET
function getUsers(callback) {
  fetch(fAPI)
    .then(function (response) {
      response.json();
    })
    .then(callback);
  // .catch(function () {
  //   alert("lỗi");
  // });
}

//RENDER

function renderUser(users) {
  let listUser = document.getElementById("user");
  let htmls = users.map(function (user) {
    return `
        <li class='user-item-${user.id}>
          <h4>
            ${user.username}
          </h4>
          <p>
            ${user.company.name}
          </p>
          <button onClick="handleDeletePost(${user.id})">Xóa
          </button>
        </li>
        `;
  });
  listUser.innerHTML = htmls.join("");
}
