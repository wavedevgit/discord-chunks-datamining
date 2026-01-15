/** Chunk was on web.js **/
/** chunk id: 140465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => O,
  Nx: () => h,
  UV: () => b,
  WR: () => E,
  Yi: () => y,
  lr: () => g,
  t7: () => m
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk78839 = require("./78839.js"),
  Chunk775412 = require("./775412.js"),
  Chunk695349 = require("./695349.js"),
  Chunk937579 = require("./937579.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js");

function h() {
  let e = (0, p.N)(),
    t = (0, c._O)(),
    n = (0, f.N)(),
    r = m();
  return null != e || t || null != n || r
}
let m = () => {
    var e;
    let t = (0, o.e7)([l.Z], () => l.Z.getPremiumTypeSubscription()),
      n = null == t || null == (e = t.metadata) ? true : e.active_discount_expires_at;
    return null != n && a()(Date.now()) <= a()(n)
  },
  g = () => {
    var e;
    let t = (0, o.e7)([l.Z], () => l.Z.getPremiumTypeSubscription()),
      n = null == t || null == (e = t.metadata) ? true : e.active_discount_id;
    switch (n) {
      case _.dT:
      case _.rB:
        return {
          duration: 1, percentage: 30, discountId: n
        };
      case _.dB:
      case _.hs:
      case _.RU:
        return {
          duration: 3, percentage: 30, discountId: n
        };
      case _.ih:
        return {
          duration: 1, percentage: 40, discountId: n
        };
      case _.gW:
        return {
          duration: 1, percentage: 20, discountId: n
        };
      case _.Nl:
        return {
          duration: 1, percentage: 25, discountId: n
        };
      default:
        return
    }
  },
  E = e => {
    let [t, n] = r.useState(false), [i, a] = r.useState(false), [o, s] = r.useState(null);
    if (e) return {
      churnUserDiscountOffer: o,
      isFetchingChurnDiscountOffer: i
    };
    let l = () => {
      n(true), a(false)
    };
    return i || t || (a(true), (0, d.ev)().then(e => {
      s(e), l()
    }).catch(e => {
      l()
    })), {
      churnUserDiscountOffer: o,
      isFetchingChurnDiscountOffer: i
    }
  },
  b = () => {
    let e = (0, o.e7)([l.Z], () => l.Z.getPremiumTypeSubscription()),
      t = m(),
      n = null !== e && e.hasPremiumNitroMonthly,
      r = !!(null == e ? true : e.hasActiveTrial);
    return n && !r && !t
  },
  y = e => {
    for (let t of e.invoiceItems) {
      let e = t.discounts.find(e => e.type === s.eW.SUBSCRIPTION_PLAN);
      if (null != e) switch (e.discount_id) {
        case _.dT:
          return {
            duration: 1, percentage: e.percentage_amount, discountId: e.discount_id
          };
        case _.dB:
          return {
            duration: 3, percentage: e.percentage_amount, discountId: e.discount_id
          }
      }
    }
    return null
  },
  O = () => (0, u.W)()