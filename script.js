$(document).ready(function () {
    var value = 0;
    var countClicked = 0;
    var clicked = false;
    function getPosition(position) {
        if (position <= 30) {
            $('.congratulation__note').text('Bé quay trúng: lì xì "500.000VNĐ" + "1 cái ôm, 2 cái thơm má".');
        }
        else if (position <= 90) {
            $('.congratulation__note').text('Bé quay trúng: lì xì "400.000VNĐ" + "2 hôn môi, 1 nòng cháy".');
        }
        else if (position <= 150) {
            $('.congratulation__note').text('Bé quay trúng: lì xì "300.000VNĐ" + "làm nệm của bé nguyên 1 ngày".');
        } else if (position <= 210) {
            $('.congratulation__note').text('Bé quay trúng: lì xì "1.000.000VNĐ" + " thơm bé nhỏ 30p, 2 nòng cháy".');
        } else if (position <= 270) {
            $('.congratulation__note').text('Bé quay trúng: lì xì "600.000VNĐ" + "dắt bé đi ăn nướng hàn quốc".');
        }
        else if (position <= 330) {
            $('.congratulation__note').text('Bé quay trúng: lì xì "700.000VNĐ" + "đi chùa cầu may với anh".');
        }
        $('.popup').removeClass('active');
        $('.congratulation').fadeIn();
        clicked = false;
        countClicked = 0;
    }
    $('.wheel__button').click(function () {
        if (clicked == true) {
            countClicked++;
            // if (countClicked <= 2) {
            //     $('.popup__note').text("NGỪNG PHÁ ĐI MEN!");
            // }
            // else if (countClicked <= 4)
            //     $('.popup__note').text("LÌ QUÁ NGHEN!");
            // else
            //     $('.popup__note').text("BÓ TAY, RÁNG PHÁ BANH NÚT NHA!");
            if (!$('.popup').hasClass('active'))
                $('.popup').addClass('active');
        }
        else {
            let random = Math.floor((Math.random() * 360) + 720);
            value += random;
            console.log(random % 360);
            console.log(value % 360);
            $(".wheel__inner").css("transform", `rotate(${value}deg)`);
            setTimeout(() => {
                //Chia lấy dư cho 360 để lấy lượng quay không hoàn thành một vòng 360deg
                getPosition(value % 360);
            }, 5000);
        }
        clicked = true;
    })
    $('.congratulation__close').click(function () {
        $('.congratulation').fadeOut();
    })
    $('.congratulation').click(function (event) {
        if (event.target != this)
            return;
        $(this).fadeOut();
    })
})

