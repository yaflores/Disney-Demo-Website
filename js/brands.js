const brands = [
    {
        name: "Disney",
        slug: "disney"
    },
    {
        name: "Pixar",
        slug: "pixar"
    },
    {
        name: "Marvel",
        slug: "marvel"
    },
    {
        name: "Star Wars",
        slug: "star-wars"
    },
    {
        name: "National Geographic",
        slug: "national-geographic"
    }
];

const brandsRow = document.getElementById("brandsRow");

brands.forEach((brand)=>{
    //console.log(brand) 
    const brandItem = document.createElement("article");
    brandItem.classList.add("brands-item");
    brandItem.tabIndex = 0;
    
    const brandLogo = document.createElement("img");
    brandLogo.src = `assets/logos/${brand.slug}.png`;
    brandLogo.alt = `${brand.name} logo`;

    brandItem.appendChild(brandLogo);

    const brandVideo = document.createElement("video");
    brandVideo.classList.add("brands-video"); 
    brandVideo.width = 320;
    brandVideo.height = 240;
    brandVideo.loop = true;
    brandVideo.autoplay = true;
    brandVideo.muted = true;

    const brandVideoSource = document.createElement("source");
    brandVideo.src = `assets/videos/${brand.slug}.mp4`; 
    brandVideoSource.type = "video/mp4";
    
    // stick the source into the video -- remember append is just adding into the variable in the beginning 
    brandVideo.appendChild(brandVideoSource);

    // stick the video into the article
    brandItem.appendChild(brandVideo);

    // stick the article into the row 
    brandsRow.appendChild(brandItem);
}); // end of forEach 