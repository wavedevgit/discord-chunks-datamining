/** Chunk was on 50331 **/
/** chunk id: 191471, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  J: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js");

function c(e) {
  (0, o.ZDy)(async () => {
    let {
      default: t
    } = await r.e("9354").then(r.bind(r, 461533));
    return r => {
      var o, c;
      return <t{...o = function(e) {
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
      }({}, r), c = c = {
        guildId: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(c)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e))
      }), o} />
    }
  })
}