/** Chunk was on 89929 **/
/** chunk id: 381585, original params: e,t,n (module,exports,require) **/
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
    newValue: t,
    children: n
  } = e, o = a(), s = l.useMemo(() => (function(e) {
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
  return (0, r.jsx)(i.Provider, {
    value: s,
    children: n
  })
}