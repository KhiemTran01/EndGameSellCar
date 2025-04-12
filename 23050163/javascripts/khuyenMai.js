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
