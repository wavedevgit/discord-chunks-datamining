/** Chunk was on 35855 **/
/** chunk id: 164267, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk843178 = require("./843178.js"),
  Chunk393608 = require("./393608.js"),
  Chunk417154 = require("./417154.js");

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

function f(e, t) {
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

function l() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk417154.customPointer
  })
}

function b() {
  return (0, Chunk951288.jsx)("div", {
    className: c()(Chunk417154.customPointer, Chunk417154.huePointer)
  })
}
let O = (0, Chunk843178.iS)(e => (0, n.jsxs)("div", {
    className: a.pickerWrapper,
    children: [(0, n.jsx)("div", {
      className: a.saturation,
      children: (0, n.jsx)(u.Saturation, f(p({}, e), {
        pointer: l
      }))
    }), (0, n.jsx)("div", {
      className: a.hue,
      children: (0, n.jsx)(u.Hue, f(p({}, e), {
        direction: "horizontal",
        pointer: b
      }))
    })]
  })),
  j = Chunk647438.memo(O)