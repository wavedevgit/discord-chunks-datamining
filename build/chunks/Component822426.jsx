/** Chunk was on 2824 **/
/** chunk id: 822426, original params: e,t,n (module,exports,require) **/
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
    handleStepChange: t,
    handleClose: n
  } = e, {
    activeSubscription: l,
    selectedSkuId: g,
    setSelectedPlanId: f,
    startedPaymentFlowWithPaymentSourcesRef: y
  } = (0, c.P5)(), {
    isGift: j
  } = (0, u.Pv)(), b = null != l ? (0, o.EL)(l) : null, h = null != b ? (0, o.RH)(b.planId) : null, v = null != b ? (0, o.m6)(b.planId) : null, O = (0, p.vT)({
    isTrial: false,
    isGift: j,
    selectedSkuId: g,
    startedPaymentFlowWithPaymentSources: y.current
  });
  return i()(null != v, "Expected premium type"), (0, r.jsx)(a.A, {
    premiumType: v,
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
          O ? (f((0, p.xT)(g, l)), t(d.pn.REVIEW)) : t(d.pn.PLAN_SELECT)
        }
      }), (0, r.jsx)(s.Button, {
        variant: "secondary",
        onClick: n,
        text: m.intl.string(m.t.h9tkAK)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}