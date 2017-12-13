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
    }, 3000)

}

function winner(option) {
	let index = squareWinIndex(option) !== -1 ? squareWinIndex(option) : winRandom();

	return { index	: index, square	: squares[index] }
}

function squareWinIndex(win) {
	return squares.findIndex(function(row){
		return row.name === (win === 'object' ? win.win : win) || row.number === (win === 'object' ? win.win : win)
	});
}

function neddlesIndex(deg) {
	return arrows.findIndex(function(arrow, index, arrowsFind){
		return arrow >= deg && arrowsFind[index + 1] < deg;
	});
}

function winRandom() {
	return Math.floor(Math.random() * (38 - 0 + 1)) + 0;
}

function winDeg(min, max) {
	return Math.random() * ((max - 1) - (min + 1) + 1) + (min + 1);
}

function checkOptions(options) {
	if(
		typeof options === 'string' 	||
		typeof options === 'undefined'	||
		typeof options === 'object'
	){
		let square = winner(
			(
				typeof options === 'string'
			) ? options : (
				typeof options === 'undefined' ||
				(typeof options === 'object' && !options.hasOwnProperty('win')) ?
				winRandom() : options.win
			)
		);

		return options = $.extend({}, typeof options === 'object' ? options : {},
			{
				square	: square.square,
				name	: square.square.name,
				index	: square.index,
				deg		: winDeg(square.square.position.start, square.square.position.end)
			}
		);
	} else { return false; }
}

function spin(win) {
	let turns = 1;
	let $elem = $('.roulette');

	let preview = 0;
	let gradosActual;
	let gradosPreview;
	let idePreview = 37;

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
						(idePreview === 360 && gradosActual >= 0 && gradosActual <= 9.473684210526316)
					) {
						$('.arrow').css({transition: 'all linear .03s'}).addClass('move');

						setTimeout(function(){
							$('.arrow').css({transition: 'all linear .2s'}).removeClass('move');
						}, 120);
					} else if(gradosActual >= 350.5263157894738 && gradosActual <= 361) {
						$('.arrow').css({transition: 'all linear .2s'}).removeClass('move');
					}

					$('.winner').css({background: colors[squares[ide].color]}).text(squares[ide].number);

					$elem.css({ transform: 'rotate(' + now + 'deg)' });

					preview = now;
					idePreview = squares[ide].position.end;
				},
				complete: function() {
					resolve(win)
				}
			});
		} catch (error) {

		}
	})
}

// INICIAR LOOP
document.getElementById('loop').play();
document.getElementById('loop').loop = true;
