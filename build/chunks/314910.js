/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Un: () => p,
  W5: () => m,
  ZP: () => g,
  nz: () => h,
  yP: () => _
});
var r = n(200651),
  i = n(192379),
  o = n(302901),
  a = n(539907);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let {
  Layer: c,
  LayerContainer: u,
  LayerProvider: d,
  layerContext: f
} = (0, o.Xv)("App"), p = u, _ = d, h = f, m = i.forwardRef(function(e, t) {
  return (0, r.jsx)(c, {
    children: (0, r.jsx)(a.j, l({
      ref: t
    }, e))
  })
}), g = c