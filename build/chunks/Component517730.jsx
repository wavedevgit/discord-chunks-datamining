/** Chunk was on 45227 **/
/** chunk id: 517730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");
let l = e => {
  let {
    sku: t,
    application: l
  } = e;
  (0, i.ZDy)(async () => {
    let {
      SocialLayerStorefrontItemClaimedSuccessfullyModal: e
    } = await n.e("21021").then(n.bind(n, 519193));
    return n => {
      var i, a;
      return (0, r.jsx)(e, (i = function(e) {
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
        sku: t,
        application: l
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
      }), i))
    }
  }, {
    modalKey: "social-layer-storefront-item-claimed-successfully-modal"
  })
}