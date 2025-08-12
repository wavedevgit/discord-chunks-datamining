/** Chunk was on 24530 **/
/** chunk id: 932329, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk103269 = require("./103269.js"),
  Chunk616259 = require("./616259.js"),
  Chunk300847 = require("./300847.js");

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
  return (0, Chunk255367.jsx)("div", {
    className: Chunk300847.customPointer
  })
}

function b() {
  return (0, Chunk255367.jsx)("div", {
    className: c()(Chunk300847.customPointer, Chunk300847.huePointer)
  })
}
let O = (0, Chunk103269.iS)(e => (0, n.jsxs)("div", {
    className: u.pickerWrapper,
    children: [(0, n.jsx)("div", {
      className: u.saturation,
      children: (0, n.jsx)(s.Saturation, f(p({}, e), {
        pointer: l
      }))
    }), (0, n.jsx)("div", {
      className: u.hue,
      children: (0, n.jsx)(s.Hue, f(p({}, e), {
        direction: "vertical",
        pointer: b
      }))
    })]
  })),
  j = Chunk73800.memo(O)