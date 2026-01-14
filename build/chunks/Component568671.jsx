/** Chunk was on web.js **/
/** chunk id: 568671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f() {
  let e = c.intl.string(l.default["8SLtqb"]),
    t = () => {
      (0, i.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("40254"), n.e("48168")]).then(n.bind(n, 978305));
        return t => (0, r.jsx)(e, d({}, t))
      }), a.default.track(s.rMx.FAMILY_CENTER_ACTION, {
        action: o.YC.ShowQRCodeModal
      })
    };
  return (0, r.jsx)(i.Button, {
    icon: i.IkH,
    variant: "primary",
    text: e,
    onClick: t
  })
}