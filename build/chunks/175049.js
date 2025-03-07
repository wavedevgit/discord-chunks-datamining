/** Chunk was on web.js **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  "use strict";
  var t = {
    words: {
      ss: ["секунда", "секунде", "секунди"],
      m: ["један минут", "једне минуте"],
      mm: ["минут", "минуте", "минута"],
      h: ["један сат", "једног сата"],
      hh: ["сат", "сата", "сати"],
      dd: ["дан", "дана", "дана"],
      MM: ["месец", "месеца", "месеци"],
      yy: ["година", "године", "година"]
    },
    correctGrammaticalCase: function(e, t) {
      return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
    },
    translate: function(e, n, r) {
      var i = t.words[r];
      return 1 === r.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
    }
  };
  return e.defineLocale("sr-cyrl", {
    months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
    monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
    monthsParseExact: !0,
    weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
    weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
    weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[данас у] LT",
      nextDay: "[сутра у] LT",
      nextWeek: function() {
        switch (this.day()) {
          case 0:
            return "[у] [недељу] [у] LT";
          case 3:
            return "[у] [среду] [у] LT";
          case 6:
            return "[у] [суботу] [у] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[у] dddd [у] LT"
        }
      },
      lastDay: "[јуче у] LT",
      lastWeek: function() {
        return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "за %s",
      past: "пре %s",
      s: "неколико секунди",
      ss: t.translate,
      m: t.translate,
      mm: t.translate,
      h: t.translate,
      hh: t.translate,
      d: "дан",
      dd: t.translate,
      M: "месец",
      MM: t.translate,
      y: "годину",
      yy: t.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 7
    }
  })
})