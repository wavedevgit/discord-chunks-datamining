/** Chunk was on 31748 **/
/** chunk id: 975501, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk835245 = require("./835245.js"),
  Chunk451988 = require("./451988.js"),
  Chunk318937 = require("./318937.js"),
  Chunk134753 = require("./134753.js");

function u(e) {
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

function d(e, t) {
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
require("./824217.js");
let f = i().debounce(Chunk318937.W9, 500, {
  maxWait: 500
});

function p(e, t, n) {
  let l = r.useRef((0, a.A)()),
    i = r.useRef(new o.IX),
    p = r.useCallback(r => {
      r.lastUpdatedAt = Date.now(), (0, s.Rl)(r, e, n), (0, s.W9)(t, n, r)
    }, [t, n, e]),
    g = r.useCallback((r, o, f) => {
      l.current = (0, a.A)();
      let g = d(u({}, r), {
        id: l.current,
        x: o,
        y: f,
        userId: e,
        state: c.B.START,
        lastUpdatedAt: Date.now()
      });
      (0, s.W9)(t, n, g), (0, s.Rl)(g, e, n), i.current.start(5e3, () => p(g))
    }, [e, t, n, p]),
    m = r.useCallback((r, a, o) => {
      let g = d(u({}, r), {
        id: l.current,
        x: a,
        y: o,
        userId: e,
        state: c.B.START,
        lastUpdatedAt: Date.now()
      });
      f(t, n, g), (0, s.Rl)(g, e, n), i.current.start(5e3, () => p(g))
    }, [e, t, n, p]),
    _ = r.useCallback((r, a, o) => {
      f.cancel(), (0, s.MH)(t, n, l.current), (0, s.Rl)(d(u({}, r), {
        id: l.current,
        x: a,
        y: o,
        userId: e,
        state: c.B.STOP,
        lastUpdatedAt: Date.now()
      }), e, n), i.current.stop()
    }, [t, n, e]),
    h = r.useCallback((e, t, n) => m(e, t, n), [m]);
  return r.useMemo(() => ({
    handleMouseDown: g,
    handleMouseMove: m,
    handleMouseUp: _,
    handleMouseEnter: h
  }), [g, h, m, _])
}