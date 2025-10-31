/** Chunk was on 63709 **/
/** chunk id: 381585, original params: e,t,n (module,exports,require) **/
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