/** Chunk was on 73734 **/
/** chunk id: 439147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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
let _ = new Chunk626584.A("markUnread");
async function A(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let i = s.A.getMessages(e),
    A = i.toArray().filter(e => 0 > E.default.compare(e.id, t)).sort((e, t) => E.default.compare(e.id, t.id)).reverse()[0],
    T = null == A ? E.default.atPreviousMillisecond(t) : A.id,
    I = 0;
  i.forAll(e => {
    E.default.compare(e.id, T) > 0 && (0, c.Wm)(e, n) && I++
  });
  let O = o.A.getChannel(e);
  null != O && O.isThread() && (O.isArchivedThread() && await a.A.unarchiveThread(O, false), l.A.hasJoined(e) || await a.A.joinThread(O, "Mark Unread")), _.log("Marking unread", {
    channelId: e,
    messageId: t
  }), r.Bo.post({
    url: d.Rsh.MESSAGE_ACK(e, T),
    body: {
      manual: true,
      mention_count: I
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}