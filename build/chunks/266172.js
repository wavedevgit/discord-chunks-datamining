/** Chunk was on web.js **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  return e.defineLocale("fo", {
    months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
    weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),
    weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),
    weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd D. MMMM, YYYY HH:mm"
    },
    calendar: {
      sameDay: "[\xcd dag kl.] LT",
      nextDay: "[\xcd morgin kl.] LT",
      nextWeek: "dddd [kl.] LT",
      lastDay: "[\xcd gj\xe1r kl.] LT",
      lastWeek: "[s\xed\xf0stu] dddd [kl] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "um %s",
      past: "%s s\xed\xf0ani",
      s: "f\xe1 sekund",
      ss: "%d sekundir",
      m: "ein minutt",
      mm: "%d minuttir",
      h: "ein t\xedmi",
      hh: "%d t\xedmar",
      d: "ein dagur",
      dd: "%d dagar",
      M: "ein m\xe1na\xf0i",
      MM: "%d m\xe1na\xf0ir",
      y: "eitt \xe1r",
      yy: "%d \xe1r"
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  })
})