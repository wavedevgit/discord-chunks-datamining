/** Chunk was on 88806 **/
/** chunk id: 809086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  e: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk468194 = require("./468194.js"),
  Chunk477690 = require("./477690.js"),
  Chunk166081 = require("./166081.js"),
  Chunk841762 = require("./841762.jsx");

function u(e) {
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

function a(e, t) {
  if (null == e) return {};
  var n, r, o = function(e, t) {
    if (null == e) return {};
    var n, r, o = {},
      c = Object.keys(e);
    for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (r = 0; r < c.length; r++) n = c[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
  }
  return o
}
let s = (0, Chunk468194.Mg)(Chunk477690.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function f(e) {
  var {
    listing: t,
    imageSize: n,
    alt: o
  } = e, c = a(e, ["listing", "imageSize", "alt"]);
  let i = (0, l.U)(t, n);
  return (0, r.jsx)("img", u({
    src: i,
    alt: o
  }, c))
}

function d(e) {
  var {
    listing: t,
    aspectRatio: n = 16 / 9,
    height: o
  } = e, c = a(e, ["listing", "aspectRatio", "height"]);
  let f = (o - 2 * s) * n,
    d = (0, l.U)(t, f),
    b = (0, l.U)(t, f, {
      shouldAnimate: false
    });
  return (0, r.jsx)(i.Z, u({
    src: d,
    backgroundSrc: b,
    aspectRatio: n
  }, c))
}