/** Chunk was on 11394 **/
/** chunk id: 561623, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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
let N = e => {
  var t, o, i, N;
  let {
    daysLeft: E,
    premiumType: U,
    premiumSubscription: M,
    analyticsSource: B,
    onClose: R,
    transitionState: Z
  } = e, [k, O] = n.useState(false), {
    analyticsLocations: j
  } = (0, C.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL), D = (0, l.e7)([I.default], () => {
    let e = I.default.getCurrentUser();
    return a()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  }), z = (0, l.e7)([h.Z], () => (null == M ? true : M.paymentSourceId) != null ? h.Z.getPaymentSource(M.paymentSourceId) : null, [M]), G = M.items[0].planId, Y = (0, P.Wz)(A.GP[G].skuId), {
    priceOptions: W
  } = (0, p.Z)({
    activeSubscription: null,
    skuIDs: [Y],
    paymentSourceId: null == M ? true : M.paymentSourceId,
    isGift: false
  }), [K] = (0, g.ED)({
    subscriptionId: M.id,
    items: [{
      planId: G,
      quantity: 1
    }],
    renewal: true,
    paymentSourceId: null == M ? true : M.paymentSourceId,
    currency: W.currency,
    analyticsLocations: (0, C.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL
  }), V = (0, l.e7)([b.Z], () => (0, T.oE)(G), [G]), X = (0, l.e7)([b.Z], () => b.Z.isFetchingForSKU(Y)), q = null == K || null == (N = K.invoiceItems) || null == (i = N.find(e => e.subscriptionPlanId === G)) || null == (o = i.discounts) || null == (t = o.find(e => e.type === s.eW.SUBSCRIPTION_PLAN)) ? true : t.amount, H = null != V ? (0, P.aS)(V.id, false, false, W) : null, J = null != H && null != q ? (0, L.T4)(H.amount - (null != q ? q : 0), H.currency) : null, {
    intervalType: $,
    intervalCount: Q
  } = P.ZP.getInterval(G), ee = U === A.p9.TIER_1, et = null != H ? (0, L.T4)(H.amount, H.currency) : null;
  return (n.useEffect(() => {
    y.default.track(F.rMx.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: B
    })
  }, [B]), k) ? (0, r.jsx)(u.Modal, {
    actions: [],
    onClose: R,
    transitionState: Z,
    title: "",
    children: (0, r.jsx)(m.PaymentContextProvider, {
      activeSubscription: M,
      stepConfigs: [],
      skuIDs: [],
      children: (0, r.jsx)(w.ZP, {
        planId: G,
        onClose: R,
        paymentSourceType: null == z ? true : z.type
      })
    })
  }) : (0, r.jsx)(u.Modal, {
    title: ee ? x.intl.formatToPlainString(x.t.Sngnzs, {
      daysLeft: E
    }) : x.intl.formatToPlainString(x.t.tdvIlZ, {
      daysLeft: E
    }),
    subtitle: ee ? x.intl.format(x.t["6Su2XV"], {}) : x.intl.format(x.t["lE+P8f"], {}),
    size: "md",
    onClose: R,
    preview: null !== et ? (0, r.jsx)(_.Text, {
      variant: "text-sm/normal",
      children: function(e) {
        switch ($) {
          case A.rV.YEAR:
            return ee ? x.intl.format(x.t.O7JRzc, {
              price: e
            }) : x.intl.format(x.t["0y5kAA"], {
              price: e
            });
          case A.rV.MONTH:
            if (null != J) return x.intl.format(x.t["1/ucvr"], {
              discountPrice: J,
              defaultPrice: e
            });
            if (ee) return x.intl.format(x.t.rbwRlZ, {
              price: e
            });
            if (1 === Q) return x.intl.format(x.t.C9oRCw, {
              price: e
            });
            return x.intl.format(x.t.TmmTgo, {
              price: e,
              intervalCount: Q
            });
          default:
            throw Error("Unknown interval type ".concat($))
        }
      }(et)
    }) : (0, r.jsx)(_.$jN, {
      type: _.RAz.SPINNING_CIRCLE
    }),
    actions: [{
      text: x.intl.string(x.t.XDpS4O),
      variant: "secondary",
      onClick: R
    }, {
      text: x.intl.string(x.t["2+luBg"]),
      variant: "primary",
      disabled: X,
      onClick: async () => {
        if (null != M) {
          let e = (0, S.tD)(G, M.currency, null == z ? true : z.id);
          null != z && z.id === M.paymentSourceId && e ? (await c.O5(M, j, M.currency, z, F.Sbl.UNCANCEL_WINBACK_MODAL), O(true)) : (R(), (0, f.Z)({
            initialPlanId: G,
            analyticsLocations: j,
            analyticsLocation: F.Sbl.UNCANCEL_WINBACK_MODAL
          }))
        }
      }
    }],
    transitionState: Z,
    children: (0, r.jsx)(v.g, {
      currentUser: D,
      premiumType: U,
      onClose: R,
      isDowngrade: false,
      isPremiumRebrand: true
    })
  })
}