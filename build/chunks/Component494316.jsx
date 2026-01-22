/** Chunk was on 91284 **/
/** chunk id: 494316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js");

function a(e, t, a) {
  (0, i.mMO)(async () => {
    let {
      default: i
    } = await n.e("27188").then(n.bind(n, 796415));
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