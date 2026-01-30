/** Chunk was on 64935 **/
/** chunk id: 579970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk500208 = require("./500208.js");

function a(e, t) {
  (0, i.mMO)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("49862"), n.e("67096")]).then(n.bind(n, 559947));
    return n => (0, r.jsx)(i, function(e) {
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
      guildId: e,
      productId: t
    }, n))
  }, {
    modalKey: l.DG
  })
}