/** Chunk was on 47168 **/
/** chunk id: 16989, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  G: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk366939 = require("./366939.js"),
  Chunk706454 = require("./706454.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk540310 = require("./540310.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk730949 = require("./730949.js");
let _ = e => {
  let {
    analyticsLocations: t,
    onClose: r,
    transitionState: _,
    premiumSubscription: h,
    renewalInvoicePreview: C,
    fractionalPremiumInfo: f,
    setStep: S
  } = e, v = (0, i.e7)([s.default], () => s.default.locale), x = new Date(C.subscriptionPeriodStart);
  h.isBoostOnly || (x = d.ZP.extendDateWithUnconsumedFractionalPremium(x, f.unactivatedUnits));
  let w = (0, p.T4)(C.total, C.currency),
    [P, y] = (0, n.useState)(false),
    [g, O] = (0, n.useState)(false),
    j = x.toLocaleDateString(v, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    T = async () => {
      y(true), O(false);
      try {
        await c.O5(h, t), S(b.R.SUCCESS)
      } catch (e) {
        O(true), y(false)
      }
    }, R = [{
      text: m.intl.string(m.t["cY+Oob"]),
      onClick: () => T(),
      variant: "primary",
      loading: P,
      disabled: P
    }];
  return (0, a.jsxs)(o.ExpressiveModal, {
    graphic: {
      type: "image",
      src: u.Z
    },
    gradientColor: "nitro-pink",
    transitionState: _,
    title: m.intl.string(m.t.fYEWlq),
    actions: R,
    onClose: async () => r(),
    children: [(0, a.jsxs)(l.Text, {
      variant: "text-md/normal",
      style: {
        textAlign: "center"
      },
      children: [(0, a.jsx)("p", {
        children: m.intl.format(m.t.dbGGui, {
          price: w,
          date: j
        })
      }), (0, a.jsx)("p", {
        children: m.intl.string(m.t.UQolSy)
      })]
    }), g ? (0, a.jsx)(o.M14, {
      type: "critical",
      children: m.intl.string(m.t["5mlOCW"])
    }) : null]
  })
}