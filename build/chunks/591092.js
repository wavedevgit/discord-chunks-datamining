/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  "use strict";

  function t(e, t) {
    var n = e.split("_");
    return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
  }

  function n(e, n, r) {
    var i = {
      ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
      mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
      hh: n ? "година_години_годин" : "годину_години_годин",
      dd: "день_дні_днів",
      MM: "місяць_місяці_місяців",
      yy: "рік_роки_років"
    };
    return "m" === r ? n ? "хвилина" : "хвилину" : "h" === r ? n ? "година" : "годину" : e + " " + t(i[r], +e)
  }

  function r(e, t) {
    var n = {
      nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
      accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
      genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
    };
    return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
  }

  function i(e) {
    return function() {
      return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
    }
  }
  return e.defineLocale("uk", {
    months: {
      format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
      standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
    },
    monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
    weekdays: r,
    weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY р.",
      LLL: "D MMMM YYYY р., HH:mm",
      LLLL: "dddd, D MMMM YYYY р., HH:mm"
    },
    calendar: {
      sameDay: i("[Сьогодні "),
      nextDay: i("[Завтра "),
      lastDay: i("[Вчора "),
      nextWeek: i("[У] dddd ["),
      lastWeek: function() {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return i("[Минулої] dddd [").call(this);
          case 1:
          case 2:
          case 4:
            return i("[Минулого] dddd [").call(this)
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "за %s",
      past: "%s тому",
      s: "декілька секунд",
      ss: n,
      m: n,
      mm: n,
      h: "годину",
      hh: n,
      d: "день",
      dd: n,
      M: "місяць",
      MM: n,
      y: "рік",
      yy: n
    },
    meridiemParse: /ночі|ранку|дня|вечора/,
    isPM: function(e) {
      return /^(дня|вечора)$/.test(e)
    },
    meridiem: function(e, t, n) {
      return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
    ordinal: function(e, t) {
      switch (t) {
        case "M":
        case "d":
        case "DDD":
        case "w":
        case "W":
          return e + "-й";
        case "D":
          return e + "-го";
        default:
          return e
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  })
})