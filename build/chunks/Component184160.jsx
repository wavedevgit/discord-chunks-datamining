/** Chunk was on 3270 **/
/** chunk id: 184160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
    activeSubscription: i,
    selectedSkuId: h,
    setSelectedPlanId: m,
    startedPaymentFlowWithPaymentSourcesRef: _
  } = (0, c.JL)(), {
    isGift: f
  } = (0, d.wD)(), x = null != i ? (0, o.Af)(i) : null, j = null != x ? (0, o.gq)(x.planId) : null, g = null != x ? (0, o.Rd)(x.planId) : null, b = (0, u.Kp)({
    isTrial: false,
    isGift: f,
    selectedSkuId: h,
    startedPaymentFlowWithPaymentSources: _.current
  });
  return l()(null != g, "Expected premium type"), (0, r.jsx)(s.Z, {
    premiumType: g,
    titleText: p.intl.string(p.t["7VcWW0"]),
    subtitleText: p.intl.format(p.t.Qk34Ik, {
      subscriptionName: j
    }),
    footer: (0, r.jsxs)(a.ButtonGroup, {
      direction: "horizontal-reverse",
      align: "center",
      children: [(0, r.jsx)(a.Button, {
        variant: "primary",
        text: p.intl.string(p.t["3PatSz"]),
        onClick: () => {
          b ? (m((0, u.nA)(h, i)), t(C.h8.REVIEW)) : t(C.h8.PLAN_SELECT)
        }
      }), (0, r.jsx)(a.Button, {
        variant: "secondary",
        onClick: n,
        text: p.intl.string(p.t.h9tkAK)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}