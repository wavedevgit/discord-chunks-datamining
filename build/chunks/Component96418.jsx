/** Chunk was on 38029 **/
/** chunk id: 96418, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js");
let s = e => {
  let {
    sku: t,
    giftCode: s,
    channelContext: l,
    customGiftMessage: a
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("88742").then(n.bind(n, 535618));
    return n => {
      var i, o;
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
      }({}, n), o = o = {
        sku: t,
        giftCode: s,
        channelContext: l,
        customGiftMessage: a
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
      }), i))
    }
  }, {
    modalKey: "social-layer-storefront-gift-code-claim-modal"
  })
}