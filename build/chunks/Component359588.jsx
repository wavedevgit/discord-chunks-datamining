/** Chunk was on 20941 **/
/** chunk id: 359588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk998304 = require("./998304.js"),
  Chunk854987 = require("./854987.js"),
  Chunk40333 = require("./40333.js"),
  Chunk745174 = require("./745174.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e) {
  let {
    start: t = 0,
    end: n,
    alignment: a = "left"
  } = e, h = (0, l.useRef)(Date.now()), b = (0, l.useRef)(0), g = (0, l.useContext)(d.P), x = (0, o.rdh)(g.primaryColor).hex(), y = (0, m.A)(x), v = (0, u.j5)(y), [j, C] = (0, l.useState)(t), _ = (0, s.bG)([c.A], () => c.A.useReducedMotion);
  (0, l.useEffect)(() => {
    let e = i().throttle(() => {
      let r = Math.min((Date.now() - h.current) / 500, 1);
      C(Math.round((n - t) * r + t)), r < 1 && (b.current = requestAnimationFrame(e))
    }, 32);
    return b.current = requestAnimationFrame(e), () => {
      cancelAnimationFrame(b.current), e.cancel()
    }
  }, [t, n, C]);
  let A = {
    className: f.l,
    dataBinding: {
      DisplayValue: j,
      TextColor: {
        r: v.r,
        g: v.g,
        b: v.b,
        a: 255 * v.a
      },
      reducedMotion: _
    },
    fit: "layout",
    withReducedMotion: "play"
  };
  return "left" === a ? (0, r.jsx)(o.wWi, p({}, A)) : (0, r.jsx)(o.mfv, p({}, A))
}