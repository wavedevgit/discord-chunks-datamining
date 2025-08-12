/** Chunk was on 63024 **/
/** chunk id: 184160, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  x: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk626589 = require("./626589.js");

function m(e) {
  let {
    handleStepChange: r,
    handleClose: n
  } = e, i = (0, s.ZP)(), {
    activeSubscription: m,
    selectedSkuId: h,
    setSelectedPlanId: j,
    startedPaymentFlowWithPaymentSourcesRef: L
  } = (0, p.JL)(), {
    isGift: g
  } = (0, c.wD)(), b = null != m ? (0, d.Af)(m) : null, y = null != b ? (0, d.gq)(b.planId) : null, S = null != b ? (0, d.Rd)(b.planId) : null, v = (0, _.Kp)({
    isTrial: false,
    isGift: g,
    selectedSkuId: h,
    startedPaymentFlowWithPaymentSources: L.current
  });
  return o()(null != S, "Expected premium type"), (0, t.jsx)(C.Z, {
    premiumType: S,
    titleText: x.intl.string(x.t["7VcWW1"]),
    subtitleText: x.intl.format(x.t.Qk34Ii, {
      subscriptionName: y
    }),
    footer: (0, t.jsxs)("div", {
      className: f.whatYouLoseButtonContainer,
      children: [(0, t.jsx)(l.zx, {
        onClick: () => {
          v ? (j((0, _.nA)(h, m)), r(u.h8.REVIEW)) : r(u.h8.PLAN_SELECT)
        },
        children: x.intl.string(x.t["3PatS0"])
      }), (0, t.jsx)(l.zx, {
        look: l.zx.Looks.LINK,
        color: (0, a.wj)(i) ? l.zx.Colors.WHITE : l.zx.Colors.PRIMARY,
        onClick: n,
        children: x.intl.string(x.t.h9tkAA)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}