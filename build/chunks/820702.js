/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  "use strict";
  var t = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
    n = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");

  function r(e) {
    return e > 1 && e < 5
  }

  function i(e, t, n, i) {
    var o = e + " ";
    switch (n) {
      case "s":
        return t || i ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
      case "ss":
        if (t || i) return o + (r(e) ? "sekundy" : "sek\xfand");
        return o + "sekundami";
      case "m":
        return t ? "min\xfata" : i ? "min\xfatu" : "min\xfatou";
      case "mm":
        if (t || i) return o + (r(e) ? "min\xfaty" : "min\xfat");
        return o + "min\xfatami";
      case "h":
        return t ? "hodina" : i ? "hodinu" : "hodinou";
      case "hh":
        if (t || i) return o + (r(e) ? "hodiny" : "hod\xedn");
        return o + "hodinami";
      case "d":
        return t || i ? "deň" : "dňom";
      case "dd":
        if (t || i) return o + (r(e) ? "dni" : "dn\xed");
        return o + "dňami";
      case "M":
        return t || i ? "mesiac" : "mesiacom";
      case "MM":
        if (t || i) return o + (r(e) ? "mesiace" : "mesiacov");
        return o + "mesiacmi";
      case "y":
        return t || i ? "rok" : "rokom";
      case "yy":
        if (t || i) return o + (r(e) ? "roky" : "rokov");
        return o + "rokmi"
    }
  }
  return e.defineLocale("sk", {
    months: t,
    monthsShort: n,
    weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
    weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
    weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[dnes o] LT",
      nextDay: "[zajtra o] LT",
      nextWeek: function() {
        switch (this.day()) {
          case 0:
            return "[v nedeľu o] LT";
          case 1:
          case 2:
            return "[v] dddd [o] LT";
          case 3:
            return "[v stredu o] LT";
          case 4:
            return "[vo štvrtok o] LT";
          case 5:
            return "[v piatok o] LT";
          case 6:
            return "[v sobotu o] LT"
        }
      },
      lastDay: "[včera o] LT",
      lastWeek: function() {
        switch (this.day()) {
          case 0:
            return "[minul\xfa nedeľu o] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[minul\xfd] dddd [o] LT";
          case 3:
            return "[minul\xfa stredu o] LT";
          case 6:
            return "[minul\xfa sobotu o] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "pred %s",
      s: i,
      ss: i,
      m: i,
      mm: i,
      h: i,
      hh: i,
      d: i,
      dd: i,
      M: i,
      MM: i,
      y: i,
      yy: i
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  })
})