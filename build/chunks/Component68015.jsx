/** Chunk was on 63639 **/
/** chunk id: 68015, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  x: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function i(e, n) {
  (0, a.ZDy)(async () => {
    let {
      default: a
    } = await t.e("22661").then(t.bind(t, 296289));
    return t => (0, l.jsx)(a, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
          var l;
          l = t[n], n in e ? Object.defineProperty(e, n, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = l
        })
      }
      return e
    }({
      guildId: e,
      gameInstance: n
    }, t))
  })
}