document.addEventListener('DOMContentLoaded', function() {

    console.log("Trang đã tải xong. JavaScript đã sẵn sàng.");

    const priceForm = document.getElementById('price-form');

    if (priceForm) {
        priceForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('customerName').value;
            const phone = document.getElementById('customerPhone').value;

            if (name.trim() === '' || phone.trim() === '') {
                alert('Vui lòng điền đầy đủ thông tin bắt buộc (*).');
                return; 
            }

            const formData = {
                name: name,
                phone: phone,
                city: document.getElementById('customerCity').value,
                version: document.getElementById('carVersion').value
            };

            console.log("Dữ liệu form:", formData);
    
            alert('Yêu cầu nhận báo giá đã được gửi (chức năng demo).');

            
        });
    }

    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const linkText = this.querySelector('.fw-bold').textContent;
            console.log(`Đã nhấp vào liên kết sidebar: ${linkText}`);
  
            alert(`Bạn đã nhấp vào: ${linkText} (chức năng demo).`);
        });
    });
});