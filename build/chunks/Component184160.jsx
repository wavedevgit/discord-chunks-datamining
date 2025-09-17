/** Chunk was on 54400 **/
/** chunk id: 184160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => _
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

function _(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, i = (0, o.ZP)(), {
    activeSubscription: _,
    selectedSkuId: m,
    setSelectedPlanId: j,
    startedPaymentFlowWithPaymentSourcesRef: g
  } = (0, u.JL)(), {
    isGift: b
  } = (0, c.wD)(), L = null != _ ? (0, d.Af)(_) : null, y = null != L ? (0, d.gq)(L.planId) : null, S = null != L ? (0, d.Rd)(L.planId) : null, v = (0, x.Kp)({
    isTrial: false,
    isGift: b,
    selectedSkuId: m,
    startedPaymentFlowWithPaymentSources: g.current
  });
  return l()(null != S, "Expected premium type"), (0, r.jsx)(C.Z, {
    premiumType: S,
    titleText: h.intl.string(h.t["7VcWW1"]),
    subtitleText: h.intl.format(h.t.Qk34Ii, {
      subscriptionName: y
    }),
    footer: (0, r.jsxs)("div", {
      className: f.whatYouLoseButtonContainer,
      children: [(0, r.jsx)(s.zx, {
        onClick: () => {
          v ? (j((0, x.nA)(m, _)), t(p.h8.REVIEW)) : t(p.h8.PLAN_SELECT)
        },
        children: h.intl.string(h.t["3PatS0"])
      }), (0, r.jsx)(s.zx, {
        look: s.zx.Looks.LINK,
        color: (0, a.wj)(i) ? s.zx.Colors.WHITE : s.zx.Colors.PRIMARY,
        onClick: n,
        children: h.intl.string(h.t.h9tkAA)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}