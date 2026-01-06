/** Chunk was on 89250 **/
/** chunk id: 787263, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  w: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js");

function a(t, n) {
  return (0, l.ZDy)(async () => {
    let {
      default: l
    } = await e.e("79521").then(e.bind(e, 207540));
    return e => {
      var a, r;
      return (0, i.jsx)(l, (a = function(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(e);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), i.forEach(function(n) {
            var i;
            i = e[n], n in t ? Object.defineProperty(t, n, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[n] = i
          })
        }
        return t
      }({}, e), r = r = {
        onConfirm: () => {
          e.onClose(), n()
        },
        channel: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : (function(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e.push.apply(e, i)
        }
        return e
      })(Object(r)).forEach(function(t) {
        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t))
      }), a))
    }
  })
}