/** Chunk was on 76731 **/
/** chunk id: 626892, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk952265 = require("./952265.js");

function o(e) {
  (0, c.openModalLazy)(async () => {
    let {
      default: t
    } = await r.e("2045").then(r.bind(r, 754233));
    return r => {
      var c, o;
      return (0, n.jsx)(t, (c = function(e) {
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
      }({}, r), o = o = {
        guildId: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(o, e))
      }), c))
    }
  })
}