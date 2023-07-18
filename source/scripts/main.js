    function processForm(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const birthdate = document.getElementById("birthdate").value;
    }

    document.getElementById("registrationForm").addEventListener("submit", processForm);