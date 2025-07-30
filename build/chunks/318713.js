/** Chunk was on 80416 **/
n.d(t, {
  Z: () => f
});
var a = n(255367),
  o = n(73800),
  i = n(120356),
  r = n.n(i),
  c = n(481060),
  l = n(55935),
  s = n(543388),
  u = n(223021),
  d = n(388032),
  m = n(848697);
let p = o.memo(function(e) {
    let {
      children: t,
      className: n,
      compact: i = !1,
      timestamp: p,
      timestampFormat: f,
      isVisibleOnlyOnHover: g = !1,
      cozyAlt: b = !1,
      isInline: h = !0,
      id: y,
      isEdited: T = !1,
      application: C,
      tooltipPosition: O
    } = e, E = o.useMemo(() => new Date(p), [p]), x = o.useMemo(() => (0, l.Hg)(E), [E]), v = o.useMemo(() => null != f ? (0, l.vc)(E, f) : i ? (0, l.vc)(E, "LT") : (0, l.Y4)(E, !0), [E, f, i]), I = o.useMemo(() => i ? (0, u.Z)(v) : null, [i, v]), M = o.useMemo(() => T ? d.intl.formatToPlainString(d.t.CDzOFR, {
      timeFormatted: x
    }) : x, [T, x]);
    return (0, a.jsx)("span", {
      className: r()(n, I, {
        [m.timestamp]: !0,
        [m.timestampVisibleOnHover]: g,
        [m.timestampInline]: h,
        [m.alt]: b
      }),
      children: null == C ? (0, a.jsx)(c.ua7, {
        text: () => (0, l.vc)(E, "LLLL"),
        "aria-label": M,
        tooltipClassName: m.timestampTooltip,
        position: O,
        delay: 750,
        children: e => (0, a.jsx)(_, {
          tooltipProps: e,
          timeFormatted: v,
          timestamp: E,
          id: y,
          compact: i,
          children: t
        })
      }) : (0, a.jsx)(s.Z, {
        application: C,
        timestamp: E,
        compact: i,
        children: (0, a.jsx)(_, {
          timeFormatted: v,
          timestamp: E,
          id: y,
          compact: i,
          children: t
        })
      })
    })
  }),
  _ = o.memo(function(e) {
    var t, n;
    let {
      tooltipProps: o,
      timeFormatted: i,
      children: r,
      compact: c,
      timestamp: l,
      id: s
    } = e;
    return (0, a.jsx)("time", (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = a
        })
      }
      return e
    }({}, o), n = n = {
      id: s,
      dateTime: l.toISOString(),
      children: null != r ? r : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("i", {
          className: m.separator,
          "aria-hidden": !0,
          children: c ? "[" : " — "
        }), i, c && (0, a.jsxs)("i", {
          className: m.separator,
          "aria-hidden": !0,
          children: ["]", " "]
        })]
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        n.push.apply(n, a)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }),
  f = p