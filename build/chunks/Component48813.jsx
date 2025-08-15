/** Chunk was on 81709 **/
/** chunk id: 48813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => R
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
  Chunk320150 = require("./320150.js");
let S = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  R = e => {
    var t, n, o;
    let {
      analyticsLocation: R,
      analyticsLocations: w,
      onClose: D,
      transitionState: k,
      premiumSubscription: A,
      discountPrimary: M
    } = e, {
      initialStep: L
    } = e, U = r.useRef(new a.qA), [B, Z] = r.useState(null), z = null == (t = (0, _.Af)(A)) ? true : t.planId, F = null != z ? _.ZP.getPremiumType(z) : null;
    s()(null != F, "Should not be cancelling Nitro without premiumType");
    let Y = F === v.p9.TIER_0 || F === v.p9.TIER_1 || F === v.p9.TIER_2;
    null == L && (L = Y ? j.R.WHAT_YOU_LOSE : j.R.CONFIRM);
    let [H, W, X, q] = (0, N.q)(L, A, w), V = (0, m.Q)(), G = (0, x.UV)(), {
      churnUserDiscountOffer: K,
      isFetchingChurnDiscountOffer: J
    } = (0, x.WR)(!G || null != A.canceledAt && H !== j.R.CONFIRM_DISCOUNT), Q = (0, y._)(A, v.Xh.PREMIUM_MONTH_TIER_2, K), [$] = (0, b.ED)({
      subscriptionId: A.id,
      items: (0, _.Ue)(null != (o = null == (n = A.renewalMutations) ? true : n.items) ? o : A.items),
      renewal: true,
      analyticsLocations: w,
      analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW
    }), ee = null !== $ ? _.ZP.getIntervalForInvoice($) : null, et = (0, _.aS)(v.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: A.currency,
      paymentSourceId: A.paymentSourceId
    }), en = (0, f.T4)(et.amount, et.currency), ei = r.useCallback(() => {
      switch (H) {
        case j.R.CONFIRM:
          return (0, i.jsx)(h.G, {});
        case j.R.CONFIRM_DISCOUNT:
          return (0, i.jsx)(g.U, {});
        case j.R.DISCOUNT_APPLIED:
          return (0, i.jsx)(C.i, {});
        case j.R.PREVIEW:
          return (0, i.jsx)(O.w, {});
        case j.R.WHAT_YOU_LOSE:
        default:
          return (0, i.jsx)(P.n, {})
      }
    }, [H]), er = r.useCallback(async () => {
      if (S.includes(A.status)) await (0, c.EO)(A.id, w, R);
      else {
        var e, t;
        let n = null != (t = null == (e = A.renewalMutations) ? true : e.items) ? t : A.items,
          i = (0, _.Ue)(n);
        await (0, c.Mg)(A, {
          items: i
        }, {
          amount: 0,
          currency: A.currency
        }, (0, _.UX)(i, A.currency, A.paymentSourceId), w, R)
      }
    }, [A, w, R]), ea = async () => {
      if (null == K) throw Error("Churn user discount offer is null");
      null != A.canceledAt ? await (0, c.df)(A, K) : await l.tn.post({
        url: I.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: K.id
        },
        rejectWithError: true
      })
    };
    return (0, i.jsx)(d.Gt, {
      value: w,
      children: (0, i.jsxs)(E.D.Provider, {
        value: {
          setStep: W,
          premiumType: F,
          onClose: () => {
            D(), p.default.track(I.rMx.CANCELLATION_FLOW_STEP, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                  var i;
                  i = n[t], t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = i
                })
              }
              return e
            }({
              from_step: j.O[H],
              to_step: null,
              step_duration_ms: Date.now() - X,
              flow_duration_ms: Date.now() - q,
              location_stack: w
            }, (0, N.b)(A)))
          },
          transitionState: k,
          premiumSubscription: A,
          analyticsLocations: w,
          analyticsLocation: R,
          confettiCanvas: B,
          discountPrimary: M,
          churnUserDiscountOffer: K,
          isFetchingChurnDiscountOffer: G && J,
          fullPrice: en,
          discountedPrice: Q,
          planId: z,
          paymentsBlocked: V,
          renewalInvoice: $,
          renewalInvoiceDetails: ee,
          handleCancellation: er,
          applyOffer: ea
        },
        children: [(0, i.jsx)(a.O_, {
          ref: Z,
          className: T.confettiCanvas,
          environment: U.current
        }), ei()]
      })
    })
  }