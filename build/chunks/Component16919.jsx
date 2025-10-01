/** Chunk was on 75056 **/
/** chunk id: 16919, original params: t,i,r (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk453591 = require("./453591.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk157461 = require("./157461.js");

function c(t) {
  let {
    transitionState: i,
    onClose: r
  } = t, {
    redeemReward: c
  } = (0, s.h)(true);
  return (0, n.jsxs)(a.IX, {
    transitionState: i,
    onClose: r,
    size: "sm",
    paddingSize: "lg",
    children: [(0, n.jsx)(a.xBx, {
      title: l.intl.string(l.t.oFJPCg),
      titleTextVariant: "heading-lg/semibold"
    }), (0, n.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      className: d.errorModalBody,
      children: l.intl.string(l.t.mgM2z8)
    }), (0, n.jsx)(a.Go$, {
      actionsFullWidth: true,
      actions: [{
        text: l.intl.string(l.t.qcikJS),
        variant: "primary",
        onClick: () => {
          r(), (0, e.xf)(), c()
        }
      }]
    })]
  })
}