document
  .getElementById("dangKyNhanThongTin")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    let name = document.getElementById("name").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    let modalContent = document.getElementById("noiDungModal");
    let modal = new bootstrap.Modal(document.getElementById("thongBaoModal"));

    if (name === "" && phoneNumber === "") {
      modalContent.innerHTML = `<div class="alert alert-warning mb-0">Vui lòng nhập thông tin.</div>`;
      modal.show();
    } else {
      if (phoneRegex.test(phoneNumber)) {
        modalContent.innerHTML = `
        <div class="alert alert-success mb-0">
          Chúc mừng <strong>${name}</strong> đã đăng ký nhận thông tin thành công.<br>
          Thông tin sẽ được gửi đến số <strong>${phoneNumber}</strong> trong thời gian sớm nhất!
        </div>`;
        modal.show();
        form.reset();
      } else {
        modalContent.innerHTML = `<div class="alert alert-danger mb-0">Số điện thoại chưa hợp lệ!</div>`;
        modal.show();
      }
    }
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

    let modal = new bootstrap.Modal(document.getElementById("thongBaoModal"));
    let modalContent = document.getElementById("noiDungModal");

    if (
      name === "" ||
      phoneNumber === "" ||
      tinh === "" ||
      loaiXe === "" ||
      thoiDiemMua === "" ||
      traGop === ""
    ) {
      modalContent.innerHTML = `<div class="alert alert-warning">Vui lòng nhập đầy đủ thông tin.</div>`;
      modal.show();
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      modalContent.innerHTML = `<div class="alert alert-danger">Số điện thoại chưa hợp lệ!</div>`;
      modal.show();
      return;
    }

    let selectedOffers = [];
    for (let i = 1; i <= 4; i++) {
      let checkbox = document.getElementById(`check${i}`);
      if (checkbox && checkbox.checked) {
        let labelText =
          checkbox.nextElementSibling?.innerText ||
          "Thông tin chọn không xác định";
        selectedOffers.push(`- ${labelText}`);
      }
    }

    let message = `
      <div class="alert alert-success">
        <p>Bảng giá sẽ được gửi đến <strong>${name}</strong> thông qua số điện thoại!</p>
        <ul class="list-unstyled mb-2">
          <li><strong>SĐT:</strong> ${phoneNumber}</li>
          <li><strong>Khu vực:</strong> ${tinh}</li>
          <li><strong>Dòng xe:</strong> ${loaiXe}</li>
          <li><strong>Thời điểm mua:</strong> ${thoiDiemMua}</li>
          <li><strong>Hình thức thanh toán:</strong> ${traGop}</li>
        </ul>
        ${
          selectedOffers.length > 0
            ? `<p><strong>Thông tin đã chọn:</strong><br>${selectedOffers.join(
                "<br>"
              )}</p>`
            : ""
        }
      </div>
    `;

    modalContent.innerHTML = message;
    modal.show();
    form.reset();
  });
