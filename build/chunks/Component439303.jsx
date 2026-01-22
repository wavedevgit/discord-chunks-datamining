/** Chunk was on web.js **/
/** chunk id: 439303, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E9: () => d,
  jM: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk812729 = require("./812729.js"),
  s = require.n(Chunk812729);

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
let c = Chunk64700.createContext({});

function u() {
  return i.useContext(c)
}

function d(e) {
  let {
    newValue: t,
    children: n
  } = e, a = u(), o = i.useMemo(() => {
    let e = l({}, a, t);
    return s()(a, e) && null != a ? a : e
  }, [a, t]);
  return (0, r.jsx)(c.Provider, {
    value: o,
    children: n
  })
}