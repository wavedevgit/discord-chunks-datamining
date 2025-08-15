/** Chunk was on 2634 **/
/** chunk id: 548841, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk287734 = require("./287734.js"),
  Chunk471253 = require("./471253.js"),
  Chunk388032 = require("./388032.jsx");
let o = t => {
  let {
    channel: n,
    transitionState: e,
    onClose: o
  } = t;
  return (0, i.jsx)(r.Modal, {
    transitionState: e,
    title: u.intl.string(u.t.xrYNBA),
    subtitle: u.intl.string(u.t.TP1D8v),
    onClose: o,
    actions: [{
      text: u.intl.string(u.t["ETE/oK"]),
      onClick: o,
      variant: "secondary"
    }, {
      text: u.intl.string(u.t.saZaRU),
      onClick: () => {
        (0, a.NZ)(n), l.default.disconnect(), o()
      },
      variant: "critical-primary"
    }]
  })
}