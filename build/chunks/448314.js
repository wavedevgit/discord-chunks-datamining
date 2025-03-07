/** Chunk was on web.js **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  "use strict";
  var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
    n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
  return e.defineLocale("es-us", {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
    monthsShort: function(e, r) {
      return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
    },
    monthsParseExact: !0,
    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "MM/DD/YYYY",
      LL: "MMMM [de] D [de] YYYY",
      LLL: "MMMM [de] D [de] YYYY h:mm A",
      LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
    },
    calendar: {
      sameDay: function() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextDay: function() {
        return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      nextWeek: function() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastDay: function() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      lastWeek: function() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      ss: "%d segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un d\xeda",
      dd: "%d d\xedas",
      M: "un mes",
      MM: "%d meses",
      y: "un a\xf1o",
      yy: "%d a\xf1os"
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\xba",
    week: {
      dow: 0,
      doy: 6
    }
  })
})