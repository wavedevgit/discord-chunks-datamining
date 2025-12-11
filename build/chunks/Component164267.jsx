/** Chunk was on 77400 **/
/** chunk id: 164267, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk167490 = require("./167490.js"),
  Chunk505609 = require("./505609.js"),
  Chunk585018 = require("./585018.js");

function p(e) {
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function f() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk585018.customPointer
  })
}

function d() {
  return (0, Chunk54381.jsx)("div", {
    className: c()(Chunk585018.customPointer, Chunk585018.huePointer)
  })
}
let l = (0, Chunk167490.iS)(e => (0, n.jsxs)("div", {
    className: u.pickerWrapper,
    children: [(0, n.jsx)("div", {
      className: u.saturation,
      children: (0, n.jsx)(s.Saturation, b(p({}, e), {
        pointer: f
      }))
    }), (0, n.jsx)("div", {
      className: u.hue,
      children: (0, n.jsx)(s.Hue, b(p({}, e), {
        direction: "horizontal",
        pointer: d
      }))
    })]
  })),
  O = Chunk473749.memo(l)