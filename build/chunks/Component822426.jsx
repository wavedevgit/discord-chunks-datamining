/** Chunk was on 2824 **/
/** chunk id: 822426, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  K: () => g
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

function g(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, {
    activeSubscription: l,
    selectedSkuId: g,
    setSelectedPlanId: f,
    startedPaymentFlowWithPaymentSourcesRef: E
  } = (0, c.P5)(), {
    isGift: j
  } = (0, u.Pv)(), x = null != l ? (0, o.EL)(l) : null, h = null != x ? (0, o.RH)(x.planId) : null, T = null != x ? (0, o.m6)(x.planId) : null, P = (0, p.vT)({
    isTrial: false,
    isGift: j,
    selectedSkuId: g,
    startedPaymentFlowWithPaymentSources: E.current
  });
  return i()(null != T, "Expected premium type"), (0, r.jsx)(a.A, {
    premiumType: T,
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
          P ? (f((0, p.xT)(g, l)), n(d.pn.REVIEW)) : n(d.pn.PLAN_SELECT)
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