/** Chunk was on 31099 **/
/** chunk id: 558060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk884697 = require("./884697.js"),
  Chunk754433 = require("./754433.jsx"),
  Chunk409116 = require("./409116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk492851 = require("./492851.js");

function d(e) {
  var t, n;
  let {
    product: i,
    isPremiumUser: d,
    discount: m,
    className: p,
    discountOfferAmount: f,
    hideStrikethroughPrice: h = false,
    nitroIconType: v,
    nitroIconSize: g = "md"
  } = e, _ = (0, a.ql)(i, c.tuJ.DEFAULT);
  if (null == _) return null;
  if (_.amount <= 0) return (0, r.jsx)("div", {
    className: l()(u.priceTagsContainer, p),
    children: (0, r.jsx)(s.F, {
      price: _
    })
  });
  let b = (0, a.ql)(i, c.tuJ.PREMIUM_TIER_2),
    x = (0, a.x6)(i) && d ? (t = function(e) {
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
    }({}, _), n = n = {
      amount: m.original
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t) : _,
    P = d && null != b;
  return (0, r.jsxs)("div", {
    className: l()(u.priceTagsContainer, p),
    children: [h ? null : (0, r.jsx)(o.y, {
      price: x,
      className: u.price
    }), (0, r.jsx)(s.F, {
      price: P ? b : x,
      discount: m,
      className: l()({
        [u.price]: null == f
      }),
      nitroIconType: P ? v : true,
      nitroIconSize: g,
      discountOfferAmount: f
    })]
  })
}