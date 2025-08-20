/** Chunk was on 71387 **/
/** chunk id: 558060, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk884697 = require("./884697.js"),
  Chunk754433 = require("./754433.jsx"),
  Chunk409116 = require("./409116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk492851 = require("./492851.js");

function d(e) {
  var t, r;
  let {
    product: i,
    isPremiumUser: d,
    discount: p,
    className: v,
    discountOfferAmount: f,
    hideStrikethroughPrice: b = false,
    nitroIconType: m,
    nitroIconSize: g = "md"
  } = e, h = (0, l.ql)(i, c.tuJ.DEFAULT);
  if (null == h) return null;
  if (h.amount <= 0) return (0, n.jsx)("div", {
    className: a()(u.priceTagsContainer, v),
    children: (0, n.jsx)(s.F, {
      price: h
    })
  });
  let O = (0, l.ql)(i, c.tuJ.PREMIUM_TIER_2),
    y = (0, l.x6)(i) && d ? (t = function(e) {
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
    }({}, h), r = r = {
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
    }), t) : h,
    j = d && null != O;
  return (0, n.jsxs)("div", {
    className: a()(u.priceTagsContainer, v),
    children: [b ? null : (0, n.jsx)(o.y, {
      price: y,
      className: u.price
    }), (0, n.jsx)(s.F, {
      price: j ? O : y,
      discount: p,
      className: a()({
        [u.price]: null == f
      }),
      nitroIconType: j ? m : true,
      nitroIconSize: g,
      discountOfferAmount: f
    })]
  })
}