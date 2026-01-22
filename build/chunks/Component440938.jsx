/** Chunk was on 98763 **/
/** chunk id: 440938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R9: () => o,
  uM: () => i
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let a = Chunk64700.createContext(null);

function i() {
  return l.useContext(a)
}

function o(e) {
  let {
    newValue: t,
    children: n
  } = e, o = i(), s = l.useMemo(() => (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  })({}, o, t), [o, t]);
  return (0, r.jsx)(a.Provider, {
    value: s,
    children: n
  })
}