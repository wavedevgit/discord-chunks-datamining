/** Chunk was on 98350 **/
/** chunk id: 787263, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");

function a(t, e) {
  return (0, l.ZDy)(async () => {
    let {
      default: l
    } = await n.e("79521").then(n.bind(n, 207540));
    return n => {
      var a, r;
      return (0, i.jsx)(l, (a = function(t) {
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
      }({}, n), r = r = {
        onConfirm: () => {
          n.onClose(), e()
        },
        channel: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(t) {
        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t))
      }), a))
    }
  })
}