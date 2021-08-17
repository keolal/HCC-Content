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



// Back Button

if (this.mainPlayList.get('selectedIndex')>0){
    this.mainPlayList.set('selectedIndex', this.mainPlayList.get('selectedIndex')-1);
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
}
