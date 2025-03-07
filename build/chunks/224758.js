/** Chunk was on web.js **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  "use strict";

  function t(e, t, n, r) {
    switch (n) {
      case "s":
        return t ? "хэдхэн секунд" : "хэдхэн секундын";
      case "ss":
        return e + (t ? " секунд" : " секундын");
      case "m":
      case "mm":
        return e + (t ? " минут" : " минутын");
      case "h":
      case "hh":
        return e + (t ? " цаг" : " цагийн");
      case "d":
      case "dd":
        return e + (t ? " өдөр" : " өдрийн");
      case "M":
      case "MM":
        return e + (t ? " сар" : " сарын");
      case "y":
      case "yy":
        return e + (t ? " жил" : " жилийн");
      default:
        return e
    }
  }
  return e.defineLocale("mn", {
    months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
    monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
    monthsParseExact: !0,
    weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
    weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
    weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY-MM-DD",
      LL: "YYYY оны MMMMын D",
      LLL: "YYYY оны MMMMын D HH:mm",
      LLLL: "dddd, YYYY оны MMMMын D HH:mm"
    },
    meridiemParse: /ҮӨ|ҮХ/i,
    isPM: function(e) {
      return "ҮХ" === e
    },
    meridiem: function(e, t, n) {
      return e < 12 ? "ҮӨ" : "ҮХ"
    },
    calendar: {
      sameDay: "[Өнөөдөр] LT",
      nextDay: "[Маргааш] LT",
      nextWeek: "[Ирэх] dddd LT",
      lastDay: "[Өчигдөр] LT",
      lastWeek: "[Өнгөрсөн] dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s дараа",
      past: "%s өмнө",
      s: t,
      ss: t,
      m: t,
      mm: t,
      h: t,
      hh: t,
      d: t,
      dd: t,
      M: t,
      MM: t,
      y: t,
      yy: t
    },
    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
    ordinal: function(e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + " өдөр";
        default:
          return e
      }
    }
  })
})