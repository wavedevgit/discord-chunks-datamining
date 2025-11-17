/** Chunk was on 56158 **/
/** chunk id: 561623, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => U
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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
let U = t => {
  var n, e, l, U;
  let {
    daysLeft: h,
    premiumType: Z,
    premiumSubscription: k,
    analyticsSource: O,
    onClose: T,
    transitionState: D
  } = t, [R, j] = i.useState(false), {
    analyticsLocations: B
  } = (0, m.ZP)(p.Z.PREMIUM_UNCANCEL_MODAL), G = (0, u.e7)([C.default], () => {
    let t = C.default.getCurrentUser();
    return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t
  }), z = (0, u.e7)([I.Z], () => (null == k ? true : k.paymentSourceId) != null ? I.Z.getPaymentSource(k.paymentSourceId) : null, [k]), W = k.items[0].planId, K = (0, v.Wz)(E.GP[W].skuId), {
    priceOptions: X
  } = (0, f.Z)({
    activeSubscription: null,
    skuIDs: [K],
    paymentSourceId: null == k ? true : k.paymentSourceId,
    isGift: false
  }), [F] = (0, N.ED)({
    subscriptionId: k.id,
    items: [{
      planId: W,
      quantity: 1
    }],
    renewal: true,
    paymentSourceId: null == k ? true : k.paymentSourceId,
    currency: X.currency,
    analyticsLocations: (0, m.ZP)(p.Z.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: p.Z.PREMIUM_UNCANCEL_MODAL
  }), V = (0, u.e7)([P.Z], () => (0, g.oE)(W), [W]), q = (0, u.e7)([P.Z], () => P.Z.isFetchingForSKU(K)), H = null == F || null == (U = F.invoiceItems) || null == (l = U.find(t => t.subscriptionPlanId === W)) || null == (e = l.discounts) || null == (n = e.find(t => t.type === d.eW.SUBSCRIPTION_PLAN)) ? true : n.amount, J = null != V ? (0, v.aS)(V.id, false, false, X) : null, Y = null != J && null != H ? (0, S.T4)(J.amount - (null != H ? H : 0), J.currency) : null, {
    intervalType: $,
    intervalCount: Q
  } = v.ZP.getInterval(W), tt = Z === E.PremiumTypes.TIER_1, tn = null != J ? (0, S.T4)(J.amount, J.currency) : null;
  return (i.useEffect(() => {
    b.default.track(w.rMx.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: O
    })
  }, [O]), R) ? (0, r.jsx)(o.Modal, {
    actions: [],
    onClose: T,
    transitionState: D,
    title: "",
    children: (0, r.jsx)(_.PaymentContextProvider, {
      activeSubscription: k,
      stepConfigs: [],
      skuIDs: [],
      children: (0, r.jsx)(A.ZP, {
        planId: W,
        onClose: T,
        paymentSourceType: null == z ? true : z.type
      })
    })
  }) : (0, r.jsx)(o.Modal, {
    title: tt ? M.intl.formatToPlainString(M.t.Sngnzg, {
      daysLeft: h
    }) : M.intl.formatToPlainString(M.t.tdvIlU, {
      daysLeft: h
    }),
    subtitle: tt ? M.intl.format(M.t["6Su2Xb"], {}) : M.intl.format(M.t["lE+P8X"], {}),
    size: "md",
    onClose: T,
    preview: null !== tn ? (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: function(t) {
        switch ($) {
          case E.rV.YEAR:
            return tt ? M.intl.format(M.t.O7JRza, {
              price: t
            }) : M.intl.format(M.t["0y5kAG"], {
              price: t
            });
          case E.rV.MONTH:
            if (null != Y) return M.intl.format(M.t["1/ucvu"], {
              discountPrice: Y,
              defaultPrice: t
            });
            if (tt) return M.intl.format(M.t.rbwRlf, {
              price: t
            });
            if (1 === Q) return M.intl.format(M.t.C9oRCx, {
              price: t
            });
            return M.intl.format(M.t.TmmTgl, {
              price: t,
              intervalCount: Q
            });
          default:
            throw Error("Unknown interval type ".concat($))
        }
      }(tn)
    }) : (0, r.jsx)(c.$jN, {
      type: c.RAz.SPINNING_CIRCLE
    }),
    actions: [{
      text: M.intl.string(M.t.XDpS4K),
      variant: "secondary",
      onClick: T
    }, {
      text: M.intl.string(M.t["2+luBl"]),
      variant: "primary",
      disabled: q,
      onClick: async () => {
        if (null != k) {
          let t = (0, x.tD)(W, k.currency, null == z ? true : z.id);
          null != z && z.id === k.paymentSourceId && t ? (await s.O5(k, B, k.currency, z, w.Sbl.UNCANCEL_WINBACK_MODAL), j(true)) : (T(), (0, y.Z)({
            initialPlanId: W,
            analyticsLocations: B,
            analyticsLocation: w.Sbl.UNCANCEL_WINBACK_MODAL
          }))
        }
      }
    }],
    transitionState: D,
    children: (0, r.jsx)(L.g, {
      currentUser: G,
      premiumType: Z,
      onClose: T,
      isDowngrade: false,
      isPremiumRebrand: true
    })
  })
}