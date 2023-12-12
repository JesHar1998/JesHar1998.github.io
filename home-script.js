function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (firstName.trim() === '' || surname.trim() === '' || email.trim() === '' || phone.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }

    return true;
}

function resetForm() {
    form.reset();
}



document.getElementById('mobile-menu-icon').addEventListener('click', toggleSideMenu);
document.getElementById('menu-close').addEventListener('click', toggleSideMenu);

function toggleSideMenu() {
    var sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('show-menu');
}