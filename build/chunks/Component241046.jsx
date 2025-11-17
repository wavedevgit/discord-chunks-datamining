/** Chunk was on 37483 **/
/** chunk id: 241046, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
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
  } = t, u = s.useCallback(() => {
    (0, d.yw)(r.rMx.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: c.x2.BUG,
      decision_id: n.decisionId,
      message_id: n.messageId,
      content: n.messageContent
    }), (0, l.Xx)(n.messageId, n.channel, o.d.SUBMIT_FEEDBACK), p()
  }, [n, p]);
  return (0, i.jsx)(a.Modal, {
    onClose: p,
    transitionState: e,
    title: C.intl.string(C.t["7bdzNo"]),
    subtitle: C.intl.string(C.t.Lbpk6m),
    actions: [{
      text: C.intl.string(C.t["ETE/oC"]),
      onClick: p,
      variant: "secondary"
    }, {
      text: C.intl.string(C.t.p89ACt),
      onClick: u
    }]
  })
}