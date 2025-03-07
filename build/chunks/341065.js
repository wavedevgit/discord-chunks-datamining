/** Chunk was on web.js **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  "use strict";

  function t(e, t, n) {
    var r = " ";
    return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + ({
      ss: "secunde",
      mm: "minute",
      hh: "ore",
      dd: "zile",
      MM: "luni",
      yy: "ani"
    })[n]
  }
  return e.defineLocale("ro", {
    months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
    monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "duminică_luni_marți_miercuri_joi_vineri_s\xe2mbătă".split("_"),
    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY H:mm",
      LLLL: "dddd, D MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[azi la] LT",
      nextDay: "[m\xe2ine la] LT",
      nextWeek: "dddd [la] LT",
      lastDay: "[ieri la] LT",
      lastWeek: "[fosta] dddd [la] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "peste %s",
      past: "%s \xeen urmă",
      s: "c\xe2teva secunde",
      ss: t,
      m: "un minut",
      mm: t,
      h: "o oră",
      hh: t,
      d: "o zi",
      dd: t,
      M: "o lună",
      MM: t,
      y: "un an",
      yy: t
    },
    week: {
      dow: 1,
      doy: 7
    }
  })
})