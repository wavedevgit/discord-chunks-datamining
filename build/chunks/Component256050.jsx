/** Chunk was on 63983 **/
/** chunk id: 256050, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");
let a = {
  open: function(e) {
    (0, o.mMO)(async () => {
      let {
        default: t
      } = await n.e("83152").then(n.bind(n, 468403));
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