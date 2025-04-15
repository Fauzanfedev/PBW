document.addEventListener("DOMContentLoaded", function() {
 
    window.addEventListener("scroll", function() {
        let header = document.querySelector(".header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

   
    document.querySelector(".btn-1").addEventListener("click", function() {
        window.location.href = "#contact";
    });

    
    document.querySelector(".btn-2").addEventListener("click", function() {
        window.location.href = "#portofolio";
    });
});

 document.querySelector(".btn-2[type='reset']").addEventListener("click", function() {
    window.location.href = "#";
});

  
  document.querySelector("input[type='submit']").addEventListener("click", function(event) {
    event.preventDefault();
    
    let nama = document.querySelector("input[placeholder='Nama']").value;
    let email = document.querySelector("input[placeholder='Email']").value;
    let phone = document.querySelector("input[placeholder='Phone Number']").value;
    let subject = document.querySelector("input[placeholder='Subject']").value;
    let message = document.querySelector("textarea").value;
    
    let whatsappNumber = "6285889264208";
    let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Halo, saya ${nama}.%0AEmail: ${email}%0ANo HP: ${phone}%0ASubject: ${subject}%0APesan: ${message}`;
    
    window.open(whatsappURL, "_blank");
});

document.querySelectorAll(".navbar a, .Contact").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);
        let headerOffset = document.querySelector(".header").offsetHeight;
        let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        let offsetPosition = elementPosition - headerOffset - 20; // Sesuaikan offset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        history.pushState(null, null, `#${targetId}`);
    });
});

document.querySelector(".btn-2").addEventListener("click", function(event) {
    event.preventDefault();

    let targetId = "portofolio"; 
    let targetElement = document.getElementById(targetId);
    let headerOffset = document.querySelector(".header").offsetHeight;
    let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    let offsetPosition = elementPosition - headerOffset - 20; 

   
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

   
    history.pushState(null, null, `#${targetId}`);
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const phoneInput = document.querySelector("input[placeholder='Phone Number']");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert("❌ Nomor HP tidak valid! Hanya boleh angka dan panjang 10-15 digit.");
            isValid = false;
        }

       
        if (!isValid) {
            event.preventDefault();
        }
    });
});

    document.querySelector("input[type='reset']").addEventListener("click", function(event) {
        event.preventDefault(); 
    
        let targetElement = document.getElementById("Home");
        let headerOffset = document.querySelector(".header").offsetHeight;
        let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        let offsetPosition = elementPosition - headerOffset - 20; 
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    
       
        history.pushState(null, null, "#Home");
    });
    
