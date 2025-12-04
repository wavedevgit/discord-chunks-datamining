/** Chunk was on 54400 **/
/** chunk id: 184160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk807163 = require("./807163.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    activeSubscription: l,
    selectedSkuId: h,
    setSelectedPlanId: f,
    startedPaymentFlowWithPaymentSourcesRef: b
  } = (0, c.JL)(), {
    isGift: g
  } = (0, u.wD)(), v = null != l ? (0, s.Af)(l) : null, S = null != v ? (0, s.MF)(v.planId) : null, y = null != v ? (0, s.Rd)(v.planId) : null, x = (0, p.Kp)({
    isTrial: false,
    isGift: g,
    selectedSkuId: h,
    startedPaymentFlowWithPaymentSources: b.current
  });
  return a()(null != y, "Expected premium type"), (0, r.jsx)(o.Z, {
    premiumType: y,
    titleText: m.intl.string(m.t["7VcWW0"]),
    subtitleText: m.intl.format(m.t.Qk34Ik, {
      subscriptionName: S
    }),
    footer: (0, r.jsxs)(i.ButtonGroup, {
      direction: "horizontal-reverse",
      align: "center",
      children: [(0, r.jsx)(i.Button, {
        variant: "primary",
        text: m.intl.string(m.t["3PatSz"]),
        onClick: () => {
          x ? (f((0, p.nA)(h, l)), t(d.h8.REVIEW)) : t(d.h8.PLAN_SELECT)
        }
      }), (0, r.jsx)(i.Button, {
        variant: "secondary",
        onClick: n,
        text: m.intl.string(m.t.h9tkAK)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}