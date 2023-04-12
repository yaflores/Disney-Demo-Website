const navItems = [
    {
        name: "Home",
        icon: "house"
    },
    {
        name: "Search",
        icon: "search"
    },
    {
        name: "Watchlist",
        icon: "plus"
    },
    {
        name: "Originals",
        icon: "star"
    },
    {
        name: "Movies",
        icon: "film"
    },
    {
        name: "Series",
        icon: "tv"
    }
];

const navDesktop = document.getElementById("navDesktop");
const navDesktopList = document.createElement("ul");
navDesktopList.classList.add("nav-desktop-list");
// console.log(navItems);
navItems.forEach((navItem)=> {

    // create elements
    const navDesktopItem = document.createElement("li");
    const navDesktopItemAnchor = document.createElement("a");
    const navDesktopItemSpan = document.createElement("span");
    const navDesktopItemAnchorIcon = document.createElement("img");

    // add attributes
    navDesktopItem.classList.add("nav-desktop-list-item");
    navDesktopItemAnchorIcon.src = `assets/icons/${navItem.icon}.svg`; 
    navDesktopItemAnchorIcon.alt = `${navItem.name} icon`;
    navDesktopItemSpan.innerText = navItem.name;

    // appends
    navDesktopItemAnchor.appendChild(navDesktopItemAnchorIcon);
    navDesktopItemAnchor.appendChild(navDesktopItemSpan);
    navDesktopItem.appendChild(navDesktopItemAnchor);
    navDesktopList.appendChild(navDesktopItem);
}); //end of forEach 

navDesktop.appendChild(navDesktopList);


// nav mobile start

const navMobile = document.getElementById("navMobile");
const btnMenu = document.getElementById("btnMenu");
const navBtnClose = document.getElementById("navBtnClose");

const navMobileList = document.createElement("ul");
navMobileList.classList.add("nav-mobile-list");


navItems.forEach((navItem) =>{
    const navMobileListItem = document.createElement("li");
    const navMobileListItemAnchor = document.createElement("a");
    navMobileListItemAnchor.innerText = navItem.name;

    //append
    navMobileListItem.appendChild(navMobileListItemAnchor);
    navMobileList.appendChild(navMobileListItem);
}); // end of forEach

navMobile.appendChild(navMobileList);

// event name, callback function
btnMenu.addEventListener("click", () => {
    navMobile.classList.add("active");
}); //end of event listener

// event name, callback function
navBtnClose.addEventListener("click", () => {
    navMobile.classList.remove("active");
}); //end of event listener
