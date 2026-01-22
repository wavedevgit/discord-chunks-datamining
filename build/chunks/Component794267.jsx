/** Chunk was on 15112 **/
/** chunk id: 794267, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk58149 = require("./58149.js"),
  Chunk845625 = require("./845625.js"),
  Chunk615550 = require("./615550.js"),
  Chunk137207 = require("./137207.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(t) {
  let {
    automodDecision: e,
    transitionState: n,
    onClose: p
  } = t, k = s.useCallback(() => {
    (0, d.zV)(r.HAw.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: c.Gb.BUG,
      decision_id: e.decisionId,
      message_id: e.messageId,
      content: e.messageContent
    }), (0, l.E5)(e.messageId, e.channel, o.G.SUBMIT_FEEDBACK), p()
  }, [e, p]);
  return (0, i.jsx)(a.Modal, {
    onClose: p,
    transitionState: n,
    title: C.intl.string(C.t["7bdzNo"]),
    subtitle: C.intl.string(C.t.Lbpk6m),
    actions: [{
      text: C.intl.string(C.t["ETE/oC"]),
      onClick: p,
      variant: "secondary"
    }, {
      text: C.intl.string(C.t.p89ACt),
      onClick: k
    }]
  })
}