/** Chunk was on 26526 **/
/** chunk id: 48813, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  PremiumBrandRefreshSubscriptionCancellationModal: () => k
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk211242 = require("./211242.js"),
  Chunk845220 = require("./845220.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk374649 = require("./374649.js"),
  Chunk140465 = require("./140465.js"),
  Chunk230916 = require("./230916.js"),
  Chunk398775 = require("./398775.jsx"),
  Chunk562218 = require("./562218.jsx"),
  Chunk284829 = require("./284829.jsx"),
  Chunk586920 = require("./586920.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk881493 = require("./881493.jsx"),
  Chunk407965 = require("./407965.jsx"),
  Chunk501090 = require("./501090.js"),
  Chunk323321 = require("./323321.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk853141 = require("./853141.js");

function M(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), a.forEach(function(e) {
      var a;
      a = n[e], e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = a
    })
  }
  return t
}
let g = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  k = t => {
    var e, n, l;
    let {
      analyticsLocation: k,
      analyticsLocations: L,
      onClose: U,
      transitionState: j,
      premiumSubscription: F
    } = t, {
      initialStep: W
    } = t, B = r.useRef(new i.qA), [G, Y] = r.useState(null), H = null == (e = (0, f.Af)(F)) ? true : e.planId, V = null != H ? f.ZP.getPremiumType(H) : null;
    o()(null != V, "Should not be cancelling Nitro without premiumType");
    let X = V === h.PremiumTypes.TIER_0 || V === h.PremiumTypes.TIER_1 || V === h.PremiumTypes.TIER_2;
    null == W && (W = X ? v.R.WHAT_YOU_LOSE : v.R.CONFIRM);
    let [Z, q, z, K] = (0, A.q)(W, F, L), Q = (0, _.Q)(), J = (0, y.UV)(), {
      churnUserDiscountOffer: $,
      isFetchingChurnDiscountOffer: tt
    } = (0, y.WR)(!J || F.status === x.O0b.CANCELED && Z !== v.R.CONFIRM_DISCOUNT), te = (0, b._n)(F, h.Xh.PREMIUM_MONTH_TIER_2, $), [tn] = (0, p.ED)({
      subscriptionId: F.id,
      items: (0, f.Ue)(null != (l = null == (n = F.renewalMutations) ? true : n.items) ? l : F.items),
      renewal: true,
      analyticsLocations: L,
      analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW
    }), ta = null !== tn ? f.ZP.getIntervalForInvoice(tn) : null, tr = (0, f.aS)(h.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: F.currency,
      paymentSourceId: F.paymentSourceId
    }), ti = (0, E.T4)(tr.amount, tr.currency), tl = r.useMemo(() => (0, m.b)(), []);
    r.useEffect(() => {
      O.default.track(x.rMx.CANCELLATION_FLOW_STARTED, M({
        location_stack: L,
        load_id: tl
      }, (0, D.v)(F)))
    }, [L, F, tl]);
    let [to, ts] = r.useState(null), tc = r.useCallback(() => {
      switch (Z) {
        case v.R.CONFIRM:
          return (0, a.jsx)(C.G, {});
        case v.R.CONFIRM_DISCOUNT:
          return (0, a.jsx)(P.U, {});
        case v.R.DISCOUNT_APPLIED:
          return (0, a.jsx)(T.i, {});
        case v.R.PREVIEW:
          return (0, a.jsx)(I.w, {});
        case v.R.PAUSE_SELECT:
          return (0, a.jsx)(S.PremiumSubscriptionPauseModalSelect, {});
        case v.R.PAUSE_CONFIRM:
          return (0, a.jsx)(S.Sz, {});
        case v.R.WHAT_YOU_LOSE:
        default:
          return (0, a.jsx)(w.n, {})
      }
    }, [Z]), tu = r.useCallback(async () => {
      if (O.default.track(x.rMx.CANCELLATION_FLOW_COMPLETED, M({
          location_stack: L,
          load_id: tl
        }, (0, D.v)(F))), g.includes(F.status)) await (0, c.EO)(F.id, L, k);
      else {
        var t, e;
        let n = null != (e = null == (t = F.renewalMutations) ? true : t.items) ? e : F.items,
          a = (0, f.Ue)(n);
        await (0, c.Mg)(F, {
          items: a
        }, {
          amount: 0,
          currency: F.currency
        }, (0, f.UX)(a, F.currency, F.paymentSourceId), L, k)
      }
    }, [F, L, k, tl]), td = async () => {
      if (null == $) throw Error("Churn user discount offer is null");
      F.status === x.O0b.CANCELED ? await (0, c.df)(F, $) : await s.tn.post({
        url: x.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: $.id
        },
        rejectWithError: true
      })
    };
    return (0, a.jsx)(d.Gt, {
      value: L,
      children: (0, a.jsxs)(R.CancellationContext.Provider, {
        value: {
          setStep: q,
          premiumType: V,
          onClose: () => {
            U(), O.default.track(x.rMx.CANCELLATION_FLOW_STEP, M({
              from_step: v.O[Z],
              to_step: null,
              step_duration_ms: Date.now() - z,
              flow_duration_ms: Date.now() - K,
              location_stack: L,
              load_id: tl
            }, (0, D.v)(F)))
          },
          transitionState: j,
          premiumSubscription: F,
          analyticsLocations: L,
          analyticsLocation: k,
          confettiCanvas: G,
          churnUserDiscountOffer: $,
          isFetchingChurnDiscountOffer: J && tt,
          fullPrice: ti,
          discountedPrice: te,
          planId: H,
          paymentsBlocked: Q,
          renewalInvoice: tn,
          renewalInvoiceDetails: ta,
          handleCancellation: tu,
          applyOffer: td,
          pauseDuration: to,
          setPauseDuration: ts
        },
        children: [(0, a.jsx)(i.O_, {
          ref: Y,
          className: N.confettiCanvas,
          environment: B.current
        }), tc()]
      })
    })
  }