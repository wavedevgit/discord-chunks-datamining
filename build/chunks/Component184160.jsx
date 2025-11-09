/** Chunk was on 4125 **/
/** chunk id: 184160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => f
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

function f(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    activeSubscription: i,
    selectedSkuId: f,
    setSelectedPlanId: h,
    startedPaymentFlowWithPaymentSourcesRef: x
  } = (0, d.JL)(), {
    isGift: m
  } = (0, C.wD)(), _ = null != i ? (0, s.Af)(i) : null, j = null != _ ? (0, s.gq)(_.planId) : null, g = null != _ ? (0, s.Rd)(_.planId) : null, b = (0, u.Kp)({
    isTrial: false,
    isGift: m,
    selectedSkuId: f,
    startedPaymentFlowWithPaymentSources: x.current
  });
  return l()(null != g, "Expected premium type"), (0, r.jsx)(o.Z, {
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
          b ? (h((0, u.nA)(f, i)), t(c.h8.REVIEW)) : t(c.h8.PLAN_SELECT)
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