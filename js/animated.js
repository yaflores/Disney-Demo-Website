const categories = [
    {
        name: "Big Hero 6",
        slug: "big-hero-6"
    },
    {
        name: "Finding Dory",
        slug: "finding-dory"
    },
    {
        name: "Lightyear",
        slug: "lightyear"
    },
    {
        name: "Strange World",
        slug: "strange-world"
    },
    {
        name: "Tangled",
        slug: "tangled"
    },
    {
        name: "Up",
        slug: "up"
    }
];

const categoriesRow = document.getElementById("categoriesRow");

categories.forEach((category)=>{
    // console.log(category);
    const categoryItem = document.createElement("article");
    categoryItem.classList.add("category-item");
    
    const categoryLogo = document.createElement("img");
    categoryLogo.src = `assets/other/${category.slug}.jpg`;
    categoryLogo.alt = `${category.name} logo`;

    categoryItem.appendChild(categoryLogo);

    categoriesRow.appendChild(categoryItem);
}); // end of forEach 