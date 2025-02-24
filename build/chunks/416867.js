/** Chunk was on 40580 (29804edbfa36af1f.js) **/
"use strict";
r.d(t, {
  B: () => u
});
var n = r(200651);
r(192379);
var s = r(481060),
  i = r(313201),
  o = r(192635),
  l = r(388032),
  a = r(135991);

function c(e) {
  let {
    transitionState: t,
    Icon: r,
    title: c,
    body: u,
    onClose: d
  } = e, p = (0, i.Dt)();
  return (0, n.jsxs)(s.Y0X, {
    className: a.container,
    transitionState: t,
    "aria-labelledby": p,
    children: [(0, n.jsxs)(s.hzk, {
      children: [(0, n.jsx)(o.Z, {
        Icon: r
      }), (0, n.jsx)(s.LZC, {
        size: 24
      }), (0, n.jsx)(s.X6q, {
        id: p,
        className: a.__invalid_title,
        variant: "heading-xl/semibold",
        children: c
      }), (0, n.jsx)(s.LZC, {
        size: 8
      }), (0, n.jsx)(s.Text, {
        className: a.body,
        variant: "text-sm/normal",
        children: u
      })]
    }), (0, n.jsx)(s.LZC, {
      size: 24
    }), (0, n.jsx)(s.zxk, {
      size: s.zxk.Sizes.MEDIUM,
      grow: !1,
      onClick: d,
      children: l.NW.string(l.t["NX+WJC"])
    })]
  })
}

function u(e) {
  (0, s.h7j)(t => (0, n.jsx)(c, function(e) {
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
  }({}, t, e)))
}