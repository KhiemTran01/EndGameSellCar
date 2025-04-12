document
  .getElementById("dangKyNhanThongTin")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    let nameField = document.getElementById("name");
    let phoneNumberField = document.getElementById("phoneNumber");

    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (name.trim() == "" && phoneNumber.trim() == "") {
      alert("Vui lòng nhập thông tin");
    } else {
      if (phoneRegex.test(phoneNumber)) {
        alert(
          `Chúc mừng ${name} đã đăng ký nhận thông tin thành công.\nThông tin sẽ được gửi đến số điện thoại ${phoneNumber} trong thời gian sớm nhất!`
        );
        form.reset();
      } else {
        alert("Số điện thoại chưa hợp lệ!");
      }
    }
  });

document
  .getElementById("nhanKhuyenMai")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    let name = document.getElementById("name2").value.trim();
    let phoneNumber = document.getElementById("phoneNumber2").value.trim();
    let tinh = document.getElementById("tinh").value;
    let loaiXe = document.getElementById("loaiXe").value;

    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (name === "" || phoneNumber === "" || tinh === "" || loaiXe === "") {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      alert("Số điện thoại chưa hợp lệ!");
      return;
    }

    let selectedOffers = [];
    for (let i = 1; i <= 4; i++) {
      let checkbox = document.getElementById(`check${i}`);
      let label = document.querySelector(`label[for='validationFormCheck1']`);
      if (checkbox && checkbox.checked) {
        let labelText =
          checkbox.nextElementSibling?.innerText ||
          "Thông tin chọn không xác định";
        selectedOffers.push(`- ${labelText}`);
      }
    }

    let message = `Thông tin khuyến mãi sẽ được gửi đến ${name} thông qua số điện thoại!
    Số điện thoại: ${phoneNumber}
    Khu vực: ${tinh}
    Dòng xe quan tâm: ${loaiXe}`;

    if (selectedOffers.length > 0) {
      message += `\nThông tin đã chọn:\n${selectedOffers.join("\n")}`;
    }

    alert(message);
    form.reset();
  });

document
  .getElementById("bangGiaLanBanh")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    let name = document.getElementById("name1").value.trim();
    let phoneNumber = document.getElementById("phoneNumber1").value.trim();
    let tinh = document.getElementById("tinh").value;
    let loaiXe = document.getElementById("loaiXe").value;
    let thoiDiemMua = document.getElementById("thoiDiemMua").value;
    let traGop = document.getElementById("traGop").value;

    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (
      name === "" ||
      phoneNumber === "" ||
      tinh === "" ||
      loaiXe === "" ||
      thoiDiemMua === "" ||
      traGop === ""
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      alert("Số điện thoại chưa hợp lệ!");
      return;
    }

    let selectedOffers = [];
    for (let i = 1; i <= 4; i++) {
      let checkbox = document.getElementById(`check${i}`);
      let label = document.querySelector(`label[for='validationFormCheck1']`);
      if (checkbox && checkbox.checked) {
        let labelText =
          checkbox.nextElementSibling?.innerText ||
          "Thông tin chọn không xác định";
        selectedOffers.push(`- ${labelText}`);
      }
    }

    let message = `Bảng giá sẽ được gửi đến ${name} thông qua số điện thoại!
    Số điện thoại: ${phoneNumber}
    Khu vực: ${tinh}
    Dòng xe quan tâm: ${loaiXe}
    Dự kiến mua xe: ${thoiDiemMua}
    Hình thức thanh toán: ${traGop}`;

    if (selectedOffers.length > 0) {
      message += `\Thông tin đã chọn:\n${selectedOffers.join("\n")}`;
    }

    alert(message);
    form.reset();
  });

document
  .getElementById("hoTroTraGop")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    let name = document.getElementById("name3").value.trim();
    let phoneNumber = document.getElementById("phoneNumber3").value.trim();
    let tinh = document.getElementById("tinh").value;
    let loaiXe = document.getElementById("loaiXe").value;
    let thoiDiemMua = document.getElementById("thoiDiemMua").value;
    let traGop = document.getElementById("traGop").value;

    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (
      name === "" ||
      phoneNumber === "" ||
      tinh === "" ||
      loaiXe === "" ||
      thoiDiemMua === "" ||
      traGop === ""
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      alert("Số điện thoại chưa hợp lệ!");
      return;
    }

    let selectedOffers = [];
    for (let i = 1; i <= 2; i++) {
      let checkbox = document.getElementById(`check${i}`);
      let label = document.querySelector(`label[for='validationFormCheck1']`);
      if (checkbox && checkbox.checked) {
        let labelText =
          checkbox.nextElementSibling?.innerText ||
          "Thông tin chọn không xác định";
        selectedOffers.push(`- ${labelText}`);
      }
    }

    let message = `Thông tin tư vấn sẽ được gửi đến ${name} thông qua số điện thoại!
    Số điện thoại: ${phoneNumber}
    Khu vực: ${tinh}
    Dòng xe quan tâm: ${loaiXe}
    Dự kiến mua xe: ${thoiDiemMua}
    Hình thức thanh toán: ${traGop}`;

    if (selectedOffers.length > 0) {
      message += `\Thông tin đã chọn:\n${selectedOffers.join("\n")}`;
    }

    alert(message);
    form.reset();
  });
