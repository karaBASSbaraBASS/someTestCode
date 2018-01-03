$(document).ready(function() {
    // function accordeon2() {
    //     var $this = $(this),
    //         icon = $this.closest('.faqAccordeon__trigger'),
    //         item = $this.closest('.faqAccordeon__item'),
    //         list = $this.closest('.accordeon__list'),
    //         items = list.find('.faqAccordeon__item'),
    //         content = item.find('.faqAccordeon__inner'),
    //         otherContent = list.find('.faqAccordeon__inner'),
    //         minusIcons = items.find('.minus'),
    //         duration = 300;
    //     if (!item.hasClass('active')) {
    //         items.removeClass('active');
    //         item.addClass('active');
    //         otherContent.stop(true, true).slideUp(duration);
    //         content.stop(true, true).slideDown(duration);
    //         minusIcons.removeClass('minus');
    //         minusIcons.addClass('plus');
    //         icon.removeClass('plus');
    //         icon.addClass('minus');
    //     } else {
    //         content.stop(true, true).slideUp(duration);
    //         items.removeClass('active');
    //         minusIcons.removeClass('minus');
    //         minusIcons.addClass('plus');
    //     }
    // };
    // accordeon2();
    // $('.js-accordeon__trigger2').on('click', accordeon2);
    // $(document).ready(function() {
    //     $('.select').select2();
    // });

    // function modalAutoClose() {
    //     setTimeout(function() {
    //         $('#thanksModal').removeClass("active");
    //     }, 3000);
    // }
    // modalAutoClose();
    
    // birthdayCounter
    function birthdayCount() {
        var counterToday = $('.owlToday').children('.item').length,
            inThisDay = $('.owlThisMonts').children('.item').length,
            inMyOffice = $('.owlInOffice').children('.item').length;

            console.log(counterToday);
            console.log(inThisDay);
            console.log(inMyOffice);

        // $('.filterBirthday1::after').css({'content':"1"});
        // $('.filterBirthday2:after').css('content': inThisDay);
        // $('.filterBirthday3:after').css('content': inMyOffice);
    };

    birthdayCount();
    // birthdayCounter end
    // birthdayslider
    $('.birsdaySet .owl-carousel').owlCarousel({
        loop: true,
        nav:true,
        margin:10,
        items:1,
        responsiveClass: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        },
        autoHeight: false,
    });
    $(".owl-prev").html('<span class="carousel-control-prev"></span>');
    $(".owl-next").html('<span class="carousel-control-next"></span>');
    // birthdayslider end   
    // dropdown menu    
    $('.menu__item').click(function(e) {
        // e.preventDefault();
        $(this).children( ".dropDownWrap" ).toggleClass( "active" );
    });

    $('.navbar-toggler').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('convert');
    });

    // dropdown menu end
    // calendar dropdown
        
    // calendar dropdown end 
    // $('.collapse').collapse("toggle");
    // custom select
    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
    // custom select end
    // open sub menu in side bar
    $('.selectListToggle').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('arrowRotate');
        $('.selectList').slideToggle( "slow", function() {
            console.log('animation complete');
        });
    });
    // open sub menu in side bar end
});