/** Chunk was on 24975 **/
/** chunk id: 558060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk884697 = require("./884697.js"),
  Chunk754433 = require("./754433.jsx"),
  Chunk409116 = require("./409116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk492851 = require("./492851.js");

function d(e) {
  var t, n;
  let {
    product: l,
    isPremiumUser: d,
    discount: p,
    className: f,
    discountOfferAmount: b,
    hideStrikethroughPrice: y = false,
    nitroIconType: m,
    nitroIconSize: O = "md"
  } = e, g = (0, a.ql)(l, c.tuJ.DEFAULT);
  if (null == g) return null;
  if (g.amount <= 0) return (0, r.jsx)("div", {
    className: i()(u.priceTagsContainer, f),
    children: (0, r.jsx)(s.F, {
      price: g
    })
  });
  let j = (0, a.ql)(l, c.tuJ.PREMIUM_TIER_2),
    h = (0, a.x6)(l) && d ? (t = function(e) {
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
    }({}, g), n = n = {
      amount: p.original
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t) : g,
    v = d && null != j;
  return (0, r.jsxs)("div", {
    className: i()(u.priceTagsContainer, f),
    children: [y ? null : (0, r.jsx)(o.y, {
      price: h,
      className: u.price
    }), (0, r.jsx)(s.F, {
      price: v ? j : h,
      discount: p,
      className: i()({
        [u.price]: null == b
      }),
      nitroIconType: v ? m : true,
      nitroIconSize: O,
      discountOfferAmount: b
    })]
  })
}