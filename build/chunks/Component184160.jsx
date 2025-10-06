/** Chunk was on 37786 **/
/** chunk id: 184160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk410030 = require("./410030.js"),
  Chunk807163 = require("./807163.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391676 = require("./391676.js");

function m(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, i = (0, s.ZP)(), {
    activeSubscription: m,
    selectedSkuId: x,
    setSelectedPlanId: g,
    startedPaymentFlowWithPaymentSourcesRef: j
  } = (0, u.JL)(), {
    isGift: b
  } = (0, c.wD)(), y = null != m ? (0, C.Af)(m) : null, L = null != y ? (0, C.gq)(y.planId) : null, v = null != y ? (0, C.Rd)(y.planId) : null, S = (0, _.Kp)({
    isTrial: false,
    isGift: b,
    selectedSkuId: x,
    startedPaymentFlowWithPaymentSources: j.current
  });
  return a()(null != v, "Expected premium type"), (0, r.jsx)(d.Z, {
    premiumType: v,
    titleText: f.intl.string(f.t["7VcWW1"]),
    subtitleText: f.intl.format(f.t.Qk34Ii, {
      subscriptionName: L
    }),
    footer: (0, r.jsxs)("div", {
      className: h.whatYouLoseButtonContainer,
      children: [(0, r.jsx)(l.zx, {
        "data-migration-pending": true,
        onClick: () => {
          S ? (g((0, _.nA)(x, m)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT)
        },
        children: f.intl.string(f.t["3PatS0"])
      }), (0, r.jsx)(l.zx, {
        "data-migration-pending": true,
        look: l.zx.Looks.LINK,
        color: (0, o.wj)(i) ? l.zx.Colors.WHITE : l.zx.Colors.PRIMARY,
        onClick: n,
        children: f.intl.string(f.t.h9tkAA)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}