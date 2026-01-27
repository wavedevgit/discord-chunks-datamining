/** Chunk was on 1536 **/
/** chunk id: 174705, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => U
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
let U = t => {
  var n, e, l, U;
  let {
    daysLeft: k,
    premiumType: w,
    premiumSubscription: T,
    analyticsSource: D,
    onClose: O,
    transitionState: R
  } = t, [G, j] = i.useState(false), {
    analyticsLocations: B
  } = (0, p.Ay)(_.A.PREMIUM_UNCANCEL_MODAL), q = (0, u.bG)([C.default], () => {
    let t = C.default.getCurrentUser();
    return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t
  }), K = (0, u.bG)([I.A], () => (null == T ? true : T.paymentSourceId) != null ? I.A.getPaymentSource(T.paymentSourceId) : null, [T]), W = T.items[0].planId, z = (0, b.mH)(h.hd[W].skuId), {
    priceOptions: F
  } = (0, y.A)({
    activeSubscription: null,
    skuIDs: [z],
    paymentSourceId: null == T ? true : T.paymentSourceId,
    isGift: false
  }), [H] = (0, x.Kq)({
    subscriptionId: T.id,
    items: [{
      planId: W,
      quantity: 1
    }],
    renewal: true,
    paymentSourceId: null == T ? true : T.paymentSourceId,
    currency: F.currency,
    analyticsLocations: (0, p.Ay)(_.A.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: _.A.PREMIUM_UNCANCEL_MODAL
  }), X = (0, u.bG)([A.A], () => (0, g.c9)(W), [W]), $ = (0, u.bG)([A.A], () => A.A.isFetchingForSKU(z)), J = null == H || null == (U = H.invoiceItems) || null == (l = U.find(t => t.subscriptionPlanId === W)) || null == (e = l.discounts) || null == (n = e.find(t => t.type === d.iS.SUBSCRIPTION_PLAN)) ? true : n.amount, Z = null != X ? (0, b.y8)(X.id, false, false, F) : null, Q = null != Z && null != J ? (0, S.$g)(Z.amount - (null != J ? J : 0), Z.currency) : null, {
    intervalType: V,
    intervalCount: Y
  } = b.Ay.getInterval(W), tt = w === h.PremiumTypes.TIER_1, tn = null != Z ? (0, S.$g)(Z.amount, Z.currency) : null;
  return (i.useEffect(() => {
    v.default.track(E.HAw.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: D
    })
  }, [D]), G) ? (0, r.jsx)(o.Modal, {
    actions: [],
    onClose: O,
    transitionState: R,
    title: "",
    children: (0, r.jsx)(m.PaymentContextProvider, {
      activeSubscription: T,
      stepConfigs: [],
      skuIDs: [],
      children: (0, r.jsx)(N.Ay, {
        planId: W,
        onClose: O,
        paymentSourceType: null == K ? true : K.type
      })
    })
  }) : (0, r.jsx)(o.Modal, {
    title: tt ? M.intl.formatToPlainString(M.t.Sngnzg, {
      daysLeft: k
    }) : M.intl.formatToPlainString(M.t.tdvIlU, {
      daysLeft: k
    }),
    subtitle: tt ? M.intl.format(M.t["6Su2Xb"], {}) : M.intl.format(M.t["lE+P8X"], {}),
    size: "md",
    onClose: O,
    preview: null !== tn ? (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: function(t) {
        switch (V) {
          case h.WT.YEAR:
            return tt ? M.intl.format(M.t.O7JRza, {
              price: t
            }) : M.intl.format(M.t["0y5kAG"], {
              price: t
            });
          case h.WT.MONTH:
            if (null != Q) return M.intl.format(M.t["1/ucvu"], {
              discountPrice: Q,
              defaultPrice: t
            });
            if (tt) return M.intl.format(M.t.rbwRlf, {
              price: t
            });
            if (1 === Y) return M.intl.format(M.t.C9oRCx, {
              price: t
            });
            return M.intl.format(M.t.TmmTgl, {
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
      text: M.intl.string(M.t.XDpS4K),
      variant: "secondary",
      onClick: O
    }, {
      text: M.intl.string(M.t["2+luBl"]),
      variant: "primary",
      disabled: $,
      onClick: async () => {
        if (null != T) {
          let t = (0, P.jJ)(W, T.currency, null == K ? true : K.id);
          null != K && K.id === T.paymentSourceId && t ? (await s.Ir(T, B, T.currency, K, E.ThZ.UNCANCEL_WINBACK_MODAL), j(true)) : (O(), (0, f.A)({
            initialPlanId: W,
            analyticsLocations: B,
            analyticsLocation: E.ThZ.UNCANCEL_WINBACK_MODAL
          }))
        }
      }
    }],
    transitionState: R,
    children: (0, r.jsx)(L.l, {
      currentUser: q,
      premiumType: w,
      onClose: O,
      isDowngrade: false,
      isPremiumRebrand: true
    })
  })
}