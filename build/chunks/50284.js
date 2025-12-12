/** Chunk was on web.js **/
/** chunk id: 50284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./642613.js"), require("./583741.js");
var Chunk544891 = require("./544891.js"),
  Chunk710845 = require("./710845.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");
let p = new Chunk710845.Z("markUnread");
async function _(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let i = l.Z.getMessages(e),
    _ = i.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
    m = null == _ ? d.default.atPreviousMillisecond(t) : _.id,
    h = 0;
  i.forAll(e => {
    d.default.compare(e.id, m) > 0 && (0, c.Ex)(e, n) && h++
  });
  let g = s.Z.getChannel(e);
  null != g && g.isThread() && (g.isArchivedThread() && await a.Z.unarchiveThread(g, false), o.Z.hasJoined(e) || await a.Z.joinThread(g, "Mark Unread")), p.log("Marking unread", {
    channelId: e,
    messageId: t
  }), r.tn.post({
    url: f.ANM.MESSAGE_ACK(e, m),
    body: {
      manual: true,
      mention_count: h
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}