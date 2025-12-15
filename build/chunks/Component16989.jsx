/** Chunk was on 31800 **/
/** chunk id: 16989, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  G: () => v
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
  Chunk7449 = require("./7449.js");
let v = e => {
  let {
    analyticsLocations: t,
    onClose: a,
    transitionState: v,
    premiumSubscription: w,
    renewalInvoicePreview: y,
    fractionalPremiumInfo: P,
    setStep: x
  } = e, O = (0, i.e7)([s.default], () => s.default.locale), _ = new Date(y.subscriptionPeriodStart);
  w.isBoostOnly || (_ = f.ZP.extendDateWithUnconsumedFractionalPremium(_, P.unactivatedUnits));
  let g = (0, p.T4)(y.total, y.currency),
    [j, R] = (0, n.useState)(false),
    [T, k] = (0, n.useState)(false),
    M = _.toLocaleDateString(O, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    I = n.useMemo(() => (0, d.b)(), []);
  n.useEffect(() => {
    b.default.track(C.rMx.PREMIUM_RESUBSCRIBE_FLOW_STARTED, function(e) {
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
      load_id: I
    }, (0, u.v)(w)))
  }, [t, w, I]);
  let E = async () => {
    R(true), k(false);
    try {
      await l.O5(w, t), x(m.R.SUCCESS)
    } catch (e) {
      k(true), R(false)
    }
  }, B = [{
    text: h.intl.string(h.t["cY+Oob"]),
    onClick: () => E(),
    variant: "primary",
    loading: j,
    disabled: j
  }];
  return (0, r.jsxs)(o.ExpressiveModal, {
    graphic: {
      type: "image",
      src: S.Z
    },
    gradientColor: "nitro-pink",
    transitionState: v,
    title: h.intl.string(h.t.fYEWlq),
    actions: B,
    onClose: async () => a(),
    children: [(0, r.jsxs)(c.Text, {
      variant: "text-md/normal",
      style: {
        textAlign: "center"
      },
      children: [(0, r.jsx)("p", {
        children: h.intl.format(h.t.dbGGui, {
          price: g,
          date: M
        })
      }), (0, r.jsx)("p", {
        children: h.intl.string(h.t.UQolSy)
      })]
    }), T ? (0, r.jsx)(o.M14, {
      type: "critical",
      children: h.intl.string(h.t["5mlOCW"])
    }) : null]
  })
}