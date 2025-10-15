/** Chunk was on 18879 **/
/** chunk id: 389262, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk758590 = require("./758590.js"),
  Chunk365627 = require("./365627.js");

function d(t) {
  let {
    transitionState: e,
    onClose: i,
    storeListing: d,
    subscription: u
  } = t, p = (0, s.Dt)();
  return (0, a.jsx)(r.ExpressiveModal, {
    actions: [{
      variant: "secondary",
      onClick: i,
      text: l.intl.string(l.t["JtWl+a"])
    }],
    "aria-labelledby": p,
    graphic: {
      type: "image",
      src: c
    },
    onClose: i,
    transitionState: e,
    title: l.intl.formatToPlainString(l.t.wLFT6z, {
      tier: d.summary
    }),
    children: (0, a.jsx)(n.Text, {
      className: o.subtitle,
      variant: "text-md/medium",
      color: "header-secondary",
      children: l.intl.format(l.t.OsAK9h, {
        timestamp: null == u ? true : u.currentPeriodEnd
      })
    })
  })
}