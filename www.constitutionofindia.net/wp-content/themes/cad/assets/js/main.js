! function(_, e) {
    for (var t in e) _[t] = e[t]
}(this, function(t) {
    var n = {};

    function a(_) {
        if (n[_]) return n[_].exports;
        var e = n[_] = {
            i: _,
            l: !1,
            exports: {}
        };
        return t[_].call(e.exports, e, e.exports, a), e.l = !0, e.exports
    }
    return a.m = t, a.c = n, a.d = function(_, e, t) {
        a.o(_, e) || Object.defineProperty(_, e, {
            enumerable: !0,
            get: t
        })
    }, a.r = function(_) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(_, "__esModule", {
            value: !0
        })
    }, a.t = function(e, _) {
        if (1 & _ && (e = a(e)), 8 & _) return e;
        if (4 & _ && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (a.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & _ && "string" != typeof e)
            for (var n in e) a.d(t, n, function(_) {
                return e[_]
            }.bind(null, n));
        return t
    }, a.n = function(_) {
        var e = _ && _.__esModule ? function() {
            return _.default
        } : function() {
            return _
        };
        return a.d(e, "a", e), e
    }, a.o = function(_, e) {
        return Object.prototype.hasOwnProperty.call(_, e)
    }, a.p = "/", a(a.s = "./public_html/wp-content/themes/cad/assets/theme.js")
}({
    "./public_html/wp-content/themes/cad/assets/scss/cad.scss": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./public_html/wp-content/themes/cad/assets/scss/cad.scss?")
    },
    "./public_html/wp-content/themes/cad/assets/theme.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_cad_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/cad.scss */ \"./public_html/wp-content/themes/cad/assets/scss/cad.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n// Main CSS.\n\n\nvar $body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');\nvar $window = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window);\nvar $headerBreakPoint = 1024;\n/**\r\n * Smooth scrolls to a target and optionally executes a callback.\r\n *\r\n * @param  {Object}   target\r\n * @param  {number}      offset\r\n * @param  {function} callback\r\n * @return {void}\r\n */\n\nfunction smoothScroll(target, offset, callback) {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body').animate({\n    scrollTop: target.offset().top - offset\n  }, 1000, 'swing', function () {\n    if ('function' === typeof callback) {\n      callback();\n    }\n  });\n}\n\nif (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs').length !== 0) {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs a').on('click', function (e) {\n    e.preventDefault();\n\n    if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass('active')) {\n      var clickTarget = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('target');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs a').removeClass('active');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs-content[data-target!=\"' + clickTarget + '\"]').removeClass('active');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs-content[data-target=\"' + clickTarget + '\"]').addClass('active');\n    }\n  });\n\n  if (window.location.hash) {\n    var hashVal = window.location.hash.substring(1);\n    var activeTab = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-read-listing__detail-tabs').find('a[data-target=\"' + hashVal + '\"]');\n\n    if (activeTab.length) {\n      activeTab.trigger('click');\n    }\n  }\n}\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()('#page-parts-listing__read-more').on('click', function (e) {\n  e.preventDefault();\n  var clickRef = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('href');\n\n  if ($body.find(clickRef).length !== 0) {\n    smoothScroll(jquery__WEBPACK_IMPORTED_MODULE_1___default()(clickRef), 0, null);\n  }\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('#show-remaining-member-committees').on('click', function () {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hide();\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#member-committees-first-block').append(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#remaining-member-committees').html());\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#remaining-member-committees').remove();\n});\n\nif (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs__selectors').length !== 0) {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs-selector a').on('click', function (e) {\n    e.preventDefault();\n\n    if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass('active')) {\n      var clickTarget = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('tab');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs-selector a').removeClass('active');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs-content[data-tab!=\"' + clickTarget + '\"]').removeClass('active');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.single-members__tabs-content[data-tab=\"' + clickTarget + '\"]').addClass('active');\n    }\n  });\n}\n/*-----------------------------------------------------------------------------------*/\n\n/*\tMobile Menu\r\n/*-----------------------------------------------------------------------------------*/\n\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__hamburger').on('click', function (e) {\n  e.preventDefault();\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).next('.site-header__menu-container').toggleClass('site-header__menu-container--show');\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__menu-container__close').on('click', function (e) {\n  e.preventDefault();\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('.site-header__menu-container').toggleClass('site-header__menu-container--show');\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__primary .menu > li > a, .site-header__primary .menu > li > .sub-text').on('click.nav-menu', function (e) {\n  if ($window.width() <= $headerBreakPoint) {\n    var megaMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).siblings('.site-header__mega-menu');\n\n    if (0 !== megaMenu.length) {\n      e.preventDefault();\n      megaMenu.addClass('site-header__mega-menu--show');\n    }\n  }\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__mega-menu__back').on('click.nav-menu', function (e) {\n  e.preventDefault();\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().removeClass('site-header__mega-menu--show');\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__search__button').on('click.search-sub-menu', function (e) {\n  e.preventDefault();\n\n  if ($window.width() <= $headerBreakPoint) {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).siblings('.site-header__search__container').addClass('site-header__search__container--show');\n  }\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.site-header__search__back').on('click.nav-menu', function (e) {\n  e.preventDefault();\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().removeClass('site-header__search__container--show');\n});\n/*-----------------------------------------------------------------------------------*/\n\n/*\tFacet filters\r\n/*-----------------------------------------------------------------------------------*/\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filters-container__filter-labels p').on('click.filter-items', function () {\n  var $this = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);\n  var isActive = $this.hasClass('active') ? true : false;\n\n  if (!isActive) {\n    var filterBlock = $this.attr('id');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filters-container__filter-labels p').removeClass('active');\n    $this.addClass('active');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filters > div').removeClass('active');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filters > div[data-filter=\"' + filterBlock + '\"]').addClass('active');\n  }\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.filter-button button').on('click', function () {\n  $body.find('.facetwp-filters-container').addClass('open');\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.close-filters').on('click', function () {\n  $body.find('.facetwp-filters-container').removeClass('open');\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p').on('click', function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').hasClass('active')) {\n    if ($window.width() >= 1024) {\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').removeClass('active');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').slideUp();\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).children('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');\n    }\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p').children('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').slideUp();\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').removeClass('active');\n\n    if ($window.width() >= 1024) {\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').addClass('active');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').slideDown();\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');\n    }\n  }\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-type-sort').on('click', function () {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p').children('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').slideUp();\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').removeClass('active');\n\n  if ($window.width() >= 1024) {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').addClass('active');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').slideDown();\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');\n  }\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-type-search input').on('focus', function () {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p').children('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').slideUp();\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.facetwp-filter p.slideup').siblings('.facetwp-facet').removeClass('active');\n\n  if ($window.width() >= 1024) {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').addClass('active');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('.facetwp-facet').slideDown();\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');\n  }\n});\n/*-----------------------------------------------------------------------------------*/\n\n/*\tSchedules Read More\r\n/*-----------------------------------------------------------------------------------*/\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.schedule-detail__show-more', function () {\n  var $this = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);\n  $this.fadeOut(500);\n  $this.closest('.schedule-detail__main-content.collapsed').animate({\n    'max-height': '40000px'\n  }, 1000);\n});\n\nif (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.schedule-detail').length !== 0) {\n  var contentHeight = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.schedule-detail__main-content').outerHeight();\n\n  if (850 < contentHeight) {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.schedule-detail__main-content').addClass('collapsed');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.schedule-detail__main-content').append('<div class=\"schedule-detail__show-more\"><p>Read More <span class=\"icon-arrow-down2\"></span></p></div>');\n  }\n}\n/*-----------------------------------------------------------------------------------*/\n\n/*\tHomepage slider\r\n/*-----------------------------------------------------------------------------------*/\n\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.homepage__slides .wrapper').slick({\n  arrows: false,\n  dots: true,\n  autoplay: true,\n  autoplaySpeed: 4000\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.homepage__slider-with-nav').each(function () {\n  var $this = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);\n  var prevNav = $this.parent().find('.homepage__slider-with-nav__prev');\n  var nextNav = $this.parent().find('.homepage__slider-with-nav__next');\n  $this.slick({\n    arrows: true,\n    dots: false,\n    autoplay: false,\n    autoplaySpeed: 4000,\n    adaptiveHeight: true,\n    prevArrow: prevNav,\n    nextArrow: nextNav\n  });\n});\n/*-----------------------------------------------------------------------------------*/\n\n/*\tSidebar navigation list on Debate volumes page.\r\n/*-----------------------------------------------------------------------------------*/\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.sidebar-navigation').each(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.sidebar-navigation__handle').on('click.open-sidebar', function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).next('.sidebar-navigation__content').addClass('active');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.sidebar-navigation__content__close').on('click.close-sidebar', function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('.sidebar-navigation__content').removeClass('active');\n  });\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.social-links-block').each(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.social-links-block__handle').on('click.toggle-social-links', function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).next('.social-links-block__wrap').slideToggle();\n  });\n});\n\nif (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.cmswt-Filter-data_date').length !== 0) {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.filter-date-toggle').on('click', function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().toggleClass('toggle-active');\n  });\n}\n\n//# sourceURL=webpack:///./public_html/wp-content/themes/cad/assets/theme.js?")
    },
    jquery: function(module, exports) {
        eval('(function() { module.exports = this["jQuery"]; }());\n\n//# sourceURL=webpack:///external_%22jQuery%22?')
    }
}));