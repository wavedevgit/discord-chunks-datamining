/** Chunk was on web.js **/
/** chunk id: 526292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bv: () => b,
  ar: () => h,
  f9: () => y,
  g5: () => E,
  k0: () => O,
  k5: () => m,
  nf: () => g
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk166403 = require("./166403.js"),
  Chunk89366 = require("./89366.js"),
  Chunk637073 = require("./637073.js"),
  Chunk694080 = require("./694080.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk788868 = require("./788868.js");

function h() {
  let e = (0, p.V)(),
    t = (0, c.QQ)(),
    n = (0, f.O)(),
    r = m();
  return null != e || t || null != n || r
}
let m = () => {
    var e;
    let t = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
      n = null == t || null == (e = t.metadata) ? true : e.active_discount_expires_at;
    return null != n && a()(Date.now()) <= a()(n)
  },
  g = () => {
    var e;
    let t = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
      n = null == t || null == (e = t.metadata) ? true : e.active_discount_id;
    switch (n) {
      case _.q:
      case _.lj:
        return {
          duration: 1, percentage: 30, discountId: n
        };
      case _.EG:
      case _.TU:
      case _.KG:
        return {
          duration: 3, percentage: 30, discountId: n
        };
      case _.HF:
        return {
          duration: 1, percentage: 40, discountId: n
        };
      case _.BR:
        return {
          duration: 1, percentage: 20, discountId: n
        };
      case _.CW:
        return {
          duration: 1, percentage: 25, discountId: n
        };
      default:
        return
    }
  },
  E = e => {
    let [t, n] = r.useState(false), [i, a] = r.useState(false), [s, o] = r.useState(null);
    if (e) return {
      churnUserDiscountOffer: s,
      isFetchingChurnDiscountOffer: i
    };
    let l = () => {
      n(true), a(false)
    };
    return i || t || (a(true), (0, d.qz)().then(e => {
      o(e), l()
    }).catch(e => {
      l()
    })), {
      churnUserDiscountOffer: s,
      isFetchingChurnDiscountOffer: i
    }
  },
  y = () => {
    let e = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
      t = m(),
      n = null !== e && e.hasPremiumNitroMonthly,
      r = !!(null == e ? true : e.hasActiveTrial);
    return n && !r && !t
  },
  b = e => {
    for (let t of e.invoiceItems) {
      let e = t.discounts.find(e => e.type === o.iS.SUBSCRIPTION_PLAN);
      if (null != e) switch (e.discount_id) {
        case _.q:
          return {
            duration: 1, percentage: e.percentage_amount, discountId: e.discount_id
          };
        case _.EG:
          return {
            duration: 3, percentage: e.percentage_amount, discountId: e.discount_id
          }
      }
    }
    return null
  },
  O = () => (0, u.d)()