/** Chunk was on 81709 **/
/** chunk id: 48813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => S
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
let R = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  S = e => {
    var t, n, s;
    let {
      analyticsLocation: S,
      analyticsLocations: D,
      onClose: w,
      transitionState: k,
      premiumSubscription: A
    } = e, {
      initialStep: L
    } = e, M = r.useRef(new a.qA), [U, B] = r.useState(null), Z = null == (t = (0, _.Af)(A)) ? true : t.planId, z = null != Z ? _.ZP.getPremiumType(Z) : null;
    o()(null != z, "Should not be cancelling Nitro without premiumType");
    let F = z === O.p9.TIER_0 || z === O.p9.TIER_1 || z === O.p9.TIER_2;
    null == L && (L = F ? E.R.WHAT_YOU_LOSE : E.R.CONFIRM);
    let [Y, H, W, X] = (0, v.q)(L, A, D), q = (0, m.Q)(), V = (0, b.UV)(), {
      churnUserDiscountOffer: G,
      isFetchingChurnDiscountOffer: K
    } = (0, b.WR)(!V || A.status === P.O0b.CANCELED && Y !== E.R.CONFIRM_DISCOUNT), J = (0, y._)(A, O.Xh.PREMIUM_MONTH_TIER_2, G), [Q] = (0, x.ED)({
      subscriptionId: A.id,
      items: (0, _.Ue)(null != (s = null == (n = A.renewalMutations) ? true : n.items) ? s : A.items),
      renewal: true,
      analyticsLocations: D,
      analyticsLocation: u.Z.CANCEL_INVOICE_PREVIEW
    }), $ = null !== Q ? _.ZP.getIntervalForInvoice(Q) : null, ee = (0, _.aS)(O.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: A.currency,
      paymentSourceId: A.paymentSourceId
    }), et = (0, f.T4)(ee.amount, ee.currency), en = r.useCallback(() => {
      switch (Y) {
        case E.R.CONFIRM:
          return (0, i.jsx)(h.G, {});
        case E.R.CONFIRM_DISCOUNT:
          return (0, i.jsx)(C.U, {});
        case E.R.DISCOUNT_APPLIED:
          return (0, i.jsx)(g.i, {});
        case E.R.PREVIEW:
          return (0, i.jsx)(N.w, {});
        case E.R.WHAT_YOU_LOSE:
        default:
          return (0, i.jsx)(I.n, {})
      }
    }, [Y]), ei = r.useCallback(async () => {
      if (R.includes(A.status)) await (0, c.EO)(A.id, D, S);
      else {
        var e, t;
        let n = null != (t = null == (e = A.renewalMutations) ? true : e.items) ? t : A.items,
          i = (0, _.Ue)(n);
        await (0, c.Mg)(A, {
          items: i
        }, {
          amount: 0,
          currency: A.currency
        }, (0, _.UX)(i, A.currency, A.paymentSourceId), D, S)
      }
    }, [A, D, S]), er = async () => {
      if (null == G) throw Error("Churn user discount offer is null");
      A.status === P.O0b.CANCELED ? await (0, c.df)(A, G) : await l.tn.post({
        url: P.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: G.id
        },
        rejectWithError: true
      })
    };
    return (0, i.jsx)(d.Gt, {
      value: D,
      children: (0, i.jsxs)(j.D.Provider, {
        value: {
          setStep: H,
          premiumType: z,
          onClose: () => {
            w(), p.default.track(P.rMx.CANCELLATION_FLOW_STEP, function(e) {
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
              from_step: E.O[Y],
              to_step: null,
              step_duration_ms: Date.now() - W,
              flow_duration_ms: Date.now() - X,
              location_stack: D
            }, (0, v.b)(A)))
          },
          transitionState: k,
          premiumSubscription: A,
          analyticsLocations: D,
          analyticsLocation: S,
          confettiCanvas: U,
          churnUserDiscountOffer: G,
          isFetchingChurnDiscountOffer: V && K,
          fullPrice: et,
          discountedPrice: J,
          planId: Z,
          paymentsBlocked: q,
          renewalInvoice: Q,
          renewalInvoiceDetails: $,
          handleCancellation: ei,
          applyOffer: er
        },
        children: [(0, i.jsx)(a.O_, {
          ref: B,
          className: T.confettiCanvas,
          environment: M.current
        }), en()]
      })
    })
  }