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
(function($) {
    "use strict"
    $(function() {

        $('.counter button').on('click', function() {
            var thisInput = $(this).siblings('input')
            var thisValue = thisInput.val()

            if($(this).hasClass('is--plus') && thisValue < 9999) thisValue++;
            else if($(this).hasClass('is--minus') && thisValue > 1) thisValue--;

            if(thisValue < 1 || thisValue > 9999) thisValue = 0

            thisInput.val(thisValue)
        })

    })
})(jQuery);
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
  
    if(event.keyCode == 10 && getSelectionText().length > 0) {

        if(getSelectionText().length > 50) {
            alert('Максимальная длина текста должна быть не более 50 символов')
        }else {
            var msg = prompt(getSelectionText() + '\n-------------------\nСообщить администратору сайта об ошибке. \nОставьте комментарий (не обязательно)');

            if(msg != null) {

                $.ajax({
                    url: 'send.php',
                    type: 'POST',
                    data: ''
                }).done(function(data) {

                })

                alert('Спасибо!')
            }

        }
    }

});
(function($) {
    "use strict"
    $(function() {

        function setPaddings() {

            var classes = {
                paddingLeft: '.is--c-pl',
                paddingRight: '.is--c-pr',
                height100Per: '.is--h100'
            }

            var padding = document.getElementsByClassName('navbar__inner')[0].getBoundingClientRect()
            var height = $('.navbar').innerHeight() + $('.footer').innerHeight() + 1

            $(classes.paddingLeft).css({
                paddingLeft: padding.left + 30
            })
            $(classes.paddingRight).css({
                paddingRight: padding.left + 30
            })
            $(classes.height100Per).css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })
            $("main").css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })

        }

        setPaddings()

        $(window).resize(function() {
            setPaddings()
        })

        var phoneInputs = document.getElementsByClassName('input-phone');

        if(phoneInputs.length) {
            for(var i = 0; i < phoneInputs.length; i++) {
                new IMask(
                    phoneInputs[i], {
                    mask: '+{7}(900)000-00-00'
                });
            }
        }

        svg4everybody()

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [53.020841, 36.143697],
            zoom: 17,
            controls: []
        })

        // myMap.geoObjects
        //     .add(new ymaps.Placemark([52.853721, 37.438554], {
        //         balloonContent: '303620, Орловская область, Новодеревеньковский район, п. Хомутово, ул. Строительная, 13'
        //     }, {
        //         preset: 'islands#icon',
        //         iconColor: '#0095b6'
        //     }))
    }


    })
})(jQuery);
function openModal(modalID) {
    $(modalID).modal({
        fadeDuration: 100,
        showClose: false,
    })
}

