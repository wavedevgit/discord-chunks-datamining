/** Chunk was on 69813 **/
/** chunk id: 743597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk473749 = require("./473749.js"),
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

function g(e, t, n) {
  let l = r.useRef((0, a.Z)()),
    i = r.useRef(new o.Xp),
    g = r.useCallback(r => {
      r.lastUpdatedAt = Date.now(), (0, c.gr)(r, e, n), (0, c.BR)(t, n, r)
    }, [t, n, e]),
    b = r.useCallback((r, o, p) => {
      l.current = (0, a.Z)();
      let b = f(d({}, r), {
        id: l.current,
        x: o,
        y: p,
        userId: e,
        state: s.f.START,
        lastUpdatedAt: Date.now()
      });
      (0, c.BR)(t, n, b), (0, c.gr)(b, e, n), i.current.start(u.FO, () => g(b))
    }, [e, t, n, g]),
    m = r.useCallback((r, a, o) => {
      let b = f(d({}, r), {
        id: l.current,
        x: a,
        y: o,
        userId: e,
        state: s.f.START,
        lastUpdatedAt: Date.now()
      });
      p(t, n, b), (0, c.gr)(b, e, n), i.current.start(u.FO, () => g(b))
    }, [e, t, n, g]),
    h = r.useCallback((r, a, o) => {
      p.cancel(), (0, c.Df)(t, n, l.current), (0, c.gr)(f(d({}, r), {
        id: l.current,
        x: a,
        y: o,
        userId: e,
        state: s.f.STOP,
        lastUpdatedAt: Date.now()
      }), e, n), i.current.stop()
    }, [t, n, e]),
    E = r.useCallback((e, t, n) => m(e, t, n), [m]);
  return r.useMemo(() => ({
    handleMouseDown: b,
    handleMouseMove: m,
    handleMouseUp: h,
    handleMouseEnter: E
  }), [b, E, m, h])
}