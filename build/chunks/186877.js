/** Chunk was on 88647 **/
/** chunk id: 186877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk355298 = require("./355298.js"),
  Chunk88101 = require("./88101.js"),
  Chunk375954 = require("./375954.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
    n = t ? e.getRecipientId() : null,
    u = (0, l.P)(e.id);
  return (0, r.e7)([a.Z, i.Z, o.Z, s.default], () => {
    if (null != u || !t || i.Z.isMessageRequest(e.id) || null != n && o.Z.getRelationshipType(n) === c.OGo.BLOCKED) returnfalse;
    if (null != n) {
      let e = s.default.getUser(n);
      if (null != e && e.hasFlag(c.xW$.PROVISIONAL_ACCOUNT)) returnfalse
    }
    let r = a.Z.getMessages(e.id);
    return r.ready && !r.hasMoreBefore && !r.hasMoreAfter && r.length < 25 && !a.Z.hasCurrentUserSentMessage(e.id)
  }, [u, t, e.id, n])
}