/** Chunk was on 12222 **/
/** chunk id: 561623, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk366939 = require("./366939.js"),
  Chunk911969 = require("./911969.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk583046 = require("./583046.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk212895 = require("./212895.js"),
  Chunk296848 = require("./296848.js"),
  Chunk374649 = require("./374649.js"),
  Chunk807163 = require("./807163.jsx"),
  Chunk317269 = require("./317269.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let x = e => {
  var r, n, a, x;
  let {
    daysLeft: N,
    premiumType: E,
    premiumSubscription: U,
    analyticsSource: B,
    onClose: M,
    transitionState: R
  } = e, [k, O] = o.useState(false), {
    analyticsLocations: D
  } = (0, m.ZP)(s.Z.PREMIUM_UNCANCEL_MODAL), Z = (0, d.e7)([f.default], () => {
    let e = f.default.getCurrentUser();
    return i()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  }), z = (0, d.e7)([I.Z], () => (null == U ? true : U.paymentSourceId) != null ? I.Z.getPaymentSource(U.paymentSourceId) : null, [U]), j = U.items[0].planId, Y = (0, y.Wz)(F.GP[j].skuId), {
    priceOptions: W
  } = (0, C.Z)({
    activeSubscription: null,
    skuIDs: [Y],
    paymentSourceId: null == U ? true : U.paymentSourceId,
    isGift: false
  }), [K] = (0, v.ED)({
    subscriptionId: U.id,
    items: [{
      planId: j,
      quantity: 1
    }],
    renewal: true,
    paymentSourceId: null == U ? true : U.paymentSourceId,
    currency: W.currency,
    analyticsLocations: (0, m.ZP)(s.Z.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: s.Z.PREMIUM_UNCANCEL_MODAL
  }), X = (0, d.e7)([g.Z], () => (0, T.oE)(j), [j]), V = (0, d.e7)([g.Z], () => g.Z.isFetchingForSKU(Y)), q = null == K || null == (x = K.invoiceItems) || null == (a = x.find(e => e.subscriptionPlanId === j)) || null == (n = a.discounts) || null == (r = n.find(e => e.type === c.eW.SUBSCRIPTION_PLAN)) ? true : r.amount, H = null != X ? (0, y.aS)(X.id, false, false, W) : null, J = null != H && null != q ? (0, P.T4)(H.amount - (null != q ? q : 0), H.currency) : null, {
    intervalType: $,
    intervalCount: Q
  } = y.ZP.getInterval(j), ee = E === F.PremiumTypes.TIER_1, er = null != H ? (0, P.T4)(H.amount, H.currency) : null;
  return (o.useEffect(() => {
    h.default.track(A.rMx.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: B
    })
  }, [B]), k) ? (0, t.jsx)(l.Modal, {
    actions: [],
    onClose: M,
    transitionState: R,
    title: "",
    children: (0, t.jsx)(p.PaymentContextProvider, {
      activeSubscription: U,
      stepConfigs: [],
      skuIDs: [],
      children: (0, t.jsx)(L.ZP, {
        planId: j,
        onClose: M,
        paymentSourceType: null == z ? true : z.type
      })
    })
  }) : (0, t.jsx)(l.Modal, {
    title: ee ? w.intl.formatToPlainString(w.t.Sngnzg, {
      daysLeft: N
    }) : w.intl.formatToPlainString(w.t.tdvIlU, {
      daysLeft: N
    }),
    subtitle: ee ? w.intl.format(w.t["6Su2Xb"], {}) : w.intl.format(w.t["lE+P8X"], {}),
    size: "md",
    onClose: M,
    preview: null !== er ? (0, t.jsx)(_.Text, {
      variant: "text-sm/normal",
      children: function(e) {
        switch ($) {
          case F.rV.YEAR:
            return ee ? w.intl.format(w.t.O7JRza, {
              price: e
            }) : w.intl.format(w.t["0y5kAG"], {
              price: e
            });
          case F.rV.MONTH:
            if (null != J) return w.intl.format(w.t["1/ucvu"], {
              discountPrice: J,
              defaultPrice: e
            });
            if (ee) return w.intl.format(w.t.rbwRlf, {
              price: e
            });
            if (1 === Q) return w.intl.format(w.t.C9oRCx, {
              price: e
            });
            return w.intl.format(w.t.TmmTgl, {
              price: e,
              intervalCount: Q
            });
          default:
            throw Error("Unknown interval type ".concat($))
        }
      }(er)
    }) : (0, t.jsx)(_.$jN, {
      type: _.RAz.SPINNING_CIRCLE
    }),
    actions: [{
      text: w.intl.string(w.t.XDpS4K),
      variant: "secondary",
      onClick: M
    }, {
      text: w.intl.string(w.t["2+luBl"]),
      variant: "primary",
      disabled: V,
      onClick: async () => {
        if (null != U) {
          let e = (0, S.tD)(j, U.currency, null == z ? true : z.id);
          null != z && z.id === U.paymentSourceId && e ? (await u.O5(U, D, U.currency, z, A.Sbl.UNCANCEL_WINBACK_MODAL), O(true)) : (M(), (0, b.Z)({
            initialPlanId: j,
            analyticsLocations: D,
            analyticsLocation: A.Sbl.UNCANCEL_WINBACK_MODAL
          }))
        }
      }
    }],
    transitionState: R,
    children: (0, t.jsx)(G.g, {
      currentUser: Z,
      premiumType: E,
      onClose: M,
      isDowngrade: false,
      isPremiumRebrand: true
    })
  })
}