/** Chunk was on 67365 **/
/** chunk id: 68015, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  x: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js");

function a(e, n) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await t.e("22661").then(t.bind(t, 296289));
    return t => (0, l.jsx)(i, function(e) {
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