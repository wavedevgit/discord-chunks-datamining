/** Chunk was on 47827 **/
/** chunk id: 174705, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => h
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
let h = t => {
  var n, e, r, h;
  let {
    daysLeft: T,
    premiumType: k,
    premiumSubscription: w,
    analyticsSource: D,
    onClose: R,
    transitionState: O
  } = t, [j, G] = l.useState(false), {
    analyticsLocations: q
  } = (0, p.Ay)(f.A.PREMIUM_UNCANCEL_MODAL), K = (0, u.bG)([A.default], () => {
    let t = A.default.getCurrentUser();
    return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t
  }), W = (0, u.bG)([C.A], () => (null == w ? true : w.paymentSourceId) != null ? C.A.getPaymentSource(w.paymentSourceId) : null, [w]), z = w.items[0].planId, B = (0, _.mH)(U.hd[z].skuId), {
    priceOptions: F
  } = (0, y.A)({
    activeSubscription: null,
    skuIDs: [B],
    paymentSourceId: null == w ? true : w.paymentSourceId,
    isGift: false
  }), [H] = (0, N.Kq)({
    subscriptionId: w.id,
    items: [{
      planId: z,
      quantity: 1
    }],
    renewal: true,
    paymentSourceId: null == w ? true : w.paymentSourceId,
    currency: F.currency,
    analyticsLocations: (0, p.Ay)(f.A.PREMIUM_UNCANCEL_MODAL),
    analyticsLocation: f.A.PREMIUM_UNCANCEL_MODAL
  }), X = (0, u.bG)([b.A], () => (0, L.c9)(z), [z]), $ = (0, u.bG)([b.A], () => b.A.isFetchingForSKU(B)), J = null == H || null == (h = H.invoiceItems) || null == (r = h.find(t => t.subscriptionPlanId === z)) || null == (e = r.discounts) || null == (n = e.find(t => t.type === d.iS.SUBSCRIPTION_PLAN)) ? true : n.amount, Z = null != X ? (0, _.y8)(X.id, false, false, F) : null, Q = null != Z && null != J ? (0, v.$g)(Z.amount - (null != J ? J : 0), Z.currency) : null, {
    intervalType: V,
    intervalCount: Y
  } = _.Ay.getInterval(z), tt = k === U.PremiumTypes.TIER_1, tn = null != Z ? (0, v.$g)(Z.amount, Z.currency) : null;
  return (l.useEffect(() => {
    S.default.track(g.HAw.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: D
    })
  }, [D]), j) ? (0, i.jsx)(c.Modal, {
    actions: [],
    onClose: R,
    transitionState: O,
    title: "",
    children: (0, i.jsx)(m.PaymentContextProvider, {
      activeSubscription: w,
      stepConfigs: [],
      skuIDs: [],
      children: (0, i.jsx)(E.Ay, {
        planId: z,
        onClose: R,
        paymentSourceType: null == W ? true : W.type
      })
    })
  }) : (0, i.jsx)(c.Modal, {
    title: tt ? M.intl.formatToPlainString(M.t.Sngnzg, {
      daysLeft: T
    }) : M.intl.formatToPlainString(M.t.tdvIlU, {
      daysLeft: T
    }),
    subtitle: tt ? M.intl.format(M.t["6Su2Xb"], {}) : M.intl.format(M.t["lE+P8X"], {}),
    size: "md",
    onClose: R,
    preview: null !== tn ? (0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: function(t) {
        switch (V) {
          case U.WT.YEAR:
            return tt ? M.intl.format(M.t.O7JRza, {
              price: t
            }) : M.intl.format(M.t["0y5kAG"], {
              price: t
            });
          case U.WT.MONTH:
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
    }) : (0, i.jsx)(o.y$y, {
      type: o.tVU.SPINNING_CIRCLE
    }),
    actions: [{
      text: M.intl.string(M.t.XDpS4K),
      variant: "secondary",
      onClick: R
    }, {
      text: M.intl.string(M.t["2+luBl"]),
      variant: "primary",
      disabled: $,
      onClick: async () => {
        if (null != w) {
          let t = (0, P.jJ)(z, w.currency, null == W ? true : W.id);
          null != W && W.id === w.paymentSourceId && t ? (await s.Ir(w, q, w.currency, W, g.ThZ.UNCANCEL_WINBACK_MODAL), G(true)) : (R(), (0, I.A)({
            initialPlanId: z,
            analyticsLocations: q,
            analyticsLocation: g.ThZ.UNCANCEL_WINBACK_MODAL
          }))
        }
      }
    }],
    transitionState: O,
    children: (0, i.jsx)(x.l, {
      currentUser: K,
      premiumType: k,
      onClose: R,
      isDowngrade: false,
      isPremiumRebrand: true
    })
  })
}