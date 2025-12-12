/** Chunk was on web.js **/
/** chunk id: 947189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk302221 = require("./302221.js"),
  Chunk324060 = require("./324060.js"),
  Chunk482617 = require("./482617.js"),
  Chunk246530 = require("./246530.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = 500,
  g = 32;

function E(e) {
  let {
    start: t = 0,
    end: n,
    alignment: o = "left"
  } = e, _ = (0, i.useRef)(Date.now()), E = (0, i.useRef)(0), b = (0, i.useContext)(d.Q), y = (0, l.dQu)(b.primaryColor).hex(), O = (0, f.Z)(y), v = (0, u.a7)(O), [S, I] = (0, i.useState)(t), T = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
  (0, i.useEffect)(() => {
    let e = a().throttle(() => {
      let r = Math.min((Date.now() - _.current) / h, 1);
      I(Math.round((n - t) * r + t)), r < 1 && (E.current = requestAnimationFrame(e))
    }, g);
    return E.current = requestAnimationFrame(e), () => {
      cancelAnimationFrame(E.current), e.cancel()
    }
  }, [t, n, I]);
  let C = {
    className: p.animation,
    dataBinding: {
      DisplayValue: S,
      TextColor: {
        r: v.r,
        g: v.g,
        b: v.b,
        a: 255 * v.a
      },
      reducedMotion: T
    },
    fit: "layout",
    withReducedMotion: "play"
  };
  return "left" === o ? (0, r.jsx)(l.P9c, m({}, C)) : (0, r.jsx)(l.ljV, m({}, C))
}