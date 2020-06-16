$(function () {
    "use strict";
    // ==== mobile menu


    /* ----------------------------------------------------------- */
    /*  NAV TOGGLER FOR RESPONSIVE MENU                     */
    /* ----------------------------------------------------------- */
    // $('.nav_toggler').on('click', function () {
    //     $(this).toggleClass('active');
    //     $('.responsiveMenu').slideToggle()
    // })


    /* ----------------------------------------------------------- */
    /*  FIX REVEALATOR ISSUE AFTER PAGE LOADED                     */
    /* ----------------------------------------------------------- */
    $(".revealator-delay1").addClass('no-transform');

    /* ----------------------------------------------------------- */
    /*  WOW JS ACTIVATION                                          */
    /* ----------------------------------------------------------- */
    new WOW().init();


    /* ----------------------------------------------------------- */
    /*  COLOR PICKER AND COLOR SWITCHES ACTIVATION                                    */
    /* ----------------------------------------------------------- */
    // pallate opening
    (function () {
        let colOpenBtn = document.querySelector('.open_plt_btn')
        let pallate = document.querySelector('.color_picker')
        colOpenBtn.addEventListener('click', () => {
            pallate.classList.toggle('active');
        })
    })();
    // color switches javascript
    (function () {
        var swiches = document.querySelectorAll('[data-color-value]')

        swiches.forEach(button => {
            // get buttons color value
            let buttonValue = button.getAttribute('data-color-value')
            // function coloring the buttons
            function colorThemOwn() {
                button.style.background = buttonValue;
            }
            colorThemOwn()

            // changing theme color by clicking each buttons
            button.addEventListener('click', e => {
                e.preventDefault();
                document.documentElement.style.setProperty('--light-theme-color', buttonValue)
            })
        });

    })();

    /* ----------------------------------------------------------- */
    /* CUSTOM COLOR PICKER ACTIVATION FOR THEME COLOR                    */
    /* ----------------------------------------------------------- */
    const pickrThem = Pickr.create({
        el: '.themeCol',
        theme: 'nano', // or 'monolith', or 'nano'
        default: '#6CC254',
        components: {
            // Main components
            preview: true,
            opacity: true,
            hue: true,
            // Input / output Options
            interaction: {
                hex: true,
                input: true
            }
        }
    });
    pickrThem.on('change', (color) => {
        let colVal = color.toHEXA().toString()
        document.documentElement.style.setProperty('--light-theme-color', colVal)
    })


    /* ----------------------------------------------------------- */
    /*  RESPONSIVE FUNCTION FOR ALL RESPONSIVE SCRIPT              */
    /* ----------------------------------------------------------- */
    // mobile menu toggler

    function mobileMenuToggler(a) {
        if (a != true) {
            return
        }

        $('.mobile-nav-toggler').on('click', function () {
            $(this).toggleClass('active');
            $('.side-nav-items').toggleClass('active');
            $('.main_area').toggleClass('active');
        });

    }
    mobileMenuToggler(true)

    /* ----------------------------------------------------------- */
    /*  PORTFOLIO ZOOM IN ACTIVATION                               */
    /* ----------------------------------------------------------- */
    $('.venobox').venobox();


    /* ----------------------------------------------------------- */
    /*  PORTFOLIO MESSONARY ACTIVATION                     */
    /* ----------------------------------------------------------- */
    $('.container').imagesLoaded(function () {
        //        Isotope Messonry
        var $grid = $('.isotop_wrap').isotope({
            itemSelector: '.port_item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.port_item'
            }
        })
        //for menu active class
        $('.filter_control').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        //for menu active class
        $('.filter_control button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });


});