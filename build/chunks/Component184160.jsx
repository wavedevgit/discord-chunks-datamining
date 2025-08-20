/** Chunk was on 54400 **/
/** chunk id: 184160, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  x: () => h
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

function h(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, i = (0, o.ZP)(), {
    activeSubscription: h,
    selectedSkuId: j,
    setSelectedPlanId: L,
    startedPaymentFlowWithPaymentSourcesRef: m
  } = (0, c.JL)(), {
    isGift: g
  } = (0, p.wD)(), S = null != h ? (0, d.Af)(h) : null, y = null != S ? (0, d.gq)(S.planId) : null, E = null != S ? (0, d.Rd)(S.planId) : null, b = (0, x.Kp)({
    isTrial: false,
    isGift: g,
    selectedSkuId: j,
    startedPaymentFlowWithPaymentSources: m.current
  });
  return l()(null != E, "Expected premium type"), (0, r.jsx)(C.Z, {
    premiumType: E,
    titleText: _.intl.string(_.t["7VcWW1"]),
    subtitleText: _.intl.format(_.t.Qk34Ii, {
      subscriptionName: y
    }),
    footer: (0, r.jsxs)("div", {
      className: f.whatYouLoseButtonContainer,
      children: [(0, r.jsx)(a.zx, {
        onClick: () => {
          b ? (L((0, x.nA)(j, h)), n(u.h8.REVIEW)) : n(u.h8.PLAN_SELECT)
        },
        children: _.intl.string(_.t["3PatS0"])
      }), (0, r.jsx)(a.zx, {
        look: a.zx.Looks.LINK,
        color: (0, s.wj)(i) ? a.zx.Colors.WHITE : a.zx.Colors.PRIMARY,
        onClick: t,
        children: _.intl.string(_.t.h9tkAA)
      })]
    }),
    onClose: t,
    isDowngrade: true
  })
}