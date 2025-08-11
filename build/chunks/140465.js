/** Chunk was on web.js **/
/** chunk id: 140465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => O,
  Nx: () => h,
  UV: () => y,
  WR: () => b,
  lr: () => g,
  t7: () => m
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk78839 = require("./78839.js"),
  Chunk775412 = require("./775412.js"),
  Chunk695349 = require("./695349.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");

function h() {
  let e = (0, Chunk639119.N)(),
    t = (0, Chunk775412._O)(),
    n = (0, Chunk104494.Ng)(),
    r = m();
  return null != module || exports || null != require || Chunk73800
}
let m = () => {
    var e;
    let t = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
      n = null == exports || null == (e = exports.metadata) ? true : module.active_discount_expires_at;
    return null != require && o()(Date.now()) <= o()(require)
  },
  g = () => {
    var e;
    let t = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription());
    switch (null == exports || null == (e = exports.metadata) ? true : module.active_discount_id) {
      case Chunk474936.dT:
      case Chunk474936.rB:
        return {
          duration: 1, percentage: 30
        };
      case Chunk474936.dB:
      case Chunk474936.hs:
      case Chunk474936.RU:
        return {
          duration: 3, percentage: 30
        };
      case Chunk474936.ih:
        return {
          duration: 1, percentage: 40
        };
      case Chunk474936.gW:
        return {
          duration: 1, percentage: 20
        };
      case Chunk474936.Nl:
        return {
          duration: 1, percentage: 25
        };
      default:
        return
    }
  },
  E = async () => {
    let e = null;
    try {
      var t;
      e = null != (t = (await Chunk544891.tn.post({
        url: Chunk981631.ANM.CHURN_USER_OFFER,
        rejectWithError: true
      })).body.offer) ? exports : null
    } catch (e) {}
    return module
  }, b = e => {
    let [t, n] = r.useState(false), [i, o] = r.useState(false), [a, s] = r.useState(null);
    if (e) return {
      churnUserDiscountOffer: a,
      isFetchingChurnDiscountOffer: i
    };
    let l = () => {
      n(true), o(false)
    };
    return i || t || (o(true), E().then(e => {
      s(e), l()
    }).catch(e => {
      l()
    })), {
      churnUserDiscountOffer: a,
      isFetchingChurnDiscountOffer: i
    }
  }, y = () => {
    let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
      t = m(),
      n = null !== module && module.hasPremiumNitroMonthly,
      r = !!(null == module ? true : module.hasActiveTrial);
    return require && !Chunk73800 && !exports
  }, O = () => (0, Chunk695349.W)()