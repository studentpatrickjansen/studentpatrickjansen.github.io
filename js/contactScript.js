var contactForm = document.querySelector("#contact-form");

if (contactForm) {
    var velden = [
        { id: "naam", message: "Vul minimaal 2 tekens in." },
        { id: "email", message: "Vul een geldig e-mailadres in." },
        { id: "bericht", message: "Schrijf minimaal 10 tekens." }
    ];

    function validateField(field) {
        var input = document.getElementById(field.id);
        var errorMessage = document.getElementById(field.id + "-error");
        var valid = input.checkValidity();
        
        input.setAttribute("aria-invalid", String(!valid));
        errorMessage.textContent = valid ? "" : field.message;
        return valid;
    }

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        var allFieldsValid = true;
        for (let i = 0; i < velden.length; i++) {
            if (!validateField(velden[i])) {
                allFieldsValid = false;
            }
        }
        
        var status = document.getElementById("form-status");
        
        if (!allFieldsValid) {
            status.textContent = "Er zijn nog fouten in het formulier.";
            status.style.color = "#ff5500";
            return;
        }
        
        status.textContent = "Bericht verzonden!";
        status.style.color = "#556B2F";
        contactForm.reset();
    });
}