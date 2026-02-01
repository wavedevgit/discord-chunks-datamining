/** Chunk was on 78441 **/
/** chunk id: 608226, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  O: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function l(t, e) {
  return (0, r.mMO)(async () => {
    let {
      default: r
    } = await n.e("33372").then(n.bind(n, 58935));
    return n => {
      var l, a;
      return (0, i.jsx)(r, (l = function(t) {
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
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(a)).forEach(function(t) {
        Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(a, t))
      }), l))
    }
  })
}