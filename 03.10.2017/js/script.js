// $(document).ready(function () {
//         console.log('document ready')
//         $('img').delay(5000).fadeOut();
//         $('#load').delay(5000).fadeOut('slow');
//         $('body').delay(5000).css({ 'overflow': 'visible' });

//         setTimeout(function () {
//                 var i = 0;
//                 setInterval(function () {
//                         if (i < 250) {
//                                 i++;
//                                 $('.netice').text(i);
//                         }
//                         else {
//                                 clearInterval();
//                         }

//                 }, 1);

//         }, 5500);

// });


$(window).on('load', function () {
        console.log('window load')
        $('img').delay(1500).fadeOut();
        $('#load').delay(1500).fadeOut('slow');
        $('body').delay(1500).css({ 'overflow': 'visible' });

        var reftime = 30;

        var fintime = 3000;

        var count = 2500;

        setTimeout(function () {

                var i = 25;

                var j = 2.55;

                var b=0.16

                var c=15;

                var int = setInterval(function () {
                        reftime += 30;

                        // console.log('step');

                        if (reftime <= fintime) {
                                console.log('step1');
                                i=i+25;
                                j=j+2.55;
                                b=b+0.16;
                                c=c+15;
                                $('.netice').text(i);
                                $('.netice1').text(parseInt(j));
                                $('.netice2').text(parseInt(b));
                                $('.netice3').text(parseInt(c));
                        }

                        else {
                                console.log('step2');
                                clearInterval(int);

                        }

                }, reftime);

        }, 2000)

});

// i += 100;

// $('.netice').text(i);

                                // $('.netice1').text(i);


