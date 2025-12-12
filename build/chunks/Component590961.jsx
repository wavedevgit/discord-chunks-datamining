/** Chunk was on web.js **/
/** chunk id: 590961, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hL: () => d,
  oR: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327);

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
let c = Chunk473749.createContext({});

function u() {
  return Chunk473749.useContext(c)
}

function d(e) {
  let {
    newValue: t,
    children: n
  } = e, o = u(), s = i.useMemo(() => {
    let e = l({}, o, t);
    return a()(o, e) && null != o ? o : e
  }, [o, t]);
  return (0, r.jsx)(c.Provider, {
    value: s,
    children: n
  })
}