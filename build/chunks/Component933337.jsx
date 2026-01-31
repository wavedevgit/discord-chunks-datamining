/** Chunk was on 17534 **/
/** chunk id: 933337, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");

function s(e, t) {
  return l.useCallback(() => {
    (0, i.mMO)(async () => {
      let {
        default: l
      } = await Promise.all([n.e("74488"), n.e("99089")]).then(n.bind(n, 285899));
      return n => (0, r.jsx)(l, function(e) {
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