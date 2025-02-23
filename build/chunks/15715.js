/** Chunk was on 62985 (41b8c955b3588507.js) **/
a.d(t, {
  Z: () => n
});
var i = {
  lessThanXSeconds: {
    one: "λιγότερο από ένα δευτερόλεπτο",
    other: "λιγότερο από {{count}} δευτερόλεπτα"
  },
  xSeconds: {
    one: "1 δευτερόλεπτο",
    other: "{{count}} δευτερόλεπτα"
  },
  halfAMinute: "μισό λεπτό",
  lessThanXMinutes: {
    one: "λιγότερο από ένα λεπτό",
    other: "λιγότερο από {{count}} λεπτά"
  },
  xMinutes: {
    one: "1 λεπτό",
    other: "{{count}} λεπτά"
  },
  aboutXHours: {
    one: "περίπου 1 ώρα",
    other: "περίπου {{count}} ώρες"
  },
  xHours: {
    one: "1 ώρα",
    other: "{{count}} ώρες"
  },
  xDays: {
    one: "1 ημέρα",
    other: "{{count}} ημέρες"
  },
  aboutXWeeks: {
    one: "περίπου 1 εβδομάδα",
    other: "περίπου {{count}} εβδομάδες"
  },
  xWeeks: {
    one: "1 εβδομάδα",
    other: "{{count}} εβδομάδες"
  },
  aboutXMonths: {
    one: "περίπου 1 μήνας",
    other: "περίπου {{count}} μήνες"
  },
  xMonths: {
    one: "1 μήνας",
    other: "{{count}} μήνες"
  },
  aboutXYears: {
    one: "περίπου 1 χρόνο",
    other: "περίπου {{count}} χρόνια"
  },
  xYears: {
    one: "1 χρόνο",
    other: "{{count}} χρόνια"
  },
  overXYears: {
    one: "πάνω από 1 χρόνο",
    other: "πάνω από {{count}} χρόνια"
  },
  almostXYears: {
    one: "περίπου 1 χρόνο",
    other: "περίπου {{count}} χρόνια"
  }
};
let n = function(e, t, a) {
  var n, r = i[e];
  return (n = "string" == typeof r ? r : 1 === t ? r.one : r.other.replace("{{count}}", String(t)), null != a && a.addSuffix) ? a.comparison && a.comparison > 0 ? "σε " + n : n + " πριν" : n
}