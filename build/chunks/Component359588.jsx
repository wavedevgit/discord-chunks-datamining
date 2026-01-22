/** Chunk was on web.js **/
/** chunk id: 359588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk998304 = require("./998304.js"),
  Chunk854987 = require("./854987.js"),
  Chunk40333 = require("./40333.js"),
  Chunk745174 = require("./745174.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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
let m = 500,
  g = 32;

function E(e) {
  let {
    start: t = 0,
    end: n,
    alignment: a = "left"
  } = e, _ = (0, i.useRef)(Date.now()), E = (0, i.useRef)(0), b = (0, i.useContext)(d.P), y = (0, l.rdh)(b.primaryColor).hex(), O = (0, f.A)(y), A = (0, u.j5)(O), [v, S] = (0, i.useState)(t), I = (0, o.bG)([c.A], () => c.A.useReducedMotion);
  (0, i.useEffect)(() => {
    let e = s().throttle(() => {
      let r = Math.min((Date.now() - _.current) / m, 1);
      S(Math.round((n - t) * r + t)), r < 1 && (E.current = requestAnimationFrame(e))
    }, g);
    return E.current = requestAnimationFrame(e), () => {
      cancelAnimationFrame(E.current), e.cancel()
    }
  }, [t, n, S]);
  let T = {
    className: p.l,
    dataBinding: {
      DisplayValue: v,
      TextColor: {
        r: A.r,
        g: A.g,
        b: A.b,
        a: 255 * A.a
      },
      reducedMotion: I
    },
    fit: "layout",
    withReducedMotion: "play"
  };
  return "left" === a ? (0, r.jsx)(l.wWi, h({}, T)) : (0, r.jsx)(l.mfv, h({}, T))
}