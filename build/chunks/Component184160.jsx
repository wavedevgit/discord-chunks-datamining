/** Chunk was on 37786 **/
/** chunk id: 184160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function _(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    activeSubscription: i,
    selectedSkuId: _,
    setSelectedPlanId: f,
    startedPaymentFlowWithPaymentSourcesRef: h
  } = (0, C.JL)(), {
    isGift: m
  } = (0, d.wD)(), x = null != i ? (0, s.Af)(i) : null, j = null != x ? (0, s.gq)(x.planId) : null, g = null != x ? (0, s.Rd)(x.planId) : null, b = (0, u.Kp)({
    isTrial: false,
    isGift: m,
    selectedSkuId: _,
    startedPaymentFlowWithPaymentSources: h.current
  });
  return a()(null != g, "Expected premium type"), (0, r.jsx)(o.Z, {
    premiumType: g,
    titleText: p.intl.string(p.t["7VcWW1"]),
    subtitleText: p.intl.format(p.t.Qk34Ii, {
      subscriptionName: j
    }),
    footer: (0, r.jsxs)(l.hE2, {
      direction: "horizontal-reverse",
      align: "center",
      children: [(0, r.jsx)(l.zxk, {
        variant: "primary",
        text: p.intl.string(p.t["3PatS0"]),
        onClick: () => {
          b ? (f((0, u.nA)(_, i)), t(c.h8.REVIEW)) : t(c.h8.PLAN_SELECT)
        }
      }), (0, r.jsx)(l.zxk, {
        variant: "secondary",
        onClick: n,
        text: p.intl.string(p.t.h9tkAA)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}