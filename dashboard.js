const username = document.getElementById("username");
const dispEmail = document.getElementById("user-email");

const stored_userName = localStorage.getItem("UserName");
const stored_Email = localStorage.getItem("UserMail");

if (stored_Email || stored_userName) {
    username.textContent = stored_userName;
    dispEmail.textContent = stored_Email
}
gsap.registerPlugin(ScrollTrigger);

//======================================================
// Page Animation
//======================================================
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const menuButtons = document.querySelectorAll(".menu-title");

// Toggle Sidebar
sidebarToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    sidebar.classList.toggle("active");

});

// Prevent sidebar clicks from bubbling
sidebar.addEventListener("click", (e) => {

    e.stopPropagation();

});

// Close when clicking outside
document.addEventListener("click", () => {

    if (window.innerWidth <= 992) {

        sidebar.classList.remove("active");

    }

});

// Close when clicking menu
menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (window.innerWidth <= 992) {

            sidebar.classList.remove("active");

        }

    });

});
const tl = gsap.timeline();

// tl.from(".dashboard-header", {
//     y: -60,
//     opacity: 0,
//     duration: .7,
//     ease: "power3.out"
// })

//     .from(".sidebar", {
//         x: -100,
//         opacity: 0,
//         duration: .8,
//         ease: "power3.out"
//     }, "-=.5")

// .from(".welcome-banner", {
//     y: 40,
//     opacity: 0,
//     duration: .7
// }, "-=.4")

// .from(".stat-card", {
//     y: 40,
//     opacity: 0,
//     stagger: .12,
//     duration: .6,
//     ease: "power3.out"
// }, "-=.4")

// .from(".chart-card", {
//     x: -40,
//     opacity: 0,
//     duration: .8
// }, "-=.3")

// .from(".system-status", {
//     x: 40,
//     opacity: 0,
//     duration: .8
// }, "-=.8")

// .from(".table-card", {
//     y: 40,
//     opacity: 0,
//     duration: .8
// }, "-=.4")

// .from(".notification-card", {
//     y: 40,
//     opacity: 0,
//     duration: .8
// }, "-=.6");


//======================================================
 

//======================================================
// Accordion Menu
//======================================================



//======================================================
// Profile Dropdown
//======================================================

const profile = document.querySelector(".profile-box");

const dropdown = document.createElement("div");

dropdown.className = "profile-dropdown";

dropdown.innerHTML = `

<a href="404page.html"><i class="fa-regular fa-user"></i> Profile</a>

<a href="404page.html"><i class="fa-solid fa-gear"></i> Settings</a>

<a href="404page.html"><i class="fa-solid fa-credit-card"></i> Billing</a>

<a href="404page.html"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>

`;

profile.appendChild(dropdown);

profile.addEventListener("click", (e) => {
    e.stopPropagation();

    dropdown.classList.toggle("show");

});


menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        menuButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

    });

});
//======================================================
// Counter Animation
//======================================================

document.querySelectorAll(".stat-card h2").forEach(counter => {

    const value = counter.innerText.replace(/[^0-9]/g, "");

    gsap.from(counter, {

        textContent: 0,

        duration: 2,

        ease: "power1.out",

        snap: { textContent: 1 },

        onUpdate: function () {

            counter.innerHTML = Math.floor(counter.textContent);

        }

    });

});


//======================================================
// Notification Hover
//======================================================

document.querySelectorAll(".notification").forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            x: 8,
            duration: .25
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            x: 0,
            duration: .25
        });

    });

});


document.querySelectorAll(".stat-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -8,
            duration: .3
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            duration: .3
        });

    });

});



const pages = document.querySelectorAll(".page");

function showPage(id) {

    pages.forEach(page => {

        page.classList.remove("active-page");

    });

    document.getElementById(id).classList.add("active-page");

}

document.getElementById("dashboardBtn").onclick = () => {

    showPage("dashboardPage");

};

// document.getElementById("userBtn").onclick = () => {

//     showPage("userPage");

// };

document.getElementById("infraBtn").onclick = () => {

    showPage("infraPage");

};

document.getElementById("projectBtn").onclick = () => {

    showPage("projectPage");

};

document.getElementById("monitorBtn").onclick = () => {

    showPage("monitorPage");

};

document.getElementById("settingBtn").onclick = () => {

    showPage("settingPage");

};