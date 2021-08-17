// Switch between English and Hawaiian (Buttons)
var language = tour.getLocale();  
var currentSlide = this.mainPlayList.get('selectedIndex');
var captionPage = '';

if (language == "en-US"){
    var captionPage = '../content/english/captions/' + currentSlide + '.html';
	this.getComponentByName('CaptionsFrame').set('url', captionPage);
    console.log(captionPage);
	} else {
    var captionPage = '../content/hawaiian/captions/' + currentSlide + '.html';
	this.getComponentByName('CaptionsFrame').set('url', captionPage);
    console.log(captionPage);
}


var language = tour.getLocale();  

if (language == "en-US"){
	if(this.getGlobalAudio(this.audio_691A23B4_4076_2675_41C0_98854CB06CEB).get('state') == 'playing') { 
        this.pauseGlobalAudio(this.audio_691A23B4_4076_2675_41C0_98854CB06CEB); 
    } else { 
        var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_691A23B4_4076_2675_41C0_98854CB06CEB, true, undefined, false); 
    }
} else {
	if(this.getGlobalAudio(this.audio_CF8885EA_DB5F_9827_41E7_94715581FFEC).get('state') == 'playing') { 
        this.pauseGlobalAudio(this.audio_CF8885EA_DB5F_9827_41E7_94715581FFEC); 
    } else { 
        var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_CF8885EA_DB5F_9827_41E7_94715581FFEC, true, undefined, false); 
    }
}

// Enlarge Map
var container = this.getComponentByName('CampusMap');
var currentHeight = 282;
var currentWidth = 550;
var screenRatio = window.innerWidth / window.innerHeight;
var vSpeed =80;
var hSpeed = vSpeed * screenRatio;

var hInter = setInterval(function(){
    currentWidth = currentWidth + hSpeed;
    container.set('width', currentWidth);
    if (currentWidth >= window.innerWidth) { clearInterval (hInter);
    container.set('width', window.innerWidth);}

} ,1);

var vInter = setInterval(function(){
    currentHeight = currentHeight + vSpeed;
    container.set('height', currentHeight);
    if (currentHeight >= window.innerHeight) { clearInterval (vInter);
    container.set('height', window.innerHeight);}
} ,1);

this.getComponentByName('ExpandMap').set('visible', false);
this.getComponentByName('ShrinkMap').set('visible', true);
this.getComponentByName('MapBackground').set('visible', true); 

// Shrink Map
var container = this.getComponentByName('CampusMap');
var currentHeight = window.innerHeight;
var currentWidth = window.innerWidth;
var screenRatio = window.innerWidth / window.innerHeight;
var vSpeed = 80;
var hSpeed = vSpeed * screenRatio;

var hInter = setInterval(function(){
    currentWidth = currentWidth - hSpeed;
    container.set('width', currentWidth);
    if (currentWidth <= 550) { clearInterval (hInter);
    container.set('width', 550);}

} ,1);

var vInter = setInterval(function(){
    currentHeight = currentHeight - vSpeed;
    container.set('height', currentHeight);
    if (currentHeight < 282) { clearInterval (vInter);
    container.set('height', 282);}
} ,1);

this.getComponentByName('ExpandMap').set('visible', true);
this.getComponentByName('MapBackground').set('visible', false); 


if (event.code == "KeyM") {
    if (mapVisible == false){
    this.getComponentByName('CampusMap').set('visible', true);
    mapVisible = true;
    } else{
    this.getComponentByName('CampusMap').set('visible', false);
    mapVisible = false;
    }
}


var currentSlide = this.mainPlayList.get('selectedIndex');
window.blazeIT.getHotspots().map(hotspot => {
const data = hotspot.get("data");
        if (!data) {
        return "Unknown name";
        }
        return hotspot.get("data").label;
        });

var currentSlide = this.mainPlayList.get('selectedIndex');
console.log(currentSlide);


window.blazeIT.getHotspots().map(hotspot => {
    const data = hotspot.get("data");
    if (!data) {
    return "Unknown name";
    }
    return hotspot.get("data").label;
    });



    focusMethod = function getFocus() {
    var container = this.getComponentByName('CampusMap');
    container.focus();
      }


function test(){
    var testWindow = this.getComponentByName('Menu');
    console.log(testWindow);
}




// Map Functionality

var container = this.getComponentByName('CampusMap');
var containerWidth = container.get('width');
var currentHeight = window.innerHeight;
var currentWidth = window.innerWidth;
var screenRatio = window.innerWidth / window.innerHeight;
var defaultMapHeight = 384;
var defaultMapWidth = 750;
var vSpeed = 80;
var hSpeed = vSpeed * screenRatio;


function shrinkMapOnPanoChange(){
    if (containerWidth > defaultMapWidth){
    var hInter = setInterval(function(){
        currentWidth = currentWidth - hSpeed;
        container.set('width', currentWidth);
        if (currentWidth <= defaultMapWidth) { clearInterval (hInter);
        container.set('width', defaultMapWidth);}

    } ,1);

    var vInter = setInterval(function(){
        currentHeight = currentHeight - vSpeed;
        container.set('height', currentHeight);
        if (currentHeight < defaultMapHeight) { clearInterval (vInter);
        container.set('height', defaultMapHeight);}
    } ,1);

    this.getComponentByName('ExpandMap').set('visible', true);
    this.getComponentByName('MapBackground').set('visible', false); 
    }else{

    }
}

function enlargeMap(){
    var currentHeight = defaultMapHeight;
    var currentWidth = defaultMapWidth;

    var hInter = setInterval(function(){
        currentWidth = currentWidth + hSpeed;
        container.set('width', currentWidth);
        if (currentWidth >= window.innerWidth) { clearInterval (hInter);
        container.set('width', window.innerWidth);}

    } ,1);

    var vInter = setInterval(function(){
        currentHeight = currentHeight + vSpeed;
        container.set('height', currentHeight);
        if (currentHeight >= window.innerHeight) { clearInterval (vInter);
        container.set('height', window.innerHeight);}
    } ,1);

    this.getComponentByName('ExpandMap').set('visible', false);
    this.getComponentByName('ShrinkMap').set('visible', true);
    this.getComponentByName('MapBackground').set('visible', true); 
}

function shrinkMap(){
    var hInter = setInterval(function(){
        currentWidth = currentWidth - hSpeed;
        container.set('width', currentWidth);
        if (currentWidth <= 550) { clearInterval (hInter);
        container.set('width', 550);}
    
    } ,1);
    
    var vInter = setInterval(function(){
        currentHeight = currentHeight - vSpeed;
        container.set('height', currentHeight);
        if (currentHeight < 282) { clearInterval (vInter);
        container.set('height', 282);}
    } ,1);
    
    this.getComponentByName('ExpandMap').set('visible', true);
    this.getComponentByName('MapBackground').set('visible', false); 
}