/** Chunk was on 26526 **/
/** chunk id: 48813, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  PremiumBrandRefreshSubscriptionCancellationModal: () => L
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk921254 = require("./921254.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk547943 = require("./547943.js"),
  Chunk544891 = require("./544891.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk211242 = require("./211242.js"),
  Chunk845220 = require("./845220.js"),
  Chunk588529 = require("./588529.js"),
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
  Chunk346533 = require("./346533.js");

function U(t) {
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
      analyticsLocations: j,
      onClose: F,
      transitionState: W,
      premiumSubscription: B
    } = t, {
      initialStep: G
    } = t, Y = r.useRef(new i.qA), [Z, H] = r.useState(null), V = null == (e = (0, p.Af)(B)) ? true : e.planId, X = null != V ? p.ZP.getPremiumType(V) : null;
    o()(null != X, "Should not be cancelling Nitro without premiumType");
    let q = X === x.PremiumTypes.TIER_0 || X === x.PremiumTypes.TIER_1 || X === x.PremiumTypes.TIER_2;
    null == G && (G = q ? R.R.WHAT_YOU_LOSE : R.R.CONFIRM);
    let [z, K, Q, J] = (0, h.q)(G, B, j), $ = (0, f.Q)(), tt = (0, S.UV)(), {
      churnUserDiscountOffer: te,
      isFetchingChurnDiscountOffer: tn
    } = (0, S.WR)(!tt || B.status === M.O0b.CANCELED && z !== R.R.CONFIRM_DISCOUNT), ta = (0, C._n)(B, x.Xh.PREMIUM_MONTH_TIER_2, te), [tr] = (0, y.ED)({
      subscriptionId: B.id,
      items: (0, p.Ue)(null != (l = null == (n = B.renewalMutations) ? true : n.items) ? l : B.items),
      renewal: true,
      analyticsLocations: j,
      analyticsLocation: d.Z.CANCEL_INVOICE_PREVIEW
    }), ti = null !== tr ? p.ZP.getIntervalForInvoice(tr) : null, tl = (0, p.aS)(x.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: B.currency,
      paymentSourceId: B.paymentSourceId
    }), to = (0, b.T4)(tl.amount, tl.currency), ts = r.useMemo(() => (0, O.b)(), []);
    r.useEffect(() => {
      E.default.track(M.rMx.CANCELLATION_FLOW_STARTED, U({
        location_stack: j,
        load_id: ts
      }, (0, N.v)(B)))
    }, [j, B, ts]);
    let [tc, tu] = r.useState(null), td = r.useCallback(() => {
      switch (z) {
        case R.R.CONFIRM:
          return (0, a.jsx)(v.G, {});
        case R.R.CONFIRM_DISCOUNT:
          return (0, a.jsx)(T.U, {});
        case R.R.DISCOUNT_APPLIED:
          return (0, a.jsx)(I.i, {});
        case R.R.PREVIEW:
          return (0, a.jsx)(D.w, {});
        case R.R.PAUSE_SELECT:
          return (0, a.jsx)(P.PremiumSubscriptionPauseModalSelect, {});
        case R.R.PAUSE_CONFIRM:
          return (0, a.jsx)(P.Sz, {});
        case R.R.WHAT_YOU_LOSE:
        default:
          return (0, a.jsx)(w.n, {})
      }
    }, [z]), tm = r.useCallback(async () => {
      if (E.default.track(M.rMx.CANCELLATION_FLOW_COMPLETED, U({
          location_stack: j,
          load_id: ts
        }, (0, N.v)(B))), k.includes(B.status)) await (0, u.EO)(B.id, j, L);
      else {
        var t, e;
        let n = null != (e = null == (t = B.renewalMutations) ? true : t.items) ? e : B.items,
          a = (0, p.Ue)(n);
        await (0, u.Mg)(B, {
          items: a
        }, {
          amount: 0,
          currency: B.currency
        }, (0, p.UX)(a, B.currency, B.paymentSourceId), j, L)
      }
      _.ZP.fireSurveyAction(s.Y.NITRO_UNSUBBED)
    }, [B, j, L, ts]), tf = async () => {
      if (null == te) throw Error("Churn user discount offer is null");
      B.status === M.O0b.CANCELED ? await (0, u.df)(B, te) : await c.tn.post({
        url: M.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: te.id
        },
        rejectWithError: true
      })
    };
    return (0, a.jsx)(m.Gt, {
      value: j,
      children: (0, a.jsxs)(A.CancellationContext.Provider, {
        value: {
          setStep: K,
          premiumType: X,
          onClose: () => {
            F(), E.default.track(M.rMx.CANCELLATION_FLOW_STEP, U({
              from_step: R.O[z],
              to_step: null,
              step_duration_ms: Date.now() - Q,
              flow_duration_ms: Date.now() - J,
              location_stack: j,
              load_id: ts
            }, (0, N.v)(B)))
          },
          transitionState: W,
          premiumSubscription: B,
          analyticsLocations: j,
          analyticsLocation: L,
          confettiCanvas: Z,
          churnUserDiscountOffer: te,
          isFetchingChurnDiscountOffer: tt && tn,
          fullPrice: to,
          discountedPrice: ta,
          planId: V,
          paymentsBlocked: $,
          renewalInvoice: tr,
          renewalInvoiceDetails: ti,
          handleCancellation: tm,
          applyOffer: tf,
          pauseDuration: tc,
          setPauseDuration: tu
        },
        children: [(0, a.jsx)(i.O_, {
          ref: H,
          className: g.confettiCanvas,
          environment: Y.current
        }), td()]
      })
    })
  }