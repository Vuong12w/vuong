// ấn vaò thông tin
document.getElementById('information').addEventListener('click',function(){
  history.pushState({ page: "information" }, "Trang thông tin","website/information.html");
  document.title = "Trang Thông Tin";
    document.getElementById('informative').innerHTML = "<h1>Trang đăng nhập</h1><p>Vui lòng nhập thông tin đăng nhập.</p>";
  })
  // ấn vào trang chủ
  document.getElementById('homePage').addEventListener('click',function(){
    history.pushState({ page: "hompage" }, "Trang đăng nhập", "/website/web.html");
    document.title = "Trang Chủ";
    document.getElementById('informative').innerHTML = `
    <h2 class="informative" id ="informative">Tổng Quan Về Hệ Thống FESTO MPS500
    <p class="informative_content" id="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat odio libero odit ab nam excepturi, velit non repudiandae eum quasi impedit amet voluptatum iusto quidem, vel sint aliquam eaque.</p>
  </h2>`;
  })
  // ấn vào chữ đăng nhập
  document.getElementById('login').addEventListener('click',function(){
    history.pushState({ page: "login" }, "Trang đăng nhập", "/website/web.html/login");
    document.title = "Trang Đăng Nhập";
    document.getElementById('informative').innerHTML = `
        <div class="boxed" >
            <h2 class="boxed_login">ĐĂNG NHẬP</h2>
            <form class="boxed_form" onsubmit ="event">
                <input type="text" id ="inputName"placeholder="Tên đăng nhập" class="boxed_form-name">
                <input type="password" placeholder="Mật khẩu" class="boxed_form-password" id="inputPassword">
                <button id="submit" class="boxed_form-button">Đăng Nhập</button>
            </form>
        </div>
    `;
    })
    const valueUsername = 'admin';
const valuePassword = '12345';

// Lắng nghe sự kiện khi nhấn nút đăng nhập
document.addEventListener('click', function (event) {
  // Kiểm tra nếu nút đăng nhập được nhấn
  if (event.target && event.target.id === 'submit') {
    event.preventDefault(); // Ngăn form tải lại trang

    // Lấy giá trị từ các trường input
    const username = document.getElementById('inputName').value;
    const password = document.getElementById('inputPassword').value;

    // Xác thực thông tin đăng nhập
    if (username === valueUsername && password === valuePassword) {
      // Hiển thị thông báo thành công
      alert("Login successful! Redirecting to the system...");
      // Đảm bảo đường dẫn đúng, ví dụ:
        // Hoặc "/website/information.html" nếu ở thư mục gốc
    } else {
      // Hiển thị thông báo lỗi
      const loginMessage = document.getElementById('loginMessage');
      loginMessage.textContent = 'Sai tên đăng nhập hoặc mật khẩu!';
      loginMessage.style.color = 'red';
    }
  }
});
