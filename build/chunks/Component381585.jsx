/** Chunk was on 5410 **/
/** chunk id: 381585, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  k0: () => o,
  sp: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let i = Chunk473749.createContext(null);

function a() {
  return l.useContext(i)
}

function o(e) {
  let {
    newValue: n,
    children: t
  } = e, o = a(), s = l.useMemo(() => (function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  })({}, o, n), [o, n]);
  return (0, r.jsx)(i.Provider, {
    value: s,
    children: t
  })
}