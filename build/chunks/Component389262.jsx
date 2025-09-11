/** Chunk was on 18879 **/
/** chunk id: 389262, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk361837 = require("./361837.js"),
  Chunk365627 = require("./365627.js");

function d(t) {
  let {
    transitionState: i,
    onClose: e,
    storeListing: d,
    subscription: u
  } = t, m = (0, s.Dt)();
  return (0, a.jsx)(n.I, {
    actions: [{
      variant: "secondary",
      onClick: e,
      text: l.intl.string(l.t["JtWl+f"])
    }],
    "aria-labelledby": m,
    graphic: {
      type: "image",
      src: c
    },
    onClose: e,
    transitionState: i,
    title: l.intl.formatToPlainString(l.t["wLFT6+"], {
      tier: d.summary
    }),
    children: (0, a.jsx)(r.Text, {
      className: o.subtitle,
      variant: "text-md/medium",
      color: "header-secondary",
      children: l.intl.format(l.t.OsAK9v, {
        timestamp: null == u ? true : u.currentPeriodEnd
      })
    })
  })
}