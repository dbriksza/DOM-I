const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

const crayon = document.createElement("a");
crayon.textContent = "crayon";
const peanutbutter = document.createElement("a");
peanutbutter.textContent = "peanutbutter";
const navigation = document.getElementsByTagName("nav");
navigation[0].appendChild(crayon);

const navi = document.querySelectorAll("a");

navi[0].setAttribute("name", "nav-item-1");
navi[1].setAttribute("name", "nav-item-2");
navi[2].setAttribute("name", "nav-item-3");
navi[3].setAttribute("name", "nav-item-4");
navi[4].setAttribute("name", "nav-item-5");
navi[5].setAttribute("name", "nav-item-6");
navi[0].textContent = "Services";
navi[1].textContent = "Products";
navi[2].textContent = "Vision";
navi[3].textContent = "Features";
navi[4].textContent = "About";
navi[5].textContent = "Contact";

navigation[0].prepend(peanutbutter);

const logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "img/logo.png");

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", "img/header-img.png");

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", "img/mid-page-accent.jpg");

const slogan = document.getElementsByTagName("h1");
slogan[0].textContent = "DOM is Awesome";

const button = document.getElementsByTagName("button");
button[0].textContent = "Get Started";

const subHeaders = document.getElementsByTagName("h4");
subHeaders[0].textContent = "Features";
subHeaders[1].textContent = "About";
subHeaders[2].textContent = "Services";
subHeaders[3].textContent = "Products";
subHeaders[4].textContent = "Vision";
subHeaders[5].textContent = "Contact";

const textBoxes = document.getElementsByTagName("p");
textBoxes[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBoxes[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBoxes[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBoxes[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBoxes[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBoxes[5].textContent = "123 Way 456 Street Somewhere, USA";
textBoxes[6].textContent = "1 (888) 888-8888";
textBoxes[7].textContent = "sales@greatidea.io";
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
