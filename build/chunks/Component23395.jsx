/** Chunk was on 97887 **/
/** chunk id: 23395, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => h,
  default: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk151282 = require("./151282.js"),
  Chunk388096 = require("./388096.jsx"),
  Chunk970244 = require("./970244.jsx"),
  Chunk985018 = require("./985018.jsx");
let h = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";

function f(e) {
  let {
    scheduledMessage: t,
    transitionState: n,
    onClose: i
  } = e, f = s()(t.sendAtTimestamp.substring(0, 200)), [g, m] = l.useState(f), [b, A] = l.useState(false), y = async () => {
    A(true);
    try {
      await (0, c.Eg)(t.scheduledMessageId, g.toISOString()), (0, d.kb)(), (0, o.OoC)(h)
    } catch (e) {
      (0, d.xP)(e.message)
    } finally {
      A(false)
    }
  };
  return (0, r.jsx)(a.Modal, {
    transitionState: n,
    size: "md",
    title: p.intl.string(p.t.jbdHj3),
    onClose: i,
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: i
    }, {
      variant: "primary",
      text: p.intl.string(p.t.VZANAD),
      onClick: y,
      loading: b
    }],
    children: (0, r.jsx)(u.A, {
      defaultValue: f,
      onChange: m
    })
  })
}