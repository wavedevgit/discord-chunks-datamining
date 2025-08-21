/** Chunk was on 69634 **/
/** chunk id: 743597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk846519 = require("./846519.js"),
  Chunk125268 = require("./125268.js"),
  Chunk984063 = require("./984063.js"),
  Chunk813900 = require("./813900.js");

function d(e) {
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

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = i().debounce(Chunk125268.BR, Chunk813900.Fq, {
  maxWait: Chunk813900.Fq
});

function m(e, t, n) {
  let l = r.useRef((0, a.Z)()),
    i = r.useRef(new o.Xp),
    m = r.useCallback(r => {
      r.lastUpdatedAt = Date.now(), (0, u.gr)(r, e, n), (0, u.BR)(t, n, r)
    }, [t, n, e]),
    E = r.useCallback((r, o, p) => {
      l.current = (0, a.Z)();
      let E = f(d({}, r), {
        id: l.current,
        x: o,
        y: p,
        userId: e,
        state: s.f.START,
        lastUpdatedAt: Date.now()
      });
      (0, u.BR)(t, n, E), (0, u.gr)(E, e, n), i.current.start(c.FO, () => m(E))
    }, [e, t, n, m]),
    g = r.useCallback((r, a, o) => {
      let E = f(d({}, r), {
        id: l.current,
        x: a,
        y: o,
        userId: e,
        state: s.f.START,
        lastUpdatedAt: Date.now()
      });
      p(t, n, E), (0, u.gr)(E, e, n), i.current.start(c.FO, () => m(E))
    }, [e, t, n, m]),
    b = r.useCallback((r, a, o) => {
      p.cancel(), (0, u.Df)(t, n, l.current), (0, u.gr)(f(d({}, r), {
        id: l.current,
        x: a,
        y: o,
        userId: e,
        state: s.f.STOP,
        lastUpdatedAt: Date.now()
      }), e, n), i.current.stop()
    }, [t, n, e]),
    S = r.useCallback((e, t, n) => g(e, t, n), [g]);
  return r.useMemo(() => ({
    handleMouseDown: E,
    handleMouseMove: g,
    handleMouseUp: b,
    handleMouseEnter: S
  }), [E, S, g, b])
}