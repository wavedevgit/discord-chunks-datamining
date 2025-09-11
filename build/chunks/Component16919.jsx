/** Chunk was on 75056 **/
/** chunk id: 16919, original params: t,i,r (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk453591 = require("./453591.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk157461 = require("./157461.js");

function h(t) {
  let {
    transitionState: i,
    onClose: r
  } = t, {
    redeemReward: h
  } = (0, d.h)(true);
  return (0, n.jsxs)(a.I, {
    transitionState: i,
    onClose: r,
    size: "sm",
    paddingSize: "lg",
    children: [(0, n.jsx)(o.x, {
      title: c.intl.string(c.t.oFJPCg),
      titleTextVariant: "heading-lg/semibold"
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      className: x.errorModalBody,
      children: c.intl.string(c.t.mgM2z8)
    }), (0, n.jsx)(e.G, {
      actionsFullWidth: true,
      actions: [{
        text: c.intl.string(c.t.qcikJS),
        variant: "primary",
        onClick: () => {
          r(), (0, l.xf)(), h()
        }
      }]
    })]
  })
}