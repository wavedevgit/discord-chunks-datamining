/** Chunk was on 66866 **/
/** chunk id: 54797, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js");

function l(e) {
  let {
    listing: t
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("95480").then(n.bind(n, 275869));
    return n => (0, r.jsx)(e, function(e) {
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
      listing: t
    }, n))
  })
}