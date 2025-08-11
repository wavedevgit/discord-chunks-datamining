/** Chunk was on 45620 **/
/** chunk id: 558060, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk884697 = require("./884697.js"),
  Chunk754433 = require("./754433.jsx"),
  Chunk409116 = require("./409116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk561197 = require("./561197.js");

function d(e) {
  var t, r;
  let {
    product: l,
    isPremiumUser: d,
    discount: p,
    className: g,
    discountOfferAmount: f,
    hideStrikethroughPrice: b = false,
    nitroIconType: h,
    nitroIconSize: m = "md"
  } = e, _ = (0, i.ql)(l, c.tuJ.DEFAULT);
  if (null == _) return null;
  if (_.amount <= 0) return (0, n.jsx)("div", {
    className: a()(u.priceTagsContainer, g),
    children: (0, n.jsx)(s.F, {
      price: _
    })
  });
  let v = (0, i.ql)(l, c.tuJ.PREMIUM_TIER_2),
    O = (0, i.x6)(l) && d ? (t = function(e) {
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
    C = d && null != v;
  return (0, n.jsxs)("div", {
    className: a()(u.priceTagsContainer, g),
    children: [b ? null : (0, n.jsx)(o.y, {
      price: O,
      className: u.price
    }), (0, n.jsx)(s.F, {
      price: C ? v : O,
      discount: p,
      className: a()({
        [u.price]: null == f
      }),
      nitroIconType: C ? h : true,
      nitroIconSize: m,
      discountOfferAmount: f
    })]
  })
}