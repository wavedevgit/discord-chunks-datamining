/** Chunk was on web.js **/
/** chunk id: 608787, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GI: () => u,
  Jt: () => Chunk252117.Jt,
  Un: () => c,
  wE: () => Chunk252117.wE
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk252117 = require("./252117.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}
let l = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "transparent";
  return () => <div style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: module
    }} />
};

function c(e) {
  let {
    createPromise: t,
    webpackId: n,
    renderLoader: a,
    name: c,
    memo: u = false
  } = e, d = i.lazy(() => (0, o.wE)({
    createPromise: t,
    webpackId: n
  })), f = e => <i.Suspense fallback={null != a ? a() : l()()}><d{...s({}, e)} /></i.Suspense>;
  return u && (f = i.memo(f)), f.displayName = "Suspense(".concat(c || "Unknown", ")"), f
}

function u(e) {
  let {
    createPromise: t,
    webpackId: n,
    render: a,
    renderFallback: s
  } = e, [l, c] = i.useState(null);
  return i.useEffect(() => {
    (0, o.wE)({
      createPromise: t,
      webpackId: n
    }).then(e => {
      let {
        default: t
      } = e;
      return c(t)
    })
  }, []), <r.Fragment>{null == l ? s() : a(l)}</r.Fragment>
}