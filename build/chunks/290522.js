/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  "use strict";

  function t(e, t, n) {
    return e + " " + i({
      mm: "munutenn",
      MM: "miz",
      dd: "devezh"
    } [n], e)
  }

  function n(e) {
    switch (r(e)) {
      case 1:
      case 3:
      case 4:
      case 5:
      case 9:
        return e + " bloaz";
      default:
        return e + " vloaz"
    }
  }

  function r(e) {
    return e > 9 ? r(e % 10) : e
  }

  function i(e, t) {
    return 2 === t ? o(e) : e
  }

  function o(e) {
    var t = {
      m: "v",
      b: "v",
      d: "z"
    };
    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
  }
  return e.defineLocale("br", {
    months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
    monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
    weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "h[e]mm A",
      LTS: "h[e]mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D [a viz] MMMM YYYY",
      LLL: "D [a viz] MMMM YYYY h[e]mm A",
      LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
    },
    calendar: {
      sameDay: "[Hiziv da] LT",
      nextDay: "[Warc'hoazh da] LT",
      nextWeek: "dddd [da] LT",
      lastDay: "[Dec'h da] LT",
      lastWeek: "dddd [paset da] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "a-benn %s",
      past: "%s 'zo",
      s: "un nebeud segondenno\xf9",
      ss: "%d eilenn",
      m: "ur vunutenn",
      mm: t,
      h: "un eur",
      hh: "%d eur",
      d: "un devezh",
      dd: t,
      M: "ur miz",
      MM: t,
      y: "ur bloaz",
      yy: n
    },
    dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
    ordinal: function(e) {
      var t = 1 === e ? "a\xf1" : "vet";
      return e + t
    },
    week: {
      dow: 1,
      doy: 4
    }
  })
})