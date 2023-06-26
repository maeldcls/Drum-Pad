window.addEventListener("keydown", (e)=>{
     playSound(e);

})


function playSound(e){
    let sound;
    let data;
    let box;
    //recherche la touche qui a été pressée
    switch (e.key){
        case 'a':
            data="65";
            break;
        case 'z':
            data="90";
            break;
        case'e':
            data="69";
            break;
        case 'q':
            data="81";
            break;
        case's':
            data="83";
            break;
        case 'd':
            data="68";
            break;
        case 'w':
            data="87";
            break;
        case'x':
            data="88";
            break;
        case 'c':
            data="67";
            break;
    }
    sound = document.querySelector('audio[data-key="' + data + '"]');
    sound.currentTime = 0;
    //joue le son de la touche pressée
    sound.play();

    //change l'affichage de la case de l'intrument joué
    box = document.querySelector('div[data-key="' + data + '"]')
    box.classList.add('playing');
    setTimeout(function(){
        box.classList.remove('playing');
    }, 250);

}

