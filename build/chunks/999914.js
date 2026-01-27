/** Chunk was on web.js **/
/** chunk id: 999914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => h
});
var Chunk22299 = require("./22299.js"),
  Chunk861170 = require("./861170.js"),
  Chunk515702 = require("./515702.js"),
  Chunk352404 = require("./352404.js"),
  Chunk376472 = require("./376472.js"),
  Chunk142922 = require("./142922.js"),
  Chunk339241 = require("./339241.js"),
  Chunk492313 = require("./492313.js"),
  Chunk64700 = require("./64700.js");
let f = {
    year: true,
    month: true,
    day: true,
    hour: true,
    minute: true,
    second: true,
    dayPeriod: true,
    era: true
  },
  p = {
    year: 5,
    month: 2,
    day: 7,
    hour: 2,
    minute: 15,
    second: 15
  },
  _ = {
    dayperiod: "dayPeriod",
    relatedYear: "year",
    yearName: "literal",
    unknown: "literal"
  };

function h(e) {
  var t, n, i;
  let {
    locale: h,
    createCalendar: g,
    hideTimeZone: b,
    isDisabled: O = false,
    isReadOnly: v = false,
    isRequired: A = false,
    minValue: I,
    maxValue: S,
    isDateUnavailable: T
  } = e, C = e.value || e.defaultValue || e.placeholderValue || null, [N, w] = (0, r.bf)(C, e.granularity), R = w || "UTC";
  if (C && !(N in C)) throw Error("Invalid granularity " + N + " for value " + C.toString());
  let P = (0, d.useMemo)(() => new(0, a.p)(h), [h]),
    D = (0, d.useMemo)(() => g(P.resolvedOptions().calendar), [g, P]),
    [L, x] = (0, u.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
    [M] = (0, d.useState)(L),
    j = (0, d.useMemo)(() => {
      var e;
      return null != (e = (0, r.nf)(L, D)) ? e : null
    }, [L, D]),
    [k, U] = (0, d.useState)(() => (0, r.o_)(e.placeholderValue, N, D, w)),
    G = j || k,
    F = "gregory" === D.identifier && "BC" === G.era,
    V = (0, d.useMemo)(() => {
      var t;
      return {
        granularity: N,
        maxGranularity: null != (t = e.maxGranularity) ? t : "year",
        timeZone: w,
        hideTimeZone: b,
        hourCycle: e.hourCycle,
        showEra: F,
        shouldForceLeadingZeros: e.shouldForceLeadingZeros
      }
    }, [e.maxGranularity, N, e.hourCycle, e.shouldForceLeadingZeros, w, b, F]),
    B = (0, d.useMemo)(() => (0, r.id)({}, V), [V]),
    H = (0, d.useMemo)(() => new(0, a.p)(h, B), [h, B]),
    Y = (0, d.useMemo)(() => H.resolvedOptions(), [H]),
    W = (0, d.useMemo)(() => H.formatToParts(new Date).filter(e => f[e.type]).reduce((e, t) => (e[_[t.type] || t.type] = true, e), {}), [H]),
    [K, z] = (0, d.useState)(() => e.value || e.defaultValue ? {
      ...W
    } : {}),
    q = (0, d.useRef)(null),
    Z = (0, d.useRef)(D);
  (0, d.useEffect)(() => {
    (0, o.Jg)(D, Z.current) || (Z.current = D, U(t => Object.keys(K).length > 0 ? (0, s.yP)(t, D) : (0, r.o_)(e.placeholderValue, N, D, w)))
  }, [D, N, K, w, e.placeholderValue]), L && Object.keys(K).length < Object.keys(W).length && z(K = {
    ...W
  }), null == L && Object.keys(K).length === Object.keys(W).length && (z(K = {}), U((0, r.o_)(e.placeholderValue, N, D, w)));
  let Q = j && Object.keys(K).length >= Object.keys(W).length ? j : k,
    X = t => {
      if (e.isDisabled || e.isReadOnly) return;
      let n = Object.keys(K),
        i = Object.keys(W);
      null == t ? (x(null), U((0, r.o_)(e.placeholderValue, N, D, w)), z({})) : 0 === n.length && null == q.current || n.length >= i.length || n.length === i.length - 1 && W.dayPeriod && !K.dayPeriod && "dayPeriod" !== q.current ? (0 === n.length && z(K = {
        ...W
      }), x(t = (0, s.yP)(t, (null == C ? true : C.calendar) || new(0, l.FG)))) : U(t), q.current = null
    },
    J = (0, d.useMemo)(() => Q.toDate(R), [Q, R]),
    $ = (0, d.useMemo)(() => m(J, K, H, Y, Q, D, h, N), [J, K, H, Y, Q, D, h, N]);
  W.era && K.year && !K.era ? (K.era = true, z({
    ...K
  })) : !W.era && K.era && (delete K.era, z({
    ...K
  }));
  let ee = e => {
      K[e] = true, "year" === e && W.era && (K.era = true), z({
        ...K
      })
    },
    et = (e, t) => {
      if (K[e]) X(E(Q, e, t, Y));
      else {
        ee(e);
        let t = Object.keys(K),
          n = Object.keys(W);
        (t.length >= n.length || t.length === n.length - 1 && W.dayPeriod && !K.dayPeriod) && X(Q)
      }
    },
    en = (0, d.useMemo)(() => (0, r.nz)(L, I, S, T, V), [L, I, S, T, V]),
    er = (0, c.KZ)({
      ...e,
      value: L,
      builtinValidation: en
    }),
    ei = er.displayValidation.isInvalid,
    ea = e.validationState || (ei ? "invalid" : null);
  return {
    ...er,
    value: j,
    defaultValue: null != (n = e.defaultValue) ? n : M,
    dateValue: J,
    calendar: D,
    setValue: X,
    segments: $,
    dateFormatter: H,
    validationState: ea,
    isInvalid: ei,
    granularity: N,
    maxGranularity: null != (i = e.maxGranularity) ? i : "year",
    isDisabled: O,
    isReadOnly: v,
    isRequired: A,
    increment(e) {
      et(e, 1)
    },
    decrement(e) {
      et(e, false)
    },
    incrementPage(e) {
      et(e, p[e] || 1)
    },
    decrementPage(e) {
      et(e, -(p[e] || 1))
    },
    setSegment(e, t) {
      ee(e), X(y(Q, e, t, Y))
    },
    confirmPlaceholder() {
      if (e.isDisabled || e.isReadOnly) return;
      let t = Object.keys(K),
        n = Object.keys(W);
      t.length === n.length - 1 && W.dayPeriod && !K.dayPeriod && (z(K = {
        ...W
      }), X(Q.copy()))
    },
    clearSegment(t) {
      delete K[t], q.current = t, z({
        ...K
      });
      let n = (0, r.o_)(e.placeholderValue, N, D, w),
        i = Q;
      if ("dayPeriod" === t && "hour" in Q && "hour" in n) {
        let e = Q.hour >= 12,
          t = n.hour >= 12;
        e && !t ? i = Q.set({
          hour: Q.hour - 12
        }) : !e && t && (i = Q.set({
          hour: Q.hour + 12
        }))
      } else "hour" === t && "hour" in Q && Q.hour >= 12 && K.dayPeriod ? i = Q.set({
        hour: n.hour + 12
      }) : t in Q && (i = Q.set({
        [t]: n[t]
      }));
      x(null), X(i)
    },
    formatValue(e) {
      if (!j) return "";
      let t = (0, r.id)(e, V);
      return new(0, a.p)(h, t).format(J)
    },
    getDateFormatter(e, t) {
      let n = {
          ...V,
          ...t
        },
        i = (0, r.id)({}, n);
      return new(0, a.p)(e, i)
    }
  }
}

function m(e, t, n, r, a, o, s, l) {
  let c = ["hour", "minute", "second"],
    u = n.formatToParts(e),
    d = [];
  for (let e of u) {
    let n = _[e.type] || e.type,
      u = f[n];
    "era" === n && 1 === o.getEras().length && (u = false);
    let p = f[n] && !t[n],
      h = f[n] ? (0, i.G)(n, e.value, s) : null,
      m = {
        type: n,
        text: p ? h : e.value,
        ...g(a, n, r),
        isPlaceholder: p,
        placeholder: h,
        isEditable: u
      };
    "hour" === n ? (d.push({
      type: "literal",
      text: "⁦",
      ...g(a, "literal", r),
      isPlaceholder: false,
      placeholder: "",
      isEditable: false
    }), d.push(m), n === l && d.push({
      type: "literal",
      text: "⁩",
      ...g(a, "literal", r),
      isPlaceholder: false,
      placeholder: "",
      isEditable: false
    })) : c.includes(n) && n === l ? (d.push(m), d.push({
      type: "literal",
      text: "⁩",
      ...g(a, "literal", r),
      isPlaceholder: false,
      placeholder: "",
      isEditable: false
    })) : d.push(m)
  }
  return d
}

function g(e, t, n) {
  switch (t) {
    case "era": {
      let t = e.calendar.getEras();
      return {
        value: t.indexOf(e.era),
        minValue: 0,
        maxValue: t.length - 1
      }
    }
    case "year":
      return {
        value: e.year, minValue: 1, maxValue: e.calendar.getYearsInEra(e)
      };
    case "month":
      return {
        value: e.month, minValue: (0, o.xz)(e), maxValue: e.calendar.getMonthsInYear(e)
      };
    case "day":
      return {
        value: e.day, minValue: (0, o.oT)(e), maxValue: e.calendar.getDaysInMonth(e)
      }
  }
  if ("hour" in e) switch (t) {
    case "dayPeriod":
      return {
        value: 12 * (e.hour >= 12), minValue: 0, maxValue: 12
      };
    case "hour":
      if (n.hour12) {
        let t = e.hour >= 12;
        return {
          value: e.hour,
          minValue: 12 * !!t,
          maxValue: t ? 23 : 11
        }
      }
      return {
        value: e.hour, minValue: 0, maxValue: 23
      };
    case "minute":
      return {
        value: e.minute, minValue: 0, maxValue: 59
      };
    case "second":
      return {
        value: e.second, minValue: 0, maxValue: 59
      }
  }
  return {}
}

function E(e, t, n, r) {
  switch (t) {
    case "era":
    case "year":
    case "month":
    case "day":
      return e.cycle(t, n, {
        round: "year" === t
      })
  }
  if ("hour" in e) switch (t) {
    case "dayPeriod": {
      let t = e.hour,
        n = t >= 12;
      return e.set({
        hour: n ? t - 12 : t + 12
      })
    }
    case "hour":
    case "minute":
    case "second":
      return e.cycle(t, n, {
        round: "hour" !== t,
        hourCycle: r.hour12 ? 12 : 24
      })
  }
  throw Error("Unknown segment: " + t)
}

function y(e, t, n, r) {
  switch (t) {
    case "day":
    case "month":
    case "year":
    case "era":
      return e.set({
        [t]: n
      })
  }
  if ("hour" in e && "number" == typeof n) switch (t) {
    case "dayPeriod": {
      let t = e.hour,
        r = t >= 12;
      if (n >= 12 === r) return e;
      return e.set({
        hour: r ? t - 12 : t + 12
      })
    }
    case "hour":
      if (r.hour12) {
        let t = e.hour >= 12;
        t || 12 !== n || (n = 0), t && n < 12 && (n += 12)
      }
    case "minute":
    case "second":
      return e.set({
        [t]: n
      })
  }
  throw Error("Unknown segment: " + t)
}