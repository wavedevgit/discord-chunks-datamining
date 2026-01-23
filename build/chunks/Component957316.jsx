/** Chunk was on 77759 **/
/** chunk id: 957316, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  M: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function c(e) {
  (0, o.mMO)(async () => {
    let {
      default: t
    } = await r.e("4075").then(r.bind(r, 59430));
    return r => {
      var o, c;
      return (0, n.jsx)(t, (o = function(e) {
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
      }), o))
    }
  })
}