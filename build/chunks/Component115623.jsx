/** Chunk was on 52396 **/
/** chunk id: 115623, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk399675 = require("./399675.js"),
  Chunk938430 = require("./938430.js");

function d(t) {
  let {
    transitionState: a,
    onClose: e,
    storeListing: d,
    subscription: p
  } = t, u = (0, s.GV)();
  return (0, i.jsx)(r.ExpressiveModal, {
    actions: [{
      variant: "secondary",
      onClick: e,
      text: l.intl.string(l.t["JtWl+a"])
    }],
    "aria-labelledby": u,
    graphic: {
      type: "image",
      src: o
    },
    onClose: e,
    transitionState: a,
    title: l.intl.formatToPlainString(l.t.wLFT6z, {
      tier: d.summary
    }),
    children: (0, i.jsx)(n.Text, {
      className: c.VA,
      variant: "text-md/medium",
      color: "text-default",
      children: l.intl.format(l.t.OsAK9h, {
        timestamp: null == p ? true : p.currentPeriodEnd
      })
    })
  })
}