/** Chunk was on 72740 **/
/** chunk id: 381585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k0: () => o,
  sp: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let a = Chunk647438.createContext(null);

function i() {
  return Chunk647438.useContext(a)
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