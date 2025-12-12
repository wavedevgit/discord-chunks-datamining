/** Chunk was on web.js **/
/** chunk id: 568671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk546791 = require("./546791.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p() {
  let e = (0, Chunk546791.nE)(Chunk388032.intl.string(Chunk517319.default.Ta9byS), Chunk388032.intl.string(Chunk517319.default["8SLtqb"])),
    t = () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([require.e("10695"), require.e("48168")]).then(require.bind(require, 978305));
        return t => (0, r.jsx)(e, f({}, t))
      }), Chunk626135.default.track(Chunk981631.rMx.FAMILY_CENTER_ACTION, {
        action: Chunk292352.YC.ShowQRCodeModal
      })
    };
  return (0, Chunk54381.jsx)(Chunk481060.Button, {
    icon: Chunk481060.IkH,
    variant: "primary",
    text: module,
    onClick: exports
  })
}