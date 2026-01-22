/** Chunk was on web.js **/
/** chunk id: 156828, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cu: () => a.Cu,
  Fe: () => c,
  c2: () => u,
  sq: () => a.sq
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk841117 = require("./841117.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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
let l = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "transparent";
  return () => (0, r.jsx)("div", {
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: e
    }
  })
};

function c(e) {
  let {
    createPromise: t,
    webpackId: n,
    renderLoader: s,
    name: c,
    memo: u = false
  } = e, d = i.lazy(() => (0, a.sq)({
    createPromise: t,
    webpackId: n
  })), f = e => (0, r.jsx)(i.Suspense, {
    fallback: null != s ? s() : l()(),
    children: (0, r.jsx)(d, o({}, e))
  });
  return u && (f = i.memo(f)), f.displayName = "Suspense(".concat(c || "Unknown", ")"), f
}

function u(e) {
  let {
    createPromise: t,
    webpackId: n,
    render: s,
    renderFallback: o
  } = e, [l, c] = i.useState(null);
  return i.useEffect(() => {
    (0, a.sq)({
      createPromise: t,
      webpackId: n
    }).then(e => {
      let {
        default: t
      } = e;
      return c(t)
    })
  }, []), (0, r.jsx)(r.Fragment, {
    children: null == l ? o() : s(l)
  })
}