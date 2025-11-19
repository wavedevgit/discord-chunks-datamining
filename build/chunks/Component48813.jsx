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
let k = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  L = t => {
    var e, n, l;
    let {
      analyticsLocation: L,
      analyticsLocations: U,
      onClose: j,
      transitionState: F,
      premiumSubscription: W
    } = t, {
      initialStep: B
    } = t, G = r.useRef(new i.qA), [Y, Z] = r.useState(null), H = null == (e = (0, E.Af)(W)) ? true : e.planId, V = null != H ? E.ZP.getPremiumType(H) : null;
    o()(null != V, "Should not be cancelling Nitro without premiumType");
    let X = V === g.PremiumTypes.TIER_0 || V === g.PremiumTypes.TIER_1 || V === g.PremiumTypes.TIER_2;
    null == B && (B = X ? R.R.WHAT_YOU_LOSE : R.R.CONFIRM);
    let [q, z, K, Q] = (0, D.q)(B, W, U), J = (0, _.Q)(), $ = (0, y.UV)(), {
      churnUserDiscountOffer: tt,
      isFetchingChurnDiscountOffer: te
    } = (0, y.WR)(!$ || W.status === x.O0b.CANCELED && q !== R.R.CONFIRM_DISCOUNT), tn = (0, S._n)(W, g.Xh.PREMIUM_MONTH_TIER_2, tt), [ta] = (0, b.ED)({
      subscriptionId: W.id,
      items: (0, E.Ue)(null != (l = null == (n = W.renewalMutations) ? true : n.items) ? l : W.items),
      renewal: true,
      analyticsLocations: U,
      analyticsLocation: c.Z.CANCEL_INVOICE_PREVIEW
    }), tr = null !== ta ? E.ZP.getIntervalForInvoice(ta) : null, ti = (0, E.aS)(g.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: W.currency,
      paymentSourceId: W.paymentSourceId
    }), tl = (0, p.T4)(ti.amount, ti.currency), to = r.useMemo(() => (0, m.b)(), []);
    r.useEffect(() => {
      f.default.track(x.rMx.CANCELLATION_FLOW_STARTED, M({
        location_stack: U,
        load_id: to
      }, (0, h.v)(W)))
    }, [U, W, to]);
    let [ts, tu] = r.useState(null), tc = r.useCallback(() => {
      switch (q) {
        case R.R.CONFIRM:
          return (0, a.jsx)(P.G, {});
        case R.R.CONFIRM_DISCOUNT:
          return (0, a.jsx)(v.U, {});
        case R.R.DISCOUNT_APPLIED:
          return (0, a.jsx)(T.i, {});
        case R.R.PREVIEW:
          return (0, a.jsx)(w.w, {});
        case R.R.PAUSE_SELECT:
          return (0, a.jsx)(C.PremiumSubscriptionPauseModalSelect, {});
        case R.R.PAUSE_CONFIRM:
          return (0, a.jsx)(C.Sz, {});
        case R.R.WHAT_YOU_LOSE:
        default:
          return (0, a.jsx)(A.n, {})
      }
    }, [q]), td = r.useCallback(async () => {
      if (f.default.track(x.rMx.CANCELLATION_FLOW_COMPLETED, M({
          location_stack: U,
          load_id: to
        }, (0, h.v)(W))), k.includes(W.status)) await (0, u.EO)(W.id, U, L);
      else {
        var t, e;
        let n = null != (e = null == (t = W.renewalMutations) ? true : t.items) ? e : W.items,
          a = (0, E.Ue)(n);
        await (0, u.Mg)(W, {
          items: a
        }, {
          amount: 0,
          currency: W.currency
        }, (0, E.UX)(a, W.currency, W.paymentSourceId), U, L)
      }
      O.ZP.triggerEmbeddedSurvey("nitro_unsub")
    }, [W, U, L, to]), t_ = async () => {
      if (null == tt) throw Error("Churn user discount offer is null");
      W.status === x.O0b.CANCELED ? await (0, u.df)(W, tt) : await s.tn.post({
        url: x.ANM.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: tt.id
        },
        rejectWithError: true
      })
    };
    return (0, a.jsx)(d.Gt, {
      value: U,
      children: (0, a.jsxs)(I.CancellationContext.Provider, {
        value: {
          setStep: z,
          premiumType: V,
          onClose: () => {
            j(), f.default.track(x.rMx.CANCELLATION_FLOW_STEP, M({
              from_step: R.O[q],
              to_step: null,
              step_duration_ms: Date.now() - K,
              flow_duration_ms: Date.now() - Q,
              location_stack: U,
              load_id: to
            }, (0, h.v)(W)))
          },
          transitionState: F,
          premiumSubscription: W,
          analyticsLocations: U,
          analyticsLocation: L,
          confettiCanvas: Y,
          churnUserDiscountOffer: tt,
          isFetchingChurnDiscountOffer: $ && te,
          fullPrice: tl,
          discountedPrice: tn,
          planId: H,
          paymentsBlocked: J,
          renewalInvoice: ta,
          renewalInvoiceDetails: tr,
          handleCancellation: td,
          applyOffer: t_,
          pauseDuration: ts,
          setPauseDuration: tu
        },
        children: [(0, a.jsx)(i.O_, {
          ref: Z,
          className: N.confettiCanvas,
          environment: G.current
        }), tc()]
      })
    })
  }