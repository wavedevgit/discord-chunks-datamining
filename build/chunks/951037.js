/** Chunk was on web.js **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  "use strict";
  var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
    n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
  return e.defineLocale("ur", {
    months: t,
    monthsShort: t,
    weekdays: n,
    weekdaysShort: n,
    weekdaysMin: n,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd، D MMMM YYYY HH:mm"
    },
    meridiemParse: /صبح|شام/,
    isPM: function(e) {
      return "شام" === e
    },
    meridiem: function(e, t, n) {
      return e < 12 ? "صبح" : "شام"
    },
    calendar: {
      sameDay: "[آج بوقت] LT",
      nextDay: "[کل بوقت] LT",
      nextWeek: "dddd [بوقت] LT",
      lastDay: "[گذشتہ روز بوقت] LT",
      lastWeek: "[گذشتہ] dddd [بوقت] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s بعد",
      past: "%s قبل",
      s: "چند سیکنڈ",
      ss: "%d سیکنڈ",
      m: "ایک منٹ",
      mm: "%d منٹ",
      h: "ایک گھنٹہ",
      hh: "%d گھنٹے",
      d: "ایک دن",
      dd: "%d دن",
      M: "ایک ماہ",
      MM: "%d ماہ",
      y: "ایک سال",
      yy: "%d سال"
    },
    preparse: function(e) {
      return e.replace(/،/g, ",")
    },
    postformat: function(e) {
      return e.replace(/,/g, "،")
    },
    week: {
      dow: 1,
      doy: 4
    }
  })
})