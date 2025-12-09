/** Chunk was on 75393 **/
/** chunk id: 381585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k0: () => s,
  sp: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let i = Chunk473749.createContext(null);

function l() {
  return Chunk473749.useContext(i)
}

function s(e) {
  let {
    newValue: t,
    children: n
  } = e, s = l(), o = r.useMemo(() => (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  })({}, s, t), [s, t]);
  return (0, a.jsx)(i.Provider, {
    value: o,
    children: n
  })
}