/** Chunk was on 86642 **/
/** chunk id: 743597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk846519 = require("./846519.js"),
  Chunk125268 = require("./125268.js"),
  Chunk984063 = require("./984063.js"),
  Chunk813900 = require("./813900.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = l().debounce(Chunk125268.BR, Chunk813900.Fq, {
  maxWait: Chunk813900.Fq
});

function h(e, t, n) {
  let r = i.useRef((0, a.Z)()),
    l = i.useRef(new o.Xp),
    h = i.useCallback(i => {
      i.lastUpdatedAt = Date.now(), (0, s.gr)(i, e, n), (0, s.BR)(t, n, i)
    }, [t, n, e]),
    m = i.useCallback((i, o, f) => {
      r.current = (0, a.Z)();
      let m = p(d({}, i), {
        id: r.current,
        x: o,
        y: f,
        userId: e,
        state: c.f.START,
        lastUpdatedAt: Date.now()
      });
      (0, s.BR)(t, n, m), (0, s.gr)(m, e, n), l.current.start(u.FO, () => h(m))
    }, [e, t, n, h]),
    g = i.useCallback((i, a, o) => {
      let m = p(d({}, i), {
        id: r.current,
        x: a,
        y: o,
        userId: e,
        state: c.f.START,
        lastUpdatedAt: Date.now()
      });
      f(t, n, m), (0, s.gr)(m, e, n), l.current.start(u.FO, () => h(m))
    }, [e, t, n, h]),
    b = i.useCallback((i, a, o) => {
      f.cancel(), (0, s.Df)(t, n, r.current), (0, s.gr)(p(d({}, i), {
        id: r.current,
        x: a,
        y: o,
        userId: e,
        state: c.f.STOP,
        lastUpdatedAt: Date.now()
      }), e, n), l.current.stop()
    }, [t, n, e]),
    y = i.useCallback((e, t, n) => g(e, t, n), [g]);
  return i.useMemo(() => ({
    handleMouseDown: m,
    handleMouseMove: g,
    handleMouseUp: b,
    handleMouseEnter: y
  }), [m, y, g, b])
}