/** Chunk was on 95477 **/
r.d(t, {
  Z: () => d
});
var n = r(200651);
r(192379);
var o = r(120356),
  i = r.n(o),
  l = r(481060),
  a = r(55935),
  c = r(543388),
  s = r(223021),
  u = r(388032),
  m = r(432957);

function p(e) {
  var t, r;
  let {
    tooltipProps: o,
    timeFormatted: i,
    children: l,
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
    children: null != l ? l : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("i", {
        className: m.separator,
        "aria-hidden": !0,
        children: a ? "[" : " — "
      }), i, a && (0, n.jsxs)("i", {
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
    isVisibleOnlyOnHover: f = !1,
    cozyAlt: b = !1,
    isInline: y = !0,
    id: g,
    isEdited: O = !1,
    application: h,
    tooltipPosition: j
  } = e, v = new Date(d), x = (0, a.Hg)(v), P = o ? (0, a.vc)(v, "LT") : (0, a.Y4)(v, !0), S = o ? (0, s.Z)(P) : null, T = O ? u.NW.formatToPlainString(u.t.CDzOFR, {
    timeFormatted: x
  }) : x;
  return (0, n.jsx)("span", {
    className: i()(r, S, {
      [m.timestamp]: !0,
      [m.timestampVisibleOnHover]: f,
      [m.timestampInline]: y,
      [m.alt]: b
    }),
    children: null == h ? (0, n.jsx)(l.ua7, {
      text: (0, a.vc)(v, "LLLL"),
      "aria-label": T,
      tooltipClassName: m.timestampTooltip,
      position: j,
      delay: 750,
      children: e => (0, n.jsx)(p, {
        tooltipProps: e,
        timeFormatted: P,
        timestamp: v,
        id: g,
        compact: o,
        children: t
      })
    }) : (0, n.jsx)(c.Z, {
      application: h,
      timestamp: v,
      compact: o,
      children: (0, n.jsx)(p, {
        timeFormatted: P,
        timestamp: v,
        id: g,
        compact: o,
        children: t
      })
    })
  })
}