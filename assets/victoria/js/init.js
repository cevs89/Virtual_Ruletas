function lightsCreate(lg) {
	let boardContentRulete = document.querySelector('.board__content__rulete__light' + (lg ? '--2' : ''));
	let lights = [];
	let time = 100;

	for (let i = 0; i <= 17; i++) {
		lights[i] = i+1;
	}

	for (let i = 1; i <= 18; i++) {

		setTimeout(function(){
			const light = getRandomInt(0, lights.length);

			boardContentRulete.innerHTML = `
				${ boardContentRulete.innerHTML }
				<div class="lights lights--child${lights[light]}">
		            <div class="lights__light"></div>
		            <div class="lights__light"></div>
		        </div>
			`;

			[].forEach.call(document.querySelectorAll(`.lights--child${lights[light]} .lights__light`), function(el) {
				el.classList.add('load');
			});

			lights.splice(light, 1);
			
		}, time);

		if (i === 18) {
			setTimeout(function(){
				TweenLite.to(
			            '.spin', 5, {
			                css: { transform: 'scale(1)' },
			                ease: 'Elastic.easeOut'
			            }
			        );
			}, time + 1000);
		}

		time += 200;
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function lightsAnimate() {
	setInterval(function(){
		if (!spinning) {
			for (let i = 1; i <= 18; i++) {
				const tempo = getRandomInt(1, 9);
				[].forEach.call(document.querySelectorAll(`.lights--child${i} .lights__light`), function(el) {
					if (!el.classList.contains('animate1')) {
						el.style.animationDuration = `.${tempo}s`;
					} else {
						el.style.animationDuration = '1.5s';
					}

					el.classList.toggle('animate1')
				});
			}
		}
	}, 10000);
}

window.addEventListener('load', function() {
	TweenLite.to(
        '.roulette', 2, {
            css: { transform: 'scale(1)' },
            ease: 'Elastic.easeOut',
            onComplete : function(){
        		lightsCreate();
        		lightsCreate(true);
				lightsAnimate();


				setTimeout(function(){
			        let times = 100;

			        $('.roulette').css({ 'transition': 'initial' });

    			}, 1000);

            }
        }
    );


});

