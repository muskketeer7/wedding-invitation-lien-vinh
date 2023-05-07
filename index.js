

$(document).ready(function () {

    function windownStart() {
        setTimeout(() => {
            window.scrollTo(0, 0);
            var url_string = window.location.href;
            var url = new URL(url_string);
            var name = url.searchParams.get("name");
            document.getElementById("name").innerText = name;
        }, 100);
    }

    var audio = true;
    var myAudio = new Audio('./audio/yeu-em-hon-moi-ngay-andiez.mp3');
    myAudio.loop = true;

    function actionAudio() {
        audio = !audio;

        const contentAudio = $('.iconVolume ion-icon');
        const volumeMute = 'volume-mute';
        const volumeUnMute = 'volume-high';

        if (audio) {
            myAudio.play();
            contentAudio[0].name = volumeUnMute;
        } else {
            myAudio.pause();
            contentAudio[0].name = volumeMute;
        }
    }

    $('div.iconVolume').on('click', actionAudio);

    setTimeout(() => {
        $('.actionAudio p').animate({
            width: '45px',
            'font-size': '0'
        }, 2300);
        $('.actionAudio p').fadeOut("slow");
    }, 2500);

    windownStart();
    actionAudio();
});
