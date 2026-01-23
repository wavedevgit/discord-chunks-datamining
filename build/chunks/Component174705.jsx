/** Chunk was on 47827 **/
/** chunk id: 174705, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk158032 = require("./158032.js"),
  Chunk155718 = require("./155718.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk853398 = require("./853398.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk295405 = require("./295405.js"),
  Chunk97352 = require("./97352.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk83617 = require("./83617.js"),
  Chunk615396 = require("./615396.js"),
  Chunk543767 = require("./543767.js"),
  Chunk96304 = require("./96304.jsx"),
  Chunk380083 = require("./380083.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let M = t => {
  var n, e, l, M;
  let {
    daysLeft: w,
    premiumType: T,
    premiumSubscription: k,
    analyticsSource: D,
    onClose: O,
    transitionState: R
  } = t, [j, G] = i.useState(false), {
    analyticsLocations: B
  } = (0, m.Ay)(p.A.PREMIUM_UNCANCEL_MODAL), q = (0, u.bG)([I.default], () => {
    let t = I.default.getCurrentUser();
    return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t
  }), K = (0, u.bG)([A.A], () => (null == k ? true : k.paymentSourceId) != null ? A.A.getPaymentSource(k.paymentSourceId) : null, [k]), W = k.items[0].planId, z = (0, b.mH)(E.hd[W].skuId), {
    priceOptions: F
  } = (0, _.A)({
    activeSubscription: null,
    skuIDs: [z],
    paymentSourceId: null == k ? true : k.paymentSourceId,
    isGift: false
  }), [H] = (0, L.Kq)({
    subscriptionId: k.id,
    items: [{
      planId: W,
      quantity: 1
    }],
    renewal: true,
    paymentSourceId: null == k ? true : k.paymentSourceId,
    currency: F.currency,
    analyticsLocations: (0, m.Ay)(p.A.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: p.A.PREMIUM_UNCANCEL_MODAL
  }), X = (0, u.bG)([C.A], () => (0, x.c9)(W), [W]), $ = (0, u.bG)([C.A], () => C.A.isFetchingForSKU(z)), J = null == H || null == (M = H.invoiceItems) || null == (l = M.find(t => t.subscriptionPlanId === W)) || null == (e = l.discounts) || null == (n = e.find(t => t.type === d.iS.SUBSCRIPTION_PLAN)) ? true : n.amount, Z = null != X ? (0, b.y8)(X.id, false, false, F) : null, Q = null != Z && null != J ? (0, v.$g)(Z.amount - (null != J ? J : 0), Z.currency) : null, {
    intervalType: V,
    intervalCount: Y
  } = b.Ay.getInterval(W), tt = T === E.PremiumTypes.TIER_1, tn = null != Z ? (0, v.$g)(Z.amount, Z.currency) : null;
  return (i.useEffect(() => {
    S.default.track(U.HAw.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: D
    })
  }, [D]), j) ? (0, r.jsx)(o.Modal, {
    actions: [],
    onClose: O,
    transitionState: R,
    title: "",
    children: (0, r.jsx)(y.PaymentContextProvider, {
      activeSubscription: k,
      stepConfigs: [],
      skuIDs: [],
      children: (0, r.jsx)(N.Ay, {
        planId: W,
        onClose: O,
        paymentSourceType: null == K ? true : K.type
      })
    })
  }) : (0, r.jsx)(o.Modal, {
    title: tt ? h.intl.formatToPlainString(h.t.Sngnzg, {
      daysLeft: w
    }) : h.intl.formatToPlainString(h.t.tdvIlU, {
      daysLeft: w
    }),
    subtitle: tt ? h.intl.format(h.t["6Su2Xb"], {}) : h.intl.format(h.t["lE+P8X"], {}),
    size: "md",
    onClose: O,
    preview: null !== tn ? (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: function(t) {
        switch (V) {
          case E.WT.YEAR:
            return tt ? h.intl.format(h.t.O7JRza, {
              price: t
            }) : h.intl.format(h.t["0y5kAG"], {
              price: t
            });
          case E.WT.MONTH:
            if (null != Q) return h.intl.format(h.t["1/ucvu"], {
              discountPrice: Q,
              defaultPrice: t
            });
            if (tt) return h.intl.format(h.t.rbwRlf, {
              price: t
            });
            if (1 === Y) return h.intl.format(h.t.C9oRCx, {
              price: t
            });
            return h.intl.format(h.t.TmmTgl, {
              price: t,
              intervalCount: Y
            });
          default:
            throw Error("Unknown interval type ".concat(V))
        }
      }(tn)
    }) : (0, r.jsx)(c.y$y, {
      type: c.tVU.SPINNING_CIRCLE
    }),
    actions: [{
      text: h.intl.string(h.t.XDpS4K),
      variant: "secondary",
      onClick: O
    }, {
      text: h.intl.string(h.t["2+luBl"]),
      variant: "primary",
      disabled: $,
      onClick: async () => {
        if (null != k) {
          let t = (0, P.jJ)(W, k.currency, null == K ? true : K.id);
          null != K && K.id === k.paymentSourceId && t ? (await s.Ir(k, B, k.currency, K, U.ThZ.UNCANCEL_WINBACK_MODAL), G(true)) : (O(), (0, f.A)({
            initialPlanId: W,
            analyticsLocations: B,
            analyticsLocation: U.ThZ.UNCANCEL_WINBACK_MODAL
          }))
        }
      }
    }],
    transitionState: R,
    children: (0, r.jsx)(g.l, {
      currentUser: q,
      premiumType: T,
      onClose: O,
      isDowngrade: false,
      isPremiumRebrand: true
    })
  })
}