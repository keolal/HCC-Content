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
var currentHeight = mapDefaultHeight;
var currentWidth = mapDefaultWidth;
var screenRatio = window.innerWidth / window.innerHeight;
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
var hSpeed = vSpeed * screenRatio;

var hInter = setInterval(function(){
    currentWidth = currentWidth - hSpeed;
    container.set('width', currentWidth);
    if (currentWidth <= mapDefaultWidth) { clearInterval (hInter);
    container.set('width', mapDefaultWidth);}

} ,1);

var vInter = setInterval(function(){
    currentHeight = currentHeight - vSpeed;
    container.set('height', currentHeight);
    if (currentHeight < mapDefaultHeight) { clearInterval (vInter);
    container.set('height', mapDefaultHeight);}
} ,1);

this.getComponentByName('ExpandMap').set('visible', true);
this.getComponentByName('MapBackground').set('visible', false); 


//Shrink Map on Pano Change
var container = this.getComponentByName('CampusMap');
var containerWidth = container.get('width');
if (containerWidth < mapDefaultWidth){
    var currentHeight = window.innerHeight;
    var currentWidth = window.innerWidth;
    var screenRatio = window.innerWidth / window.innerHeight;
    var hSpeed = vSpeed * screenRatio;

    var hInter = setInterval(function(){
        currentWidth = currentWidth - hSpeed;
        container.set('width', currentWidth);
        if (currentWidth <= 0) { clearInterval (hInter);}
    } ,1);

    var vInter = setInterval(function(){
        currentHeight = currentHeight - vSpeed;
        container.set('height', currentHeight);
        if (currentHeight <= 0) { clearInterval (vInter);
        container.set('visible', false);
        mapVisible = false;
        container.set('height', mapDefaultHeight);
        container.set('width', mapDefaultWidth);}
    } ,1);
}else{
    if (containerWidth > mapDefaultWidth){
        var currentHeight = window.innerHeight;
        var currentWidth = window.innerWidth;
        var screenRatio = window.innerWidth / window.innerHeight;
        var hSpeed = vSpeed * screenRatio;
    
        var hInter = setInterval(function(){
            currentWidth = currentWidth - hSpeed;
            container.set('width', currentWidth);
            if (currentWidth <= mapDefaultWidth) { clearInterval (hInter);
            container.set('width', mapDefaultWidth);}
    
        } ,1);
    
        var vInter = setInterval(function(){
            currentHeight = currentHeight - vSpeed;
            container.set('height', currentHeight);
            if (currentHeight < mapDefaultHeight) { clearInterval (vInter);
            container.set('height', mapDefaultHeight);}
        } ,1);
    
        this.getComponentByName('ExpandMap').set('visible', true);
        this.getComponentByName('MapBackground').set('visible', false); 
    }else{
    
    }
}

//Map Button
var container = this.getComponentByName('CampusMap');
var containerWidth = container.get('width');
var containerHeight = container.get('height');

if (containerWidth > window.innerWidth){
    container.set('width', window.innerWidth);
    container.set('height', window.innerHeight);
    this.getComponentByName('MapBackground').set('visible', true);
    this.getComponentByName('ExpandMap').set('visible', false);
    this.getComponentByName('ShrinkMap').set('visible', false);
}else{
    if (containerWidth == mapDefaultWidth){
      this.getComponentByName('ExpandMap').set('visible', true);
      this.getComponentByName('MapBackground').set('visible', false)
   }else{
       this.getComponentByName('ShrinkMap').set('visible', true);
       this.getComponentByName('MapBackground').set('visible', true)
   }
   
}

// M Key to Show/Hide Map
if (event.code == "KeyM") {
    if (mapVisible == false){
    this.getComponentByName('CampusMap').set('visible', true);
    mapVisible = true;
    } else{
    this.getComponentByName('CampusMap').set('visible', false);
    mapVisible = false;
    }
}

// Custom Startup Code
window.addEventListener('load', customStuff);

function customStuff() {
    mapDefaultHeight = 463;
    mapDefaultWidth = 900;
    vSpeed = 80;
    mapVisible = false;
    var s = document.createElement("script"); 
    s.src = "http://code.jquery.com/jquery-latest.min.js"; 
    s.onload = function(e){ /* now that its loaded, do something */ };  
    document.head.appendChild(s);  
}



var x = setInterval(function(){ 
	if(typeof jQuery !== 'undefined'){ 
		console.log("jQuery Imported")
	} 
}, 50);  



// Delay Function
function timeFunction() {
    setTimeout(function(){ 
        if (containerWidth >= mapDefaultWidth){
        }else{
            container.set('width', mapDefaultWidth);
            container.set('height', mapDefaultHeight);
        }
    }, 5000);
}
this.getComponentByName('ShrinkMap').set('visible', false);
this.getComponentByName('MapBackground').set('visible', false);
timeFunction();