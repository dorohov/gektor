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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJjb3VudGVyLmpzIiwibWFpbi5qcyIsIm1hcC5qcyIsIm5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF9faXRlbXMgPSB7XHJcbiAgICAgICAgICAgIGl0ZW06ICcuY2F0YWxvZy1ob21lX19hc2lkZV9faXRlbScsXHJcbiAgICAgICAgICAgIGxpc3Q6ICcuY2F0YWxvZy1ob21lX19hc2lkZV9faXRlbV9fbGlzdCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfX2NsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgIG9wZW46ICdpcy0tb3BlbidcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoX19pdGVtcy5saXN0KS5oaWRlKClcclxuICAgICAgICAkKF9faXRlbXMuaXRlbSkuYXR0cignZGF0YS1vcGVuJywgJ2ZhbHNlJylcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLml0ZW0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBfdGhpc0xpc3QgPSAkKF90aGlzKS5jaGlsZHJlbihfX2l0ZW1zLmxpc3QpXHJcbiAgICAgICAgICAgICQoX3RoaXMpLnRvZ2dsZUNsYXNzKF9fY2xhc3Nlcy5vcGVuKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuaXRlbSkubm90KF90aGlzKS5yZW1vdmVDbGFzcyhfX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfdGhpcykuY2hpbGRyZW4oX19pdGVtcy5saXN0KS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5saXN0KS5ub3QoX3RoaXNMaXN0KS5zbGlkZVVwKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgZmlsdGVyc0Jsb2NrcyA9ICQoJy5jYXRhbG9nLWJhbm5lcl9fZmlsdGVyc19fYmxvY2snKVxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsdGVyc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGhpc01pbiA9ICQoZmlsdGVyc0Jsb2Nrc1tpXSkuZGF0YSgnbWluJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzTWF4ID0gJChmaWx0ZXJzQmxvY2tzW2ldKS5kYXRhKCdtYXgnKSxcclxuICAgICAgICAgICAgICAgIHRoaXNTbGlkZXIgPSAkKGZpbHRlcnNCbG9ja3NbaV0pLmZpbmQoJy5zbGlkZXInKVxyXG5cclxuICAgICAgICAgICAgICAgICQodGhpc1NsaWRlcikuc2xpZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICByYW5nZTogXCJtaW5cIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpc01pbixcclxuICAgICAgICAgICAgICAgICAgICBtaW46IHRoaXNNaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiB0aGlzTWF4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuY2F0YWxvZy1iYW5uZXJfX2ZpbHRlcnNfX2Jsb2NrX19pbnB1dF9fZmllbGQgaW5wdXRbZGF0YS1pZD1cIicgKyAkKHRoaXMpLmRhdGEoJ2lkJykgKyAnXCJdJykudmFsKHVpLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgSU1hc2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NmLWZpZWxkXycgKyAoaSArIDEpKSwge1xyXG4gICAgICAgICAgICAgICAgbWFzazogTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbWluOiB0aGlzTWluLFxyXG4gICAgICAgICAgICAgICAgbWF4OiB0aGlzTWF4LFxyXG4gICAgICAgICAgICAgICAgdGhvdXNhbmRzU2VwYXJhdG9yOiAnICdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGlucHV0T25DaGFuZ2UoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gJCgnLmNhdGFsb2ctYmFubmVyX19maWx0ZXJzX19ibG9jaycpLmZpbmQoJy5zbGlkZXJbZGF0YS1pZD1cIicgKyBpdGVtLmlkICsgJ1wiXScpXHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW0udmFsXHJcblxyXG4gICAgICAgICAgICBpZih2YWx1ZSA+IGl0ZW0udmFsKSB2YWx1ZSA9IGl0ZW0ubWF4XHJcbiAgICAgICAgICAgIGVsc2UgaWYodmFsdWUgPCBpdGVtLnZhbCkgdmFsdWUgPSBpdGVtLm1pblxyXG5cclxuICAgICAgICAgICAgc2xpZGVyLnNsaWRlcigndmFsdWUnLCB2YWx1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5jYXRhbG9nLWJhbm5lcl9fZmlsdGVyc19fYmxvY2tfX2lucHV0X19maWVsZCBpbnB1dCcpLmJpbmQoJ2tleXVwIG1vdXNldXAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNJbnB1dCA9ICQodGhpcylbMF1cclxuICAgICAgICAgICAgdmFyIF90aGlzID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICQodGhpc0lucHV0KS5kYXRhKCdpZCcpLFxyXG4gICAgICAgICAgICAgICAgbWluOiAkKHRoaXNJbnB1dCkuYXR0cignbWluJyksXHJcbiAgICAgICAgICAgICAgICBtYXg6ICQodGhpc0lucHV0KS5hdHRyKCdtYXgnKSxcclxuICAgICAgICAgICAgICAgIHZhbDogJCh0aGlzSW5wdXQpLnZhbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRPbkNoYW5nZShfdGhpcylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuY291bnRlciBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNJbnB1dCA9ICQodGhpcykuc2libGluZ3MoJ2lucHV0JylcclxuICAgICAgICAgICAgdmFyIHRoaXNWYWx1ZSA9IHRoaXNJbnB1dC52YWwoKVxyXG5cclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtLXBsdXMnKSAmJiB0aGlzVmFsdWUgPCA5OTk5KSB0aGlzVmFsdWUrKztcclxuICAgICAgICAgICAgZWxzZSBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy0tbWludXMnKSAmJiB0aGlzVmFsdWUgPiAxKSB0aGlzVmFsdWUtLTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXNWYWx1ZSA8IDEgfHwgdGhpc1ZhbHVlID4gOTk5OSkgdGhpc1ZhbHVlID0gMFxyXG5cclxuICAgICAgICAgICAgdGhpc0lucHV0LnZhbCh0aGlzVmFsdWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UGFkZGluZ3MoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnLmlzLS1jLXBsJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJy5pcy0tYy1wcicsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQxMDBQZXI6ICcuaXMtLWgxMDAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyX19pbm5lcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpICsgMVxyXG5cclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdMZWZ0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nUmlnaHQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5oZWlnaHQxMDBQZXIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCJtYWluXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRQYWRkaW5ncygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogWzUzLjAyMDg0MSwgMzYuMTQzNjk3XSxcclxuICAgICAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbXVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIG15TWFwLmdlb09iamVjdHNcclxuICAgICAgICAvLyAgICAgLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKFs1Mi44NTM3MjEsIDM3LjQzODU1NF0sIHtcclxuICAgICAgICAvLyAgICAgICAgIGJhbGxvb25Db250ZW50OiAnMzAzNjIwLCDQntGA0LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCd0L7QstC+0LTQtdGA0LXQstC10L3RjNC60L7QstGB0LrQuNC5INGA0LDQudC+0L0sINC/LiDQpdC+0LzRg9GC0L7QstC+LCDRg9C7LiDQodGC0YDQvtC40YLQtdC70YzQvdCw0Y8sIDEzJ1xyXG4gICAgICAgIC8vICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICBwcmVzZXQ6ICdpc2xhbmRzI2ljb24nLFxyXG4gICAgICAgIC8vICAgICAgICAgaWNvbkNvbG9yOiAnIzAwOTViNidcclxuICAgICAgICAvLyAgICAgfSkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBfX2l0ZW1zID0ge1xyXG4gICAgICAgICAgICBvdmVybGF5OiAnI292ZXJsYXknLFxyXG4gICAgICAgICAgICBtb2JpbGVOYXZiYXI6ICcubmF2YmFyX19tb2JpbGVfX2NvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIG1vYmlsZU5hdmJhckJ0bjogJy5uYXZiYXJfX21vYmlsZSBidXR0b24nLFxyXG4gICAgICAgICAgICBib2R5OiAnYm9keScsXHJcbiAgICAgICAgICAgIGZpbHRlcnNCdG46ICcuY2F0YWxvZy1ob21lX190aXRsZV9fYWxsLmlzLS1maWx0ZXJzIC5jYXRhbG9nLWhvbWVfX3RpdGxlX19hbGxfX3RleHQnLFxyXG4gICAgICAgICAgICBmaWx0ZXJzV3JhcDogJy5jYXRhbG9nLWhvbWVfX2FzaWRlJyxcclxuICAgICAgICAgICAgZmlsdGVyc0Nsb3NlOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2Nsb3NlIGEnLFxyXG4gICAgICAgICAgICBzZWFyY2hQYW5lbEJ0bjogJy5uYXZiYXJfX3NlYXJjaCBzcGFuJyxcclxuICAgICAgICAgICAgc2VhcmNoUGFuZWw6ICcubmF2YmFyX19zZWFyY2hiYXInXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX19jbGFzZXMgPSB7XHJcbiAgICAgICAgICAgIG9wZW5NZW51OiAnaXMtLW9wZW4tbWVudScsXHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5OiAnaXMtLW92ZXJsYXknLFxyXG4gICAgICAgICAgICBvcGVuTWVudUJ0bjogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgIG9wZW5GaWx0ZXJzOiAnaXMtLWZpbHRlcnMnLFxyXG4gICAgICAgICAgICBvcGVuOiAnaXMtLW9wZW4nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoX19jbGFzZXMub3Blbk1lbnUpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTmF2YmFyKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VOYXZiYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3Blbk1lbnVCdG4pXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5OYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikuYWRkQ2xhc3MoX19jbGFzZXMub3Blbk1lbnVCdG4pXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuRmlsdGVycygpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRmlsdGVycygpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuT3ZlcmxheSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5PdmVybGF5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlblNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKF9faXRlbXMuc2VhcmNoUGFuZWwpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoJy5pcy0tc29fY2xzJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlU2VhcmNoUGFuZWwoZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uYXZiYXJfX3JpZ2h0JylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChfX2l0ZW1zLnNlYXJjaFBhbmVsKS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuKVxyXG4gICAgICAgICAgICAgICAgJCgnLmlzLS1zb19jbHMnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEJvZHlQYWRkaW5nKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VBbGwoKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTmF2YmFyKClcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICAgICAgY2xvc2VGaWx0ZXJzKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEJvZHlQYWRkaW5nKCkge1xyXG4gICAgICAgICAgICB2YXIgcHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArIDFcclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBwdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLm1vYmlsZU5hdmJhckJ0bikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLm92ZXJsYXkpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZUFsbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLmZpbHRlcnNCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVGaWx0ZXJzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKF9faXRlbXMuZmlsdGVyc0Nsb3NlKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VGaWx0ZXJzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKF9faXRlbXMuc2VhcmNoUGFuZWxCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvcGVuU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY2xvc2VTZWFyY2hQYW5lbChlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0Qm9keVBhZGRpbmcoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
