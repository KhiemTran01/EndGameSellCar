document.addEventListener('DOMContentLoaded', (event) => {

    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    const priceForm = document.getElementById('price-form');
    if (priceForm) {
        priceForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(priceForm);
            console.log('Form submitted. Data:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            console.log('Yêu cầu nhận bảng giá đã được ghi nhận (chức năng mẫu)!');
        });
    }

});
