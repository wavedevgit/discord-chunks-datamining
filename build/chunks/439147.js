/** Chunk was on 98797 **/
/** chunk id: 439147, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./638769.js"), require("./264879.js");
var Chunk562465 = require("./562465.js"),
  Chunk626584 = require("./626584.js"),
  Chunk152007 = require("./152007.js"),
  Chunk867455 = require("./867455.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");
let A = new Chunk626584.A("markUnread");
async function T(t, e) {
  let n = d.default.getCurrentUser();
  if (null == n) return;
  let i = u.A.getMessages(t),
    T = i.toArray().filter(t => 0 > c.default.compare(t.id, e)).sort((t, e) => c.default.compare(t.id, e.id)).reverse()[0],
    E = null == T ? c.default.atPreviousMillisecond(e) : T.id,
    _ = 0;
  i.forAll(t => {
    c.default.compare(t.id, E) > 0 && (0, s.Wm)(t, n) && _++
  });
  let g = o.A.getChannel(t);
  null != g && g.isThread() && (g.isArchivedThread() && await a.A.unarchiveThread(g, false), l.A.hasJoined(t) || await a.A.joinThread(g, "Mark Unread")), A.log("Marking unread", {
    channelId: t,
    messageId: e
  }), r.Bo.post({
    url: m.Rsh.MESSAGE_ACK(t, E),
    body: {
      manual: true,
      mention_count: _
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}