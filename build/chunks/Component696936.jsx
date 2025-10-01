/** Chunk was on web.js **/
/** chunk id: 696936, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => u,
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk208360 = require("./208360.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {
  RED: Chunk208360.redMessageBlock,
  YELLOW: Chunk208360.yellowMessageBlock,
  BROWN: Chunk208360.brownMessageBlock
};

function d(e) {
  let {
    color: t,
    icon: n,
    children: i,
    className: l
  } = e;
  return (0, r.jsx)(o.kzN, {
    icon: e => (0, r.jsx)(n, c({
      height: 20,
      width: 20
    }, e)),
    iconClassName: s.messageBlockIcon,
    className: a()(t, l),
    children: i
  })
}