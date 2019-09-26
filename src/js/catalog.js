(function($) {
    "use strict"
    $(function() {

        var __items = {
            item: '.catalog-home__aside__item',
            list: '.catalog-home__aside__item__list'
        }

        var __classes = {
            open: 'is--open'
        }

        $(__items.list).hide()
        $(__items.item).attr('data-open', 'false')

        $(__items.item).on('click', function() {
            var _this = $(this)
            var _thisList = $(_this).children(__items.list)
            $(_this).toggleClass(__classes.open)
            $(__items.item).not(_this).removeClass(__classes.open)
            $(_this).children(__items.list).slideToggle()
            $(__items.list).not(_thisList).slideUp()
        })

        var filtersBlocks = $('.catalog-banner__filters__block')

        for(var i = 0; i < filtersBlocks.length; i++) {
            var thisMin = $(filtersBlocks[i]).data('min'),
                thisMax = $(filtersBlocks[i]).data('max'),
                thisSlider = $(filtersBlocks[i]).find('.slider')

                $(thisSlider).slider({
                    value: thisMin,
                    min: thisMin,
                    max: thisMax,
                    range: true,
                    values: [ thisMin, thisMax ],
                    slide: function( event, ui ) {
                        $('.catalog-banner__filters__block__input__field input[data-id="' + $(this).data('id') + '"]').val('от ' + ui.values[ 0 ] + ' до ' + ui.values[ 1 ])
                        console.log(ui.values[0])
                    }
                });

            IMask(document.getElementById('cf-field_' + (i + 1)), {
                mask: Number,
                min: thisMin,
                max: thisMax,
                thousandsSeparator: ' '
            })
        }

        function inputOnChange(item) {
            var slider = $('.catalog-banner__filters__block').find('.slider[data-id="' + item.id + '"]')
            var value = item.val

            if(value > item.val) value = item.max
            else if(value < item.val) value = item.min

            slider.slider('value', value)
        }

        $('.catalog-banner__filters__block__input__field input').bind('keyup mouseup', function() {
            var thisInput = $(this)[0]
            var _this = {
                id: $(thisInput).data('id'),
                min: $(thisInput).attr('min'),
                max: $(thisInput).attr('max'),
                val: $(thisInput).val()
            }
            inputOnChange(_this)
        })

    })
})(jQuery);