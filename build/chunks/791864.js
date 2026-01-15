/** Chunk was on web.js **/
/** chunk id: 791864, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => u
});
var Chunk493550 = require("./493550.js"),
  Chunk640475 = require("./640475.js"),
  Chunk45728 = require("./45728.js"),
  Chunk134915 = require("./134915.js"),
  Chunk884821 = require("./884821.js"),
  Chunk386239 = require("./386239.js"),
  Chunk473749 = require("./473749.js");

function u(e) {
  var t, n;
  let u = (0, s.d)(e),
    [d, f] = (0, l.z)(e.value, e.defaultValue || null, e.onChange),
    [p] = (0, c.useState)(d),
    _ = d || e.placeholderValue || null,
    [h, m] = (0, r.iZ)(_, e.granularity),
    g = null != d ? d.toDate(null != m ? m : "UTC") : null,
    E = "hour" === h || "minute" === h || "second" === h,
    b = null == (t = e.shouldCloseOnSelect) || t,
    [y, O] = (0, c.useState)(null),
    [v, S] = (0, c.useState)(null);
  if (d && (y = d, "hour" in d && (v = d)), _ && !(h in _)) throw Error("Invalid granularity " + h + " for value " + _.toString());
  let I = (null == d ? true : d.calendar.identifier) === "gregory" && "BC" === d.era,
    T = (0, c.useMemo)(() => ({
      granularity: h,
      timeZone: m,
      hideTimeZone: e.hideTimeZone,
      hourCycle: e.hourCycle,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros,
      showEra: I
    }), [h, e.hourCycle, e.shouldForceLeadingZeros, m, e.hideTimeZone, I]),
    {
      minValue: C,
      maxValue: A,
      isDateUnavailable: N
    } = e,
    P = (0, c.useMemo)(() => (0, r.p2)(d, C, A, N, T), [d, C, A, N, T]),
    w = (0, o.Q3)({
      ...e,
      value: d,
      builtinValidation: P
    }),
    R = w.displayValidation.isInvalid,
    D = e.validationState || (R ? "invalid" : null),
    x = (e, t) => {
      f("timeZone" in t ? t.set((0, i.WG)(e)) : (0, i.IO)(e, t)), O(null), S(null), w.commitValidation()
    },
    L = t => {
      let n = "function" == typeof b ? b() : b;
      E ? v || n ? x(t, v || (0, r.zu)(e.defaultValue || e.placeholderValue)) : O(t) : (f(t), w.commitValidation()), n && u.setOpen(false)
    },
    j = e => {
      y && e ? x(y, e) : S(e)
    };
  return {
    ...w,
    value: d,
    defaultValue: null != (n = e.defaultValue) ? n : p,
    setValue: f,
    dateValue: y,
    timeValue: v,
    setDateValue: L,
    setTimeValue: j,
    granularity: h,
    hasTime: E,
    ...u,
    setOpen(t) {
      !t && !d && y && E && x(y, v || (0, r.zu)(e.defaultValue || e.placeholderValue)), u.setOpen(t)
    },
    validationState: D,
    isInvalid: R,
    formatValue(e, t) {
      if (!g) return "";
      let n = (0, r.oE)(t, T);
      return new(0, a.C)(e, n).format(g)
    },
    getDateFormatter(e, t) {
      let n = {
          ...T,
          ...t
        },
        i = (0, r.oE)({}, n);
      return new(0, a.C)(e, i)
    }
  }
}