document.addEventListener('DOMContentLoaded', function() {
    // Funkcija za obradu slanja forme za kontakt
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Provera da li su sva polja popunjena pre slanja forme
        if (name && email && message) {
            alert('Vaša poruka je uspešno poslata!');
            document.getElementById('contact-modal').style.display = "none";
        } else {
            alert('Molimo vas da popunite sva polja.');
        }
    });

    // Scroll animacije za navigacione linkove
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funkcionalnost za slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Menja sliku svakih 5 sekundi
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));

    function plusSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        slideIndex += n;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        showSlides();
    }

    // Funkcionalnost komentara za blog
    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let commentInput = document.getElementById('comment-input');
        let commentText = commentInput.value;
        if (commentText) {
            let commentSection = document.getElementById('comments');
            let newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentSection.appendChild(newComment);
            commentInput.value = '';
        }
    });

    // Modalna funkcionalnost
    let modal = document.getElementById("contact-modal");
    let btn = document.getElementById("contact-link");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Animacije pri skrolovanju
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    // Pretraga funkcionalnost
    document.getElementById('search-bar').addEventListener('input', function() {
        let filter = this.value.toUpperCase();
        let sections = document.querySelectorAll('main section');

        sections.forEach(section => {
            let text = section.textContent || section.innerText;
            section.style.display = text.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        });
    });

    // Inicijalizacija Google mape
    function initMap() {
        const companyLocation = { lat: -34.397, lng: 150.644 };
        const map = new google.maps.Map(document.getElementById("googleMap"), {
            zoom: 8,
            center: companyLocation,
        });
        const marker = new google.maps.Marker({
            position: companyLocation,
            map: map,
        });
    }

    // Funkcionalnost galerije slika - efekat zumiranja
    document.querySelectorAll('.mySlides img').forEach(img => {
        img.addEventListener('click', function() {
            this.style.transform = this.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Funkcija za obradu slanja forme za kontakt
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Provera da li su sva polja popunjena pre slanja forme
        if (name && email && message) {
            alert('Vaša poruka je uspešno poslata!');
            document.getElementById('contact-modal').style.display = "none";
        } else {
            alert('Molimo vas da popunite sva polja.');
        }
    });

    // Scroll animacije za navigacione linkove
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funkcionalnost za slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Menja sliku svakih 5 sekundi
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));

    function plusSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        slideIndex += n;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        showSlides();
    }

    // Funkcionalnost komentara za blog
    document.getElementById('comment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let commentInput = document.getElementById('comment-input');
        let commentText = commentInput.value;
        if (commentText) {
            let commentSection = document.getElementById('comments');
            let newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentSection.appendChild(newComment);
            commentInput.value = '';
        }
    });

    // Modalna funkcionalnost
    let modal = document.getElementById("contact-modal");
    let btn = document.getElementById("contact-link");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Animacije pri skrolovanju
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    // Pretraga funkcionalnost
    document.getElementById('search-bar').addEventListener('input', function() {
        let filter = this.value.toUpperCase();
        let sections = document.querySelectorAll('main section');

        sections.forEach(section => {
            let text = section.textContent || section.innerText;
            section.style.display = text.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        });
    });

    // Inicijalizacija Google mape
    function initMap() {
        const companyLocation = { lat: -34.397, lng: 150.644 };
        const map = new google.maps.Map(document.getElementById("googleMap"), {
            zoom: 8,
            center: companyLocation,
        });
        const marker = new google.maps.Marker({
            position: companyLocation,
            map: map,
        });
    }

    // Funkcionalnost galerije slika - efekat zumiranja
    document.querySelectorAll('.mySlides img').forEach(img => {
        img.addEventListener('click', function() {
            this.style.transform = this.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Funkcija za obradu slanja forme za kontakt
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Provera da li su sva polja popunjena pre slanja forme
        if (name && email && message) {
            alert('Vaša poruka je uspešno poslata!');
            document.getElementById('contact-modal').style.display = "none";
        } else {
            alert('Molimo vas da popunite sva polja.');
        }
    });

    // Dodavanje animacija za modalni prozor
    let modal = document.getElementById("contact-modal");
    modal.classList.add("modal-fade-in");
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.classList.remove("modal-fade-in");
        modal.classList.add("modal-fade-out");
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove("modal-fade-out");
        }, 500);
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("modal-fade-in");
            modal.classList.add("modal-fade-out");
            setTimeout(() => {
                modal.style.display = "none";
                modal.classList.remove("modal-fade-out");
            }, 500);
        }
    };

    // Poboljšanje pretrage
    document.getElementById('search-bar').addEventListener('input', function() {
        let filter = this.value.toUpperCase();
        let sections = document.querySelectorAll('main section');

        sections.forEach(section => {
            let text = section.textContent || section.innerText;
            section.style.display = text.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        });
    });

    // Implementacija zaštite od spama (reCAPTCHA)
    // Potrebno je dodati reCAPTCHA skriptu u HTML dokument

    // Poboljšanje SEO-a
    // Može se dodati optimizacija meta tagova i sadržaja stranice

    // Dodavanje mogućnosti za učitavanje i prikaz slika korisnika u komentarima

    // Implementacija funkcije za pretragu unutar Google mape

    // Validacija adrese na serverskoj strani

    // Ostatak vašeg postojećeg koda ide ispod ovoga

});
