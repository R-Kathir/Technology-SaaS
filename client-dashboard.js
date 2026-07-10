const username = document.getElementById("username");
const dispEmail = document.getElementById("user-email");

const stored_userName = localStorage.getItem("UserName");
const stored_Email = localStorage.getItem("UserMail");

if (stored_Email || stored_userName) {
    username.textContent = stored_userName;
    dispEmail.textContent = stored_Email
}
gsap.registerPlugin(ScrollTrigger);
const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".menu-title");

function showPage(pageId, btnId) {

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active-page");
    document.getElementById(btnId).classList.add("active");
}

 
document.getElementById("dashboardBtn").addEventListener("click", () => {
    showPage("dashboardPage", "dashboardBtn");
});

 
document.getElementById("servicesBtn").addEventListener("click", () => {
    showPage("servicesPage", "servicesBtn");
});

 
document.getElementById("projectsBtn").addEventListener("click", () => {
    showPage("projectsPage", "projectsBtn");
});

 
document.getElementById("documentsBtn").addEventListener("click", () => {
    showPage("documentsPage", "documentsBtn");
});


 
document.getElementById("notificationsBtn").addEventListener("click", () => {
    showPage("notificationsPage", "notificationsBtn");
});

 
document.getElementById("profileBtn").addEventListener("click", () => {
    showPage("profilePage", "profileBtn");
});
 

 
 
 
 
 
 

 
 
 
 
 

 
 
 
 
 

 
 
 
 
 
 

 
 
 
 
 
 

 
 
 
 
 
 

 
 
 
 
 

 
 
 
 
 
 


 
 
 

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const menuButtons = document.querySelectorAll(".menu-title");

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

 
        menuButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

 
        if (window.innerWidth <= 992) {
            sidebar.classList.remove("active");
        }

    });

});
 
sidebarToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    sidebar.classList.toggle("active");

});

 
sidebar.addEventListener("click", (e) => {

    e.stopPropagation();

});

 
document.addEventListener("click", () => {

    if (window.innerWidth <= 992) {

        sidebar.classList.remove("active");

    }

});

 
 
 

const menuItems = document.querySelectorAll(".menu-title");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(btn => btn.classList.remove("active"));

        item.classList.add("active");

    });

});


 
 
 
 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 


 

 
 
 

document.querySelectorAll(".stat-card,.service-card,.usage-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -8,
            duration: 0.25
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            duration: 0.25
        });

    });

});


 
 
 

document.querySelectorAll(".notification").forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            x: 8,
            duration: 0.25
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            x: 0,
            duration: 0.25
        });

    });

});


 
 
 

gsap.from(".progress", {

    width: 0,

    duration: 1.8,

    stagger: 0.2,

    ease: "power3.out"

});


 
 
 

document.querySelectorAll(".icon-btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {
            y: -3,
            duration: 0.2
        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {
            y: 0,
            duration: 0.2
        });

    });

});


 
 
 

gsap.utils.toArray(".chart-card, .table-card, .notification-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {

            trigger: card,

            start: "top 85%"

        },

        y: 50,

        opacity: 0,

        duration: 0.7,

        ease: "power2.out"

    });

});