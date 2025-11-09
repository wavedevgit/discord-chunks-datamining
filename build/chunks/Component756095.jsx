/** Chunk was on 50642 **/
/** chunk id: 756095, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => h,
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45251 = require("./45251.js"),
  Chunk353077 = require("./353077.jsx"),
  Chunk618857 = require("./618857.jsx"),
  Chunk388032 = require("./388032.jsx");
let h = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";

function f(e) {
  let {
    scheduledMessage: t,
    transitionState: n,
    onClose: l
  } = e, f = a()(t.sendAtTimestamp.substring(0, 200)), [m, g] = r.useState(f), [b, y] = r.useState(false), C = async () => {
    y(true);
    try {
      await (0, c.P4)(t.scheduledMessageId, m.toISOString()), (0, d.eD)(), (0, s.Mr3)(h)
    } catch (e) {
      (0, d.$X)(e.message)
    } finally {
      y(false)
    }
  };
  return (0, i.jsx)(o.Modal, {
    transitionState: n,
    size: "md",
    title: p.intl.string(p.t.jbdHj3),
    onClose: l,
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: l
    }, {
      variant: "primary",
      text: p.intl.string(p.t.VZANAD),
      onClick: C,
      loading: b
    }],
    children: (0, i.jsx)(u.Z, {
      defaultValue: f,
      onChange: g
    })
  })
}