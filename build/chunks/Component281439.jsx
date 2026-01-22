/** Chunk was on 72820 **/
/** chunk id: 281439, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  PremiumBrandRefreshSubscriptionCancellationModal: () => M
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk517846 = require("./517846.js"),
  Chunk562465 = require("./562465.js"),
  Chunk384904 = require("./384904.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk86379 = require("./86379.js"),
  Chunk925847 = require("./925847.js"),
  Chunk236698 = require("./236698.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk543767 = require("./543767.js"),
  Chunk526292 = require("./526292.js"),
  Chunk511484 = require("./511484.js"),
  Chunk318998 = require("./318998.jsx"),
  Chunk95337 = require("./95337.jsx"),
  Chunk412314 = require("./412314.jsx"),
  Chunk456459 = require("./456459.jsx"),
  Chunk473702 = require("./473702.js"),
  Chunk916974 = require("./916974.js"),
  Chunk347378 = require("./347378.jsx"),
  Chunk606423 = require("./606423.jsx"),
  Chunk64588 = require("./64588.js"),
  Chunk501957 = require("./501957.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk247027 = require("./247027.js");

function k(t) {
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
let x = [Chunk652215.Dmq.PAST_DUE, Chunk652215.Dmq.PAUSED, Chunk652215.Dmq.BILLING_RETRY],
  M = t => {
    var e, n, l;
    let {
      analyticsLocation: M,
      analyticsLocations: R,
      onClose: F,
      transitionState: W,
      premiumSubscription: q
    } = t, {
      initialStep: H
    } = t, V = r.useRef(new i.OH), [B, K] = r.useState(null), Y = null == (n = (0, p.EL)(q)) ? true : n.planId, G = null != Y ? p.Ay.getPremiumType(Y) : null;
    s()(null != G, "Should not be cancelling Nitro without premiumType");
    let Q = G === L.PremiumTypes.TIER_0 || G === L.PremiumTypes.TIER_1 || G === L.PremiumTypes.TIER_2;
    null == H && (H = Q ? w.g.WHAT_YOU_LOSE : w.g.CONFIRM);
    let [X, Z, $, z] = (0, h.U)(H, q, R), J = (0, f.H)(), tt = (0, O.f9)(), {
      churnUserDiscountOffer: te,
      isFetchingChurnDiscountOffer: tn
    } = (0, O.g5)(!tt || q.status === j.Dmq.CANCELED && X !== w.g.CONFIRM_DISCOUNT), ta = (0, D.tQ)(q, L.gD.PREMIUM_MONTH_TIER_2, te), [tr] = (0, S.Kq)({
      subscriptionId: q.id,
      items: (0, p.ee)(null != (e = null == (l = q.renewalMutations) ? true : l.items) ? e : q.items),
      renewal: true,
      analyticsLocations: R,
      analyticsLocation: d.A.CANCEL_INVOICE_PREVIEW
    }), ti = null !== tr ? p.Ay.getIntervalForInvoice(tr) : null, tl = (0, p.y8)(L.gD.PREMIUM_MONTH_TIER_2, false, false, {
      currency: q.currency,
      paymentSourceId: q.paymentSourceId
    }), ts = (0, C.$g)(tl.amount, tl.currency), tu = r.useMemo(() => (0, _.A)(), []);
    r.useEffect(() => {
      y.default.track(j.HAw.CANCELLATION_FLOW_STARTED, k({
        location_stack: R,
        load_id: tu
      }, (0, N.j)(q)))
    }, [R, q, tu]);
    let [to, tc] = r.useState(null), td = r.useCallback(() => {
      switch (X) {
        case w.g.CONFIRM:
          return (0, a.jsx)(P.r, {});
        case w.g.CONFIRM_DISCOUNT:
          return (0, a.jsx)(b.M, {});
        case w.g.DISCOUNT_APPLIED:
          return (0, a.jsx)(A.V, {});
        case w.g.PREVIEW:
          return (0, a.jsx)(T.E, {});
        case w.g.PAUSE_SELECT:
          return (0, a.jsx)(g.PremiumSubscriptionPauseModalSelect, {});
        case w.g.PAUSE_CONFIRM:
          return (0, a.jsx)(g.cN, {});
        case w.g.WHAT_YOU_LOSE:
        default:
          return (0, a.jsx)(v.Z, {})
      }
    }, [X]), tm = r.useCallback(async () => {
      if (y.default.track(j.HAw.CANCELLATION_FLOW_COMPLETED, k({
          location_stack: R,
          load_id: tu
        }, (0, N.j)(q))), x.includes(q.status)) await (0, c.M2)(q.id, R, M);
      else {
        var t, e;
        let n = null != (t = null == (e = q.renewalMutations) ? true : e.items) ? t : q.items,
          a = (0, p.ee)(n);
        await (0, c.nV)(q, {
          items: a
        }, {
          amount: 0,
          currency: q.currency
        }, (0, p.UC)(a, q.currency, q.paymentSourceId), R, M)
      }
      E.Ay.fireSurveyAction(u.w.NITRO_UNSUBBED)
    }, [q, R, M, tu]), tf = async () => {
      if (null == te) throw Error("Churn user discount offer is null");
      q.status === j.Dmq.CANCELED ? await (0, c._D)(q, te) : await o.Bo.post({
        url: j.Rsh.USER_OFFER_REDEEM,
        body: {
          user_discount_offer_id: te.id
        },
        rejectWithError: true
      })
    };
    return (0, a.jsx)(m.f5, {
      value: R,
      children: (0, a.jsxs)(I.CancellationContext.Provider, {
        value: {
          setStep: Z,
          premiumType: G,
          onClose: () => {
            F(), y.default.track(j.HAw.CANCELLATION_FLOW_STEP, k({
              from_step: w.T[X],
              to_step: null,
              step_duration_ms: Date.now() - $,
              flow_duration_ms: Date.now() - z,
              location_stack: R,
              load_id: tu
            }, (0, N.j)(q)))
          },
          transitionState: W,
          premiumSubscription: q,
          analyticsLocations: R,
          analyticsLocation: M,
          confettiCanvas: B,
          churnUserDiscountOffer: te,
          isFetchingChurnDiscountOffer: tt && tn,
          fullPrice: ts,
          discountedPrice: ta,
          planId: Y,
          paymentsBlocked: J,
          renewalInvoice: tr,
          renewalInvoiceDetails: ti,
          handleCancellation: tm,
          applyOffer: tf,
          pauseDuration: to,
          setPauseDuration: tc
        },
        children: [(0, a.jsx)(i.Fk, {
          ref: K,
          className: U.L,
          environment: V.current
        }), td()]
      })
    })
  }