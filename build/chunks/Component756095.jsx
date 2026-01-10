/** Chunk was on 81985 **/
/** chunk id: 756095, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => f,
  default: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45251 = require("./45251.js"),
  Chunk353077 = require("./353077.jsx"),
  Chunk618857 = require("./618857.jsx"),
  Chunk388032 = require("./388032.jsx");
let f = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";

function h(e) {
  let {
    scheduledMessage: t,
    transitionState: n,
    onClose: l
  } = e, h = a()(t.sendAtTimestamp.substring(0, 200)), [g, m] = i.useState(h), [b, y] = i.useState(false), v = async () => {
    y(true);
    try {
      await (0, c.P4)(t.scheduledMessageId, g.toISOString()), (0, d.eD)(), (0, s.Mr3)(f)
    } catch (e) {
      (0, d.$X)(e.message)
    } finally {
      y(false)
    }
  };
  return (0, r.jsx)(o.Modal, {
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
      onClick: v,
      loading: b
    }],
    children: (0, r.jsx)(u.Z, {
      defaultValue: h,
      onChange: m
    })
  })
}