/** Chunk was on 40580 (29804edbfa36af1f.js) **/
"use strict";
r.d(t, {
  W: () => a,
  Z: () => c
});
var n = r(200651);
r(192379);
var s = r(120356),
  i = r.n(s),
  o = r(481060),
  l = r(621660);
let a = {
  RED: l.redMessageBlock,
  YELLOW: l.yellowMessageBlock,
  BROWN: l.brownMessageBlock
};

function c(e) {
  let {
    color: t,
    icon: r,
    children: s,
    className: a
  } = e;
  return (0, n.jsx)(o.kzN, {
    icon: e => (0, n.jsx)(r, function(e) {
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
    }({
      height: 20,
      width: 20
    }, e)),
    iconClassName: l.messageBlockIcon,
    className: i()(t, a),
    children: s
  })
}