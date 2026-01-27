/** Chunk was on 35934 **/
/** chunk id: 25997, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk956793 = require("./956793.js"),
  Chunk849736 = require("./849736.js"),
  Chunk985018 = require("./985018.jsx");
let s = t => {
  let {
    channel: e,
    transitionState: n,
    onClose: s
  } = t;
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    title: o.intl.string(o.t.xrYNBI),
    subtitle: o.intl.string(o.t.TP1D8l),
    onClose: s,
    actions: [{
      text: o.intl.string(o.t["ETE/oC"]),
      onClick: s,
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.saZaRb),
      onClick: () => {
        (0, a.OE)(e), r.default.disconnect(), s()
      },
      variant: "critical-primary"
    }]
  })
}