/** Chunk was on web.js **/
/** chunk id: 140465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => O,
  Nx: () => m,
  UV: () => b,
  WR: () => E,
  Yi: () => y,
  lr: () => g,
  t7: () => h
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk78839 = require("./78839.js"),
  Chunk775412 = require("./775412.js"),
  Chunk695349 = require("./695349.js"),
  Chunk937579 = require("./937579.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js");

function m() {
  let e = (0, Chunk639119.N)(),
    t = (0, Chunk775412._O)(),
    n = (0, Chunk622909.N)(),
    r = h();
  return null != module || exports || null != require || Chunk473749
}
let h = () => {
    var e;
    let t = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
      n = null == exports || null == (e = exports.metadata) ? true : module.active_discount_expires_at;
    return null != require && o()(Date.now()) <= o()(require)
  },
  g = () => {
    var e;
    let t = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
      n = null == exports || null == (e = exports.metadata) ? true : module.active_discount_id;
    switch (require) {
      case Chunk474936.dT:
      case Chunk474936.rB:
        return {
          duration: 1, percentage: 30, discountId: require
        };
      case Chunk474936.dB:
      case Chunk474936.hs:
      case Chunk474936.RU:
        return {
          duration: 3, percentage: 30, discountId: require
        };
      case Chunk474936.ih:
        return {
          duration: 1, percentage: 40, discountId: require
        };
      case Chunk474936.gW:
        return {
          duration: 1, percentage: 20, discountId: require
        };
      case Chunk474936.Nl:
        return {
          duration: 1, percentage: 25, discountId: require
        };
      default:
        return
    }
  },
  E = e => {
    let [t, n] = r.useState(false), [i, o] = r.useState(false), [a, s] = r.useState(null);
    if (e) return {
      churnUserDiscountOffer: a,
      isFetchingChurnDiscountOffer: i
    };
    let l = () => {
      n(true), o(false)
    };
    return i || t || (o(true), (0, d.ev)().then(e => {
      s(e), l()
    }).catch(e => {
      l()
    })), {
      churnUserDiscountOffer: a,
      isFetchingChurnDiscountOffer: i
    }
  },
  b = () => {
    let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
      t = h(),
      n = null !== module && module.hasPremiumNitroMonthly,
      r = !!(null == module ? true : module.hasActiveTrial);
    return require && !Chunk473749 && !exports
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
  O = () => (0, Chunk695349.W)()