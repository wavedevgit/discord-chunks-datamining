/** Chunk was on 77033 **/
/** chunk id: 594914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => r
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function r(e, t) {
  let {
    isGift: r
  } = t;
  (0, l.ZDy)(async () => {
    let {
      default: t
    } = await n.e("45227").then(n.bind(n, 556266));
    return n => (0, a.jsx)(t, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({
      skuId: e.id,
      applicationId: e.applicationId,
      analyticsLocations: [],
      isGift: r
    }, n))
  }, {
    modalKey: "slayers-payment-modal"
  })
}