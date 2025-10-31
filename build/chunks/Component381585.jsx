/** Chunk was on 78825 **/
/** chunk id: 381585, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  k0: () => o,
  sp: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let i = Chunk647438.createContext(null);

function a() {
  return Chunk647438.useContext(i)
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