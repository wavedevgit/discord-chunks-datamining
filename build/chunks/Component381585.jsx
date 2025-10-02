/** Chunk was on 68255 **/
/** chunk id: 381585, original params: e,t,r (module,exports,require) **/
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
    children: r
  } = e, o = a(), s = l.useMemo(() => (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  })({}, o, t), [o, t]);
  return (0, n.jsx)(i.Provider, {
    value: s,
    children: r
  })
}