window.addEventListener('click',function(e){
    console.log('Clientx:' + e.clientX + ' - ClientY:' + e.clientY); //windows ekranda hansi yerde durdugunu
    console.log('Screenx:' + e.screenX + ' - ScreenY:' + e.screenY); //butov notbuk ekraninda yerini gosterir.
    console.log('Offsetx:' + e.offsetX + ' - OffsetY:' + e.offsetY);
    console.log('Pagex:' + e.pageX + ' - PageY:' + e.pageY);
})