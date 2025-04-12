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

    let modalContent = document.getElementById("noiDungModal");
    let modal = new bootstrap.Modal(document.getElementById("thongBaoModal"));

    if (
      name === "" ||
      phoneNumber === "" ||
      tinh === "" ||
      loaiXe === "" ||
      ngayLai === "" ||
      buoiLai === ""
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

    let message = `
      <div class="alert alert-success">
        <p>Chúc mừng <strong>${name}</strong> đã đăng ký lái thử thành công!</p>
        <ul class="list-unstyled">
          <li><strong>Số điện thoại:</strong> ${phoneNumber}</li>
          <li><strong>Khu vực:</strong> ${tinh}</li>
          <li><strong>Dòng xe:</strong> ${loaiXe}</li>
          <li><strong>Ngày lái thử:</strong> ${ngayLai}</li>
          <li><strong>Buổi:</strong> ${buoiLai}</li>
        </ul>
      </div>
    `;

    modalContent.innerHTML = message;
    modal.show();
    form.reset();
  });
