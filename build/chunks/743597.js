/** Chunk was on 46931 **/
/** chunk id: 743597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk473749 = require("./473749.js"),
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
let p = l().debounce(Chunk125268.BR, Chunk813900.Fq, {
  maxWait: Chunk813900.Fq
});

function m(e, t, n) {
  let i = r.useRef((0, a.Z)()),
    l = r.useRef(new o.Xp),
    m = r.useCallback(r => {
      r.lastUpdatedAt = Date.now(), (0, c.gr)(r, e, n), (0, c.BR)(t, n, r)
    }, [t, n, e]),
    _ = r.useCallback((r, o, p) => {
      i.current = (0, a.Z)();
      let _ = f(d({}, r), {
        id: i.current,
        x: o,
        y: p,
        userId: e,
        state: s.f.START,
        lastUpdatedAt: Date.now()
      });
      (0, c.BR)(t, n, _), (0, c.gr)(_, e, n), l.current.start(u.FO, () => m(_))
    }, [e, t, n, m]),
    g = r.useCallback((r, a, o) => {
      let _ = f(d({}, r), {
        id: i.current,
        x: a,
        y: o,
        userId: e,
        state: s.f.START,
        lastUpdatedAt: Date.now()
      });
      p(t, n, _), (0, c.gr)(_, e, n), l.current.start(u.FO, () => m(_))
    }, [e, t, n, m]),
    v = r.useCallback((r, a, o) => {
      p.cancel(), (0, c.Df)(t, n, i.current), (0, c.gr)(f(d({}, r), {
        id: i.current,
        x: a,
        y: o,
        userId: e,
        state: s.f.STOP,
        lastUpdatedAt: Date.now()
      }), e, n), l.current.stop()
    }, [t, n, e]),
    b = r.useCallback((e, t, n) => g(e, t, n), [g]);
  return r.useMemo(() => ({
    handleMouseDown: _,
    handleMouseMove: g,
    handleMouseUp: v,
    handleMouseEnter: b
  }), [_, b, g, v])
}