/** Chunk was on 95477 **/
r.d(t, {
  Z: () => d
});
var n = r(200651);
r(192379);
var o = r(120356),
  l = r.n(o),
  i = r(481060),
  a = r(55935),
  c = r(543388),
  s = r(223021),
  u = r(388032),
  m = r(848697);

function p(e) {
  var t, r;
  let {
    tooltipProps: o,
    timeFormatted: l,
    children: i,
    compact: a,
    timestamp: c,
    id: s
  } = e;
  return (0, n.jsx)("time", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({}, o), r = r = {
    id: s,
    dateTime: c.toISOString(),
    children: null != i ? i : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("i", {
        className: m.separator,
        "aria-hidden": !0,
        children: a ? "[" : " — "
      }), l, a && (0, n.jsxs)("i", {
        className: m.separator,
        "aria-hidden": !0,
        children: ["]", " "]
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}
let d = function(e) {
  let {
    children: t,
    className: r,
    compact: o = !1,
    timestamp: d,
    timestampFormat: f,
    isVisibleOnlyOnHover: b = !1,
    cozyAlt: y = !1,
    isInline: g = !0,
    id: O,
    isEdited: v = !1,
    application: h,
    tooltipPosition: j
  } = e, x = new Date(d), P = (0, a.Hg)(x), S = null != f ? (0, a.vc)(x, f) : o ? (0, a.vc)(x, "LT") : (0, a.Y4)(x, !0), N = o ? (0, s.Z)(S) : null, T = v ? u.NW.formatToPlainString(u.t.CDzOFR, {
    timeFormatted: P
  }) : P;
  return (0, n.jsx)("span", {
    className: l()(r, N, {
      [m.timestamp]: !0,
      [m.timestampVisibleOnHover]: b,
      [m.timestampInline]: g,
      [m.alt]: y
    }),
    children: null == h ? (0, n.jsx)(i.ua7, {
      text: (0, a.vc)(x, "LLLL"),
      "aria-label": T,
      tooltipClassName: m.timestampTooltip,
      position: j,
      delay: 750,
      children: e => (0, n.jsx)(p, {
        tooltipProps: e,
        timeFormatted: S,
        timestamp: x,
        id: O,
        compact: o,
        children: t
      })
    }) : (0, n.jsx)(c.Z, {
      application: h,
      timestamp: x,
      compact: o,
      children: (0, n.jsx)(p, {
        timeFormatted: S,
        timestamp: x,
        id: O,
        compact: o,
        children: t
      })
    })
  })
}