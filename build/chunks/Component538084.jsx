/** Chunk was on 57336 **/
/** chunk id: 538084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d,
  k: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45251 = require("./45251.js"),
  Chunk353077 = require("./353077.jsx"),
  Chunk388032 = require("./388032.jsx");
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";

function d(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: d,
    defaultValue: p
  } = e, [h, f] = r.useState(p);
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    size: "md",
    title: c.intl.string(c.t["3+ii4F"]),
    onClose: d,
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: d
    }, {
      variant: "primary",
      text: c.intl.string(c.t.iQ1SwX),
      onClick: () => {
        (0, o._e)({
          channelId: t.id,
          scheduledTimestamp: h.toISOString()
        }), (0, a.Mr3)(u)
      }
    }],
    children: (0, i.jsx)(s.Z, {
      defaultValue: p,
      onChange: f
    })
  })
}