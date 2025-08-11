/** Chunk was on 2634 **/
/** chunk id: 548841, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk287734 = require("./287734.js"),
  Chunk471253 = require("./471253.js"),
  Chunk388032 = require("./388032.jsx");
let c = t => {
  let {
    channel: i,
    transitionState: n,
    onClose: c
  } = t;
  return (0, a.jsx)(r.Modal, {
    transitionState: n,
    title: l.intl.string(l.t.xrYNBA),
    subtitle: l.intl.string(l.t.TP1D8v),
    onClose: c,
    actions: [{
      text: l.intl.string(l.t["ETE/oK"]),
      onClick: c,
      variant: "secondary"
    }, {
      text: l.intl.string(l.t.saZaRU),
      onClick: () => {
        (0, e.NZ)(i), s.default.disconnect(), c()
      },
      variant: "critical-primary"
    }]
  })
}