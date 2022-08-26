// var promise = new Promise(function (resolve, reject) {
//   resolve([
//     {
//       id: 1,
//       name: "duy",
//     },
//     {
//       id: 1,
//       name: "duy",
//     },
//     {
//       id: 1,
//       name: "duy",
//     },
//   ]);
//   reject("that bai");
// });

// promise
//   .then(function (courses) {
//     console.log(courses);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("ket thuc");
//   });

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return sleep(1000);
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .then(function () {
    console.log(4);
    return sleep(1000);
  });
