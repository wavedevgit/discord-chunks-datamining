/** Chunk was on 96910 **/
/** chunk id: 558060, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk884697 = require("./884697.js"),
  Chunk754433 = require("./754433.jsx"),
  Chunk409116 = require("./409116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk157309 = require("./157309.js");

function d(e) {
  var t, r;
  let {
    product: a,
    isPremiumUser: d,
    discount: p,
    className: b,
    discountOfferAmount: h,
    hideStrikethroughPrice: f = false,
    nitroIconType: v,
    nitroIconSize: m = "md"
  } = e, _ = (0, l.ql)(a, c.tuJ.DEFAULT);
  if (null == _) return null;
  if (_.amount <= 0) return (0, n.jsx)("div", {
    className: i()(u.priceTagsContainer, b),
    children: (0, n.jsx)(s.F, {
      price: _
    })
  });
  let g = (0, l.ql)(a, c.tuJ.PREMIUM_TIER_2),
    O = (0, l.x6)(a) && d ? (t = function(e) {
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
    }({}, _), r = r = {
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
    }), t) : _,
    y = d && null != g;
  return (0, n.jsxs)("div", {
    className: i()(u.priceTagsContainer, b),
    children: [f ? null : (0, n.jsx)(o.y, {
      price: O,
      className: u.price
    }), (0, n.jsx)(s.F, {
      price: y ? g : O,
      discount: p,
      className: i()({
        [u.price]: null == h
      }),
      nitroIconType: y ? v : true,
      nitroIconSize: m,
      discountOfferAmount: h
    })]
  })
}