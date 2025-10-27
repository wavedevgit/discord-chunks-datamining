/** Chunk was on 63639 **/
/** chunk id: 627045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function a(e, t, a) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await n.e("23735").then(n.bind(n, 104982));
    return n => (0, l.jsx)(i, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({
      gameServerGame: t,
      guildId: e,
      status: a
    }, n))
  })
}