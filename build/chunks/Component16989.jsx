/** Chunk was on 47168 **/
/** chunk id: 16989, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  G: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk366939 = require("./366939.js"),
  Chunk845220 = require("./845220.js"),
  Chunk706454 = require("./706454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk323321 = require("./323321.js"),
  Chunk540310 = require("./540310.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk730949 = require("./730949.js");
let S = e => {
  let {
    analyticsLocations: t,
    onClose: r,
    transitionState: S,
    premiumSubscription: v,
    renewalInvoicePreview: w,
    fractionalPremiumInfo: y,
    setStep: P
  } = e, x = (0, i.e7)([d.default], () => d.default.locale), O = new Date(w.subscriptionPeriodStart);
  v.isBoostOnly || (O = u.ZP.extendDateWithUnconsumedFractionalPremium(O, y.unactivatedUnits));
  let g = (0, b.T4)(w.total, w.currency),
    [j, R] = (0, n.useState)(false),
    [T, k] = (0, n.useState)(false),
    M = O.toLocaleDateString(x, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    I = n.useMemo(() => (0, s.b)(), []);
  n.useEffect(() => {
    p.default.track(h.rMx.PREMIUM_RESUBSCRIBE_FLOW_STARTED, function(e) {
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
      load_id: I
    }, (0, m.v)(v)))
  }, [t, v, I]);
  let E = async () => {
    R(true), k(false);
    try {
      await c.O5(v, t), P(_.R.SUCCESS)
    } catch (e) {
      k(true), R(false)
    }
  }, B = [{
    text: f.intl.string(f.t["cY+Oob"]),
    onClick: () => E(),
    variant: "primary",
    loading: j,
    disabled: j
  }];
  return (0, a.jsxs)(o.ExpressiveModal, {
    graphic: {
      type: "image",
      src: C.Z
    },
    gradientColor: "nitro-pink",
    transitionState: S,
    title: f.intl.string(f.t.fYEWlq),
    actions: B,
    onClose: async () => r(),
    children: [(0, a.jsxs)(l.Text, {
      variant: "text-md/normal",
      style: {
        textAlign: "center"
      },
      children: [(0, a.jsx)("p", {
        children: f.intl.format(f.t.dbGGui, {
          price: g,
          date: M
        })
      }), (0, a.jsx)("p", {
        children: f.intl.string(f.t.UQolSy)
      })]
    }), T ? (0, a.jsx)(o.M14, {
      type: "critical",
      children: f.intl.string(f.t["5mlOCW"])
    }) : null]
  })
}