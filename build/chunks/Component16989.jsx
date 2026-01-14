/** Chunk was on 31800 **/
/** chunk id: 16989, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  G: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk366939 = require("./366939.js"),
  Chunk845220 = require("./845220.js"),
  Chunk706454 = require("./706454.js"),
  Chunk580130 = require("./580130.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk323321 = require("./323321.js"),
  Chunk540310 = require("./540310.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7449 = require("./7449.js");
let w = e => {
  let {
    analyticsLocations: t,
    onClose: a,
    transitionState: w,
    premiumSubscription: y,
    currentInvoicePreview: x,
    renewalInvoicePreview: g,
    fractionalPremiumInfo: O,
    setStep: _
  } = e, j = (0, i.e7)([s.default], () => s.default.locale), T = new Date(g.subscriptionPeriodStart);
  y.isBoostOnly || (T = f.ZP.extendDateWithUnconsumedFractionalPremium(T, O.unactivatedUnits));
  let R = (0, i.e7)([b.Z], () => b.Z.getForApplication(S.CL)),
    I = (0, u.T4)(x.total, x.currency),
    [k, M] = (0, n.useState)(false),
    [E, B] = (0, n.useState)(false),
    A = T.toLocaleDateString(j, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    F = n.useMemo(() => (0, d.b)(), []);
  n.useEffect(() => {
    p.default.track(h.rMx.PREMIUM_RESUBSCRIBE_FLOW_STARTED, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = a[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      location_stack: t,
      load_id: F
    }, (0, m.v)(y)))
  }, [t, y, F]);
  let U = async () => {
    M(true), B(false);
    try {
      await l.O5(y, t), _(C.R.SUCCESS)
    } catch (e) {
      B(true), M(false)
    }
  }, N = [{
    text: v.intl.string(v.t["cY+Oob"]),
    onClick: () => U(),
    variant: "primary",
    loading: k,
    disabled: k
  }], D = v.intl.format(v.t.dbGGui, {
    price: I,
    date: A
  }), G = y.premiumPlanIdFromItems;
  if (f.ZP.hasUnconsumedGiftForSubscriptionPlan(R, G)) {
    let e = (0, u.T4)(g.total, g.currency),
      t = f.ZP.getIntervalForInvoice(g),
      a = {
        discountedPrice: e,
        regularPrice: I,
        date: A,
        billingPeriod: f.ZP.getIntervalStringAsNoun(t.intervalType)
      };
    D = g.taxInclusive ? v.intl.format(v.t.G8IxyE, a) : v.intl.format(v.t.kXtIIn, a)
  }
  return (0, r.jsxs)(o.ExpressiveModal, {
    graphic: {
      type: "image",
      src: P.Z
    },
    gradientColor: "nitro-pink",
    transitionState: w,
    title: v.intl.string(v.t.fYEWlq),
    actions: N,
    onClose: async () => a(),
    children: [(0, r.jsxs)(c.Text, {
      variant: "text-md/normal",
      style: {
        textAlign: "center"
      },
      children: [(0, r.jsx)("p", {
        children: D
      }), (0, r.jsx)("p", {
        children: v.intl.string(v.t.UQolSy)
      })]
    }), E ? (0, r.jsx)(o.M14, {
      type: "critical",
      children: v.intl.string(v.t["5mlOCW"])
    }) : null]
  })
}