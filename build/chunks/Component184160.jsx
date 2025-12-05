/** Chunk was on 23242 **/
/** chunk id: 184160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
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
    activeSubscription: r,
    selectedSkuId: h,
    setSelectedPlanId: f,
    startedPaymentFlowWithPaymentSourcesRef: g
  } = (0, c.JL)(), {
    isGift: v
  } = (0, u.wD)(), j = null != r ? (0, o.Af)(r) : null, y = null != j ? (0, o.MF)(j.planId) : null, b = null != j ? (0, o.Rd)(j.planId) : null, S = (0, m.Kp)({
    isTrial: false,
    isGift: v,
    selectedSkuId: h,
    startedPaymentFlowWithPaymentSources: g.current
  });
  return i()(null != b, "Expected premium type"), (0, l.jsx)(s.Z, {
    premiumType: b,
    titleText: p.intl.string(p.t["7VcWW0"]),
    subtitleText: p.intl.format(p.t.Qk34Ik, {
      subscriptionName: y
    }),
    footer: (0, l.jsxs)(a.ButtonGroup, {
      direction: "horizontal-reverse",
      align: "center",
      children: [(0, l.jsx)(a.Button, {
        variant: "primary",
        text: p.intl.string(p.t["3PatSz"]),
        onClick: () => {
          S ? (f((0, m.nA)(h, r)), t(d.h8.REVIEW)) : t(d.h8.PLAN_SELECT)
        }
      }), (0, l.jsx)(a.Button, {
        variant: "secondary",
        onClick: n,
        text: p.intl.string(p.t.h9tkAK)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}