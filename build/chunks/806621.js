/** Chunk was on 1113 **/
/** chunk id: 806621, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk380335 = require("./380335.js"),
  Chunk74114 = require("./74114.js"),
  Chunk320501 = require("./320501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
    n = t ? e.getRecipientId() : null,
    u = (0, i.l)(e.id);
  return (0, r.bG)([s.A, l.A, a.A, o.default], () => {
    if (null != u || !t || l.A.isMessageRequest(e.id) || null != n && a.A.getRelationshipType(n) === c.eA$.BLOCKED) returnfalse;
    if (null != n) {
      let e = o.default.getUser(n);
      if (null != e && e.hasFlag(c.nhx.PROVISIONAL_ACCOUNT)) returnfalse
    }
    let r = s.A.getMessages(e.id);
    return r.ready && !r.hasMoreBefore && !r.hasMoreAfter && r.length < 25 && !s.A.hasCurrentUserSentMessage(e.id)
  }, [u, t, e.id, n])
}