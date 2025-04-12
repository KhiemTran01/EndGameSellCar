document
  .getElementById("dangKyLaiThu")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    let name = document.getElementById("name1").value.trim();
    let phoneNumber = document.getElementById("phoneNumber1").value.trim();
    let tinh = document.getElementById("tinh").value;
    let loaiXe = document.getElementById("loaiXe").value;
    let ngayLai = document.getElementById("ngayLai").value;
    let buoiLai = document.getElementById("buoiLai").value;

    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (
      name === "" ||
      phoneNumber === "" ||
      tinh === "" ||
      loaiXe === "" ||
      ngayLai === "" ||
      buoiLai === ""
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      alert("Số điện thoại chưa hợp lệ!");
      return;
    }

    let message = `Chúc mừng ${name} đăng ký thành công!
    Số điện thoại: ${phoneNumber}
    Khu vực: ${tinh}
    Dòng xe quan tâm: ${loaiXe}
    Ngày: ${ngayLai}
    Buổi lái thử: ${buoiLai}`;

    alert(message);
    form.reset();
  });
