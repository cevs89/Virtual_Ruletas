function fortune(options) {
    $('.board__content__rulete__light--1 .lights.lights--child18 .lights__light').css('display', 'none');

    $('.spin').addClass('spinner');

    TweenLite.to(
        '.spin', 0, {
            css: { transform: 'scale(0)' },
            ease: 'easeInOut'
        }
    );

    // Posicionar la arrow
    $('.arrow').addClass('spinner');
    $('.winner').removeClass('spinner');

    // Iniciar Cuenta atras
	$('.countdown').addClass('go');

	document.getElementById('loop').volume = 0;
	document.getElementById('countdown').play();

    setTimeout(() => {

		document.getElementById('countdown').pause();
		document.getElementById('countdown').currentTime = 0;

		document.getElementById('loop').volume = 0.6;

		document.getElementById('rullete').play();

        $('.countdown').removeClass('go');
        $('.diamond').removeClass('fash').addClass('spinner');

    $('.winner').css({ background: colors[0] }).text('').addClass('spinner');
		$('.arrow').css({ transition: 'initial' });

        spin(options).then(function(winnerSquare){
            $('.diamond').addClass('fash').removeClass('spinner');
            $('.winner').css({ background: colors[winnerSquare.color] }).text(winnerSquare.number).addClass('win');

            setTimeout(function(){
                $('.winner').removeClass('win');
                $('.arrow').css({ transition: 'all ease 2s' }).removeClass('spinner');
                $('.diamond').removeClass('fash');

                $('.board__content__rulete__light--1 .lights.lights--child18 .lights__light').css('display', 'block');

                TweenLite.to(
                    '.spin', 1, {
                        css: { transform: 'scale(1)' },
                        ease: 'easeInOut'
                    }
				);

				document.getElementById('rullete').pause();
				document.getElementById('rullete').currentTime = 0;

				document.getElementById('loop').volume = 1;

				spinning = false;

            }, 5000);

        })
    }, 3000);

}

function spin(win) {
	let turns = 1;
	let $elem = $('.roulette');

	let preview = 0;
	let gradosActual;
	let gradosPreview;
	let idePreview = 37;
	let squareWin;

	return new Promise((resolve, reject) =>{
		try {
			$({ deg: 0 }).animate({ deg: (8 * 360) + win }, {
				duration: 31000,
				easing: 'easeOutExpo',
				step: function(now) {
					let ide;

					if (now > (360 * turns)) {
						gradosPreview = 360 - ((360 * turns) - preview);

						turns++;
					} else {
						gradosPreview = 360 - ((360 * turns) - preview);
					}

					gradosActual = 360 - ((360 * turns) - now);

					ide = squares.findIndex(function(square){
						return (gradosActual >= square.position.start) && (gradosActual <= square.position.end)
					});

					if (
						gradosActual > idePreview ||
						(idePreview === 360 && gradosActual >= 0 && gradosActual <= 9.72972972972973)
					) {
						$('.arrow').css({transition: 'all linear .03s'}).addClass('move'); console.log('move')

						setTimeout(function(){
							$('.arrow').css({transition: 'all linear .2s'}).removeClass('move');
						}, 120);
					} else if(gradosActual >= 350.5263157894738 && gradosActual <= 361) {
						$('.arrow').css({transition: 'all linear .2s'}).removeClass('move');
					}

					squareWin = squares[ide];

					$('.winner').css({background: colors[squares[ide].color]}).text(squares[ide].number);

					$elem.css({ transform: 'rotate(' + now + 'deg)' });

					preview = now;
					idePreview = squares[ide].position.end;
				},
				complete: function() {
					resolve(squareWin)
				}
			});
		} catch (error) {

		}
	})
}

// INICIAR LOOP
document.getElementById('loop').play();
document.getElementById('loop').loop = true;

/* MINIMIZAR, MAXIMIZAR el tablero */
var scaleBoard = 1;

function zoomMin() {
    if (scaleBoard > 0.7 && scaleBoard < 2 ) {
        scaleBoard -= 0.1;

        $('.board__content__rulete').css({ transform: 'scale('+ scaleBoard +')'});
    }
}
function zoomMax() {
    if (scaleBoard > 0.6 && scaleBoard < 1.9 ) {
        scaleBoard += 0.1;

        $('.board__content__rulete').css({ transform: 'scale('+ scaleBoard +')'});
    }
}

$(window).on('keydown', function(e){
    switch (e.keyCode) {
        case 109: // -
            zoomMin();
            break;
        case 107: // +
            zoomMax();
            break;
    }
});

$('#min').on('click', zoomMin)
$('#max').on('click', zoomMax)

/*FULL SCREEN*/
fullscreen = function(e){
      if (e.webkitRequestFullScreen) {
        e.webkitRequestFullScreen();
      } else if(e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
      }
  }
document.getElementById('fullscreen').onclick = function(){
    fullscreen(document.getElementById('board'));
}
