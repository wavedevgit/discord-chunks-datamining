/** Chunk was on web.js **/ ! function(e, t) {
  t(n(913527))
}(0, function(e) {
  return e.defineLocale("ja", {
    months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日 HH:mm",
      LLLL: "YYYY年M月D日 dddd HH:mm",
      l: "YYYY/MM/DD",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日(ddd) HH:mm"
    },
    meridiemParse: /午前|午後/i,
    isPM: function(e) {
      return "午後" === e
    },
    meridiem: function(e, t, n) {
      return e < 12 ? "午前" : "午後"
    },
    calendar: {
      sameDay: "[今日] LT",
      nextDay: "[明日] LT",
      nextWeek: function(e) {
        return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
      },
      lastDay: "[昨日] LT",
      lastWeek: function(e) {
        return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
      },
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: function(e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + "日";
        default:
          return e
      }
    },
    relativeTime: {
      future: "%s後",
      past: "%s前",
      s: "数秒",
      ss: "%d秒",
      m: "1分",
      mm: "%d分",
      h: "1時間",
      hh: "%d時間",
      d: "1日",
      dd: "%d日",
      M: "1ヶ月",
      MM: "%dヶ月",
      y: "1年",
      yy: "%d年"
    }
  })
})