/** Chunk was on 54711 **/
/** chunk id: 480254, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  m: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk158032 = require("./158032.js"),
  Chunk925847 = require("./925847.js"),
  Chunk773669 = require("./773669.js"),
  Chunk469778 = require("./469778.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk501957 = require("./501957.js"),
  Chunk232392 = require("./232392.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk938822 = require("./938822.js");
let x = e => {
  let {
    analyticsLocations: t,
    onClose: r,
    transitionState: x,
    premiumSubscription: h,
    currentInvoicePreview: O,
    renewalInvoicePreview: j,
    fractionalPremiumInfo: v,
    setStep: P
  } = e, w = (0, i.bG)([d.default], () => d.default.locale), I = new Date(j.subscriptionPeriodStart);
  h.isBoostOnly || (I = b.Ay.extendDateWithUnconsumedFractionalPremium(I, v.unactivatedUnits));
  let E = (0, i.bG)([u.A], () => u.A.getForApplication(g.tv)),
    M = (0, m.$g)(O.total, O.currency),
    [T, A] = (0, a.useState)(false),
    [k, R] = (0, a.useState)(false),
    D = I.toLocaleDateString(w, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    F = a.useMemo(() => (0, c.A)(), []);
  a.useEffect(() => {
    p.default.track(f.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      location_stack: t,
      load_id: F
    }, (0, _.j)(h)))
  }, [t, h, F]);
  let B = async () => {
    A(true), R(false);
    try {
      await s.Ir(h, t), P(y.g.SUCCESS)
    } catch (e) {
      R(true), A(false)
    }
  }, N = [{
    text: S.intl.string(S.t["cY+Oob"]),
    onClick: () => B(),
    variant: "primary",
    loading: T,
    disabled: T
  }], U = S.intl.format(S.t.dbGGui, {
    price: M,
    date: D
  }), L = h.premiumPlanIdFromItems;
  if (b.Ay.hasUnconsumedGiftForSubscriptionPlan(E, L)) {
    let e = (0, m.$g)(j.total, j.currency),
      t = b.Ay.getIntervalForInvoice(j),
      r = {
        discountedPrice: e,
        regularPrice: M,
        date: D,
        billingPeriod: b.Ay.getIntervalStringAsNoun(t.intervalType)
      };
    U = j.taxInclusive ? S.intl.format(S.t.G8IxyE, r) : S.intl.format(S.t.kXtIIn, r)
  }
  return (0, n.jsxs)(o.ExpressiveModal, {
    graphic: {
      type: "image",
      src: C.A
    },
    gradientColor: "nitro-pink",
    transitionState: x,
    title: S.intl.string(S.t.fYEWlq),
    actions: N,
    onClose: async () => r(),
    children: [(0, n.jsxs)(l.Text, {
      variant: "text-md/normal",
      style: {
        textAlign: "center"
      },
      children: [(0, n.jsx)("p", {
        children: U
      }), (0, n.jsx)("p", {
        children: S.intl.string(S.t.UQolSy)
      })]
    }), k ? (0, n.jsx)(o.wx6, {
      type: "critical",
      children: S.intl.string(S.t["5mlOCW"])
    }) : null]
  })
}