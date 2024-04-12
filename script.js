function validateForm() {
    var name = document.getElementById('name').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var message = document.getElementById('message').value;

    if (!name || !emailAddress || !message) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
        alert('Veuillez fournir une adresse e-mail valide.');
        return false;
    }

    window.location.href = 'contact-reponse.html';
    return false;
}