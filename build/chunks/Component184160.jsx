/** Chunk was on 54433 **/
/** chunk id: 184160, original params: e,n,t (module,exports,require) **/
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
    handleStepChange: n,
    handleClose: t
  } = e, r = (0, o.ZP)(), {
    activeSubscription: f,
    selectedSkuId: m,
    setSelectedPlanId: _,
    startedPaymentFlowWithPaymentSourcesRef: L
  } = (0, u.JL)(), {
    isGift: g
  } = (0, c.wD)(), y = null != f ? (0, d.Af)(f) : null, E = null != y ? (0, d.gq)(y.planId) : null, S = null != y ? (0, d.Rd)(y.planId) : null, v = (0, x.Kp)({
    isTrial: false,
    isGift: g,
    selectedSkuId: m,
    startedPaymentFlowWithPaymentSources: L.current
  });
  return l()(null != S, "Expected premium type"), (0, i.jsx)(C.Z, {
    premiumType: S,
    titleText: h.intl.string(h.t["7VcWW1"]),
    subtitleText: h.intl.format(h.t.Qk34Ii, {
      subscriptionName: E
    }),
    footer: (0, i.jsxs)("div", {
      className: j.whatYouLoseButtonContainer,
      children: [(0, i.jsx)(a.zx, {
        onClick: () => {
          v ? (_((0, x.nA)(m, f)), n(p.h8.REVIEW)) : n(p.h8.PLAN_SELECT)
        },
        children: h.intl.string(h.t["3PatS0"])
      }), (0, i.jsx)(a.zx, {
        look: a.zx.Looks.LINK,
        color: (0, s.wj)(r) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
        onClick: t,
        children: h.intl.string(h.t.h9tkAA)
      })]
    }),
    onClose: t,
    isDowngrade: true
  })
}