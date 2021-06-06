// let bannerIndex = 0;
// bannerSlides();

// function bannerSlides(){
//     let i;
//   let banners = document.getElementsByClassName("banner-Items");
  
//   for (i = 0; i < banners.length; i++) {
//     banners[i].style.display = "none";  
//   }
//   bannerIndex++;
//   if (bannerIndex > banners.length) {bannerIndex = 1}    
  
//   banners[bannerIndex-1].style.display = "block"; 
//   setTimeout(bannerSlides, 2000); 
    
// }
let startValue = 0;

switchBanner();
function switchBanner(){
  let i;
  let allBanners = document.getElementsByClassName("banner-Items");

  for(i=0 ; i< allBanners.length ;i++){
    allBanners[i].style.display = "none";
  }
  startValue++;
  if (startValue > allBanners.length) {
    startValue = 1;
  }
  allBanners[startValue-1].style.display = "Block";
  setTimeout(switchBanner,2000);
}