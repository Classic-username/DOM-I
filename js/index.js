const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


let nav = document.querySelector('nav')
let navA = document.querySelectorAll('nav a')
let firstImg = document.querySelector('#logo-img')
let h1 = document.querySelector('h1')
let button1 = document.querySelector('button')
let secondImg = document.querySelector('#cta-img')
let h4Main = document.querySelectorAll('.main-content h4')
let pMain = document.querySelectorAll('.main-content p')
let thirdImg = document.querySelector('#middle-img')
let contactP = document.querySelectorAll('.contact p')
let contactH = document.querySelector('.contact h4')
let footerP = document.querySelector('footer p')
console.log(contactP)


navA[0].textContent = siteContent.nav['nav-item-1']
navA[1].textContent = siteContent.nav['nav-item-2']
navA[2].textContent = siteContent.nav['nav-item-3']
navA[3].textContent = siteContent.nav['nav-item-4']
navA[4].textContent = siteContent.nav['nav-item-5']
navA[5].textContent = siteContent.nav['nav-item-6']

firstImg.src = siteContent.nav['img-src']

h1.textContent = siteContent.cta['h1']
button1.textContent = siteContent.cta['button']
secondImg.src = siteContent.cta['img-src']

h4Main[0].textContent = siteContent["main-content"]['features-h4']
h4Main[1].textContent = siteContent["main-content"]['about-h4']
h4Main[2].textContent = siteContent["main-content"]['services-h4']
h4Main[3].textContent = siteContent["main-content"]['product-h4']
h4Main[4].textContent = siteContent["main-content"]['vision-h4']
thirdImg.src = 'img/mid-page-accent.jpg'
pMain[0].textContent = siteContent["main-content"]['features-content']
pMain[1].textContent = siteContent["main-content"]['about-content']
pMain[2].textContent = siteContent["main-content"]['services-content']
pMain[3].textContent = siteContent["main-content"]['product-content']
pMain[4].textContent = siteContent["main-content"]['vision-content']


contactH.textContent = siteContent.contact['contact-h4']
contactP[0].textContent = siteContent.contact['address']
contactP[1].textContent = siteContent.contact['phone']
contactP[2].textContent = siteContent.contact['email']

footerP.textContent = siteContent.footer['copyright']



let yo = document.createElement('a')
let yoyo = document.createElement('a')

yo.textContent = 'Yo'
yoyo.textContent = 'Yoyo'


nav.appendChild(yoyo)
nav.prepend(yo)

navA.forEach((object) => {
  return object.style.color = 'green'
})
