let bannerIndex = 0;
bannerSlides();

function bannerSlides(){
    let i;
  let banners = document.getElementsByClassName("banner-Items");
  
  for (i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";  
  }
  bannerIndex++;
  if (bannerIndex > banners.length) {bannerIndex = 1}    
  
  banners[bannerIndex-1].style.display = "block"; 
  setTimeout(bannerSlides, 2000); 
    
}
