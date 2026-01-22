/** Chunk was on 66801 **/
/** chunk id: 480254, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  m: () => S
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
let S = e => {
  let {
    analyticsLocations: t,
    onClose: r,
    transitionState: S,
    premiumSubscription: j,
    currentInvoicePreview: C,
    renewalInvoicePreview: h,
    fractionalPremiumInfo: v,
    setStep: P
  } = e, E = (0, i.bG)([d.default], () => d.default.locale), I = new Date(h.subscriptionPeriodStart);
  j.isBoostOnly || (I = u.Ay.extendDateWithUnconsumedFractionalPremium(I, v.unactivatedUnits));
  let A = (0, i.bG)([l.A], () => l.A.getForApplication(y.tv)),
    w = (0, p.$g)(C.total, C.currency),
    [M, T] = (0, n.useState)(false),
    [k, D] = (0, n.useState)(false),
    R = I.toLocaleDateString(E, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    F = n.useMemo(() => (0, s.A)(), []);
  n.useEffect(() => {
    b.default.track(g.HAw.PREMIUM_RESUBSCRIBE_FLOW_STARTED, function(e) {
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
    }, (0, _.j)(j)))
  }, [t, j, F]);
  let N = async () => {
    T(true), D(false);
    try {
      await f.Ir(j, t), P(m.g.SUCCESS)
    } catch (e) {
      D(true), T(false)
    }
  }, U = [{
    text: x.intl.string(x.t["cY+Oob"]),
    onClick: () => N(),
    variant: "primary",
    loading: M,
    disabled: M
  }], L = x.intl.format(x.t.dbGGui, {
    price: w,
    date: R
  }), W = j.premiumPlanIdFromItems;
  if (u.Ay.hasUnconsumedGiftForSubscriptionPlan(A, W)) {
    let e = (0, p.$g)(h.total, h.currency),
      t = u.Ay.getIntervalForInvoice(h),
      r = {
        discountedPrice: e,
        regularPrice: w,
        date: R,
        billingPeriod: u.Ay.getIntervalStringAsNoun(t.intervalType)
      };
    L = h.taxInclusive ? x.intl.format(x.t.G8IxyE, r) : x.intl.format(x.t.kXtIIn, r)
  }
  return (0, a.jsxs)(c.ExpressiveModal, {
    graphic: {
      type: "image",
      src: O.A
    },
    gradientColor: "nitro-pink",
    transitionState: S,
    title: x.intl.string(x.t.fYEWlq),
    actions: U,
    onClose: async () => r(),
    children: [(0, a.jsxs)(o.Text, {
      variant: "text-md/normal",
      style: {
        textAlign: "center"
      },
      children: [(0, a.jsx)("p", {
        children: L
      }), (0, a.jsx)("p", {
        children: x.intl.string(x.t.UQolSy)
      })]
    }), k ? (0, a.jsx)(c.wx6, {
      type: "critical",
      children: x.intl.string(x.t["5mlOCW"])
    }) : null]
  })
}