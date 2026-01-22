/** Chunk was on 98865 **/
/** chunk id: 608226, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function l(e, t) {
  return (0, i.mMO)(async () => {
    let {
      default: i
    } = await n.e("33372").then(n.bind(n, 58935));
    return n => {
      var l, a;
      return (0, r.jsx)(i, (l = function(e) {
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
      }({}, n), a = a = {
        onConfirm: () => {
          n.onClose(), t()
        },
        channel: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
      }), l))
    }
  })
}