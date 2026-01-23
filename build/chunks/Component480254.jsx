/** Chunk was on 66801 **/
/** chunk id: 480254, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  m: () => C
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
let C = e => {
  let {
    analyticsLocations: t,
    onClose: r,
    transitionState: C,
    premiumSubscription: h,
    currentInvoicePreview: v,
    renewalInvoicePreview: O,
    fractionalPremiumInfo: w,
    setStep: P
  } = e, j = (0, o.bG)([d.default], () => d.default.locale), I = new Date(O.subscriptionPeriodStart);
  h.isBoostOnly || (I = p.Ay.extendDateWithUnconsumedFractionalPremium(I, w.unactivatedUnits));
  let A = (0, o.bG)([b.A], () => b.A.getForApplication(f.tv)),
    E = (0, u.$g)(v.total, v.currency),
    [T, M] = (0, n.useState)(false),
    [k, R] = (0, n.useState)(false),
    D = I.toLocaleDateString(j, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    F = n.useMemo(() => (0, s.A)(), []);
  n.useEffect(() => {
    _.default.track(g.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = r[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({
      location_stack: t,
      load_id: F
    }, (0, m.j)(h)))
  }, [t, h, F]);
  let L = async () => {
    M(true), R(false);
    try {
      await c.Ir(h, t), P(y.g.SUCCESS)
    } catch (e) {
      R(true), M(false)
    }
  }, U = [{
    text: S.intl.string(S.t["cY+Oob"]),
    onClick: () => L(),
    variant: "primary",
    loading: T,
    disabled: T
  }], B = S.intl.format(S.t.dbGGui, {
    price: E,
    date: D
  }), N = h.premiumPlanIdFromItems;
  if (p.Ay.hasUnconsumedGiftForSubscriptionPlan(A, N)) {
    let e = (0, u.$g)(O.total, O.currency),
      t = p.Ay.getIntervalForInvoice(O),
      r = {
        discountedPrice: e,
        regularPrice: E,
        date: D,
        billingPeriod: p.Ay.getIntervalStringAsNoun(t.intervalType)
      };
    B = O.taxInclusive ? S.intl.format(S.t.G8IxyE, r) : S.intl.format(S.t.kXtIIn, r)
  }
  return (0, a.jsxs)(i.ExpressiveModal, {
    graphic: {
      type: "image",
      src: x.A
    },
    gradientColor: "nitro-pink",
    transitionState: C,
    title: S.intl.string(S.t.fYEWlq),
    actions: U,
    onClose: async () => r(),
    children: [(0, a.jsxs)(l.Text, {
      variant: "text-md/normal",
      style: {
        textAlign: "center"
      },
      children: [(0, a.jsx)("p", {
        children: B
      }), (0, a.jsx)("p", {
        children: S.intl.string(S.t.UQolSy)
      })]
    }), k ? (0, a.jsx)(i.wx6, {
      type: "critical",
      children: S.intl.string(S.t["5mlOCW"])
    }) : null]
  })
}