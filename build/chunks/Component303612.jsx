/** Chunk was on 69079 **/
/** chunk id: 303612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u,
  y: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk23339 = require("./23339.js"),
  Chunk319060 = require("./319060.js"),
  Chunk492749 = require("./492749.js"),
  Chunk234914 = require("./234914.jsx");

function c(e) {
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

function o(e, t) {
  if (null == e) return {};
  var n, r, a, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        l = Object.getOwnPropertyNames(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }(e, t), Object.getOwnPropertySymbols)
    for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
  return l
}
let d = (0, Chunk23339.xI)(Chunk319060.A.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function u(e) {
  let {
    listing: t,
    imageSize: n,
    alt: a
  } = e, l = o(e, ["listing", "imageSize", "alt"]), i = (0, s.R)(t, n);
  return (0, r.jsx)("img", c({
    src: i,
    alt: a
  }, l))
}

function x(e) {
  let {
    listing: t,
    aspectRatio: n = 16 / 9,
    height: a
  } = e, l = o(e, ["listing", "aspectRatio", "height"]), u = (a - 2 * d) * n, x = (0, s.R)(t, u), m = (0, s.R)(t, u, {
    shouldAnimate: false
  });
  return (0, r.jsx)(i.A, c({
    src: x,
    backgroundSrc: m,
    aspectRatio: n
  }, l))
}