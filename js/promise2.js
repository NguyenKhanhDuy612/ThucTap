// const { SassColor } = require("sass");

let users = [
  { id: 1, name: "duy" },
  { id: 2, name: "khanh" },
];

let comments = [
  { id: 1, user_id: 1, content: "chao buoi sang" },
  { id: 2, user_id: 2, content: "chao buoi chieu" },
];

function getComments() {
  return new Promise(function (reslove) {
    reslove(comments);
  });
}

function getUsers(userID) {
  return new Promise(function (resolve) {
    //trả về tất cả các user
    let resuld = users.filter(function (user) {
      return userID.includes(user.id); // so sánh nếu hai Id giống nhau thì lấy ra user đó
    });
    resolve(resuld);
  });
}

// getUsers([1, 2]).then(function (users) {
//   console.log(users);
// });

getComments()
  .then(function (comments) {
    // console(comments);
    let getId = comments.map(function (comment) {
      return comment.id;
    });
    // return getId;
    return getUsers(getId).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    // console.log(data);
    let comeBlock = document.getElementById("comment-block");
    let html = "";
    data.comments.forEach(function (comment) {
      let user = users.find(function (user) {
        return user.id === comment.user_id;
        //kiểm tra hai id giống nhau
        //tìm tất cả comment có id là...
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    comeBlock.innerHTML = html;
  })
  .catch(function () {
    console.log("loi");
  });

// function getComments(comments) {
//   return new Promise(function (resolve) {
//     // setTimeout(function () {
//     //   resolve(comments);
//     // }, 1000);
//     resolve(comments);
//   });
// }

// function getUser(userID) {
//   return new Promise(function (resolve) {
//     let kq = users.filter(function (user) {
//       return userID.includes(user.id);
//     });
//     resolve(kq);
//   });
// }

// getComments(comments)
//   .then(function (comments) {
//     // console.log(comments);
//     let getID = comments.map(function (comment) {
//       //   console.log(comment.user_id);
//       return comment.user_id;
//     });
//     return getUser(getID).then(function (users) {
//       return {
//         users: users,
//         comments: comments,
//       };
//     });
//   })
//   .then(function (data) {
//     let commetBlock = document.getElementById("comment-block");
//     let html = "";
//     data.comments.forEach(function (comment) {
//       let user = data.users.find(function (user) {
//         return user.id === comment.user_id;
//       });
//       html += `<li>${user.name}: ${comment.comment}</li>`;
//     });
//     commetBlock.innerHTML = html;
//   })
//   .catch(function () {
//     console.log("err");
//   });

// // getUser([1, 2]).then(function (users) {
// //   console.log(users);
// // });
