/** Chunk was on 54400 **/
/** chunk id: 184160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
  Chunk172463 = require("./172463.js");

function f(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, i = (0, o.ZP)(), {
    activeSubscription: f,
    selectedSkuId: j,
    setSelectedPlanId: m,
    startedPaymentFlowWithPaymentSourcesRef: L
  } = (0, c.JL)(), {
    isGift: g
  } = (0, p.wD)(), b = null != f ? (0, d.Af)(f) : null, y = null != b ? (0, d.gq)(b.planId) : null, S = null != b ? (0, d.Rd)(b.planId) : null, E = (0, x.Kp)({
    isTrial: false,
    isGift: g,
    selectedSkuId: j,
    startedPaymentFlowWithPaymentSources: L.current
  });
  return l()(null != S, "Expected premium type"), (0, r.jsx)(C.Z, {
    premiumType: S,
    titleText: h.intl.string(h.t["7VcWW1"]),
    subtitleText: h.intl.format(h.t.Qk34Ii, {
      subscriptionName: y
    }),
    footer: (0, r.jsxs)("div", {
      className: _.whatYouLoseButtonContainer,
      children: [(0, r.jsx)(a.zx, {
        onClick: () => {
          E ? (m((0, x.nA)(j, f)), t(u.h8.REVIEW)) : t(u.h8.PLAN_SELECT)
        },
        children: h.intl.string(h.t["3PatS0"])
      }), (0, r.jsx)(a.zx, {
        look: a.zx.Looks.LINK,
        color: (0, s.wj)(i) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
        onClick: n,
        children: h.intl.string(h.t.h9tkAA)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}