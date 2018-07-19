window.onload = function () {
    var tlOne, banner, background, backgroundimageOne, FrameOne, cta, bgexit;
    var tlOne = new TimelineLite();
    var tlTwo = new TimelineLite();
    var banner = document.getElementById("banner");
    var FrameOne = document.getElementById("FrameOne");
    var FrameOneImage = document.getElementById("FrameOneImage");
    var copyOne = document.getElementById("copyOne");
    var copyTwo = document.getElementById("copyTwo");
    var copyThree = document.getElementById("copyThree");
    var copyFour = document.getElementById("copyFour");

    var printerBottom = document.getElementById("printerBottom");
    var printer = document.getElementById("printer");
    var cta = document.getElementById("cta");
    var FrameTwoImage = document.getElementById("FrameTwoImage");
    
    function initBannerAdd() {
        setPositionsObjects();
        animateAdNew();
    }

    function setPositionsObjects() {

    }
    
    function animateAdNew() {
        tlTwo.from(FrameTwoImage,7, {y:-810}, "-=0")
        
        tlOne.to(copyOne,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(copyOne,1, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        
        .to(copyTwo,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(copyTwo,1, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        
        .to(copyThree,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(copyThree,1, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        
        .to(copyFour,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        
        .to(printerBottom,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        .to(FrameOneImage,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        .to(printer,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        .to(FrameTwoImage,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        .to(cta,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(cta,3, {delay: 0, opacity:1, onComplete:restartAnimation}, "-=0")
        
        tlOne.totalDuration(15);
    }
    

    ////timer
    var myVar = setInterval(function () {myTimer()}, 1000);
    function myTimer() {
        var d = new Date();
        //tlOne.totalDuration(10);
    }

    var animationLoop = 1;
    function restartAnimation() {
        if (animationLoop === 1) {
            animationLoop = animationLoop + 1;
            //tlOne.restart();
                
            //FrameOneImage.style.backgroundPosition = "-0px 0px";
            
            
            ///restart spritesheet
            //var elm = this,
            //var newone = elm.cloneNode(true);
            //elm.parentNode.replaceChild(newone, elm);
            
             //FrameOneImage.classList.remove("play");
             //FrameOneImage.classList.add("play");
            //document.getElementById("FrameOneImage").style.backgroundPosition = "0px 0px";
            
            //FrameOneImage.style.backgroundPosition = "0px 0px";
           // FrameOneImage.style.background-position="0";
            //FrameOneImage.style.webkitAnimationPlayState="paused";
            //FrameOneImage.style.webkitAnimationPlayState="running";
            
            
        }
    }
    initBannerAdd(); 
};