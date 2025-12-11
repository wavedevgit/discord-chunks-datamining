/** Chunk was on 18879 **/
/** chunk id: 389262, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk835980 = require("./835980.js"),
  Chunk365627 = require("./365627.js");

function d(t) {
  let {
    transitionState: e,
    onClose: i,
    storeListing: d,
    subscription: u
  } = t, p = (0, s.Dt)();
  return (0, a.jsx)(n.ExpressiveModal, {
    actions: [{
      variant: "secondary",
      onClick: i,
      text: l.intl.string(l.t["JtWl+a"])
    }],
    "aria-labelledby": p,
    graphic: {
      type: "image",
      src: o
    },
    onClose: i,
    transitionState: e,
    title: l.intl.formatToPlainString(l.t.wLFT6z, {
      tier: d.summary
    }),
    children: (0, a.jsx)(r.Text, {
      className: c.subtitle,
      variant: "text-md/medium",
      color: "text-default",
      children: l.intl.format(l.t.OsAK9h, {
        timestamp: null == u ? true : u.currentPeriodEnd
      })
    })
  })
}