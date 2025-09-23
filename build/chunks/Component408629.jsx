/** Chunk was on 85683 **/
/** chunk id: 408629, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function i(e) {
  return (0, r.ZDy)(async () => {
    let {
      default: n
    } = await t.e("46638").then(t.bind(t, 541066));
    return t => (0, a.jsx)(n, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), a.forEach(function(n) {
          var a;
          a = t[n], n in e ? Object.defineProperty(e, n, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = a
        })
      }
      return e
    }({}, t, e))
  })
}