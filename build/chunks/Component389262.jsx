/** Chunk was on 18879 **/
/** chunk id: 389262, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk758590 = require("./758590.js"),
  Chunk365627 = require("./365627.js");

function d(t) {
  let {
    transitionState: i,
    onClose: e,
    storeListing: d,
    subscription: u
  } = t, p = (0, s.Dt)();
  return (0, a.jsx)(n.ExpressiveModal, {
    actions: [{
      variant: "secondary",
      onClick: e,
      text: l.intl.string(l.t["JtWl+a"])
    }],
    "aria-labelledby": p,
    graphic: {
      type: "image",
      src: c
    },
    onClose: e,
    transitionState: i,
    title: l.intl.formatToPlainString(l.t.wLFT6z, {
      tier: d.summary
    }),
    children: (0, a.jsx)(r.Text, {
      className: o.subtitle,
      variant: "text-md/medium",
      color: "text-default",
      children: l.intl.format(l.t.OsAK9h, {
        timestamp: null == u ? true : u.currentPeriodEnd
      })
    })
  })
}