document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);

    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast show`;
        toast.innerHTML = `
            <div class="toast-header ${type === 'success' ? 'bg-success' : 'bg-danger'} text-white">
                <strong class="me-auto">${type === 'success' ? 'موفق' : 'خطا'}</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 5000);
    }

    function validatePhone(phone) {
        const phoneRegex = /^(\+98|0)?9\d{9}$/;
        return phoneRegex.test(phone);
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name || !email || !phone || !subject || !message) {
            showToast('لطفاً تمام فیلدها را پر کنید', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showToast('لطفاً یک ایمیل معتبر وارد کنید', 'error');
            return;
        }

        if (!validatePhone(phone)) {
            showToast('لطفاً یک شماره موبایل معتبر وارد کنید', 'error');
            return;
        }

        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        showToast('پیام شما با موفقیت ارسال شد');
        form.reset();
    });
}); 