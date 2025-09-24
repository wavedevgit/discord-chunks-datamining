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

function L(t) {
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
let M = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  U = t => {
    var e, n, i;
    let {
      analyticsLocation: U,
      analyticsLocations: k,
      onClose: j,
      transitionState: x,
      premiumSubscription: F
    } = t, {
      initialStep: W
    } = t, B = r.useRef(new l.qA), [X, Y] = r.useState(null), G = null == (e = (0, E.Af)(F)) ? true : e.planId, H = null != G ? E.ZP.getPremiumType(G) : null;
    s()(null != H, "Should not be cancelling Nitro without premiumType");
    let V = H === h.p9.TIER_0 || H === h.p9.TIER_1 || H === h.p9.TIER_2;
    null == W && (W = V ? v.R.WHAT_YOU_LOSE : v.R.CONFIRM);
    let [Z, q, z, Q] = (0, D.q)(W, F, k), K = (0, O.Q)(), J = (0, y.UV)(), {
      churnUserDiscountOffer: $,
      isFetchingChurnDiscountOffer: tt
    } = (0, y.WR)(!J || F.status === N.O0b.CANCELED && Z !== v.R.CONFIRM_DISCOUNT), te = (0, S._n)(F, h.Xh.PREMIUM_MONTH_TIER_2, $), [tn] = (0, p.ED)({
      subscriptionId: F.id,
      items: (0, E.Ue)(null != (i = null == (n = F.renewalMutations) ? true : n.items) ? i : F.items),
      renewal: true,
      analyticsLocations: k,
      analyticsLocation: c.Z.CANCEL_INVOICE_PREVIEW
    }), ta = null !== tn ? E.ZP.getIntervalForInvoice(tn) : null, tr = (0, E.aS)(h.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: F.currency,
      paymentSourceId: F.paymentSourceId
    }), tl = (0, m.T4)(tr.amount, tr.currency), ti = r.useMemo(() => (0, f.b)(), []);
    r.useEffect(() => {
      _.default.track(N.rMx.CANCELLATION_FLOW_STARTED, L({
        location_stack: k,
        load_id: ti
      }, (0, T.v)(F)))
    }, [k, F, ti]);
    let [ts, to] = r.useState(null), tu = r.useCallback(() => {
      switch (Z) {
        case v.R.CONFIRM:
          return (0, a.jsx)(C.G, {});
        case v.R.CONFIRM_DISCOUNT:
          return (0, a.jsx)(R.U, {});
        case v.R.DISCOUNT_APPLIED:
          return (0, a.jsx)(P.i, {});
        case v.R.PREVIEW:
          return (0, a.jsx)(w.w, {});
        case v.R.PAUSE_SELECT:
          return (0, a.jsx)(b.of, {});
        case v.R.PAUSE_CONFIRM:
          return (0, a.jsx)(b.Sz, {});
        case v.R.WHAT_YOU_LOSE:
        default:
          return (0, a.jsx)(A.n, {})
      }
    }, [Z]), tc = r.useCallback(async () => {
      if (_.default.track(N.rMx.CANCELLATION_FLOW_COMPLETED, L({
          location_stack: k,
          load_id: ti
        }, (0, T.v)(F))), M.includes(F.status)) await (0, u.EO)(F.id, k, U);
      else {
        var t, e;
        let n = null != (e = null == (t = F.renewalMutations) ? true : t.items) ? e : F.items,
          a = (0, E.Ue)(n);
        await (0, u.Mg)(F, {
          items: a
        }, {
          amount: 0,
          currency: F.currency
        }, (0, E.UX)(a, F.currency, F.paymentSourceId), k, U)
      }
    }, [F, k, U, ti]), td = async () => {
      if (null == $) throw Error("Churn user discount offer is null");
      F.status === N.O0b.CANCELED ? await (0, u.df)(F, $) : await o.tn.post({
        url: N.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: $.id
        },
        rejectWithError: true
      })
    };
    return (0, a.jsx)(d.Gt, {
      value: k,
      children: (0, a.jsxs)(I.D.Provider, {
        value: {
          setStep: q,
          premiumType: H,
          onClose: () => {
            j(), _.default.track(N.rMx.CANCELLATION_FLOW_STEP, L({
              from_step: v.O[Z],
              to_step: null,
              step_duration_ms: Date.now() - z,
              flow_duration_ms: Date.now() - Q,
              location_stack: k,
              load_id: ti
            }, (0, T.v)(F)))
          },
          transitionState: x,
          premiumSubscription: F,
          analyticsLocations: k,
          analyticsLocation: U,
          confettiCanvas: X,
          churnUserDiscountOffer: $,
          isFetchingChurnDiscountOffer: J && tt,
          fullPrice: tl,
          discountedPrice: te,
          planId: G,
          paymentsBlocked: K,
          renewalInvoice: tn,
          renewalInvoiceDetails: ta,
          handleCancellation: tc,
          applyOffer: td,
          pauseDuration: ts,
          setPauseDuration: to
        },
        children: [(0, a.jsx)(l.O_, {
          ref: Y,
          className: g.confettiCanvas,
          environment: B.current
        }), tu()]
      })
    })
  }