/** Chunk was on 64523 **/
/** chunk id: 809086, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u,
  e: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk468194 = require("./468194.js"),
  Chunk477690 = require("./477690.js"),
  Chunk166081 = require("./166081.js"),
  Chunk841762 = require("./841762.jsx");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let d = (0, Chunk468194.Mg)(Chunk477690.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function u(e) {
  var {
    listing: t,
    imageSize: n,
    alt: i
  } = e, l = c(e, ["listing", "imageSize", "alt"]);
  let a = (0, s.U)(t, n);
  return (0, r.jsx)("img", o({
    src: a,
    alt: i
  }, l))
}

function m(e) {
  var {
    listing: t,
    aspectRatio: n = 16 / 9,
    height: i
  } = e, l = c(e, ["listing", "aspectRatio", "height"]);
  let u = (i - 2 * d) * n,
    m = (0, s.U)(t, u),
    g = (0, s.U)(t, u, {
      shouldAnimate: false
    });
  return (0, r.jsx)(a.Z, o({
    src: m,
    backgroundSrc: g,
    aspectRatio: n
  }, l))
}