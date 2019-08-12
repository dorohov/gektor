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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJtYWluLmpzIiwibmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfX2l0ZW1zID0ge1xyXG4gICAgICAgICAgICBpdGVtOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2l0ZW0nLFxyXG4gICAgICAgICAgICBsaXN0OiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2l0ZW1fX2xpc3QnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX19jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICBvcGVuOiAnaXMtLW9wZW4nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKF9faXRlbXMubGlzdCkuaGlkZSgpXHJcbiAgICAgICAgJChfX2l0ZW1zLml0ZW0pLmF0dHIoJ2RhdGEtb3BlbicsICdmYWxzZScpXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5pdGVtKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgX3RoaXNMaXN0ID0gJChfdGhpcykuY2hpbGRyZW4oX19pdGVtcy5saXN0KVxyXG4gICAgICAgICAgICAkKF90aGlzKS50b2dnbGVDbGFzcyhfX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLml0ZW0pLm5vdChfdGhpcykucmVtb3ZlQ2xhc3MoX19jbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoX3RoaXMpLmNoaWxkcmVuKF9faXRlbXMubGlzdCkuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubGlzdCkubm90KF90aGlzTGlzdCkuc2xpZGVVcCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIGZpbHRlcnNCbG9ja3MgPSAkKCcuY2F0YWxvZy1iYW5uZXJfX2ZpbHRlcnNfX2Jsb2NrJylcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbHRlcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNNaW4gPSAkKGZpbHRlcnNCbG9ja3NbaV0pLmRhdGEoJ21pbicpLFxyXG4gICAgICAgICAgICAgICAgdGhpc01heCA9ICQoZmlsdGVyc0Jsb2Nrc1tpXSkuZGF0YSgnbWF4JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzU2xpZGVyID0gJChmaWx0ZXJzQmxvY2tzW2ldKS5maW5kKCcuc2xpZGVyJylcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXNTbGlkZXIpLnNsaWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFwibWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXNNaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiB0aGlzTWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogdGhpc01heCxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmNhdGFsb2ctYmFubmVyX19maWx0ZXJzX19ibG9ja19faW5wdXRfX2ZpZWxkIGlucHV0W2RhdGEtaWQ9XCInICsgJCh0aGlzKS5kYXRhKCdpZCcpICsgJ1wiXScpLnZhbCh1aS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGlucHV0T25DaGFuZ2UoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyID0gJCgnLmNhdGFsb2ctYmFubmVyX19maWx0ZXJzX19ibG9jaycpLmZpbmQoJy5zbGlkZXJbZGF0YS1pZD1cIicgKyBpdGVtLmlkICsgJ1wiXScpXHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZW0udmFsXHJcblxyXG4gICAgICAgICAgICBpZih2YWx1ZSA+IGl0ZW0udmFsKSB2YWx1ZSA9IGl0ZW0ubWF4XHJcbiAgICAgICAgICAgIGVsc2UgaWYodmFsdWUgPCBpdGVtLnZhbCkgdmFsdWUgPSBpdGVtLm1pblxyXG5cclxuICAgICAgICAgICAgc2xpZGVyLnNsaWRlcigndmFsdWUnLCB2YWx1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5jYXRhbG9nLWJhbm5lcl9fZmlsdGVyc19fYmxvY2tfX2lucHV0X19maWVsZCBpbnB1dCcpLmJpbmQoJ2tleXVwIG1vdXNldXAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNJbnB1dCA9ICQodGhpcylbMF1cclxuICAgICAgICAgICAgdmFyIF90aGlzID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICQodGhpc0lucHV0KS5kYXRhKCdpZCcpLFxyXG4gICAgICAgICAgICAgICAgbWluOiAkKHRoaXNJbnB1dCkuYXR0cignbWluJyksXHJcbiAgICAgICAgICAgICAgICBtYXg6ICQodGhpc0lucHV0KS5hdHRyKCdtYXgnKSxcclxuICAgICAgICAgICAgICAgIHZhbDogJCh0aGlzSW5wdXQpLnZhbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRPbkNoYW5nZShfdGhpcylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgX19pdGVtcyA9IHtcclxuICAgICAgICAgICAgb3ZlcmxheTogJyNvdmVybGF5JyxcclxuICAgICAgICAgICAgbW9iaWxlTmF2YmFyOiAnLm5hdmJhcl9fbW9iaWxlX19jb250YWluZXInLFxyXG4gICAgICAgICAgICBtb2JpbGVOYXZiYXJCdG46ICcubmF2YmFyX19tb2JpbGUgYnV0dG9uJyxcclxuICAgICAgICAgICAgYm9keTogJ2JvZHknLFxyXG4gICAgICAgICAgICBmaWx0ZXJzQnRuOiAnLmNhdGFsb2ctaG9tZV9fdGl0bGVfX2FsbC5pcy0tZmlsdGVycyAuY2F0YWxvZy1ob21lX190aXRsZV9fYWxsX190ZXh0JyxcclxuICAgICAgICAgICAgZmlsdGVyc1dyYXA6ICcuY2F0YWxvZy1ob21lX19hc2lkZScsXHJcbiAgICAgICAgICAgIGZpbHRlcnNDbG9zZTogJy5jYXRhbG9nLWhvbWVfX2FzaWRlX19jbG9zZSBhJyxcclxuICAgICAgICAgICAgc2VhcmNoUGFuZWxCdG46ICcubmF2YmFyX19zZWFyY2ggc3BhbicsXHJcbiAgICAgICAgICAgIHNlYXJjaFBhbmVsOiAnLm5hdmJhcl9fc2VhcmNoYmFyJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIF9fY2xhc2VzID0ge1xyXG4gICAgICAgICAgICBvcGVuTWVudTogJ2lzLS1vcGVuLW1lbnUnLFxyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheTogJ2lzLS1vdmVybGF5JyxcclxuICAgICAgICAgICAgb3Blbk1lbnVCdG46ICdpcy1hY3RpdmUnLFxyXG4gICAgICAgICAgICBvcGVuRmlsdGVyczogJ2lzLS1maWx0ZXJzJyxcclxuICAgICAgICAgICAgb3BlbjogJ2lzLS1vcGVuJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBpZighJCgnYm9keScpLmhhc0NsYXNzKF9fY2xhc2VzLm9wZW5NZW51KSkge1xyXG4gICAgICAgICAgICAgICAgb3Blbk5hdmJhcigpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTmF2YmFyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5tb2JpbGVOYXZiYXJCdG4pLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5NZW51QnRuKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3Blbk1lbnUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5tb2JpbGVOYXZiYXJCdG4pLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5NZW51QnRuKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkuYWRkQ2xhc3MoX19jbGFzZXMub3Blbk1lbnUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVGaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBpZighJCgnYm9keScpLmhhc0NsYXNzKF9fY2xhc2VzLm9wZW5GaWx0ZXJzKSkge1xyXG4gICAgICAgICAgICAgICAgb3BlbkZpbHRlcnMoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUZpbHRlcnMoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUZpbHRlcnMoKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuRmlsdGVycylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5GaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBvcGVuT3ZlcmxheSgpXHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuRmlsdGVycylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5PdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkuYWRkQ2xhc3MoX19jbGFzZXMub3Blbk92ZXJsYXkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoX19pdGVtcy5ib2R5KS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuT3ZlcmxheSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5TZWFyY2hQYW5lbCgpIHtcclxuICAgICAgICAgICAgJChfX2l0ZW1zLnNlYXJjaFBhbmVsKS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuKVxyXG4gICAgICAgICAgICAkKCcuaXMtLXNvX2NscycpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaFBhbmVsKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2YmFyX19yaWdodCcpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICQoX19pdGVtcy5zZWFyY2hQYW5lbCkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3BlbilcclxuICAgICAgICAgICAgICAgICQoJy5pcy0tc29fY2xzJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQWxsKCkge1xyXG4gICAgICAgICAgICBjbG9zZU5hdmJhcigpXHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRCb2R5UGFkZGluZygpIHtcclxuICAgICAgICAgICAgdmFyIHB0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAxXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoX19pdGVtcy5tb2JpbGVOYXZiYXJCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVOYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5vdmVybGF5KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VBbGwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5maWx0ZXJzQnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlRmlsdGVycygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLmZpbHRlcnNDbG9zZSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlRmlsdGVycygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChfX2l0ZW1zLnNlYXJjaFBhbmVsQnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3BlblNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlU2VhcmNoUGFuZWwoZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldEJvZHlQYWRkaW5nKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
