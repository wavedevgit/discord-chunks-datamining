/** Chunk was on 3277 (a5b654f32c0fdd87.js) **/
n.d(t, {
  Z: () => o
});
var i = n(99887),
  a = {
    lessThanXSeconds: {
      one: "१ सेकंड से कम",
      other: "{{count}} सेकंड से कम"
    },
    xSeconds: {
      one: "१ सेकंड",
      other: "{{count}} सेकंड"
    },
    halfAMinute: "आधा मिनट",
    lessThanXMinutes: {
      one: "१ मिनट से कम",
      other: "{{count}} मिनट से कम"
    },
    xMinutes: {
      one: "१ मिनट",
      other: "{{count}} मिनट"
    },
    aboutXHours: {
      one: "लगभग १ घंटा",
      other: "लगभग {{count}} घंटे"
    },
    xHours: {
      one: "१ घंटा",
      other: "{{count}} घंटे"
    },
    xDays: {
      one: "१ दिन",
      other: "{{count}} दिन"
    },
    aboutXWeeks: {
      one: "लगभग १ सप्ताह",
      other: "लगभग {{count}} सप्ताह"
    },
    xWeeks: {
      one: "१ सप्ताह",
      other: "{{count}} सप्ताह"
    },
    aboutXMonths: {
      one: "लगभग १ महीना",
      other: "लगभग {{count}} महीने"
    },
    xMonths: {
      one: "१ महीना",
      other: "{{count}} महीने"
    },
    aboutXYears: {
      one: "लगभग १ वर्ष",
      other: "लगभग {{count}} वर्ष"
    },
    xYears: {
      one: "१ वर्ष",
      other: "{{count}} वर्ष"
    },
    overXYears: {
      one: "१ वर्ष से अधिक",
      other: "{{count}} वर्ष से अधिक"
    },
    almostXYears: {
      one: "लगभग १ वर्ष",
      other: "लगभग {{count}} वर्ष"
    }
  };
let o = function(e, t, n) {
  var o, r = a[e];
  return (o = "string" == typeof r ? r : 1 === t ? r.one : r.other.replace("{{count}}", (0, i.N4)(t)), null != n && n.addSuffix) ? n.comparison && n.comparison > 0 ? o + "मे " : o + " पहले" : o
}