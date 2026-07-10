const username = document.getElementById("username");
const dispEmail = document.getElementById("user-email");

const stored_userName = localStorage.getItem("UserName");
const stored_Email = localStorage.getItem("UserMail");

if (stored_Email || stored_userName) {
    username.textContent = stored_userName;
    dispEmail.textContent = stored_Email
}
gsap.registerPlugin(ScrollTrigger);

 
 
 
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const menuButtons = document.querySelectorAll(".menu-title");

 
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

 
menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (window.innerWidth <= 992) {

            sidebar.classList.remove("active");

        }

    });

});
const tl = gsap.timeline();

 
 
 
 
 
 

 
 
 
 
 
 

 
 
 
 
 

 
 
 
 
 
 
 

 
 
 
 
 

 
 
 
 
 

 
 
 
 
 

 
 
 
 
 


 
 

 
 
 



 
 
 

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

 
        menuButtons.forEach(btn => {
            btn.classList.remove("active");
        });

 
        button.classList.add("active");

    });

});
 
 
 

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