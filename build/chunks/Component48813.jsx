/** Chunk was on 81709 **/
/** chunk id: 48813, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  I: () => S
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
let v = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  S = t => {
    var e, n, s;
    let {
      analyticsLocation: S,
      analyticsLocations: w,
      onClose: D,
      transitionState: k,
      premiumSubscription: A
    } = t, {
      initialStep: M
    } = t, L = a.useRef(new r.qA), [U, Z] = a.useState(null), z = null == (e = (0, x.Af)(A)) ? true : e.planId, F = null != z ? x.ZP.getPremiumType(z) : null;
    l()(null != F, "Should not be cancelling Nitro without premiumType");
    let B = F === I.p9.TIER_0 || F === I.p9.TIER_1 || F === I.p9.TIER_2;
    null == M && (M = B ? C.R.WHAT_YOU_LOSE : C.R.CONFIRM);
    let [W, Y, H, X] = (0, P.q)(M, A, w), q = (0, m.Q)(), V = (0, y.UV)(), {
      churnUserDiscountOffer: G,
      isFetchingChurnDiscountOffer: K
    } = (0, y.WR)(!V || A.status === T.O0b.CANCELED && W !== C.R.CONFIRM_DISCOUNT), J = (0, h._n)(A, I.Xh.PREMIUM_MONTH_TIER_2, G), [Q] = (0, _.ED)({
      subscriptionId: A.id,
      items: (0, x.Ue)(null != (s = null == (n = A.renewalMutations) ? true : n.items) ? s : A.items),
      renewal: true,
      analyticsLocations: w,
      analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW
    }), $ = null !== Q ? x.ZP.getIntervalForInvoice(Q) : null, tt = (0, x.aS)(I.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: A.currency,
      paymentSourceId: A.paymentSourceId
    }), te = (0, f.T4)(tt.amount, tt.currency), tn = a.useCallback(() => {
      switch (W) {
        case C.R.CONFIRM:
          return (0, i.jsx)(j.G, {});
        case C.R.CONFIRM_DISCOUNT:
          return (0, i.jsx)(E.U, {});
        case C.R.DISCOUNT_APPLIED:
          return (0, i.jsx)(g.i, {});
        case C.R.PREVIEW:
          return (0, i.jsx)(N.w, {});
        case C.R.WHAT_YOU_LOSE:
        default:
          return (0, i.jsx)(O.n, {})
      }
    }, [W]), ti = a.useCallback(async () => {
      if (v.includes(A.status)) await (0, c.EO)(A.id, w, S);
      else {
        var t, e;
        let n = null != (e = null == (t = A.renewalMutations) ? true : t.items) ? e : A.items,
          i = (0, x.Ue)(n);
        await (0, c.Mg)(A, {
          items: i
        }, {
          amount: 0,
          currency: A.currency
        }, (0, x.UX)(i, A.currency, A.paymentSourceId), w, S)
      }
    }, [A, w, S]), ta = async () => {
      if (null == G) throw Error("Churn user discount offer is null");
      A.status === T.O0b.CANCELED ? await (0, c.df)(A, G) : await o.tn.post({
        url: T.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: G.id
        },
        rejectWithError: true
      })
    };
    return (0, i.jsx)(d.Gt, {
      value: w,
      children: (0, i.jsxs)(b.D.Provider, {
        value: {
          setStep: Y,
          premiumType: F,
          onClose: () => {
            D(), p.default.track(T.rMx.CANCELLATION_FLOW_STEP, function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), i.forEach(function(e) {
                  var i;
                  i = n[e], e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : t[e] = i
                })
              }
              return t
            }({
              from_step: C.O[W],
              to_step: null,
              step_duration_ms: Date.now() - H,
              flow_duration_ms: Date.now() - X,
              location_stack: w
            }, (0, P.b)(A)))
          },
          transitionState: k,
          premiumSubscription: A,
          analyticsLocations: w,
          analyticsLocation: S,
          confettiCanvas: U,
          churnUserDiscountOffer: G,
          isFetchingChurnDiscountOffer: V && K,
          fullPrice: te,
          discountedPrice: J,
          planId: z,
          paymentsBlocked: q,
          renewalInvoice: Q,
          renewalInvoiceDetails: $,
          handleCancellation: ti,
          applyOffer: ta
        },
        children: [(0, i.jsx)(r.O_, {
          ref: Z,
          className: R.confettiCanvas,
          environment: L.current
        }), tn()]
      })
    })
  }