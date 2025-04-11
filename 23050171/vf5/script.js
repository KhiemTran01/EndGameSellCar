// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    console.log("Trang đã tải xong. JavaScript đã sẵn sàng.");

    // --- Example: Form Submission ---
    const priceForm = document.getElementById('price-form');

    if (priceForm) {
        priceForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Basic validation example (Bootstrap 5 handles required fields visually)
            const name = document.getElementById('customerName').value;
            const phone = document.getElementById('customerPhone').value;

            if (name.trim() === '' || phone.trim() === '') {
                alert('Vui lòng điền đầy đủ thông tin bắt buộc (*).');
                return; // Stop submission if basic validation fails
            }

            // You would typically collect all form data here
            const formData = {
                name: name,
                phone: phone,
                city: document.getElementById('customerCity').value,
                version: document.getElementById('carVersion').value
            };

            console.log("Dữ liệu form:", formData);

            // Here you would normally send the data to a server using fetch() or XMLHttpRequest
            alert('Yêu cầu nhận báo giá đã được gửi (chức năng demo).');

            // Optional: Reset the form after submission
            // priceForm.reset();
        });
    }

    // --- Example: Sidebar Link Click ---
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const linkText = this.querySelector('.fw-bold').textContent;
            console.log(`Đã nhấp vào liên kết sidebar: ${linkText}`);
            // Add actions here, e.g., scroll to a section, load content dynamically, etc.
            alert(`Bạn đã nhấp vào: ${linkText} (chức năng demo).`);
        });
    });

    // Add more JavaScript interactions as needed

});