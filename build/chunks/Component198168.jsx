/** Chunk was on web.js **/
/** chunk id: 198168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P3: () => s,
  gM: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
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
var s = function(e) {
  return e[e.COLLECTIBLES_PREVIEW = 0] = "COLLECTIBLES_PREVIEW", e[e.DEMO = 1] = "DEMO", e
}({});
let l = {
    1: () => require.e("64861").then(require.bind(require, 564172)),
    0: () => require.e("96887").then(require.bind(require, 669636))
  },
  c = {
    1: Chunk73800.lazy(l[1]),
    0: Chunk73800.lazy(l[0])
  };

function u(e) {
  let {
    data: t
  } = e, n = c[t.component], o = t.props;
  return (0, r.jsx)(i.Suspense, {
    fallback: null,
    children: (0, r.jsx)(n, a({}, o))
  })
}