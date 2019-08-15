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
                    range: "min",
                    value: thisMin,
                    min: thisMin,
                    max: thisMax,
                    slide: function( event, ui ) {
                        $('.catalog-banner__filters__block__input__field input[data-id="' + $(this).data('id') + '"]').val(ui.value)
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJjb3VudGVyLmpzIiwibWFpbi5qcyIsIm1hcC5qcyIsIm1vZGFscy5qcyIsIm5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgX19pdGVtcyA9IHtcclxuICAgICAgICAgICAgaXRlbTogJy5jYXRhbG9nLWhvbWVfX2FzaWRlX19pdGVtJyxcclxuICAgICAgICAgICAgbGlzdDogJy5jYXRhbG9nLWhvbWVfX2FzaWRlX19pdGVtX19saXN0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIF9fY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgb3BlbjogJ2lzLS1vcGVuJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLmxpc3QpLmhpZGUoKVxyXG4gICAgICAgICQoX19pdGVtcy5pdGVtKS5hdHRyKCdkYXRhLW9wZW4nLCAnZmFsc2UnKVxyXG5cclxuICAgICAgICAkKF9faXRlbXMuaXRlbSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcylcclxuICAgICAgICAgICAgdmFyIF90aGlzTGlzdCA9ICQoX3RoaXMpLmNoaWxkcmVuKF9faXRlbXMubGlzdClcclxuICAgICAgICAgICAgJChfdGhpcykudG9nZ2xlQ2xhc3MoX19jbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5pdGVtKS5ub3QoX3RoaXMpLnJlbW92ZUNsYXNzKF9fY2xhc3Nlcy5vcGVuKVxyXG4gICAgICAgICAgICAkKF90aGlzKS5jaGlsZHJlbihfX2l0ZW1zLmxpc3QpLnNsaWRlVG9nZ2xlKClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmxpc3QpLm5vdChfdGhpc0xpc3QpLnNsaWRlVXAoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciBmaWx0ZXJzQmxvY2tzID0gJCgnLmNhdGFsb2ctYmFubmVyX19maWx0ZXJzX19ibG9jaycpXHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaWx0ZXJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzTWluID0gJChmaWx0ZXJzQmxvY2tzW2ldKS5kYXRhKCdtaW4nKSxcclxuICAgICAgICAgICAgICAgIHRoaXNNYXggPSAkKGZpbHRlcnNCbG9ja3NbaV0pLmRhdGEoJ21heCcpLFxyXG4gICAgICAgICAgICAgICAgdGhpc1NsaWRlciA9ICQoZmlsdGVyc0Jsb2Nrc1tpXSkuZmluZCgnLnNsaWRlcicpXHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzU2xpZGVyKS5zbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBcIm1pblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzTWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogdGhpc01pbixcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IHRoaXNNYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5jYXRhbG9nLWJhbm5lcl9fZmlsdGVyc19fYmxvY2tfX2lucHV0X19maWVsZCBpbnB1dFtkYXRhLWlkPVwiJyArICQodGhpcykuZGF0YSgnaWQnKSArICdcIl0nKS52YWwodWkudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBJTWFzayhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2YtZmllbGRfJyArIChpICsgMSkpLCB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBtaW46IHRoaXNNaW4sXHJcbiAgICAgICAgICAgICAgICBtYXg6IHRoaXNNYXgsXHJcbiAgICAgICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3I6ICcgJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5wdXRPbkNoYW5nZShpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSAkKCcuY2F0YWxvZy1iYW5uZXJfX2ZpbHRlcnNfX2Jsb2NrJykuZmluZCgnLnNsaWRlcltkYXRhLWlkPVwiJyArIGl0ZW0uaWQgKyAnXCJdJylcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gaXRlbS52YWxcclxuXHJcbiAgICAgICAgICAgIGlmKHZhbHVlID4gaXRlbS52YWwpIHZhbHVlID0gaXRlbS5tYXhcclxuICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSA8IGl0ZW0udmFsKSB2YWx1ZSA9IGl0ZW0ubWluXHJcblxyXG4gICAgICAgICAgICBzbGlkZXIuc2xpZGVyKCd2YWx1ZScsIHZhbHVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmNhdGFsb2ctYmFubmVyX19maWx0ZXJzX19ibG9ja19faW5wdXRfX2ZpZWxkIGlucHV0JykuYmluZCgna2V5dXAgbW91c2V1cCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0lucHV0ID0gJCh0aGlzKVswXVxyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogJCh0aGlzSW5wdXQpLmRhdGEoJ2lkJyksXHJcbiAgICAgICAgICAgICAgICBtaW46ICQodGhpc0lucHV0KS5hdHRyKCdtaW4nKSxcclxuICAgICAgICAgICAgICAgIG1heDogJCh0aGlzSW5wdXQpLmF0dHIoJ21heCcpLFxyXG4gICAgICAgICAgICAgICAgdmFsOiAkKHRoaXNJbnB1dCkudmFsKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dE9uQ2hhbmdlKF90aGlzKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5jb3VudGVyIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0lucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKVxyXG4gICAgICAgICAgICB2YXIgdGhpc1ZhbHVlID0gdGhpc0lucHV0LnZhbCgpXHJcblxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tcGx1cycpICYmIHRoaXNWYWx1ZSA8IDk5OTkpIHRoaXNWYWx1ZSsrO1xyXG4gICAgICAgICAgICBlbHNlIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2lzLS1taW51cycpICYmIHRoaXNWYWx1ZSA+IDEpIHRoaXNWYWx1ZS0tO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpc1ZhbHVlIDwgMSB8fCB0aGlzVmFsdWUgPiA5OTk5KSB0aGlzVmFsdWUgPSAwXHJcblxyXG4gICAgICAgICAgICB0aGlzSW5wdXQudmFsKHRoaXNWYWx1ZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRQYWRkaW5ncygpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcuaXMtLWMtcGwnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnLmlzLS1jLXByJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDEwMFBlcjogJy5pcy0taDEwMCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXJfX2lubmVyJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgJCgnLmZvb3RlcicpLmlubmVySGVpZ2h0KCkgKyAxXHJcblxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ0xlZnQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdSaWdodCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLmhlaWdodDEwMFBlcikuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChcIm1haW5cIikuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYWRkaW5ncygpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldFBhZGRpbmdzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgICAgICAgICAgY2VudGVyOiBbNTMuMDIwODQxLCAzNi4xNDM2OTddLFxyXG4gICAgICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICAgICAgY29udHJvbHM6IFtdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgIC8vICAgICAuYWRkKG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUyLjg1MzcyMSwgMzcuNDM4NTU0XSwge1xyXG4gICAgICAgIC8vICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICczMDM2MjAsINCe0YDQu9C+0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0J3QvtCy0L7QtNC10YDQtdCy0LXQvdGM0LrQvtCy0YHQutC40Lkg0YDQsNC50L7QvSwg0L8uINCl0L7QvNGD0YLQvtCy0L4sINGD0LsuINCh0YLRgNC+0LjRgtC10LvRjNC90LDRjywgMTMnXHJcbiAgICAgICAgLy8gICAgIH0sIHtcclxuICAgICAgICAvLyAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjaWNvbicsXHJcbiAgICAgICAgLy8gICAgICAgICBpY29uQ29sb3I6ICcjMDA5NWI2J1xyXG4gICAgICAgIC8vICAgICB9KSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWxJRCkge1xyXG4gICAgJChtb2RhbElEKS5tb2RhbCh7XHJcbiAgICAgICAgZmFkZUR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgIH0pXHJcbn1cclxuXHJcbihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJC5tb2RhbC5mYWRlRHVyYXRpb24gPSAxMDBcclxuICAgICAgICAkLm1vZGFsLnNob3dDbG9zZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICQoJ2EubW9kYWwtb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHZhciB0aGlzTW9kYWxJZCA9ICQodGhpcykuYXR0cignaHJlZicpXHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbCh0aGlzTW9kYWxJZClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIG9wZW5Nb2RhbCgnI21vZGFsLWZvcm0nKVxyXG4gICAgICAgIC8vIG9wZW5Nb2RhbCgnI21vZGFsLXN1Y2Nlc3MnKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBfX2l0ZW1zID0ge1xyXG4gICAgICAgICAgICBvdmVybGF5OiAnI292ZXJsYXknLFxyXG4gICAgICAgICAgICBtb2JpbGVOYXZiYXI6ICcubmF2YmFyX19tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIG1vYmlsZU5hdmJhckJ0bjogJy5uYXZiYXJfX21vYmlsZSBidXR0b24nLFxyXG4gICAgICAgICAgICBib2R5OiAnYm9keScsXHJcbiAgICAgICAgICAgIGZpbHRlcnNCdG46ICcuY2F0YWxvZy1ob21lX190aXRsZV9fYWxsLmlzLS1maWx0ZXJzIC5jYXRhbG9nLWhvbWVfX3RpdGxlX19hbGxfX3RleHQnLFxyXG4gICAgICAgICAgICBmaWx0ZXJzV3JhcDogJy5jYXRhbG9nLWhvbWVfX2FzaWRlJyxcclxuICAgICAgICAgICAgZmlsdGVyc0Nsb3NlOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2Nsb3NlIGEnLFxyXG4gICAgICAgICAgICBzZWFyY2hQYW5lbEJ0bjogJy5uYXZiYXJfX3NlYXJjaCBzcGFuJyxcclxuICAgICAgICAgICAgc2VhcmNoUGFuZWw6ICcubmF2YmFyX19zZWFyY2hiYXInXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX19jbGFzZXMgPSB7XHJcbiAgICAgICAgICAgIG9wZW5NZW51OiAnaXMtLW9wZW4tbWVudScsXHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5OiAnaXMtLW92ZXJsYXknLFxyXG4gICAgICAgICAgICBvcGVuTWVudUJ0bjogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIG9wZW5GaWx0ZXJzOiAnaXMtLWZpbHRlcnMnLFxyXG4gICAgICAgICAgICBvcGVuOiAnaXMtLW9wZW4nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoX19jbGFzZXMub3Blbk1lbnUpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTmF2YmFyKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VOYXZiYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3Blbk1lbnVCdG4pXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5OYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikuYWRkQ2xhc3MoX19jbGFzZXMub3Blbk1lbnVCdG4pXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuRmlsdGVycygpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRmlsdGVycygpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuT3ZlcmxheSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5PdmVybGF5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlblNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKF9faXRlbXMuc2VhcmNoUGFuZWwpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoJy5pcy0tc29fY2xzJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlU2VhcmNoUGFuZWwoZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uYXZiYXJfX3JpZ2h0JylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChfX2l0ZW1zLnNlYXJjaFBhbmVsKS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuKVxyXG4gICAgICAgICAgICAgICAgJCgnLmlzLS1zb19jbHMnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEJvZHlQYWRkaW5nKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VBbGwoKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTmF2YmFyKClcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgY2xvc2VGaWx0ZXJzKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEJvZHlQYWRkaW5nKCkge1xyXG4gICAgICAgICAgICB2YXIgcHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArIDFcclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBwdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLm92ZXJsYXkpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZUFsbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLmZpbHRlcnNCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVGaWx0ZXJzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKF9faXRlbXMuZmlsdGVyc0Nsb3NlKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VGaWx0ZXJzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKF9faXRlbXMuc2VhcmNoUGFuZWxCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvcGVuU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY2xvc2VTZWFyY2hQYW5lbChlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0Qm9keVBhZGRpbmcoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
