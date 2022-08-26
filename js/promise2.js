var users = [
  { id: 1, name: "duy" },
  { id: 2, name: "khanh" },
];

var comments = [
  { id: 1, user_id: 1, comment: "chao buoi sang" },
  { id: 2, user_id: 2, comment: "chao buoi chieu" },
];

function getComments(comments) {
  return new Promise(function (resolve) {
    // setTimeout(function () {
    //   resolve(comments);
    // }, 1000);
    resolve(comments);
  });
}

function getUser(userID) {
  return new Promise(function (resolve) {
    var kq = users.filter(function (user) {
      return userID.includes(user.id);
    });
    resolve(kq);
  });
}

getComments(comments)
  .then(function (comments) {
    // console.log(comments);
    var getID = comments.map(function (comment) {
      //   console.log(comment.user_id);
      return comment.user_id;
    });
    return getUser(getID).then(function (users) {
      console.log(users);
    });
  })
  //   .then(function (users) {
  //     console.log(users);
  //   })
  .catch(function () {
    console.log("err");
  });

// getUser([1, 2]).then(function (users) {
//   console.log(users);
// });