(function($) {
    "use strict"
    $(function() {

        $.modal.fadeDuration = 100
        $.modal.showClose = false

        $('a.modal-open').on('click', function(e) {
            e.preventDefault()
            var thisModalId = $(this).attr('href')
            openModal(thisModalId)
            return false;
        })

        // openModal('#modal-form')
        // openModal('#modal-success')

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        var __items = {
            overlay: '#overlay',
            mobileNavbar: '.navbar__mobile__container',
            mobileNavbarBtn: '.navbar__mobile button',
            body: 'body',
            filtersBtn: '.catalog-home__title__all.is--filters .catalog-home__title__all__text',
            filtersWrap: '.catalog-home__aside',
            filtersClose: '.catalog-home__aside__close a',
            searchPanelBtn: '.navbar__search span',
            searchPanel: '.navbar__searchbar'
        }

        var __clases = {
            openMenu: 'is--open-menu',
            openOverlay: 'is--overlay',
            openMenuBtn: 'is-active',
            openFilters: 'is--filters',
            open: 'is--open'
        }

        function toggleNavbar() {
            if(!$('body').hasClass(__clases.openMenu)) {
                openNavbar()
            }else {
                closeNavbar()
            }
        }

        function closeNavbar() {
            closeOverlay()
            $(__items.mobileNavbarBtn).removeClass(__clases.openMenuBtn)
            $(__items.body).removeClass(__clases.openMenu)
        }

        function openNavbar() {
            openOverlay()
            $(__items.mobileNavbarBtn).addClass(__clases.openMenuBtn)
            $(__items.body).addClass(__clases.openMenu)
        }

        function toggleFilters() {
            if(!$('body').hasClass(__clases.openFilters)) {
                openFilters()
            }else {
                closeFilters()
            }
        }

        function closeFilters() {
            closeOverlay()
            $(__items.body).removeClass(__clases.openFilters)
        }

        function openFilters() {
            openOverlay()
            $(__items.body).addClass(__clases.openFilters)
        }

        function openOverlay() {
            $(__items.body).addClass(__clases.openOverlay)
        }

        function closeOverlay() {
            $(__items.body).removeClass(__clases.openOverlay)
        }

        function openSearchPanel() {
            $(__items.searchPanel).addClass(__clases.open)
            $('.is--so_cls').css({
                opacity: 0
            })
        }

        function closeSearchPanel(e) {
            var targets = $(e.target).closest('.navbar__right')
            if(targets.length <= 0) {
                $(__items.searchPanel).removeClass(__clases.open)
                $('.is--so_cls').css({
                    opacity: 1
                })
            }
        }

        setBodyPadding()

        function closeAll() {
            closeNavbar()
            closeOverlay()
            closeFilters()
        }

        function setBodyPadding() {
            var pt = $('.navbar').innerHeight() + 1
            $('body').css({
                paddingTop: pt
            })
        }

        $(__items.mobileNavbarBtn).on('click', function() {
            toggleNavbar()
        })

        $(__items.overlay).on('click', function() {
            closeAll()
        })

        $(__items.filtersBtn).on('click', function() {
            toggleFilters()
        })

        $(__items.filtersClose).on('click', function() {
            closeFilters()
        })

        $(__items.searchPanelBtn).on('click', function() {
            openSearchPanel()
        })

        $(document).on('click', function(e) {
            closeSearchPanel(e)
        })
        
        $(window).resize(function() {
            setBodyPadding()
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJjb3VudGVyLmpzIiwiZXJyb3IuanMiLCJtYWluLmpzIiwibWFwLmpzIiwibW9kYWxzLmpzIiwibmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfX2l0ZW1zID0ge1xyXG4gICAgICAgICAgICBpdGVtOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2l0ZW0nLFxyXG4gICAgICAgICAgICBsaXN0OiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2l0ZW1fX2xpc3QnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX19jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICBvcGVuOiAnaXMtLW9wZW4nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKF9faXRlbXMubGlzdCkuaGlkZSgpXHJcbiAgICAgICAgJChfX2l0ZW1zLml0ZW0pLmF0dHIoJ2RhdGEtb3BlbicsICdmYWxzZScpXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5pdGVtKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgX3RoaXNMaXN0ID0gJChfdGhpcykuY2hpbGRyZW4oX19pdGVtcy5saXN0KVxyXG4gICAgICAgICAgICAkKF90aGlzKS50b2dnbGVDbGFzcyhfX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLml0ZW0pLm5vdChfdGhpcykucmVtb3ZlQ2xhc3MoX19jbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoX3RoaXMpLmNoaWxkcmVuKF9faXRlbXMubGlzdCkuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubGlzdCkubm90KF90aGlzTGlzdCkuc2xpZGVVcCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIGZpbHRlcnNCbG9ja3MgPSAkKCcuY2F0YWxvZy1iYW5uZXJfX2ZpbHRlcnNfX2Jsb2NrJylcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbHRlcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNNaW4gPSAkKGZpbHRlcnNCbG9ja3NbaV0pLmRhdGEoJ21pbicpLFxyXG4gICAgICAgICAgICAgICAgdGhpc01heCA9ICQoZmlsdGVyc0Jsb2Nrc1tpXSkuZGF0YSgnbWF4JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzU2xpZGVyID0gJChmaWx0ZXJzQmxvY2tzW2ldKS5maW5kKCcuc2xpZGVyJylcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXNTbGlkZXIpLnNsaWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXNNaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiB0aGlzTWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogdGhpc01heCxcclxuICAgICAgICAgICAgICAgICAgICByYW5nZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IFsgdGhpc01pbiwgdGhpc01heCBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2F0YWxvZy1iYW5uZXJfX2ZpbHRlcnNfX2Jsb2NrX19pbnB1dF9fZmllbGQgaW5wdXRbZGF0YS1pZD1cIicgKyAkKHRoaXMpLmRhdGEoJ2lkJykgKyAnXCJdJykudmFsKCfQvtGCICcgKyB1aS52YWx1ZXNbIDAgXSArICcg0LTQviAnICsgdWkudmFsdWVzWyAxIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVpLnZhbHVlc1swXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIElNYXNrKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZi1maWVsZF8nICsgKGkgKyAxKSksIHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IE51bWJlcixcclxuICAgICAgICAgICAgICAgIG1pbjogdGhpc01pbixcclxuICAgICAgICAgICAgICAgIG1heDogdGhpc01heCxcclxuICAgICAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvcjogJyAnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbnB1dE9uQ2hhbmdlKGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9ICQoJy5jYXRhbG9nLWJhbm5lcl9fZmlsdGVyc19fYmxvY2snKS5maW5kKCcuc2xpZGVyW2RhdGEtaWQ9XCInICsgaXRlbS5pZCArICdcIl0nKVxyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVtLnZhbFxyXG5cclxuICAgICAgICAgICAgaWYodmFsdWUgPiBpdGVtLnZhbCkgdmFsdWUgPSBpdGVtLm1heFxyXG4gICAgICAgICAgICBlbHNlIGlmKHZhbHVlIDwgaXRlbS52YWwpIHZhbHVlID0gaXRlbS5taW5cclxuXHJcbiAgICAgICAgICAgIHNsaWRlci5zbGlkZXIoJ3ZhbHVlJywgdmFsdWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuY2F0YWxvZy1iYW5uZXJfX2ZpbHRlcnNfX2Jsb2NrX19pbnB1dF9fZmllbGQgaW5wdXQnKS5iaW5kKCdrZXl1cCBtb3VzZXVwJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzSW5wdXQgPSAkKHRoaXMpWzBdXHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiAkKHRoaXNJbnB1dCkuZGF0YSgnaWQnKSxcclxuICAgICAgICAgICAgICAgIG1pbjogJCh0aGlzSW5wdXQpLmF0dHIoJ21pbicpLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAkKHRoaXNJbnB1dCkuYXR0cignbWF4JyksXHJcbiAgICAgICAgICAgICAgICB2YWw6ICQodGhpc0lucHV0KS52YWwoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0T25DaGFuZ2UoX3RoaXMpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLmNvdW50ZXIgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzSW5wdXQgPSAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dCcpXHJcbiAgICAgICAgICAgIHZhciB0aGlzVmFsdWUgPSB0aGlzSW5wdXQudmFsKClcclxuXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1wbHVzJykgJiYgdGhpc1ZhbHVlIDwgOTk5OSkgdGhpc1ZhbHVlKys7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLW1pbnVzJykgJiYgdGhpc1ZhbHVlID4gMSkgdGhpc1ZhbHVlLS07XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzVmFsdWUgPCAxIHx8IHRoaXNWYWx1ZSA+IDk5OTkpIHRoaXNWYWx1ZSA9IDBcclxuXHJcbiAgICAgICAgICAgIHRoaXNJbnB1dC52YWwodGhpc1ZhbHVlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJmdW5jdGlvbiBnZXRTZWxlY3Rpb25UZXh0KCkge1xyXG4gICAgdmFyIHRleHQgPSBcIlwiO1xyXG4gICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgICB0ZXh0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24udHlwZSAhPSBcIkNvbnRyb2xcIikge1xyXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBrZXlOYW1lID0gZXZlbnQua2V5O1xyXG4gIFxyXG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PSAxMCAmJiBnZXRTZWxlY3Rpb25UZXh0KCkubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICBpZihnZXRTZWxlY3Rpb25UZXh0KCkubGVuZ3RoID4gNTApIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9Cc0LDQutGB0LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINGC0LXQutGB0YLQsCDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0L3QtSDQsdC+0LvQtdC1IDUwINGB0LjQvNCy0L7Qu9C+0LInKVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdmFyIG1zZyA9IHByb21wdChnZXRTZWxlY3Rpb25UZXh0KCkgKyAnXFxuLS0tLS0tLS0tLS0tLS0tLS0tLVxcbtCh0L7QvtCx0YnQuNGC0Ywg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YDRgyDRgdCw0LnRgtCwINC+0LEg0L7RiNC40LHQutC1LiBcXG7QntGB0YLQsNCy0YzRgtC1INC60L7QvNC80LXQvdGC0LDRgNC40LkgKNC90LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviknKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG1zZyAhPSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdzZW5kLnBocCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6ICcnXHJcbiAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfQodC/0LDRgdC40LHQviEnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UGFkZGluZ3MoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnLmlzLS1jLXBsJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJy5pcy0tYy1wcicsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQxMDBQZXI6ICcuaXMtLWgxMDAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyX19pbm5lcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpICsgMVxyXG5cclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdMZWZ0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nUmlnaHQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5oZWlnaHQxMDBQZXIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCJtYWluXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRQYWRkaW5ncygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIHBob25lSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXQtcGhvbmUnKTtcclxuXHJcbiAgICAgICAgaWYocGhvbmVJbnB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwaG9uZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3IElNYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lSW5wdXRzW2ldLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogJyt7N30oOTAwKTAwMC0wMC0wMCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdmc0ZXZlcnlib2R5KClcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogWzUzLjAyMDg0MSwgMzYuMTQzNjk3XSxcclxuICAgICAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbXVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIG15TWFwLmdlb09iamVjdHNcclxuICAgICAgICAvLyAgICAgLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKFs1Mi44NTM3MjEsIDM3LjQzODU1NF0sIHtcclxuICAgICAgICAvLyAgICAgICAgIGJhbGxvb25Db250ZW50OiAnMzAzNjIwLCDQntGA0LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCd0L7QstC+0LTQtdGA0LXQstC10L3RjNC60L7QstGB0LrQuNC5INGA0LDQudC+0L0sINC/LiDQpdC+0LzRg9GC0L7QstC+LCDRg9C7LiDQodGC0YDQvtC40YLQtdC70YzQvdCw0Y8sIDEzJ1xyXG4gICAgICAgIC8vICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICBwcmVzZXQ6ICdpc2xhbmRzI2ljb24nLFxyXG4gICAgICAgIC8vICAgICAgICAgaWNvbkNvbG9yOiAnIzAwOTViNidcclxuICAgICAgICAvLyAgICAgfSkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsSUQpIHtcclxuICAgICQobW9kYWxJRCkubW9kYWwoe1xyXG4gICAgICAgIGZhZGVEdXJhdGlvbjogMTAwLFxyXG4gICAgICAgIHNob3dDbG9zZTogZmFsc2UsXHJcbiAgICB9KVxyXG59XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQubW9kYWwuZmFkZUR1cmF0aW9uID0gMTAwXHJcbiAgICAgICAgJC5tb2RhbC5zaG93Q2xvc2UgPSBmYWxzZVxyXG5cclxuICAgICAgICAkKCdhLm1vZGFsLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB2YXIgdGhpc01vZGFsSWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxyXG4gICAgICAgICAgICBvcGVuTW9kYWwodGhpc01vZGFsSWQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBvcGVuTW9kYWwoJyNtb2RhbC1mb3JtJylcclxuICAgICAgICAvLyBvcGVuTW9kYWwoJyNtb2RhbC1zdWNjZXNzJylcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgX19pdGVtcyA9IHtcclxuICAgICAgICAgICAgb3ZlcmxheTogJyNvdmVybGF5JyxcclxuICAgICAgICAgICAgbW9iaWxlTmF2YmFyOiAnLm5hdmJhcl9fbW9iaWxlX19jb250YWluZXInLFxyXG4gICAgICAgICAgICBtb2JpbGVOYXZiYXJCdG46ICcubmF2YmFyX19tb2JpbGUgYnV0dG9uJyxcclxuICAgICAgICAgICAgYm9keTogJ2JvZHknLFxyXG4gICAgICAgICAgICBmaWx0ZXJzQnRuOiAnLmNhdGFsb2ctaG9tZV9fdGl0bGVfX2FsbC5pcy0tZmlsdGVycyAuY2F0YWxvZy1ob21lX190aXRsZV9fYWxsX190ZXh0JyxcclxuICAgICAgICAgICAgZmlsdGVyc1dyYXA6ICcuY2F0YWxvZy1ob21lX19hc2lkZScsXHJcbiAgICAgICAgICAgIGZpbHRlcnNDbG9zZTogJy5jYXRhbG9nLWhvbWVfX2FzaWRlX19jbG9zZSBhJyxcclxuICAgICAgICAgICAgc2VhcmNoUGFuZWxCdG46ICcubmF2YmFyX19zZWFyY2ggc3BhbicsXHJcbiAgICAgICAgICAgIHNlYXJjaFBhbmVsOiAnLm5hdmJhcl9fc2VhcmNoYmFyJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIF9fY2xhc2VzID0ge1xyXG4gICAgICAgICAgICBvcGVuTWVudTogJ2lzLS1vcGVuLW1lbnUnLFxyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheTogJ2lzLS1vdmVybGF5JyxcclxuICAgICAgICAgICAgb3Blbk1lbnVCdG46ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICBvcGVuRmlsdGVyczogJ2lzLS1maWx0ZXJzJyxcclxuICAgICAgICAgICAgb3BlbjogJ2lzLS1vcGVuJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBpZighJCgnYm9keScpLmhhc0NsYXNzKF9fY2xhc2VzLm9wZW5NZW51KSkge1xyXG4gICAgICAgICAgICAgICAgb3Blbk5hdmJhcigpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTmF2YmFyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5tb2JpbGVOYXZiYXJCdG4pLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5NZW51QnRuKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3Blbk1lbnUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5tb2JpbGVOYXZiYXJCdG4pLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5NZW51QnRuKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkuYWRkQ2xhc3MoX19jbGFzZXMub3Blbk1lbnUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVGaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBpZighJCgnYm9keScpLmhhc0NsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKSkge1xyXG4gICAgICAgICAgICAgICAgb3BlbkZpbHRlcnMoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUZpbHRlcnMoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuRmlsdGVycylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5GaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuRmlsdGVycylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5PdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkuYWRkQ2xhc3MoX19jbGFzZXMub3Blbk92ZXJsYXkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuT3ZlcmxheSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5TZWFyY2hQYW5lbCgpIHtcclxuICAgICAgICAgICAgJChfX2l0ZW1zLnNlYXJjaFBhbmVsKS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuKVxyXG4gICAgICAgICAgICAkKCcuaXMtLXNvX2NscycpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaFBhbmVsKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2YmFyX19yaWdodCcpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICQoX19pdGVtcy5zZWFyY2hQYW5lbCkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3BlbilcclxuICAgICAgICAgICAgICAgICQoJy5pcy0tc29fY2xzJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQWxsKCkge1xyXG4gICAgICAgICAgICBjbG9zZU5hdmJhcigpXHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRCb2R5UGFkZGluZygpIHtcclxuICAgICAgICAgICAgdmFyIHB0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAxXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoX19pdGVtcy5tb2JpbGVOYXZiYXJCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVOYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5vdmVybGF5KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VBbGwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5maWx0ZXJzQnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlRmlsdGVycygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLmZpbHRlcnNDbG9zZSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLnNlYXJjaFBhbmVsQnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3BlblNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlU2VhcmNoUGFuZWwoZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEJvZHlQYWRkaW5nKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
