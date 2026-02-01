/** Chunk was on 61344 **/
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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./824217.js");
let h = i().debounce(Chunk318937.W9, 500, {
  maxWait: 500
});

function p(e, t, n) {
  let r = l.useRef((0, a.A)()),
    i = l.useRef(new s.IX),
    p = l.useCallback(l => {
      l.lastUpdatedAt = Date.now(), (0, o.Rl)(l, e, n), (0, o.W9)(t, n, l)
    }, [t, n, e]),
    f = l.useCallback((l, s, h) => {
      r.current = (0, a.A)();
      let f = d(u({}, l), {
        id: r.current,
        x: s,
        y: h,
        userId: e,
        state: c.B.START,
        lastUpdatedAt: Date.now()
      });
      (0, o.W9)(t, n, f), (0, o.Rl)(f, e, n), i.current.start(5e3, () => p(f))
    }, [e, t, n, p]),
    m = l.useCallback((l, a, s) => {
      let f = d(u({}, l), {
        id: r.current,
        x: a,
        y: s,
        userId: e,
        state: c.B.START,
        lastUpdatedAt: Date.now()
      });
      h(t, n, f), (0, o.Rl)(f, e, n), i.current.start(5e3, () => p(f))
    }, [e, t, n, p]),
    g = l.useCallback((l, a, s) => {
      h.cancel(), (0, o.MH)(t, n, r.current), (0, o.Rl)(d(u({}, l), {
        id: r.current,
        x: a,
        y: s,
        userId: e,
        state: c.B.STOP,
        lastUpdatedAt: Date.now()
      }), e, n), i.current.stop()
    }, [t, n, e]),
    A = l.useCallback((e, t, n) => m(e, t, n), [m]);
  return l.useMemo(() => ({
    handleMouseDown: f,
    handleMouseMove: m,
    handleMouseUp: g,
    handleMouseEnter: A
  }), [f, A, m, g])
}