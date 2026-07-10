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

// Dashboard
document.getElementById("dashboardBtn").addEventListener("click", () => {
    showPage("dashboardPage", "dashboardBtn");
});

// Services
document.getElementById("servicesBtn").addEventListener("click", () => {
    showPage("servicesPage", "servicesBtn");
});

// Projects
document.getElementById("projectsBtn").addEventListener("click", () => {
    showPage("projectsPage", "projectsBtn");
});

// Documents
document.getElementById("documentsBtn").addEventListener("click", () => {
    showPage("documentsPage", "documentsBtn");
});


// Notifications
document.getElementById("notificationsBtn").addEventListener("click", () => {
    showPage("notificationsPage", "notificationsBtn");
});

// Profile
document.getElementById("profileBtn").addEventListener("click", () => {
    showPage("profilePage", "profileBtn");
});
// const tl = gsap.timeline();

// tl.from(".sidebar", {
//     x: -80,
//     opacity: 0,
//     duration: 0.8,
//     ease: "power3.out"
// })

//     .from(".dashboard-header", {
//         y: -60,
//         opacity: 0,
//         duration: 0.6
//     }, "-=0.5")

//     .from(".welcome-banner", {
//         y: 40,
//         opacity: 0,
//         duration: 0.8
//     }, "-=0.4")

//     .from(".stat-card", {
//         y: 40,
//         opacity: 0,
//         stagger: 0.12,
//         duration: 0.6
//     }, "-=0.3")

//     .from(".service-card", {
//         y: 40,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 0.6
//     }, "-=0.3")

//     .from(".project-card", {
//         x: -40,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 0.6
//     }, "-=0.3")

//     .from(".billing-card", {
//         x: 40,
//         opacity: 0,
//         duration: 0.8
//     }, "-=0.5")

//     .from(".usage-card", {
//         y: 30,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 0.5
//     }, "-=0.3");


//==================================================
// SIDEBAR TOGGLE
//==================================================

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const menuButtons = document.querySelectorAll(".menu-title");

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Existing code
        menuButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Close sidebar on mobile
        if (window.innerWidth <= 992) {
            sidebar.classList.remove("active");
        }

    });

});
// Open / Close Sidebar
sidebarToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    sidebar.classList.toggle("active");

});

// Prevent closing when clicking inside sidebar
sidebar.addEventListener("click", (e) => {

    e.stopPropagation();

});

// Close when clicking anywhere else
document.addEventListener("click", () => {

    if (window.innerWidth <= 992) {

        sidebar.classList.remove("active");

    }

});

//==================================================
// ACTIVE SIDEBAR
//==================================================

const menuItems = document.querySelectorAll(".menu-title");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(btn => btn.classList.remove("active"));

        item.classList.add("active");

    });

});


//==================================================
// PROFILE DROPDOWN
//==================================================
// const profile = document.querySelector(".profile-box");

// const dropdown = document.createElement("div");

// dropdown.className = "profile-dropdown";

// dropdown.innerHTML = `

// <a href="404page.html"><i class="fa-regular fa-user"></i> Profile</a>

// <a href="404page.html"><i class="fa-solid fa-gear"></i> Settings</a>

// <a href="404page.html"><i class="fa-solid fa-credit-card"></i> Billing</a>

// <a href="index.html"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>

// `;

// profile.appendChild(dropdown);

// profile.addEventListener("click", (e) => {

//     e.stopPropagation();

//     dropdown.classList.toggle("show");

// });

// dropdown.addEventListener("click", (e) => {

//     e.stopPropagation();

// });

// document.addEventListener("click", () => {

//     dropdown.classList.remove("show");

// });


 

//==================================================
// CARD HOVER
//==================================================

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


//==================================================
// NOTIFICATION HOVER
//==================================================

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


//==================================================
// PROJECT PROGRESS ANIMATION
//==================================================

gsap.from(".progress", {

    width: 0,

    duration: 1.8,

    stagger: 0.2,

    ease: "power3.out"

});


//==================================================
// ICON BUTTON HOVER
//==================================================

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


//==================================================
// SCROLL REVEAL
//==================================================

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