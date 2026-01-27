/** Chunk was on web.js **/
/** chunk id: 21161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => m,
  x: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk417597 = require("./417597.js"),
  Chunk775602 = require("./775602.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = 20,
  _ = {
    confettiCanvas: null,
    cannon: null,
    createConfetti: () => true,
    createConfettiAt: () => true,
    createMultipleConfetti: () => [],
    createMultipleConfettiAt: () => [],
    addClickListener: () => l.tEg,
    removeClickListener: Chunk652215.tEg
  },
  h = Chunk64700.createContext(_);

function m(e) {
  let {
    children: t,
    confettiCanvas: n,
    spriteCanvas: l,
    baseConfig: c,
    addClickListener: d,
    removeClickListener: m
  } = e, g = (0, a.f9)(n, l), E = (0, o.bG)([s.A], () => s.A.useReducedMotion), y = i.useMemo(() => E ? _ : {
    confettiCanvas: n,
    cannon: g,
    createConfetti: (e, t) => g.createConfetti(u({}, c, e), t),
    createConfettiAt: (e, t, n, r) => g.createConfetti(u(f(u({}, c), {
      position: {
        type: "static",
        value: {
          x: e,
          y: t
        }
      }
    }), n), r),
    createMultipleConfetti: function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : p,
        n = arguments.length > 2 ? arguments[2] : true;
      return g.createMultipleConfetti(u({}, c, e), t, n)
    },
    createMultipleConfettiAt: function(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : p,
        i = arguments.length > 4 ? arguments[4] : true;
      return g.createMultipleConfetti(u(f(u({}, c), {
        position: {
          type: "static",
          value: {
            x: e,
            y: t
          }
        }
      }), n), r, i)
    },
    addClickListener: d,
    removeClickListener: m
  }, [d, c, g, n, E, m]);
  return (0, r.jsx)(h.Provider, {
    value: y,
    children: t
  })
}