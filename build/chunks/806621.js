/** Chunk was on 61344 **/
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
  return (0, l.bG)([a.A, r.A, s.A, o.default], () => {
    if (null != u || !t || r.A.isMessageRequest(e.id) || null != n && s.A.getRelationshipType(n) === c.eA$.BLOCKED) returnfalse;
    if (null != n) {
      let e = o.default.getUser(n);
      if (null != e && e.hasFlag(c.nhx.PROVISIONAL_ACCOUNT)) returnfalse
    }
    let l = a.A.getMessages(e.id);
    return l.ready && !l.hasMoreBefore && !l.hasMoreAfter && l.length < 25 && !a.A.hasCurrentUserSentMessage(e.id)
  }, [u, t, e.id, n])
}