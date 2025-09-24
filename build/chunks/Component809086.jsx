/** Chunk was on 38062 **/
/** chunk id: 809086, original params: e,t,n (module,exports,require) **/
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
  var n, r, a = function(e, t) {
    if (null == e) return {};
    var n, r, a = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
  }
  return a
}
let d = (0, Chunk468194.Mg)(Chunk477690.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function u(e) {
  var {
    listing: t,
    imageSize: n,
    alt: a
  } = e, i = c(e, ["listing", "imageSize", "alt"]);
  let l = (0, s.U)(t, n);
  return (0, r.jsx)("img", o({
    src: l,
    alt: a
  }, i))
}

function m(e) {
  var {
    listing: t,
    aspectRatio: n = 16 / 9,
    height: a
  } = e, i = c(e, ["listing", "aspectRatio", "height"]);
  let u = (a - 2 * d) * n,
    m = (0, s.U)(t, u),
    x = (0, s.U)(t, u, {
      shouldAnimate: false
    });
  return (0, r.jsx)(l.Z, o({
    src: m,
    backgroundSrc: x,
    aspectRatio: n
  }, i))
}