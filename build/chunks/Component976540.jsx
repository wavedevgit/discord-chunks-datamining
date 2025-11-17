/** Chunk was on 95999 **/
/** chunk id: 976540, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js");
let c = {
  open: function(e) {
    (0, o.ZDy)(async () => {
      let {
        default: t
      } = await n.e("19903").then(n.bind(n, 721317));
      return n => (0, r.jsx)(t, function(e) {
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
      }({
        onConfirm: e
      }, n))
    })
  }
}