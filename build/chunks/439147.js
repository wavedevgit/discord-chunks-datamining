/** Chunk was on web.js **/
/** chunk id: 439147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
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
let p = new Chunk626584.A("markUnread");
async function _(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let i = l.A.getMessages(e),
    _ = i.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
    h = null == _ ? d.default.atPreviousMillisecond(t) : _.id,
    m = 0;
  i.forAll(e => {
    d.default.compare(e.id, h) > 0 && (0, c.Wm)(e, n) && m++
  });
  let g = o.A.getChannel(e);
  null != g && g.isThread() && (g.isArchivedThread() && await s.A.unarchiveThread(g, false), a.A.hasJoined(e) || await s.A.joinThread(g, "Mark Unread")), p.log("Marking unread", {
    channelId: e,
    messageId: t
  }), r.Bo.post({
    url: f.Rsh.MESSAGE_ACK(e, h),
    body: {
      manual: true,
      mention_count: m
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}