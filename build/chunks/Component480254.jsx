/** Chunk was on 5241 **/
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
    currentInvoicePreview: O,
    renewalInvoicePreview: v,
    fractionalPremiumInfo: j,
    setStep: w
  } = e, P = (0, o.bG)([d.default], () => d.default.locale), I = new Date(v.subscriptionPeriodStart);
  h.isBoostOnly || (I = p.Ay.extendDateWithUnconsumedFractionalPremium(I, j.unactivatedUnits));
  let E = (0, o.bG)([b.A], () => b.A.getForApplication(g.tv)),
    T = (0, u.$g)(O.total, O.currency),
    [A, M] = (0, a.useState)(false),
    [k, R] = (0, a.useState)(false),
    D = I.toLocaleDateString(P, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    F = a.useMemo(() => (0, s.A)(), []);
  a.useEffect(() => {
    _.default.track(S.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, function(e) {
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
    }, (0, m.j)(h)))
  }, [t, h, F]);
  let L = async () => {
    M(true), R(false);
    try {
      await l.Ir(h, t), w(y.g.SUCCESS)
    } catch (e) {
      R(true), M(false)
    }
  }, N = [{
    text: f.intl.string(f.t["cY+Oob"]),
    onClick: () => L(),
    variant: "primary",
    loading: A,
    disabled: A
  }], U = f.intl.format(f.t.dbGGui, {
    price: T,
    date: D
  }), B = h.premiumPlanIdFromItems;
  if (p.Ay.hasUnconsumedGiftForSubscriptionPlan(E, B)) {
    let e = (0, u.$g)(v.total, v.currency),
      t = p.Ay.getIntervalForInvoice(v),
      r = {
        discountedPrice: e,
        regularPrice: T,
        date: D,
        billingPeriod: p.Ay.getIntervalStringAsNoun(t.intervalType)
      };
    U = v.taxInclusive ? f.intl.format(f.t.G8IxyE, r) : f.intl.format(f.t.kXtIIn, r)
  }
  return (0, n.jsxs)(i.ExpressiveModal, {
    graphic: {
      type: "image",
      src: x.A
    },
    gradientColor: "nitro-pink",
    transitionState: C,
    title: f.intl.string(f.t.fYEWlq),
    actions: N,
    onClose: async () => r(),
    children: [(0, n.jsxs)(c.Text, {
      variant: "text-md/normal",
      style: {
        textAlign: "center"
      },
      children: [(0, n.jsx)("p", {
        children: U
      }), (0, n.jsx)("p", {
        children: f.intl.string(f.t.UQolSy)
      })]
    }), k ? (0, n.jsx)(i.wx6, {
      type: "critical",
      children: f.intl.string(f.t["5mlOCW"])
    }) : null]
  })
}