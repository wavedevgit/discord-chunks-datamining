/** Chunk was on 2824 **/
/** chunk id: 822426, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  K: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk96304 = require("./96304.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk800471 = require("./800471.js"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, {
    activeSubscription: l,
    selectedSkuId: E,
    setSelectedPlanId: g,
    startedPaymentFlowWithPaymentSourcesRef: f
  } = (0, c.P5)(), {
    isGift: P
  } = (0, u.Pv)(), j = null != l ? (0, o.EL)(l) : null, h = null != j ? (0, o.RH)(j.planId) : null, _ = null != j ? (0, o.m6)(j.planId) : null, x = (0, p.vT)({
    isTrial: false,
    isGift: P,
    selectedSkuId: E,
    startedPaymentFlowWithPaymentSources: f.current
  });
  return i()(null != _, "Expected premium type"), (0, r.jsx)(a.A, {
    premiumType: _,
    titleText: m.intl.string(m.t["7VcWW0"]),
    subtitleText: m.intl.format(m.t.Qk34Ik, {
      subscriptionName: h
    }),
    footer: (0, r.jsxs)(s.ButtonGroup, {
      direction: "horizontal-reverse",
      align: "center",
      children: [(0, r.jsx)(s.Button, {
        variant: "primary",
        text: m.intl.string(m.t["3PatSz"]),
        onClick: () => {
          x ? (g((0, p.xT)(E, l)), n(d.pn.REVIEW)) : n(d.pn.PLAN_SELECT)
        }
      }), (0, r.jsx)(s.Button, {
        variant: "secondary",
        onClick: t,
        text: m.intl.string(m.t.h9tkAK)
      })]
    }),
    onClose: t,
    isDowngrade: true
  })
}