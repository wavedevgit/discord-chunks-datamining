/** Chunk was on 35934 **/
/** chunk id: 25997, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk956793 = require("./956793.js"),
  Chunk849736 = require("./849736.js"),
  Chunk985018 = require("./985018.jsx");
let c = t => {
  let {
    channel: i,
    transitionState: n,
    onClose: c
  } = t;
  return (0, a.jsx)(r.Modal, {
    transitionState: n,
    title: l.intl.string(l.t.xrYNBI),
    subtitle: l.intl.string(l.t.TP1D8l),
    onClose: c,
    actions: [{
      text: l.intl.string(l.t["ETE/oC"]),
      onClick: c,
      variant: "secondary"
    }, {
      text: l.intl.string(l.t.saZaRb),
      onClick: () => {
        (0, e.OE)(i), s.default.disconnect(), c()
      },
      variant: "critical-primary"
    }]
  })
}