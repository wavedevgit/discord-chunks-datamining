/** Chunk was on web.js **/
/** chunk id: 398225, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HL: () => m,
  gy: () => f,
  vw: () => h,
  vy: () => _
}), require("./896048.js"), require("./142703.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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
let c = -require("./182417.jsx").pt.duration / 1e3 / 2,
  u = 4,
  d = .2,
  f = (0, Chunk64700.createContext)({
    addSpringRef: () => {},
    removeSpringRef: () => {}
  });

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 2;
  return 1 - Math.pow(1 - e, t)
}

function _() {
  let e = (0, i.useRef)(null),
    t = (0, s.zhh)({
      ref: e,
      from: {
        transform: "translate3d(0, 50px, 0)",
        opacity: 0
      },
      to: {
        transform: "translate3d(0, 0px, 0)",
        opacity: 1
      },
      config: {
        duration: 1e3 * d,
        easing: e => e * e
      }
    }),
    {
      addSpringRef: n,
      removeSpringRef: r
    } = (0, i.useContext)(f);
  return (0, i.useEffect)(() => (n(e), () => {
    r(e)
  }), [n, r]), t
}

function h(e) {
  let {
    children: t,
    spring: n,
    className: i,
    style: s
  } = e;
  return (0, r.jsx)(a.animated.div, {
    className: i,
    style: l({}, n, s),
    children: t
  })
}

function m() {
  let e = (0, i.useRef)(new Set),
    [t, n] = (0, i.useState)([]),
    r = t.map((e, n) => t.length <= 1 ? -c : Math.max(0, p(n / (t.length - 1) * d, u) - c));
  (0, a.useChain)(t, r);
  let s = (0, i.useCallback)(t => {
    e.current.add(t)
  }, []);
  (0, i.useEffect)(() => {
    setImmediate(() => n(Array.from(e.current)))
  }, []);
  let o = (0, i.useCallback)(t => {
    e.current.delete(t)
  }, []);
  return (0, i.useMemo)(() => ({
    addSpringRef: s,
    removeSpringRef: o
  }), [s, o])
}