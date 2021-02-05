// Create some references for menu and icon menu :
const iconMobile = document.querySelector(".header-menu-icon");
const headerMenu = document.querySelector(".header-menu");
// This property allows to know is menu is open :
let isMenuOpen = false;
// This property allows to know if mobile menu was create :
let mobileMenuDOM;

// To close menu, remove class on open menu :
const closeMenu = () => {
    mobileMenuDOM.classList.remove("open");
};

// We create div and add mobile-menu class.
// We stop menu closure on intern click.
// We duplicate normal menu links.
const createMobileMenu = () => {
    mobileMenuDOM = document.createElement("div");
    mobileMenuDOM.classList.add("mobile-menu");
    mobileMenuDOM.addEventListener("click", event => {
        event.stopPropagation();
    });
    mobileMenuDOM.append(headerMenu.querySelector("ul").cloneNode(true));
    headerMenu.append(mobileMenuDOM);
};

// If menu ins't created, we create it.
// We open it with an open class :
const openMenu = () => {
    if (!mobileMenuDOM) {
        createMobileMenu();
    }
    mobileMenuDOM.classList.add("open");
};

// Alloww to open and close the menu :
const toggleMobileMenu = event => {
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
    isMenuOpen = !isMenuOpen;
}

// One click on the icon will open or close the menu
// and stop propagation of event window :
iconMobile.addEventListener("click", event => {
    event.stopPropagation();
    toggleMobileMenu();
});

// We recover clicks on window top close menu :
window.addEventListener("click", () => {
    if (isMenuOpen) {
        toggleMobileMenu();
    }
});

// If window is extend and is bigger than 480px width
// Then we close menu if it's open :
window.addEventListener("resize", event => {
    if (window.innerWidth > 480 && isMenuOpen) {
        toggleMobileMenu();
    }
});