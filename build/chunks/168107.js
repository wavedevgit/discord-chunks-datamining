/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(481060);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let s = {
  showAgeVerification: e => {
    (0, i.ZDy)(async () => {
      let {
        default: t
      } = await n.e("12014").then(n.bind(n, 879367));
      return n => (0, r.jsx)(t, a({}, e, n))
    })
  },
  showAgeVerificationGetStartedModal: () => {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("80144").then(n.bind(n, 634997));
      return t => (0, r.jsx)(e, a({}, t))
    })
  }
}