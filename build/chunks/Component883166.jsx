/** Chunk was on web.js **/
/** chunk id: 883166, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QR: () => m,
  Qr: () => f,
  Sg: () => h,
  gl: () => _
}), require("./388685.js"), require("./358797.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk205120 = require("./205120.js"),
  Chunk481060 = require("./481060.js");

function s(e, t, n) {
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
      s(e, t, n[t])
    })
  }
  return e
}
let c = -require("./225055.jsx").sc.duration / 1e3 / 2,
  u = 4,
  d = .2,
  f = (0, Chunk473749.createContext)({
    addSpringRef: () => {},
    removeSpringRef: () => {}
  });

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 2;
  return 1 - Math.pow(1 - e, t)
}

function _() {
  let e = (0, Chunk473749.useRef)(null),
    t = (0, Chunk481060.q_F)({
      ref: module,
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
    } = (0, Chunk473749.useContext)(f);
  return (0, Chunk473749.useEffect)(() => (require(module), () => {
    Chunk54381(module)
  }), [require, Chunk54381]), exports
}

function m(e) {
  let {
    children: t,
    spring: n,
    className: i,
    style: o
  } = e;
  return (0, r.jsx)(a.animated.div, {
    className: i,
    style: l({}, n, o),
    children: t
  })
}

function h() {
  let e = (0, Chunk473749.useRef)(new Set),
    [t, n] = (0, Chunk473749.useState)([]),
    r = exports.map((e, n) => t.length <= 1 ? -c : Math.max(0, p(n / (t.length - 1) * d, u) - c));
  (0, Chunk205120.useChain)(exports, Chunk54381);
  let o = (0, Chunk473749.useCallback)(t => {
    e.current.add(t)
  }, []);
  (0, Chunk473749.useEffect)(() => {
    setImmediate(() => require(Array.from(module.current)))
  }, []);
  let s = (0, Chunk473749.useCallback)(t => {
    e.current.delete(t)
  }, []);
  return (0, Chunk473749.useMemo)(() => ({
    addSpringRef: Chunk481060,
    removeSpringRef: s
  }), [Chunk481060, s])
}