/** Chunk was on web.js **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  "use strict";
  var t = {
      1: "༡",
      2: "༢",
      3: "༣",
      4: "༤",
      5: "༥",
      6: "༦",
      7: "༧",
      8: "༨",
      9: "༩",
      0: "༠"
    },
    n = {
      "༡": "1",
      "༢": "2",
      "༣": "3",
      "༤": "4",
      "༥": "5",
      "༦": "6",
      "༧": "7",
      "༨": "8",
      "༩": "9",
      "༠": "0"
    };
  return e.defineLocale("bo", {
    months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
    monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
    weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
    weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
    weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY, A h:mm",
      LLLL: "dddd, D MMMM YYYY, A h:mm"
    },
    calendar: {
      sameDay: "[དི་རིང] LT",
      nextDay: "[སང་ཉིན] LT",
      nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
      lastDay: "[ཁ་སང] LT",
      lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s ལ་",
      past: "%s སྔན་ལ",
      s: "ལམ་སང",
      ss: "%d སྐར་ཆ།",
      m: "སྐར་མ་གཅིག",
      mm: "%d སྐར་མ",
      h: "ཆུ་ཚོད་གཅིག",
      hh: "%d ཆུ་ཚོད",
      d: "ཉིན་གཅིག",
      dd: "%d ཉིན་",
      M: "ཟླ་བ་གཅིག",
      MM: "%d ཟླ་བ",
      y: "ལོ་གཅིག",
      yy: "%d ལོ"
    },
    preparse: function(e) {
      return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
        return n[e]
      })
    },
    postformat: function(e) {
      return e.replace(/\d/g, function(e) {
        return t[e]
      })
    },
    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
    meridiemHour: function(e, t) {
      return (12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t) ? e + 12 : e
    },
    meridiem: function(e, t, n) {
      return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
    },
    week: {
      dow: 0,
      doy: 6
    }
  })
})