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

    let modalContent = document.getElementById("noiDungModal");
    let modal = new bootstrap.Modal(document.getElementById("thongBaoModal"));

    if (name === "" || phoneNumber === "" || tinh === "" || loaiXe === "") {
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
        <p>Thông tin khuyến mãi sẽ được gửi đến <strong>${name}</strong> thông qua số điện thoại!</p>
        <ul class="list-unstyled mb-2">
          <li><strong>SĐT:</strong> ${phoneNumber}</li>
          <li><strong>Khu vực:</strong> ${tinh}</li>
          <li><strong>Dòng xe quan tâm:</strong> ${loaiXe}</li>
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
