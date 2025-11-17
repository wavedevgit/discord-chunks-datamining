/** Chunk was on 2634 **/
/** chunk id: 548841, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
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
        (0, e.NZ)(i), s.default.disconnect(), c()
      },
      variant: "critical-primary"
    }]
  })
}