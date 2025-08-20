/** Chunk was on 71350 **/
/** chunk id: 787263, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  w: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");

function l(e, n) {
  return (0, r.ZDy)(async () => {
    let {
      default: r
    } = await t.e("79521").then(t.bind(t, 207540));
    return t => {
      var l, a;
      return (0, i.jsx)(r, (l = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.forEach(function(n) {
            var i;
            i = t[n], n in e ? Object.defineProperty(e, n, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = i
          })
        }
        return e
      }({}, t), a = a = {
        onConfirm: () => {
          t.onClose(), n()
        },
        channel: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t.push.apply(t, i)
        }
        return t
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
      }), l))
    }
  })
}