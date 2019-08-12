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