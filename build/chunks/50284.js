/** Chunk was on 11868 **/
/** chunk id: 50284, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
let E = new Chunk710845.Z("markUnread");
async function I(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let i = c.Z.getMessages(e),
    I = i.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
    T = null == I ? d.default.atPreviousMillisecond(t) : I.id,
    O = 0;
  i.forAll(e => {
    d.default.compare(e.id, T) > 0 && (0, s.Ex)(e, n) && O++
  });
  let p = o.Z.getChannel(e);
  null != p && p.isThread() && (p.isArchivedThread() && await a.Z.unarchiveThread(p, false), l.Z.hasJoined(e) || await a.Z.joinThread(p, "Mark Unread")), E.log("Marking unread", {
    channelId: e,
    messageId: t
  }), r.tn.post({
    url: _.ANM.MESSAGE_ACK(e, T),
    body: {
      manual: true,
      mention_count: O
    },
    oldFormErrors: true,
    rejectWithError: true
  })
}