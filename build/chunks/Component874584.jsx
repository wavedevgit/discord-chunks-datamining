/** Chunk was on 81985 **/
/** chunk id: 874584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js");

function a(e, t) {
  return i.useCallback(() => {
    (0, l.ZDy)(async () => {
      let {
        default: i
      } = await n.e("31924").then(n.bind(n, 625651));
      return n => (0, r.jsx)(i, function(e) {
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
      }({
        guildId: e,
        powerup: t
      }, n))
    })
  }, [e, t])
}