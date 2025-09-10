/** Chunk was on 26526 **/
/** chunk id: 48813, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  PremiumBrandRefreshSubscriptionCancellationModal: () => A
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
  Chunk845220 = require("./845220.js"),
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

function h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}
let M = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  A = t => {
    var e, n, u;
    let {
      analyticsLocation: A,
      analyticsLocations: j,
      onClose: k,
      transitionState: g,
      premiumSubscription: U
    } = t, {
      initialStep: x
    } = t, F = a.useRef(new o.qA), [W, G] = a.useState(null), H = null == (e = (0, p.Af)(U)) ? true : e.planId, V = null != H ? p.ZP.getPremiumType(H) : null;
    i()(null != V, "Should not be cancelling Nitro without premiumType");
    let q = V === N.p9.TIER_0 || V === N.p9.TIER_1 || V === N.p9.TIER_2;
    null == x && (x = q ? R.R.WHAT_YOU_LOSE : R.R.CONFIRM);
    let [X, Y, Z, B] = (0, L.q)(x, U, j), Q = (0, d.Q)(), z = (0, y.UV)(), {
      churnUserDiscountOffer: J,
      isFetchingChurnDiscountOffer: K
    } = (0, y.WR)(!z || U.status === S.O0b.CANCELED && X !== R.R.CONFIRM_DISCOUNT), $ = (0, m._n)(U, N.Xh.PREMIUM_MONTH_TIER_2, J), [tt] = (0, E.ED)({
      subscriptionId: U.id,
      items: (0, p.Ue)(null != (u = null == (n = U.renewalMutations) ? true : n.items) ? u : U.items),
      renewal: true,
      analyticsLocations: j,
      analyticsLocation: c.Z.CANCEL_INVOICE_PREVIEW
    }), te = null !== tt ? p.ZP.getIntervalForInvoice(tt) : null, tn = (0, p.aS)(N.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: U.currency,
      paymentSourceId: U.paymentSourceId
    }), tr = (0, b.T4)(tn.amount, tn.currency), ta = a.useMemo(() => (0, f.b)(), []);
    a.useEffect(() => {
      O.default.track(S.rMx.CANCELLATION_FLOW_STARTED, h({
        location_stack: j,
        load_id: ta
      }, (0, L.b)(U)))
    }, [j, U, ta]);
    let to = a.useCallback(() => {
        switch (X) {
          case R.R.CONFIRM:
            return (0, r.jsx)(C.G, {});
          case R.R.CONFIRM_DISCOUNT:
            return (0, r.jsx)(w.U, {});
          case R.R.DISCOUNT_APPLIED:
            return (0, r.jsx)(I.i, {});
          case R.R.PREVIEW:
            return (0, r.jsx)(P.w, {});
          case R.R.WHAT_YOU_LOSE:
          default:
            return (0, r.jsx)(T.n, {})
        }
      }, [X]),
      tu = a.useCallback(async () => {
        if (O.default.track(S.rMx.CANCELLATION_FLOW_COMPLETED, h({
            location_stack: j,
            load_id: ta
          }, (0, L.b)(U))), M.includes(U.status)) await (0, s.EO)(U.id, j, A);
        else {
          var t, e;
          let n = null != (e = null == (t = U.renewalMutations) ? true : t.items) ? e : U.items,
            r = (0, p.Ue)(n);
          await (0, s.Mg)(U, {
            items: r
          }, {
            amount: 0,
            currency: U.currency
          }, (0, p.UX)(r, U.currency, U.paymentSourceId), j, A)
        }
      }, [U, j, A, ta]),
      ti = async () => {
        if (null == J) throw Error("Churn user discount offer is null");
        U.status === S.O0b.CANCELED ? await (0, s.df)(U, J) : await l.tn.post({
          url: S.ANM.USER_OFFER_REDEEM,
          body: {
            user_discount_offer_id: J.id
          },
          rejectWithError: true
        })
      };
    return (0, r.jsx)(_.Gt, {
      value: j,
      children: (0, r.jsxs)(v.D.Provider, {
        value: {
          setStep: Y,
          premiumType: V,
          onClose: () => {
            k(), O.default.track(S.rMx.CANCELLATION_FLOW_STEP, h({
              from_step: R.O[X],
              to_step: null,
              step_duration_ms: Date.now() - Z,
              flow_duration_ms: Date.now() - B,
              location_stack: j,
              load_id: ta
            }, (0, L.b)(U)))
          },
          transitionState: g,
          premiumSubscription: U,
          analyticsLocations: j,
          analyticsLocation: A,
          confettiCanvas: W,
          churnUserDiscountOffer: J,
          isFetchingChurnDiscountOffer: z && K,
          fullPrice: tr,
          discountedPrice: $,
          planId: H,
          paymentsBlocked: Q,
          renewalInvoice: tt,
          renewalInvoiceDetails: te,
          handleCancellation: tu,
          applyOffer: ti
        },
        children: [(0, r.jsx)(o.O_, {
          ref: G,
          className: D.confettiCanvas,
          environment: F.current
        }), to()]
      })
    })
  }