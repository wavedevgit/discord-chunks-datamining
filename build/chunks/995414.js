/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(249849),
  s = n(907561),
  a = n(388032),
  l = n(114266);
let o = ["#0089d9"],
  c = ["#ff9e32", "#b4eefc", "#ffffff", "#804f19"],
  d = [.2],
  u = [{
    base: 8,
    tint: 1
  }],
  m = [.45, .7, 1, .3],
  g = [{
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 10,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }];

function p(e) {
  var t, n, {
      width: p,
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
    secondaryLuminanceWeights: g
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
    width: p,
    height: h,
    viewBox: "0 0 ".concat(s.Km, " ").concat(s.md),
    children: [(0, r.jsx)("defs", {
      children: (0, r.jsx)("style", {
        children: v
      })
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