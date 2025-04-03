/** Chunk was on 95477 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var o = n(120356),
  l = n.n(o),
  i = n(481060),
  a = n(55935),
  c = n(543388),
  s = n(223021),
  u = n(388032),
  m = n(848697);

function p(e) {
  var t, n;
  let {
    tooltipProps: o,
    timeFormatted: l,
    children: i,
    compact: a,
    timestamp: c,
    id: s
  } = e;
  return (0, r.jsx)("time", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({}, o), n = n = {
    id: s,
    dateTime: c.toISOString(),
    children: null != i ? i : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("i", {
        className: m.separator,
        "aria-hidden": !0,
        children: a ? "[" : " — "
      }), l, a && (0, r.jsxs)("i", {
        className: m.separator,
        "aria-hidden": !0,
        children: ["]", " "]
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}
let d = function(e) {
  let {
    children: t,
    className: n,
    compact: o = !1,
    timestamp: d,
    isVisibleOnlyOnHover: f = !1,
    cozyAlt: b = !1,
    isInline: y = !0,
    id: g,
    isEdited: O = !1,
    application: v,
    tooltipPosition: j
  } = e, h = new Date(d), x = (0, a.Hg)(h), P = o ? (0, a.vc)(h, "LT") : (0, a.Y4)(h, !0), S = o ? (0, s.Z)(P) : null, N = O ? u.NW.formatToPlainString(u.t.CDzOFR, {
    timeFormatted: x
  }) : x;
  return (0, r.jsx)("span", {
    className: l()(n, S, {
      [m.timestamp]: !0,
      [m.timestampVisibleOnHover]: f,
      [m.timestampInline]: y,
      [m.alt]: b
    }),
    children: null == v ? (0, r.jsx)(i.ua7, {
      text: (0, a.vc)(h, "LLLL"),
      "aria-label": N,
      tooltipClassName: m.timestampTooltip,
      position: j,
      delay: 750,
      children: e => (0, r.jsx)(p, {
        tooltipProps: e,
        timeFormatted: P,
        timestamp: h,
        id: g,
        compact: o,
        children: t
      })
    }) : (0, r.jsx)(c.Z, {
      application: v,
      timestamp: h,
      compact: o,
      children: (0, r.jsx)(p, {
        timeFormatted: P,
        timestamp: h,
        id: g,
        compact: o,
        children: t
      })
    })
  })
}