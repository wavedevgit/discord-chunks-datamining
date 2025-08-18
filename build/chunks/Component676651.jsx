/** Chunk was on 91173 **/
/** chunk id: 676651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk302463 = require("./302463.js");

function a(e, t) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("63575"), n.e("73628")]).then(n.bind(n, 458961));
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
    modalKey: l.Yz
  })
}