/** Chunk was on 26526 **/
/** chunk id: 48813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PremiumBrandRefreshSubscriptionCancellationModal: () => j
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
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
  Chunk323321 = require("./323321.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk320150 = require("./320150.js");

function M(e) {
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
}
let A = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED, Chunk981631.O0b.BILLING_RETRY],
  j = e => {
    var t, n, l;
    let {
      analyticsLocation: j,
      analyticsLocations: k,
      onClose: g,
      transitionState: U,
      premiumSubscription: x
    } = e, {
      initialStep: F
    } = e, W = a.useRef(new o.qA), [H, V] = a.useState(null), q = null == (t = (0, E.Af)(x)) ? true : t.planId, G = null != q ? E.ZP.getPremiumType(q) : null;
    u()(null != G, "Should not be cancelling Nitro without premiumType");
    let X = G === S.p9.TIER_0 || G === S.p9.TIER_1 || G === S.p9.TIER_2;
    null == F && (F = X ? R.R.WHAT_YOU_LOSE : R.R.CONFIRM);
    let [Y, Z, B, Q] = (0, N.q)(F, x, k), z = (0, f.Q)(), J = (0, C.UV)(), {
      churnUserDiscountOffer: K,
      isFetchingChurnDiscountOffer: $
    } = (0, C.WR)(!J || x.status === D.O0b.CANCELED && Y !== R.R.CONFIRM_DISCOUNT), ee = (0, m._n)(x, S.Xh.PREMIUM_MONTH_TIER_2, K), [et] = (0, b.ED)({
      subscriptionId: x.id,
      items: (0, E.Ue)(null != (l = null == (n = x.renewalMutations) ? true : n.items) ? l : x.items),
      renewal: true,
      analyticsLocations: k,
      analyticsLocation: s.Z.CANCEL_INVOICE_PREVIEW
    }), en = null !== et ? E.ZP.getIntervalForInvoice(et) : null, er = (0, E.aS)(S.Xh.PREMIUM_MONTH_TIER_2, false, false, {
      currency: x.currency,
      paymentSourceId: x.paymentSourceId
    }), ea = (0, p.T4)(er.amount, er.currency), eo = a.useMemo(() => (0, O.b)(), []);
    a.useEffect(() => {
      d.default.track(D.rMx.CANCELLATION_FLOW_STARTED, M({
        location_stack: k,
        load_id: eo
      }, (0, P.v)(x)))
    }, [k, x, eo]);
    let el = a.useCallback(() => {
        switch (Y) {
          case R.R.CONFIRM:
            return (0, r.jsx)(y.G, {});
          case R.R.CONFIRM_DISCOUNT:
            return (0, r.jsx)(I.U, {});
          case R.R.DISCOUNT_APPLIED:
            return (0, r.jsx)(w.i, {});
          case R.R.PREVIEW:
            return (0, r.jsx)(T.w, {});
          case R.R.WHAT_YOU_LOSE:
          default:
            return (0, r.jsx)(L.n, {})
        }
      }, [Y]),
      eu = a.useCallback(async () => {
        if (d.default.track(D.rMx.CANCELLATION_FLOW_COMPLETED, M({
            location_stack: k,
            load_id: eo
          }, (0, P.v)(x))), A.includes(x.status)) await (0, i.EO)(x.id, k, j);
        else {
          var e, t;
          let n = null != (t = null == (e = x.renewalMutations) ? true : e.items) ? t : x.items,
            r = (0, E.Ue)(n);
          await (0, i.Mg)(x, {
            items: r
          }, {
            amount: 0,
            currency: x.currency
          }, (0, E.UX)(r, x.currency, x.paymentSourceId), k, j)
        }
      }, [x, k, j, eo]),
      ec = async () => {
        if (null == K) throw Error("Churn user discount offer is null");
        x.status === D.O0b.CANCELED ? await (0, i.df)(x, K) : await c.tn.post({
          url: D.ANM.USER_OFFER_REDEEM,
          body: {
            user_discount_offer_id: K.id
          },
          rejectWithError: true
        })
      };
    return (0, r.jsx)(_.Gt, {
      value: k,
      children: (0, r.jsxs)(v.D.Provider, {
        value: {
          setStep: Z,
          premiumType: G,
          onClose: () => {
            g(), d.default.track(D.rMx.CANCELLATION_FLOW_STEP, M({
              from_step: R.O[Y],
              to_step: null,
              step_duration_ms: Date.now() - B,
              flow_duration_ms: Date.now() - Q,
              location_stack: k,
              load_id: eo
            }, (0, P.v)(x)))
          },
          transitionState: U,
          premiumSubscription: x,
          analyticsLocations: k,
          analyticsLocation: j,
          confettiCanvas: H,
          churnUserDiscountOffer: K,
          isFetchingChurnDiscountOffer: J && $,
          fullPrice: ea,
          discountedPrice: ee,
          planId: q,
          paymentsBlocked: z,
          renewalInvoice: et,
          renewalInvoiceDetails: en,
          handleCancellation: eu,
          applyOffer: ec
        },
        children: [(0, r.jsx)(o.O_, {
          ref: V,
          className: h.confettiCanvas,
          environment: W.current
        }), el()]
      })
    })
  }