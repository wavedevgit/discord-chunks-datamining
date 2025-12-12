/** Chunk was on web.js **/
/** chunk id: 676651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk302463 = require("./302463.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
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

function l(e, t) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("63575"), n.e("73628")]).then(n.bind(n, 458961));
    return n => (0, r.jsx)(i, s({
      guildId: e,
      productId: t
    }, n))
  }, {
    modalKey: a.Yz
  })
}