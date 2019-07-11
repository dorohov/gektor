(function($) {
    "use strict"
    $(function() {

        numberAnimation()
        startAnimationBlocks()
        startAnimationGraphs()

        function numberAnimation() {
            var numsItems = $('.is--animate-num')
            numsItems.each(function() {
                var thisNumber = $(this)
                var thisNumberDataNum = $(this).data('num')
                var thisToggle = true

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisNumber.animateNumber({
                        number: thisNumberDataNum
                    }, {
                        easing: 'swing',
                        duration: 1000
                    });
                    thisNumber.addClass('is--finish')
                }
            })
        }

        function startAnimationBlocks() {
            var blockItems = $('.is--animate-block')
            blockItems.each(function() {
                var thisBlock = $(this)
                var thisAnim = $(this).data('animname')
                var thisDelay = $(this).data('animdelay')

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('animated')
                        .addClass(thisAnim)
                        .css({
                            "-webkit-animation-delay": thisDelay + 's',
                            "-moz-animation-delay": thisDelay + 's',
                            "-o-animation-delay": thisDelay + 's',
                            "animation-delay": thisDelay + 's'
                        })
                }
            })
        }

        function startAnimationGraphs() {
            var blockItems = $('.is--animate-graph')
            blockItems.each(function() {
                var thisBlock = $(this)

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('is--anim')

                    thisBlock.siblings('.is--animate-graph-circle')
                            .addClass('is--anim')
                }
            })
        }

        $(document).scroll(function() {
            numberAnimation()
            startAnimationBlocks()
            startAnimationGraphs()
        })

        $('.__dd__cursor').on('mousemove', function(e) {
            var xPos = e.clientX
            $('.__dd__block-on__or.is--on').css({
                transform: 'translateX(-' + xPos / 40 + 'px)'
            })
            $('.__dd__block-on__or.is--tw').css({
                transform: 'translateX(' + xPos / 80 + 'px)'
            })
            $('.__dd__block-on__or.is--th').css({
                transform: 'translateX(-' + xPos / 110 + 'px)'
            })
        })

    })
})(jQuery);