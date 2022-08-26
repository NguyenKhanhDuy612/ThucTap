{
  /* <link rel="stylesheet" href="./style.css" />; */
}
let fAPI = "https://jsonplaceholder.typicode.com/users";

fetch(fAPI)
  .then(function (response) {
    return response.json();
    // return JSON.parse(response);
  })
  .then(function (json) {
    var htmls = json.map(function (post) {
      return `
      <table class='main'>
      <tr>
      <td class='id'>
            ${post.id}
        </td>
        <td class='username'>
            ${post.username}
        </td>
        <td class='name'>
            ${post.name}
        </td>

        <td class='email'>
            ${post.email}
        </td>

        <td class='address'>
            ${post.address.city}
        </td>
        <td class='phone'>
        ${post.phone}
        </td>
        <td class='website'>
            ${post.website}
        </td>
        <td class='company'>
            ${post.company.name}
        </td>
    </tr>
    </table>
        `;
    });

    let titleTB = `
    <div class="tieuDe">
        <div class="id">ID</div>
        <div class="username">Tên đăng nhập</div>
        <div class="name">Tên khách hàng</div>
        <div class="email">Địa chỉ email</div>
        <div class="address">Quê quán</div>
        <div class="phone">Số điện thoại</div>
        <div class="website">Website</div>
        <div class="company">Tên công ty</div>
    </div>`;
    let html = htmls.join("");
    document.getElementById("demo").innerHTML = titleTB + html;
    console.log(html);
  })
  .catch(function (err) {
    alert("Lỗi");
  })
  .finally(function () {
    alert("Ket thuc");
  });
// fetch(fAPI)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
