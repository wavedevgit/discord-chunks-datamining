/** Chunk was on 37483 **/
/** chunk id: 241046, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk313889 = require("./313889.js"),
  Chunk177862 = require("./177862.js"),
  Chunk36459 = require("./36459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let {
    automodDecision: n,
    transitionState: e,
    onClose: p
  } = t, C = s.useCallback(() => {
    (0, d.yw)(r.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: o.x2.BUG,
      decision_id: n.decisionId,
      message_id: n.messageId,
      content: n.messageContent
    }), (0, l.Xx)(n.messageId, n.channel, c.d.SUBMIT_FEEDBACK), p()
  }, [n, p]);
  return (0, i.jsx)(a.Modal, {
    onClose: p,
    transitionState: e,
    title: u.intl.string(u.t["7bdzNj"]),
    subtitle: u.intl.string(u.t.Lbpk6u),
    actions: [{
      text: u.intl.string(u.t["ETE/oK"]),
      onClick: p,
      variant: "secondary"
    }, {
      text: u.intl.string(u.t.p89ACg),
      onClick: C
    }]
  })
}