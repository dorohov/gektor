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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJtYWluLmpzIiwibmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfX2l0ZW1zID0ge1xyXG4gICAgICAgICAgICBpdGVtOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2l0ZW0nLFxyXG4gICAgICAgICAgICBsaXN0OiAnLmNhdGFsb2ctaG9tZV9fYXNpZGVfX2l0ZW1fX2xpc3QnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgX19jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICBvcGVuOiAnaXMtLW9wZW4nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKF9faXRlbXMubGlzdCkuaGlkZSgpXHJcbiAgICAgICAgJChfX2l0ZW1zLml0ZW0pLmF0dHIoJ2RhdGEtb3BlbicsICdmYWxzZScpXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5pdGVtKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgX3RoaXNMaXN0ID0gJChfdGhpcykuY2hpbGRyZW4oX19pdGVtcy5saXN0KVxyXG4gICAgICAgICAgICAkKF90aGlzKS50b2dnbGVDbGFzcyhfX2NsYXNzZXMub3BlbilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLml0ZW0pLm5vdChfdGhpcykucmVtb3ZlQ2xhc3MoX19jbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICQoX3RoaXMpLmNoaWxkcmVuKF9faXRlbXMubGlzdCkuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubGlzdCkubm90KF90aGlzTGlzdCkuc2xpZGVVcCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIF9faXRlbXMgPSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXk6ICcjb3ZlcmxheScsXHJcbiAgICAgICAgICAgIG1vYmlsZU5hdmJhcjogJy5uYXZiYXJfX21vYmlsZV9fY29udGFpbmVyJyxcclxuICAgICAgICAgICAgbW9iaWxlTmF2YmFyQnRuOiAnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicsXHJcbiAgICAgICAgICAgIGJvZHk6ICdib2R5JyxcclxuICAgICAgICAgICAgZmlsdGVyc0J0bjogJy5jYXRhbG9nLWhvbWVfX3RpdGxlX19hbGwuaXMtLWZpbHRlcnMgLmNhdGFsb2ctaG9tZV9fdGl0bGVfX2FsbF9fdGV4dCcsXHJcbiAgICAgICAgICAgIGZpbHRlcnNXcmFwOiAnLmNhdGFsb2ctaG9tZV9fYXNpZGUnLFxyXG4gICAgICAgICAgICBmaWx0ZXJzQ2xvc2U6ICcuY2F0YWxvZy1ob21lX19hc2lkZV9fY2xvc2UgYScsXHJcbiAgICAgICAgICAgIHNlYXJjaFBhbmVsQnRuOiAnLm5hdmJhcl9fc2VhcmNoIHNwYW4nLFxyXG4gICAgICAgICAgICBzZWFyY2hQYW5lbDogJy5uYXZiYXJfX3NlYXJjaGJhcidcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBfX2NsYXNlcyA9IHtcclxuICAgICAgICAgICAgb3Blbk1lbnU6ICdpcy0tb3Blbi1tZW51JyxcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXk6ICdpcy0tb3ZlcmxheScsXHJcbiAgICAgICAgICAgIG9wZW5NZW51QnRuOiAnaXMtYWN0aXZlJyxcclxuICAgICAgICAgICAgb3BlbkZpbHRlcnM6ICdpcy0tZmlsdGVycycsXHJcbiAgICAgICAgICAgIG9wZW46ICdpcy0tb3BlbidcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcyhfX2NsYXNlcy5vcGVuTWVudSkpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5OYXZiYXIoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU5hdmJhcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubW9iaWxlTmF2YmFyQnRuKS5yZW1vdmVDbGFzcyhfX2NsYXNlcy5vcGVuTWVudUJ0bilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW5NZW51KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk5hdmJhcigpIHtcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMubW9iaWxlTmF2YmFyQnRuKS5hZGRDbGFzcyhfX2NsYXNlcy5vcGVuTWVudUJ0bilcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5NZW51KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRmlsdGVycygpIHtcclxuICAgICAgICAgICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcyhfX2NsYXNlcy5vcGVuRmlsdGVycykpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5GaWx0ZXJzKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VGaWx0ZXJzKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VGaWx0ZXJzKCkge1xyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuRmlsdGVycygpIHtcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXkoKVxyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkuYWRkQ2xhc3MoX19jbGFzZXMub3BlbkZpbHRlcnMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJChfX2l0ZW1zLmJvZHkpLmFkZENsYXNzKF9fY2xhc2VzLm9wZW5PdmVybGF5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKF9faXRlbXMuYm9keSkucmVtb3ZlQ2xhc3MoX19jbGFzZXMub3Blbk92ZXJsYXkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoX19pdGVtcy5zZWFyY2hQYW5lbCkuYWRkQ2xhc3MoX19jbGFzZXMub3BlbilcclxuICAgICAgICAgICAgJCgnLmlzLS1zb19jbHMnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VTZWFyY2hQYW5lbChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcl9fcmlnaHQnKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKF9faXRlbXMuc2VhcmNoUGFuZWwpLnJlbW92ZUNsYXNzKF9fY2xhc2VzLm9wZW4pXHJcbiAgICAgICAgICAgICAgICAkKCcuaXMtLXNvX2NscycpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Qm9keVBhZGRpbmcoKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUFsbCgpIHtcclxuICAgICAgICAgICAgY2xvc2VOYXZiYXIoKVxyXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKVxyXG4gICAgICAgICAgICBjbG9zZUZpbHRlcnMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Qm9keVBhZGRpbmcoKSB7XHJcbiAgICAgICAgICAgIHZhciBwdCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgMVxyXG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHB0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKF9faXRlbXMubW9iaWxlTmF2YmFyQnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlTmF2YmFyKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKF9faXRlbXMub3ZlcmxheSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQWxsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKF9faXRlbXMuZmlsdGVyc0J0bikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZUZpbHRlcnMoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5maWx0ZXJzQ2xvc2UpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZUZpbHRlcnMoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoX19pdGVtcy5zZWFyY2hQYW5lbEJ0bikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9wZW5TZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjbG9zZVNlYXJjaFBhbmVsKGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
