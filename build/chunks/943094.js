/** Chunk was on 1272 **/
/** chunk id: 943094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => o
});
var Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk710845 = require("./710845.js"),
  Chunk51025 = require("./51025.js");

function o(e, t, o) {
  ! function(e, t) {
    let a = i.Z.getApplication(e);
    if (null == a) return new l.Z("DispatchUninstallActionCreators").log("Application not found for game ".concat(e));
    (0, r.ZDy)(async () => {
      let {
        default: e
      } = await n.e("70061").then(n.bind(n, 764998));
      return n => e(function(e) {
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
        game: a,
        onConfirmUninstall: t
      }, n))
    })
  }(e, () => (0, a.pC)(e, t, o))
}