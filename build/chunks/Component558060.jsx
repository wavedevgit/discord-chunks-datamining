/** Chunk was on 8087 **/
/** chunk id: 558060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk884697 = require("./884697.js"),
  Chunk754433 = require("./754433.jsx"),
  Chunk409116 = require("./409116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk12089 = require("./12089.js");

function d(e) {
  var t, n;
  let {
    product: i,
    isPremiumUser: d,
    discount: m,
    className: f,
    discountOfferAmount: p,
    hideStrikethroughPrice: b = false,
    nitroIconType: v,
    nitroIconSize: h = "md"
  } = e, x = (0, l.ql)(i, s.tuJ.DEFAULT);
  if (null == x) return null;
  if (x.amount <= 0) return (0, r.jsx)("div", {
    className: a()(u.priceTagsContainer, f),
    children: (0, r.jsx)(c.F, {
      price: x
    })
  });
  let g = (0, l.ql)(i, s.tuJ.PREMIUM_TIER_2),
    P = (0, l.x6)(i) && d ? (t = function(e) {
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
    }({}, x), n = n = {
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
    }), t) : x,
    j = d && null != g;
  return (0, r.jsxs)("div", {
    className: a()(u.priceTagsContainer, f),
    children: [b ? null : (0, r.jsx)(o.y, {
      price: P,
      className: u.price
    }), (0, r.jsx)(c.F, {
      price: j ? g : P,
      discount: m,
      className: a()({
        [u.price]: null == p
      }),
      nitroIconType: j ? v : true,
      nitroIconSize: h,
      discountOfferAmount: p
    })]
  })
}