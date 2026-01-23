/** Chunk was on 52396 **/
/** chunk id: 115623, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk399675 = require("./399675.js"),
  Chunk938430 = require("./938430.js");

function c(t) {
  let {
    transitionState: e,
    onClose: i,
    storeListing: c,
    subscription: u
  } = t, p = (0, s.GV)();
  return (0, a.jsx)(r.ExpressiveModal, {
    actions: [{
      variant: "secondary",
      onClick: i,
      text: l.intl.string(l.t["JtWl+a"])
    }],
    "aria-labelledby": p,
    graphic: {
      type: "image",
      src: d
    },
    onClose: i,
    transitionState: e,
    title: l.intl.formatToPlainString(l.t.wLFT6z, {
      tier: c.summary
    }),
    children: (0, a.jsx)(n.Text, {
      className: o.VA,
      variant: "text-md/medium",
      color: "text-default",
      children: l.intl.format(l.t.OsAK9h, {
        timestamp: null == u ? true : u.currentPeriodEnd
      })
    })
  })
}