/** Chunk was on web.js **/
/** chunk id: 608787, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GI: () => u,
  Jt: () => Chunk252117.Jt,
  Un: () => c,
  wE: () => Chunk252117.wE
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk252117 = require("./252117.js");

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
let l = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "transparent";
  return () => (0, Chunk54381.jsx)("div", {
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: module
    }
  })
};

function c(e) {
  let {
    createPromise: t,
    webpackId: n,
    renderLoader: o,
    name: c,
    memo: u = false
  } = e, d = i.lazy(() => (0, a.wE)({
    createPromise: t,
    webpackId: n
  })), f = e => (0, r.jsx)(i.Suspense, {
    fallback: null != o ? o() : l()(),
    children: (0, r.jsx)(d, s({}, e))
  });
  return u && (f = i.memo(f)), f.displayName = "Suspense(".concat(c || "Unknown", ")"), f
}

function u(e) {
  let {
    createPromise: t,
    webpackId: n,
    render: o,
    renderFallback: s
  } = e, [l, c] = i.useState(null);
  return i.useEffect(() => {
    (0, a.wE)({
      createPromise: t,
      webpackId: n
    }).then(e => {
      let {
        default: t
      } = e;
      return c(t)
    })
  }, []), (0, r.jsx)(r.Fragment, {
    children: null == l ? s() : o(l)
  })
}