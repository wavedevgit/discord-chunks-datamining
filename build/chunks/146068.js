/** Chunk was on 71567 (60ad2434a2d9f37a.js) **/
"use strict";
n.d(t, {
  Z: () => g
});
var r = n(200651);
n(192379);
var i = n(249849),
  s = n(907561),
  a = n(388032),
  l = n(585025);
let o = ["#0fa3dd", "#a7e4e4", "#a2ccdd"],
  c = ["#0b3215", "#a6b51a", "#35748a", "#65a88f", "#621c12", "#f96748", "#ffbbbb"],
  d = [.25, .9, .9],
  u = [{
    base: 8,
    tint: 1
  }, {
    base: 14,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  m = [.05, .4, .15, .33, .1, .3, .6],
  p = [{
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }];

function g(e) {
  var t, n, {
      width: g,
      height: h,
      primaryTintColor: f,
      secondaryTintColor: b
    } = e,
    x = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["width", "height", "primaryTintColor", "secondaryTintColor"]);
  let {
    primaryColorsTransformed: j,
    secondaryColorsTransformed: N
  } = (0, i.s)({
    primaryBaseColors: o,
    primaryTintColor: f,
    primaryTintLuminances: d,
    primaryLuminanceWeights: u,
    secondaryBaseColors: c,
    secondaryTintColor: b,
    secondaryTintLuminances: m,
    secondaryLuminanceWeights: p
  }), {
    styleContent: v,
    containerId: _
  } = (0, s.bC)(j, N);
  return (0, r.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({}, x), n = n = {
    "aria-label": a.NW.string(a.t.nH6S2d),
    width: g,
    height: h,
    viewBox: "0 0 ".concat(s.Km, " ").concat(s.md),
    children: [(0, r.jsxs)("defs", {
      children: [(0, r.jsx)("defs", {
        children: (0, r.jsxs)("linearGradient", {
          id: "sky-gradient",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "1",
          children: [(0, r.jsx)("stop", {
            stopColor: j[2],
            offset: "0%"
          }), (0, r.jsx)("stop", {
            stopColor: j[0],
            offset: "100%"
          })]
        })
      }), (0, r.jsx)("style", {
        children: v
      })]
    }), (0, r.jsx)("use", {
      href: "".concat(l, "#sky"),
      style: {
        fill: "url(#sky-gradient)"
      }
    }), (0, r.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: _
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}