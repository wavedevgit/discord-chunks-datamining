/** Chunk was on 91736 **/
/** chunk id: 787263, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js");

function r(t, e) {
  return (0, l.ZDy)(async () => {
    let {
      default: l
    } = await n.e("79521").then(n.bind(n, 207540));
    return n => {
      var r, a;
      return (0, i.jsx)(l, (r = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({}, n), a = a = {
        onConfirm: () => {
          n.onClose(), e()
        },
        channel: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(a)).forEach(function(t) {
        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t))
      }), r))
    }
  })
}