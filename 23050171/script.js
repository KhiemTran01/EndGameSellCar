// script.js

document.addEventListener('DOMContentLoaded', function() {

    console.log("Trang đã tải xong. JavaScript đã sẵn sàng.");

    // --- Form Submission ---
    const priceForm = document.getElementById('price-form');
    if (priceForm) {
        priceForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameInput = document.getElementById('customerName');
            const phoneInput = document.getElementById('customerPhone');
            const citySelect = document.getElementById('customerCity');
            const purchaseTimeSelect = document.getElementById('purchaseTime'); // Dùng ID này

            const name = nameInput ? nameInput.value : '';
            const phone = phoneInput ? phoneInput.value : '';

            if (name.trim() === '' || phone.trim() === '') {
                alert('Vui lòng điền đầy đủ Họ tên và Số điện thoại (*).');
                return;
            }

            const formData = {
                name: name,
                phone: phone,
                city: citySelect ? citySelect.value : null,
                purchaseTime: purchaseTimeSelect ? purchaseTimeSelect.value : null
            };
            console.log("Dữ liệu form:", formData);
            alert('Yêu cầu nhận báo giá của bạn đã được ghi nhận (demo). Dữ liệu đã được log ra Console.');
            // priceForm.reset(); // Bỏ comment nếu muốn xóa form sau khi gửi
        });
    }

    // --- KHÔNG CẦN XỬ LÝ CLICK SIDEBAR CŨ NỮA ---
    // const sidebarLinks = document.querySelectorAll('.sidebar-nav a'); // Dòng này không cần thiết nữa
    // sidebarLinks.forEach(link => { ... }); // Khối này không cần thiết nữa

    // --- JavaScript for Image Gallery Modal ---
    var imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', function (event) {
            var triggerElement = event.relatedTarget; // Phần tử <a> đã click
            if (triggerElement) { // Kiểm tra xem triggerElement có tồn tại không
                var imageSrc = triggerElement.getAttribute('data-bs-imgsrc');
                var modalImage = imageModal.querySelector('#modalImage');
                if (modalImage && imageSrc) {
                    modalImage.src = imageSrc;
                }
            }
        });
        imageModal.addEventListener('hidden.bs.modal', function(event){
             var modalImage = imageModal.querySelector('#modalImage');
             if (modalImage) {
                 modalImage.src = ''; // Xóa src khi đóng
             }
        });
    }

    // --- (Tùy chọn) Thêm con trỏ pointer cho ảnh gallery ---
    var galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(function(img) {
        img.style.cursor = 'pointer';
    });
    // --- End of JS ---

}); // Kết thúc DOMContentLoaded