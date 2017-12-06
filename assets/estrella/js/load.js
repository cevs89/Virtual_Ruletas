(function($){
    // INICIAL
    TweenLite.to('.roulette', 0, { css: { transform: 'scale(0)' } });

    // Animacion inical de ruleta
    TweenLite.to(
        '.roulette', 2, {
            css: { transform: 'scale(1)' },
            ease: 'Elastic.easeOut'
        }
    );

    setTimeout(function(){
        let times = 100;

        $('.roulette').css({ 'transition': 'initial' });

        TweenLite.to(
            '.logo', 5, {
                css: { transform: 'scale(1)' },
                ease: 'Elastic.easeOut'
            }
        );

        setTimeout(function(){
            $('.logo').addClass('load');
        }, 5000);

        $('.diamond').each(function(index){
            let that = this;

            setTimeout(function(){
                $(that).addClass('load');

                if (index === $('.diamond').length - 1 ) {
                    TweenLite.to(
                        '.spin', 1, {
                            css: { transform: 'scale(1)' },
                            ease: 'easeInOut'
                        }
                    );
                }
            }, times);

            times += 100;
        });

    }, 1000);

}(window.jQuery));
