"use strict";

$(document).ready(function () {
    $('.menu__item').click(function (e) {
        $(this).children(".dropDownWrap").toggleClass("active");
    });
    $('.navbar-toggler').click(function (e) {
        $(this).children(".hamburger").toggleClass("convert");
    });
    $('#thanksModal .close').click(function (e) {
        $("#thanksModal").toggleClass("active");
    });
    $('#thanksModal .close').click(function (e) {
        e.preventDefault();
        $("#thanksModal").removeClass("active");
        $("#thanksModal").addClass("passive");
    });
    $('.carousel').carousel({
        interval: 2000
    });
    $('.carousel').carousel('pause');
    $('.multi-item-carousel').carousel({
        interval: false
    });
    $('#newsMainPageCarusel').carousel({
        interval: 4000
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoHeight: false,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true
            }
        }
    });
    $(".owl-prev").html('<span class="carousel-control-prev"></span>');
    $(".owl-next").html('<span class="carousel-control-next"></span>');

    function accordeon() {
        var $this = $(this),
            icon = $this.closest('.accordeon__trigger'),
            item = $this.closest('.accordeon__item'),
            list = $this.closest('.accordeon__list'),
            items = list.find('.accordeon__item'),
            content = item.find('.accordeon__inner'),
            otherContent = list.find('.accordeon__inner'),
            shadowActive = $this.closest('.testimonialCurrent'),
            allShadowActive = list.find('.testimonialCurrent'),
            allIcons = list.find('.accordeon__trigger'),
            lessText = items.find('.accordeon__trigger'),
            duration = 300;
        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');
            otherContent.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);
            allIcons.removeClass('less');
            allIcons.addClass('readMore');
            icon.removeClass('readMore');
            icon.addClass('less');
            allShadowActive.removeClass('testimonialActive');
            shadowActive.addClass('testimonialActive');
        } else {
            content.stop(true, true).slideUp(duration);
            items.removeClass('active');
            item.removeClass('active');
            icon.removeClass('less');
            icon.addClass('readMore');
            shadowActive.removeClass('testimonialActive');
        }
    };
    accordeon();
    $('.js-accordeon__trigger').on('click', accordeon);

    function priceAccordeon() {
        var $this = $(this),
            list = $this.closest('.accordeon__list'),
            currentItem = $this.closest('.accordeon__item'),
            allItems = list.find('.accordeon__item'),
            duration = 300;
        if (!$this.closest('.accordeon__item').hasClass('activePrice')) {
            allItems.removeClass('activePrice');
            allItems.removeClass('activePrograms');
            list.find('.pricesAccordeon__inner').stop(true, true).slideUp(duration);
            list.find('.programsAccordeon__inner').stop(true, true).slideUp(duration);
            currentItem.addClass('activePrice');
            currentItem.find('.pricesAccordeon__inner').stop(true, true).slideDown(duration);
        } else {
            allItems.removeClass('activePrice');
            allItems.removeClass('activePrograms');
            list.find('.pricesAccordeon__inner').stop(true, true).slideUp(duration);
            list.find('.programsAccordeon__inner').stop(true, true).slideUp(duration);
        }
        if (currentItem.hasClass('activePrice')) {
            allItems.find('.programsAccordeon__trigger').addClass('readAboutProgram');
            allItems.find('.programsAccordeon__trigger').removeClass('hideAboutProgram');
            allItems.find('.pricesAccordeon__trigger').addClass('readMorePrice');
            allItems.find('.pricesAccordeon__trigger').removeClass('hideMorePrice');
            currentItem.find('.pricesAccordeon__trigger').addClass('hideMorePrice');
            currentItem.find('.pricesAccordeon__trigger').removeClass('readMorePrice');
        } else {
            allItems.find('.accordeon__trigger').addClass('readAboutProgram');
            allItems.find('.accordeon__trigger').removeClass('hideAboutProgram');
            allItems.find('.pricesAccordeon__trigger').addClass('readMorePrice');
            allItems.find('.pricesAccordeon__trigger').removeClass('hideMorePrice');
        }
    };
    $('.pricesAccordeon__trigger').on('click', priceAccordeon);

    function programsAccordeon() {
        var $this = $(this),
            list = $this.closest('.accordeon__list'),
            currentItem = $this.closest('.accordeon__item'),
            allItems = list.find('.accordeon__item'),
            duration = 300;
        if (!$this.closest('.accordeon__item').hasClass('activePrograms')) {
            allItems.removeClass('activePrice');
            allItems.removeClass('activePrograms');
            list.find('.pricesAccordeon__inner').stop(true, true).slideUp(duration);
            list.find('.programsAccordeon__inner').stop(true, true).slideUp(duration);
            currentItem.addClass('activePrograms');
            currentItem.find('.programsAccordeon__inner').stop(true, true).slideDown(duration);
        } else {
            allItems.removeClass('activePrice');
            allItems.removeClass('activePrograms');
            list.find('.pricesAccordeon__inner').stop(true, true).slideUp(duration);
            list.find('.programsAccordeon__inner').stop(true, true).slideUp(duration);
        }
        if (currentItem.hasClass('activePrograms')) {
            allItems.find('.programsAccordeon__trigger').addClass('readAboutProgram');
            allItems.find('.programsAccordeon__trigger').removeClass('hideAboutProgram');
            allItems.find('.pricesAccordeon__trigger').addClass('readMorePrice');
            allItems.find('.pricesAccordeon__trigger').removeClass('hideMorePrice');
            currentItem.find('.programsAccordeon__trigger').addClass('hideAboutProgram');
            currentItem.find('.programsAccordeon__trigger').removeClass('readAboutProgram');
        } else {
            allItems.find('.accordeon__trigger').addClass('readAboutProgram');
            allItems.find('.accordeon__trigger').removeClass('hideAboutProgram');
            allItems.find('.pricesAccordeon__trigger').addClass('readMorePrice');
            allItems.find('.pricesAccordeon__trigger').removeClass('hideMorePrice');
        }
    };
    $('.programsAccordeon__trigger').on('click', programsAccordeon);
    $('.accordeon__trigger').on('click', function () {
        var ourBlock = $(this).closest('.accordeon__item'),
            screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            blockHeight = ourBlock.offsetHeight;
        if (ourBlock.length) {
            var blockTopPosition = ourBlock.offset().top;
        };
        $('body,html').animate({
            scrollTop: blockTopPosition
        }, 1000);
    });

    function pasteAccordeon() {
        var allLi = $('.accordeon__list').find('.accordeon__item'),
            allLiLength = allLi.length,
            i = 0;
        $('.accordeon__item').each(function () {
            if ($(this).children().length < 5) {
                $(this).find(".readHide").hide();
            }
        });
        Array.from(document.querySelectorAll('.accordeon__item > p:nth-child(n + 4)')).forEach(function (e) {
            e.classList.add('accordeon__inner');
        });
        Array.from(document.querySelectorAll('.accordeon__item > ul')).forEach(function (e) {
            return e.classList.add('accordeon__inner');
        });
    }
    pasteAccordeon();
    var closevideo = function closevideo() {
        $('.modal__video iframe').each(function (index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });
    };
    $('.play__button').click(function (e) {
        e.preventDefault();
        link = $(this);
        $('#videoplayModal').toggle('fade');
        $('.modal__video iframe').each(function (index) {
            $(this).attr('src', link.attr('href'));
            return false;
        });
    });
    $('.close').click(function () {
        closevideo();
    });
    $('#videoplayModal').on('focusout', function () {
        closevideo();
    });

    function accordeon2() {
        var $this = $(this),
            icon = $this.closest('.faqAccordeon__trigger'),
            item = $this.closest('.faqAccordeon__item'),
            list = $this.closest('.accordeon__list'),
            items = list.find('.faqAccordeon__item'),
            content = item.find('.faqAccordeon__inner'),
            otherContent = list.find('.faqAccordeon__inner'),
            minusIcons = items.find('.minus'),
            duration = 300;
        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');
            otherContent.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);
            minusIcons.removeClass('minus');
            minusIcons.addClass('plus');
            icon.removeClass('plus');
            icon.addClass('minus');
        } else {
            content.stop(true, true).slideUp(duration);
            items.removeClass('active');
            minusIcons.removeClass('minus');
            minusIcons.addClass('plus');
        }
    };
    accordeon2();
    $('.js-accordeon__trigger2').on('click', accordeon2);
    $(document).ready(function () {
        $('.select').select2();
    });

    function modalAutoClose() {
        setTimeout(function () {
            $('#thanksModal').removeClass("active");
        }, 3000);
    }
    modalAutoClose();
    $(function () {
        var wrapper = $(".file_upload"),
            inp = wrapper.find("input"),
            btn = wrapper.find(".button"),
            lbl = wrapper.find("mark");
        inp.focus(function () {
            wrapper.addClass("focus");
        }).blur(function () {
            wrapper.removeClass("focus");
        });
        var file_api = window.File && window.FileReader && window.FileList && window.Blob ? true : false;
        inp.change(function () {
            var file_name;
            if (file_api && inp[0].files[0]) file_name = inp[0].files[0].name;else file_name = inp.val().replace("C:\\fakepath\\", '');
            if (!file_name.length) return;
            if (lbl.is(":visible")) {
                lbl.text(file_name);
                btn.text("Chose files");
            } else btn.text(file_name);
        }).change();
    });
    $(window).resize(function () {
        $(".file_upload input").triggerHandler("change");
    });
});