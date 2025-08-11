/** Chunk was on 88806 **/
/** chunk id: 809086, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  e: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk468194 = require("./468194.js"),
  Chunk477690 = require("./477690.js"),
  Chunk166081 = require("./166081.js"),
  Chunk841762 = require("./841762.jsx");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function a(e, t) {
  if (null == e) return {};
  var r, n, o = function(e, t) {
    if (null == e) return {};
    var r, n, o = {},
      c = Object.keys(e);
    for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
    return o
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
  }
  return o
}
let s = (0, Chunk468194.Mg)(Chunk477690.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function f(e) {
  var {
    listing: t,
    imageSize: r,
    alt: o
  } = e, c = a(e, ["listing", "imageSize", "alt"]);
  let i = (0, l.U)(t, r);
  return (0, n.jsx)("img", u({
    src: i,
    alt: o
  }, c))
}

function b(e) {
  var {
    listing: t,
    aspectRatio: r = 16 / 9,
    height: o
  } = e, c = a(e, ["listing", "aspectRatio", "height"]);
  let f = (o - 2 * s) * r,
    b = (0, l.U)(t, f),
    d = (0, l.U)(t, f, {
      shouldAnimate: false
    });
  return (0, n.jsx)(i.Z, u({
    src: b,
    backgroundSrc: d,
    aspectRatio: r
  }, c))
}