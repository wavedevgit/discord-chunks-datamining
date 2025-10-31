/** Chunk was on 26526 **/
/** chunk id: 48813, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  PremiumBrandRefreshSubscriptionCancellationModal: () => U
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
  Chunk320150 = require("./320150.js");

function g(t) {
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
let L = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  U = t => {
    var e, n, l;
    let {
      analyticsLocation: U,
      analyticsLocations: x,
      onClose: k,
      transitionState: j,
      premiumSubscription: F
    } = t, {
      initialStep: W
    } = t, B = r.useRef(new i.qA), [G, Y] = r.useState(null), H = null == (e = (0, f.Af)(F)) ? true : e.planId, V = null != H ? f.ZP.getPremiumType(H) : null;
    s()(null != V, "Should not be cancelling Nitro without premiumType");
    let X = V === h.PremiumTypes.TIER_0 || V === h.PremiumTypes.TIER_1 || V === h.PremiumTypes.TIER_2;
    null == W && (W = X ? T.R.WHAT_YOU_LOSE : T.R.CONFIRM);
    let [Z, q, z, K] = (0, A.q)(W, F, x), Q = (0, m.Q)(), J = (0, S.UV)(), {
      churnUserDiscountOffer: $,
      isFetchingChurnDiscountOffer: tt
    } = (0, S.WR)(!J || F.status === N.O0b.CANCELED && Z !== T.R.CONFIRM_DISCOUNT), te = (0, y._n)(F, h.Xh.PREMIUM_MONTH_TIER_2, $), [tn] = (0, p.ED)({
      subscriptionId: F.id,
      items: (0, f.Ue)(null != (l = null == (n = F.renewalMutations) ? true : n.items) ? l : F.items),
      renewal: true,
      analyticsLocations: x,
      analyticsLocation: c.Z.CANCEL_INVOICE_PREVIEW
    }), ta = null !== tn ? f.ZP.getIntervalForInvoice(tn) : null, tr = (0, f.aS)(h.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: F.currency,
      paymentSourceId: F.paymentSourceId
    }), ti = (0, E.T4)(tr.amount, tr.currency), tl = r.useMemo(() => (0, O.b)(), []);
    r.useEffect(() => {
      _.default.track(N.rMx.CANCELLATION_FLOW_STARTED, g({
        location_stack: x,
        load_id: tl
      }, (0, D.v)(F)))
    }, [x, F, tl]);
    let [ts, tu] = r.useState(null), to = r.useCallback(() => {
      switch (Z) {
        case T.R.CONFIRM:
          return (0, a.jsx)(C.G, {});
        case T.R.CONFIRM_DISCOUNT:
          return (0, a.jsx)(P.U, {});
        case T.R.DISCOUNT_APPLIED:
          return (0, a.jsx)(R.i, {});
        case T.R.PREVIEW:
          return (0, a.jsx)(I.w, {});
        case T.R.PAUSE_SELECT:
          return (0, a.jsx)(b.PremiumSubscriptionPauseModalSelect, {});
        case T.R.PAUSE_CONFIRM:
          return (0, a.jsx)(b.Sz, {});
        case T.R.WHAT_YOU_LOSE:
        default:
          return (0, a.jsx)(w.n, {})
      }
    }, [Z]), tc = r.useCallback(async () => {
      if (_.default.track(N.rMx.CANCELLATION_FLOW_COMPLETED, g({
          location_stack: x,
          load_id: tl
        }, (0, D.v)(F))), L.includes(F.status)) await (0, o.EO)(F.id, x, U);
      else {
        var t, e;
        let n = null != (e = null == (t = F.renewalMutations) ? true : t.items) ? e : F.items,
          a = (0, f.Ue)(n);
        await (0, o.Mg)(F, {
          items: a
        }, {
          amount: 0,
          currency: F.currency
        }, (0, f.UX)(a, F.currency, F.paymentSourceId), x, U)
      }
    }, [F, x, U, tl]), td = async () => {
      if (null == $) throw Error("Churn user discount offer is null");
      F.status === N.O0b.CANCELED ? await (0, o.df)(F, $) : await u.tn.post({
        url: N.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: $.id
        },
        rejectWithError: true
      })
    };
    return (0, a.jsx)(d.Gt, {
      value: x,
      children: (0, a.jsxs)(v.CancellationContext.Provider, {
        value: {
          setStep: q,
          premiumType: V,
          onClose: () => {
            k(), _.default.track(N.rMx.CANCELLATION_FLOW_STEP, g({
              from_step: T.O[Z],
              to_step: null,
              step_duration_ms: Date.now() - z,
              flow_duration_ms: Date.now() - K,
              location_stack: x,
              load_id: tl
            }, (0, D.v)(F)))
          },
          transitionState: j,
          premiumSubscription: F,
          analyticsLocations: x,
          analyticsLocation: U,
          confettiCanvas: G,
          churnUserDiscountOffer: $,
          isFetchingChurnDiscountOffer: J && tt,
          fullPrice: ti,
          discountedPrice: te,
          planId: H,
          paymentsBlocked: Q,
          renewalInvoice: tn,
          renewalInvoiceDetails: ta,
          handleCancellation: tc,
          applyOffer: td,
          pauseDuration: ts,
          setPauseDuration: tu
        },
        children: [(0, a.jsx)(i.O_, {
          ref: Y,
          className: M.confettiCanvas,
          environment: B.current
        }), to()]
      })
    })
  }