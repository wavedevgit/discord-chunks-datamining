/** Chunk was on 26526 **/
/** chunk id: 48813, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  PremiumBrandRefreshSubscriptionCancellationModal: () => L
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
  Chunk320150 = require("./320150.js");

function x(t) {
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
let k = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  L = t => {
    var e, n, l;
    let {
      analyticsLocation: L,
      analyticsLocations: M,
      onClose: U,
      transitionState: j,
      premiumSubscription: F
    } = t, {
      initialStep: W
    } = t, B = r.useRef(new i.qA), [X, Y] = r.useState(null), G = null == (e = (0, E.Af)(F)) ? true : e.planId, H = null != G ? E.ZP.getPremiumType(G) : null;
    o()(null != H, "Should not be cancelling Nitro without premiumType");
    let V = H === h.p9.TIER_0 || H === h.p9.TIER_1 || H === h.p9.TIER_2;
    null == W && (W = V ? P.R.WHAT_YOU_LOSE : P.R.CONFIRM);
    let [Z, q, z, Q] = (0, A.q)(W, F, M), K = (0, _.Q)(), J = (0, y.UV)(), {
      churnUserDiscountOffer: $,
      isFetchingChurnDiscountOffer: tt
    } = (0, y.WR)(!J || F.status === N.O0b.CANCELED && Z !== P.R.CONFIRM_DISCOUNT), te = (0, b._n)(F, h.Xh.PREMIUM_MONTH_TIER_2, $), [tn] = (0, p.ED)({
      subscriptionId: F.id,
      items: (0, E.Ue)(null != (l = null == (n = F.renewalMutations) ? true : n.items) ? l : F.items),
      renewal: true,
      analyticsLocations: M,
      analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW
    }), ta = null !== tn ? E.ZP.getIntervalForInvoice(tn) : null, tr = (0, E.aS)(h.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: F.currency,
      paymentSourceId: F.paymentSourceId
    }), ti = (0, m.T4)(tr.amount, tr.currency), tl = r.useMemo(() => (0, f.b)(), []);
    r.useEffect(() => {
      O.default.track(N.rMx.CANCELLATION_FLOW_STARTED, x({
        location_stack: M,
        load_id: tl
      }, (0, D.v)(F)))
    }, [M, F, tl]);
    let [to, ts] = r.useState(null), tc = r.useCallback(() => {
      switch (Z) {
        case P.R.CONFIRM:
          return (0, a.jsx)(S.G, {});
        case P.R.CONFIRM_DISCOUNT:
          return (0, a.jsx)(v.U, {});
        case P.R.DISCOUNT_APPLIED:
          return (0, a.jsx)(R.i, {});
        case P.R.PREVIEW:
          return (0, a.jsx)(T.w, {});
        case P.R.PAUSE_SELECT:
          return (0, a.jsx)(C.of, {});
        case P.R.PAUSE_CONFIRM:
          return (0, a.jsx)(C.Sz, {});
        case P.R.WHAT_YOU_LOSE:
        default:
          return (0, a.jsx)(w.n, {})
      }
    }, [Z]), tu = r.useCallback(async () => {
      if (O.default.track(N.rMx.CANCELLATION_FLOW_COMPLETED, x({
          location_stack: M,
          load_id: tl
        }, (0, D.v)(F))), k.includes(F.status)) await (0, c.EO)(F.id, M, L);
      else {
        var t, e;
        let n = null != (e = null == (t = F.renewalMutations) ? true : t.items) ? e : F.items,
          a = (0, E.Ue)(n);
        await (0, c.Mg)(F, {
          items: a
        }, {
          amount: 0,
          currency: F.currency
        }, (0, E.UX)(a, F.currency, F.paymentSourceId), M, L)
      }
    }, [F, M, L, tl]), td = async () => {
      if (null == $) throw Error("Churn user discount offer is null");
      F.status === N.O0b.CANCELED ? await (0, c.df)(F, $) : await s.tn.post({
        url: N.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: $.id
        },
        rejectWithError: true
      })
    };
    return (0, a.jsx)(d.Gt, {
      value: M,
      children: (0, a.jsxs)(I.D.Provider, {
        value: {
          setStep: q,
          premiumType: H,
          onClose: () => {
            U(), O.default.track(N.rMx.CANCELLATION_FLOW_STEP, x({
              from_step: P.O[Z],
              to_step: null,
              step_duration_ms: Date.now() - z,
              flow_duration_ms: Date.now() - Q,
              location_stack: M,
              load_id: tl
            }, (0, D.v)(F)))
          },
          transitionState: j,
          premiumSubscription: F,
          analyticsLocations: M,
          analyticsLocation: L,
          confettiCanvas: X,
          churnUserDiscountOffer: $,
          isFetchingChurnDiscountOffer: J && tt,
          fullPrice: ti,
          discountedPrice: te,
          planId: G,
          paymentsBlocked: K,
          renewalInvoice: tn,
          renewalInvoiceDetails: ta,
          handleCancellation: tu,
          applyOffer: td,
          pauseDuration: to,
          setPauseDuration: ts
        },
        children: [(0, a.jsx)(i.O_, {
          ref: Y,
          className: g.confettiCanvas,
          environment: B.current
        }), tc()]
      })
    })
  }