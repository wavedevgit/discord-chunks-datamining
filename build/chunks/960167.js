/** Chunk was on 78607 **/
n.d(t, {
  Z: () => i
});
var a = n(799761);
let i = {
  ordinalNumber: function(e, t) {
    var n = Number(e);
    switch (String(null == t ? void 0 : t.unit)) {
      case "minute":
      case "second":
        return String(n);
      case "date":
        return n + "일";
      default:
        return n + "번째"
    }
  },
  era: (0, a.Z)({
    values: {
      narrow: ["BC", "AD"],
      abbreviated: ["BC", "AD"],
      wide: ["기원전", "서기"]
    },
    defaultWidth: "wide"
  }),
  quarter: (0, a.Z)({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1분기", "2분기", "3분기", "4분기"]
    },
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1
    }
  }),
  month: (0, a.Z)({
    values: {
      narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      abbreviated: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      wide: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
    },
    defaultWidth: "wide"
  }),
  day: (0, a.Z)({
    values: {
      narrow: ["일", "월", "화", "수", "목", "금", "토"],
      short: ["일", "월", "화", "수", "목", "금", "토"],
      abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
      wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
    },
    defaultWidth: "wide"
  }),
  dayPeriod: (0, a.Z)({
    values: {
      narrow: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
      },
      abbreviated: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
      },
      wide: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
      }
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
      },
      abbreviated: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
      },
      wide: {
        am: "오전",
        pm: "오후",
        midnight: "자정",
        noon: "정오",
        morning: "아침",
        afternoon: "오후",
        evening: "저녁",
        night: "밤"
      }
    },
    defaultFormattingWidth: "wide"
  })
}