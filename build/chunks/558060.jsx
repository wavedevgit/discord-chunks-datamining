/** Chunk was on 45620 **/
/** chunk id: 558060, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk884697 = require("./884697.js"),
  Chunk754433 = require("./754433.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk561197 = require("./561197.js");

function d(e) {
  var t, n;
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
  if (_.amount <= 0) return <div className={a()(u.priceTagsContainer, g)}><s.F price={_} /></div>;
  let v = (0, i.ql)(l, c.tuJ.PREMIUM_TIER_2),
    O = (0, i.x6)(l) && d ? (t = function(e) {
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
    }), t) : _,
    C = d && null != v;
  return <div className={a()(u.priceTagsContainer, g)}>{b ? null : <o.y price={O} className={u.price} />}{<s.F price={C ? v : O} discount={p} className={a()({
        [u.price]: null == f
      })} nitroIconType={C ? h : true} nitroIconSize={m} discountOfferAmount={f} />}</div>
}