/** Chunk was on 26526 **/
/** chunk id: 48813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PremiumBrandRefreshSubscriptionCancellationModal: () => j
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk211242 = require("./211242.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk374649 = require("./374649.js"),
  Chunk140465 = require("./140465.js"),
  Chunk230916 = require("./230916.js"),
  Chunk562218 = require("./562218.jsx"),
  Chunk284829 = require("./284829.jsx"),
  Chunk586920 = require("./586920.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk881493 = require("./881493.jsx"),
  Chunk407965 = require("./407965.jsx"),
  Chunk501090 = require("./501090.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk853141 = require("./853141.js");
let T = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  j = e => {
    var t, n, o;
    let {
      analyticsLocation: j,
      analyticsLocations: L,
      onClose: M,
      transitionState: g,
      premiumSubscription: A
    } = e, {
      initialStep: U
    } = e, k = a.useRef(new u.qA), [x, F] = a.useState(null), W = null == (t = (0, O.Af)(A)) ? true : t.planId, G = null != W ? O.ZP.getPremiumType(W) : null;
    i()(null != G, "Should not be cancelling Nitro without premiumType");
    let H = G === h.p9.TIER_0 || G === h.p9.TIER_1 || G === h.p9.TIER_2;
    null == U && (U = H ? C.R.WHAT_YOU_LOSE : C.R.CONFIRM);
    let [V, q, X, Y] = (0, S.q)(U, A, L), Z = (0, p.Q)(), B = (0, y.UV)(), {
      churnUserDiscountOffer: Q,
      isFetchingChurnDiscountOffer: z
    } = (0, y.WR)(!B || A.status === D.O0b.CANCELED && V !== C.R.CONFIRM_DISCOUNT), J = (0, E._n)(A, h.Xh.PREMIUM_MONTH_TIER_2, Q), [K] = (0, b.ED)({
      subscriptionId: A.id,
      items: (0, O.Ue)(null != (o = null == (n = A.renewalMutations) ? true : n.items) ? o : A.items),
      renewal: true,
      analyticsLocations: L,
      analyticsLocation: l.Z.CANCEL_INVOICE_PREVIEW
    }), $ = null !== K ? O.ZP.getIntervalForInvoice(K) : null, ee = (0, O.aS)(h.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: A.currency,
      paymentSourceId: A.paymentSourceId
    }), et = (0, d.T4)(ee.amount, ee.currency), en = a.useCallback(() => {
      switch (V) {
        case C.R.CONFIRM:
          return (0, r.jsx)(m.G, {});
        case C.R.CONFIRM_DISCOUNT:
          return (0, r.jsx)(w.U, {});
        case C.R.DISCOUNT_APPLIED:
          return (0, r.jsx)(I.i, {});
        case C.R.PREVIEW:
          return (0, r.jsx)(v.w, {});
        case C.R.WHAT_YOU_LOSE:
        default:
          return (0, r.jsx)(P.n, {})
      }
    }, [V]), er = a.useCallback(async () => {
      if (T.includes(A.status)) await (0, c.EO)(A.id, L, j);
      else {
        var e, t;
        let n = null != (t = null == (e = A.renewalMutations) ? true : e.items) ? t : A.items,
          r = (0, O.Ue)(n);
        await (0, c.Mg)(A, {
          items: r
        }, {
          amount: 0,
          currency: A.currency
        }, (0, O.UX)(r, A.currency, A.paymentSourceId), L, j)
      }
    }, [A, L, j]), ea = async () => {
      if (null == Q) throw Error("Churn user discount offer is null");
      A.status === D.O0b.CANCELED ? await (0, c.df)(A, Q) : await s.tn.post({
        url: D.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: Q.id
        },
        rejectWithError: true
      })
    };
    return (0, r.jsx)(_.Gt, {
      value: L,
      children: (0, r.jsxs)(R.D.Provider, {
        value: {
          setStep: q,
          premiumType: G,
          onClose: () => {
            M(), f.default.track(D.rMx.CANCELLATION_FLOW_STEP, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({
              from_step: C.O[V],
              to_step: null,
              step_duration_ms: Date.now() - X,
              flow_duration_ms: Date.now() - Y,
              location_stack: L
            }, (0, S.b)(A)))
          },
          transitionState: g,
          premiumSubscription: A,
          analyticsLocations: L,
          analyticsLocation: j,
          confettiCanvas: x,
          churnUserDiscountOffer: Q,
          isFetchingChurnDiscountOffer: B && z,
          fullPrice: et,
          discountedPrice: J,
          planId: W,
          paymentsBlocked: Z,
          renewalInvoice: K,
          renewalInvoiceDetails: $,
          handleCancellation: er,
          applyOffer: ea
        },
        children: [(0, r.jsx)(u.O_, {
          ref: F,
          className: N.confettiCanvas,
          environment: k.current
        }), en()]
      })
    })
  }