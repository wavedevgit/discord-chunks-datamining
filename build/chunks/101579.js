/** Chunk was on 94503 **/
/** chunk id: 101579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => o
});
var Chunk335871 = require("./335871.js"),
  Chunk73153 = require("./73153.js"),
  Chunk594061 = require("./594061.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");
async function o(e, t) {
  await (0, a.TG)(e, e => (e.guildRecentsDismissedAt = l.D.fromDate(new Date), true), a.Sb.INFREQUENT_USER_ACTION), r.h.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), i.default.track(s.HAw.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}