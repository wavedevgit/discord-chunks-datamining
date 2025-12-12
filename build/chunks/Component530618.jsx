/** Chunk was on web.js **/
/** chunk id: 530618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk921254 = require("./921254.js"),
  Chunk675654 = require("./675654.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = 50,
  f = 10,
  p = 100;

function _(e, t) {
  return t = null != t ? t : 1, u(l({}, a.We), {
    position: {
      type: "static-random",
      minValue: {
        x: e.x,
        y: e.y
      },
      maxValue: {
        x: e.x + e.width,
        y: e.y + e.height / 2
      }
    },
    velocity: {
      type: "static-random",
      minValue: {
        x: false * t,
        y: false * t
      },
      maxValue: {
        x: 100 * t,
        y: false * t
      }
    },
    dragCoefficient: {
      type: "static",
      value: .166
    }
  })
}
let m = function(e) {
  let {
    confettiTarget: t,
    confettiCanvas: n,
    confettiVelocityMultiplier: s,
    sprites: l,
    colors: c
  } = e, [u, m] = i.useState(null), h = (0, o.uR)(n, u), [g, E] = i.useState(false);
  return i.useEffect(() => {
    let e = Array(f).fill(0);
    return null != t && h.isReady && !g && (e = e.map((n, r) => setTimeout(() => {
      r === e.length - 1 && E(true), h.createMultipleConfetti(_(t.getBoundingClientRect(), s), d)
    }, r * p))), () => {
      for (let t of e) clearTimeout(t)
    }
  }, [h, t, g, s]), (0, r.jsx)(o.Ji, {
    ref: m,
    sprites: null != l ? l : a.CA,
    colors: null != c ? c : a.Br,
    spriteWidth: a.Ko,
    spriteHeight: a.Ko
  })
}