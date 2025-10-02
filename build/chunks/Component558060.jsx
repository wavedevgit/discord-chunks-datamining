/** Chunk was on 68255 **/
/** chunk id: 558060, original params: e,t,r (module,exports,require) **/
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
  var t, r;
  let {
    product: l,
    isPremiumUser: d,
    discount: p,
    className: f,
    discountOfferAmount: b,
    hideStrikethroughPrice: y = false,
    nitroIconType: O,
    nitroIconSize: v = "md"
  } = e, g = (0, a.ql)(l, c.tuJ.DEFAULT);
  if (null == g) return null;
  if (g.amount <= 0) return (0, n.jsx)("div", {
    className: i()(u.priceTagsContainer, f),
    children: (0, n.jsx)(s.F, {
      price: g
    })
  });
  let m = (0, a.ql)(l, c.tuJ.PREMIUM_TIER_2),
    j = (0, a.x6)(l) && d ? (t = function(e) {
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
    }({}, g), r = r = {
      amount: p.original
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t) : g,
    h = d && null != m;
  return (0, n.jsxs)("div", {
    className: i()(u.priceTagsContainer, f),
    children: [y ? null : (0, n.jsx)(o.y, {
      price: j,
      className: u.price
    }), (0, n.jsx)(s.F, {
      price: h ? m : j,
      discount: p,
      className: i()({
        [u.price]: null == b
      }),
      nitroIconType: h ? O : true,
      nitroIconSize: v,
      discountOfferAmount: b
    })]
  })
}