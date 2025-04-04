document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const submitMsg = document.getElementById("submit-msg");


    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        if (form.checkValidity()) {
            submitMsg.style.opacity = "1";
            
            setTimeout(() => {
                submitMsg.style.opacity = "0";
            }, 3000);
        }
    });
});
