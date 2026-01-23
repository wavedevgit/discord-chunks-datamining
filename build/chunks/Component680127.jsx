/** Chunk was on 19750 **/
/** chunk id: 680127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js");

function i(e, t) {
  return (0, a.mMO)(async () => {
    let {
      default: a
    } = await n.e("5490").then(n.bind(n, 826153));
    return n => {
      var i, l;
      return (0, r.jsx)(a, (i = function(e) {
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
      }({}, n), l = l = {
        guildId: e,
        instance: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }
  })
}