/** Chunk was on 94758 **/
/** chunk id: 594914, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  P: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function l(e, t) {
  let {
    isGift: l
  } = t;
  (0, i.ZDy)(async () => {
    let {
      default: t
    } = await r.e("45227").then(r.bind(r, 556266));
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
    }({
      skuId: e.id,
      applicationId: e.applicationId,
      analyticsLocations: [],
      isGift: l
    }, r))
  }, {
    modalKey: "slayers-payment-modal"
  })
}