/** Chunk was on 2824 **/
/** chunk id: 822426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => f
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

function f(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    activeSubscription: r,
    selectedSkuId: f,
    setSelectedPlanId: g,
    startedPaymentFlowWithPaymentSourcesRef: j
  } = (0, c.P5)(), {
    isGift: y
  } = (0, u.Pv)(), h = null != r ? (0, o.EL)(r) : null, v = null != h ? (0, o.RH)(h.planId) : null, b = null != h ? (0, o.m6)(h.planId) : null, O = (0, p.vT)({
    isTrial: false,
    isGift: y,
    selectedSkuId: f,
    startedPaymentFlowWithPaymentSources: j.current
  });
  return i()(null != b, "Expected premium type"), (0, l.jsx)(a.A, {
    premiumType: b,
    titleText: m.intl.string(m.t["7VcWW0"]),
    subtitleText: m.intl.format(m.t.Qk34Ik, {
      subscriptionName: v
    }),
    footer: (0, l.jsxs)(s.ButtonGroup, {
      direction: "horizontal-reverse",
      align: "center",
      children: [(0, l.jsx)(s.Button, {
        variant: "primary",
        text: m.intl.string(m.t["3PatSz"]),
        onClick: () => {
          O ? (g((0, p.xT)(f, r)), t(d.pn.REVIEW)) : t(d.pn.PLAN_SELECT)
        }
      }), (0, l.jsx)(s.Button, {
        variant: "secondary",
        onClick: n,
        text: m.intl.string(m.t.h9tkAK)
      })]
    }),
    onClose: n,
    isDowngrade: true
  })
}