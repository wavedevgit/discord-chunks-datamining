/** Chunk was on 98350 **/
/** chunk id: 787263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");

function a(e, t) {
  return (0, l.ZDy)(async () => {
    let {
      default: l
    } = await n.e("79521").then(n.bind(n, 207540));
    return n => {
      var a, r;
      return (0, i.jsx)(l, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, n), r = r = {
        onConfirm: () => {
          n.onClose(), t()
        },
        channel: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e))
      }), a))
    }
  })
}