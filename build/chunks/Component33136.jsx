/** Chunk was on 86537 **/
/** chunk id: 33136, original params: e,r,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk868062 = require("./868062.js"),
  Chunk247366 = require("./247366.js"),
  Chunk464198 = require("./464198.js");

function p(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(r) {
      var n;
      n = t[r], r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = n
    })
  }
  return e
}

function l(e, r) {
  return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e
}

function f() {
  return (0, n.jsx)("div", {
    className: u.HM
  })
}

function b() {
  return (0, n.jsx)("div", {
    className: i()(u.HM, u.Cj)
  })
}
let j = (0, Chunk868062.kl)(e => (0, n.jsxs)("div", {
    className: u.og,
    children: [(0, n.jsx)("div", {
      className: u.Lr,
      children: (0, n.jsx)(a.Saturation, l(p({}, e), {
        pointer: f
      }))
    }), (0, n.jsx)("div", {
      className: u.lG,
      children: (0, n.jsx)(a.Hue, l(p({}, e), {
        direction: "horizontal",
        pointer: b
      }))
    })]
  })),
  O = Chunk64700.memo(j)