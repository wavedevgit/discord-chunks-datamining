/** Chunk was on web.js **/
/** chunk id: 748780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./35282.js"), require("./539854.js"), require("./583741.js");
var Chunk681667 = require("./681667.js"),
  Chunk806174 = require("./806174.js"),
  a = require.n(Chunk806174),
  Chunk78650 = require("./78650.js"),
  s = require.n(Chunk78650),
  Chunk505444 = require("./505444.js"),
  c = require.n(Chunk505444);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let t = Object.keys(e)[0];
  return "".concat(t, "(").concat(e[t], ")")
}
let g = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;

function E(e) {
  let t = e.match(g);
  return null != t && (e = "rgba(".concat(0 | t[1], ", ").concat(0 | t[2], ", ").concat(0 | t[3], ", ").concat(t[4], ")")), e
}

function b(e) {
  return e && (e.transform && (e.transform = e.WebkitTransform = e.MozTransform = e.transform.map(m).join(" ")), e.color && (e.color = E(e.color)), e.backgroundColor && (e.backgroundColor = E(e.backgroundColor))), e
}

function y(e, t, n) {
  if (e.setNativeProps) e.setNativeProps(t);
  else {
    if (!e.nodeType || true === e.setAttribute) returnfalse;
    c().setValueForStyles(e, b(t.style), n._reactInternalInstance)
  }
}

function O(e) {
  return e.transform = e.transform || [], e.transform.push({
    translateZ: 0
  }), e
}

function v(e, t, n) {
  return true !== t && true != n ? s()(t, n) : e
}

function I(e, t) {
  let n, {
      toValueMin: i,
      toValueMax: a,
      tension: o = 0,
      friction: s = 0,
      loop: l,
      reverse: c,
      invert: u,
      callback: f,
      type: h = "spring",
      shouldLoop: m,
      durationMin: g,
      durationMax: E
    } = t,
    b = p(t, ["toValueMin", "toValueMax", "tension", "friction", "loop", "reverse", "invert", "callback", "type", "shouldLoop", "durationMin", "durationMax"]),
    y = e._value,
    O = v(t.duration, g, E),
    T = v(t.toValue, i, a),
    S = r[h](e, _(d({}, b), {
      toValue: T,
      tension: o,
      friction: s,
      duration: O
    })),
    A = S;
  if (c || u) {
    let i = v(t.duration, g, E);
    n = r[h](e, _(d({}, b), {
      toValue: c ? y : -T,
      tension: o,
      friction: s,
      duration: i
    })), A = r.sequence([S, n])
  }
  l ? A.start(() => {
    (!m || m && m()) && (f ? f(I.bind(null, e, t)) : I(e, t))
  }) : A.start(f)
}

function T(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return e.interpolate({
    inputRange: [0, 1],
    outputRange: n
  })
}
Chunk681667.inject.ApplyAnimatedValues(y, e => e);
let S = {
    CLAMP: "clamp"
  },
  A = _(d({}, Chunk681667), {
    Easing: a(),
    accelerate: O,
    animate: I,
    interpolate: T,
    Extrapolate: S,
    div: Chunk681667.createAnimatedComponent("div"),
    span: Chunk681667.createAnimatedComponent("span"),
    img: Chunk681667.createAnimatedComponent("img"),
    a: Chunk681667.createAnimatedComponent("a"),
    form: Chunk681667.createAnimatedComponent("form"),
    ul: Chunk681667.createAnimatedComponent("ul"),
    li: Chunk681667.createAnimatedComponent("li"),
    g: Chunk681667.createAnimatedComponent("g"),
    use: Chunk681667.createAnimatedComponent("use"),
    path: Chunk681667.createAnimatedComponent("path"),
    section: Chunk681667.createAnimatedComponent("section"),
    video: Chunk681667.createAnimatedComponent("video")
  })