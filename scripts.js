window.addEventListener('load', loadOnStart);
var autoRotateSpeed = -2;
var autoRotateDelay = 1000;
var pictureCaption = "\"author\""


function loadOnStart() {
    
    pannellum.viewer('slide1', {
        "type": "equirectangular",
        "panorama": "images/360/Slide1.jpg",
        "autoLoad": true,
        "showControls": false,
        "mouseZoom": false,
        "draggable": false,
        "autoRotate": autoRotateSpeed,
        "author": "Picture: View of our Backyard in Waimea Hawaii"

    });
    
    pannellum.viewer('test', {
        "type": "equirectangular",
        "panorama": "images/360/Slide1.jpg",
        "autoLoad": true,
        "showControls": false,
        "mouseZoom": false,
        "draggable": false,
        "autoRotate": autoRotateSpeed,
        "author": "Picture: View of our Backyard in Waimea Hawaii"
    });
}
