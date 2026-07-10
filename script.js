gsap.registerPlugin(ScrollTrigger);
// Ensure GSAP is loaded

const innerHeroTimeline = gsap.timeline({ delay: 0.1 });

// 1. Animate the Background Image (Slow zoom out)
innerHeroTimeline.from(".hero-bg-img", {
    scale: 1.15,
    duration: 2.5,
    ease: "power2.out"
});

// 2. Stagger the content in (Breadcrumbs -> H1 -> P)
// The "-=2" means this starts 2 seconds BEFORE the background image finishes zooming
innerHeroTimeline.from(".breadcrumbs li, .inner-hero-text h1, .inner-hero-text p", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
}, "-=2.0");

const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".menu-items");
const navBtns = document.querySelector(".nav-btns");
const body = document.body;

menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    menuItems.classList.toggle("active");
    navBtns.classList.toggle("active");

    // Prevent body scrolling
    body.classList.toggle("menu-open");

    // Change icon
    if (menuItems.classList.contains("active")) {

        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

// Close when clicking outside
document.addEventListener("click", (e) => {

    if (
        !menuItems.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        menuItems.classList.remove("active");
        navBtns.classList.remove("active");

        body.classList.remove("menu-open");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

// Close after clicking any link
document.querySelectorAll(".menu-items a, .nav-btns a").forEach(link => {

    link.addEventListener("click", () => {

        menuItems.classList.remove("active");
        navBtns.classList.remove("active");

        body.classList.remove("menu-open");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


const newsletterForm = document.querySelector(".newsletter-form");

const newsletterEmail = document.getElementById("newsletterEmail");

const newsletterError = document.querySelector(".newsletter-error");

newsletterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = newsletterEmail.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    newsletterEmail.classList.remove("error", "success");

    newsletterError.textContent = "";

    if (email === "") {

        newsletterEmail.classList.add("error");

        newsletterError.textContent = "Email address is required.";

        shake(newsletterEmail);

        return;

    }

    if (!emailRegex.test(email)) {

        newsletterEmail.classList.add("error");

        newsletterError.textContent = "Please enter a valid email address.";

        shake(newsletterEmail);

        return;

    }

    newsletterEmail.classList.add("success");

    newsletterError.style.color = "#22c55e";

    newsletterError.textContent = "Subscribed successfully!";
    window.location.href = '404page.html'
    newsletterForm.reset();

    setTimeout(() => {

        newsletterEmail.classList.remove("success");

        newsletterError.textContent = "";

        newsletterError.style.color = "#ef4444";

    }, 2500);

});