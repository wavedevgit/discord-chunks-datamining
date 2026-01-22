/** Chunk was on 41469 **/
/** chunk id: 881266, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  U: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function l(e) {
  (0, o.mMO)(async () => {
    let {
      default: t
    } = await r.e("28090").then(r.bind(r, 779457));
    return r => (0, n.jsx)(t, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e, r))
  })
}