/** Chunk was on web.js **/
/** chunk id: 461782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => u,
  k3: () => l,
  vG: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let l = Chunk64700.createContext({
    onPreventIdle: () => null,
    onAllowIdle: () => null,
    onForceIdle: () => null,
    onActive: () => null
  }),
  c = Chunk64700.createContext(false);

function u(e) {
  let {
    children: t,
    timeout: n
  } = e, [o, u] = i.useState(false), d = i.useRef(new Set), f = i.useRef(null);
  i.useEffect(() => (f.current = new a.J_(n, () => u(true)), f.current.delay(), () => {
    var e;
    null == (e = f.current) || e.cancel(), f.current = null
  }), [n]);
  let p = i.useCallback(e => {
      var t;
      u(false), d.current.add(e), null == (t = f.current) || t.cancel()
    }, [d, f, u]),
    _ = i.useCallback(e => {
      if (d.current.delete(e), 0 === d.current.size) {
        var t;
        null == (t = f.current) || t.delay()
      }
    }, [d, f]),
    h = i.useCallback(() => {
      if (u(false), 0 === d.current.size) {
        var e;
        null == (e = f.current) || e.delay()
      }
    }, [d, f, u]),
    m = i.useCallback(() => {
      var e;
      d.current.size > 0 || (null == (e = f.current) || e.cancel(), u(true))
    }, [f, u]),
    g = i.useMemo(() => ({
      onAllowIdle: _,
      onPreventIdle: p,
      onActive: h,
      onForceIdle: m
    }), [_, p, h, m]);
  return (0, r.jsx)(c.Provider, {
    value: o,
    children: (0, r.jsx)(l.Provider, {
      value: g,
      children: t(s({
        idle: o
      }, g))
    })
  })
}