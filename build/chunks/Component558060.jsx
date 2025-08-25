/** Chunk was on web.js **/
/** chunk id: 558060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk884697 = require("./884697.js"),
  Chunk754433 = require("./754433.jsx"),
  Chunk409116 = require("./409116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk492851 = require("./492851.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    product: t,
    isPremiumUser: n,
    discount: i,
    className: d,
    discountOfferAmount: _,
    hideStrikethroughPrice: h = false,
    nitroIconType: m,
    nitroIconSize: g = "md"
  } = e, E = (0, a.ql)(t, c.tuJ.DEFAULT);
  if (null == E) return null;
  if (E.amount <= 0) return (0, r.jsx)("div", {
    className: o()(u.priceTagsContainer, d),
    children: (0, r.jsx)(l.F, {
      price: E
    })
  });
  let b = (0, a.ql)(t, c.tuJ.PREMIUM_TIER_2),
    y = (0, a.x6)(t) && n ? p(f({}, E), {
      amount: i.original
    }) : E,
    O = n && null != b;
  return (0, r.jsxs)("div", {
    className: o()(u.priceTagsContainer, d),
    children: [h ? null : (0, r.jsx)(s.y, {
      price: y,
      className: u.price
    }), (0, r.jsx)(l.F, {
      price: O ? b : y,
      discount: i,
      className: o()({
        [u.price]: null == _
      }),
      nitroIconType: O ? m : true,
      nitroIconSize: g,
      discountOfferAmount: _
    })]
  })
}