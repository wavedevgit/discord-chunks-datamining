/** Chunk was on 77033 **/
/** chunk id: 436585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js");
let i = e => {
  let {
    skuId: t,
    applicationId: i,
    guildId: d
  } = e;
  (0, r.ZDy)(async () => {
    let {
      default: e
    } = await n.e("84802").then(n.bind(n, 250317));
    return n => {
      var r, l;
      return (0, a.jsx)(e, (r = function(e) {
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
      }({}, n), l = l = {
        skuId: t,
        applicationId: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r))
    }
  }, {
    modalKey: "social-layer-storefront-product-details-modal"
  }).then(() => {
    l.Z.dispatch({
      type: "SOCIAL_LAYER_STOREFRONT_SELECT_SKU",
      skuId: t,
      guildId: d
    })
  })
}