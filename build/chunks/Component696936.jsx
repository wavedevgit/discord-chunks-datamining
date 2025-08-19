/** Chunk was on 31930 **/
/** chunk id: 696936, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => a,
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk762641 = require("./762641.js");
let a = {
  RED: Chunk762641.redMessageBlock,
  YELLOW: Chunk762641.yellowMessageBlock,
  BROWN: Chunk762641.brownMessageBlock
};

function c(e) {
  let {
    color: t,
    icon: n,
    children: r,
    className: a
  } = e;
  return (0, i.jsx)(l.kzN, {
    icon: e => (0, i.jsx)(n, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({
      height: 20,
      width: 20
    }, e)),
    iconClassName: o.messageBlockIcon,
    className: s()(t, a),
    children: r
  })
}