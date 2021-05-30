bannerSlider();

function bannerSlider(){
    let banners = document.getElementsByClassName('banner-Items');
    for(i = 0; i <= banners.length;i++){
        banners[i].style.display = "none";
    }
}