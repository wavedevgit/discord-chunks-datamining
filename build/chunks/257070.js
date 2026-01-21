/** Chunk was on 81985 **/
/** chunk id: 257070, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => d
});
var Chunk427164 = require("./427164.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");
let u = (0, Chunk427164.le)({
  name: "2026-01-red-dot-navigate-to-mentions",
  kind: "user",
  defaultConfig: {
    enableTracking: false
  },
  variations: {
    1: {
      enableTracking: true
    }
  }
});

function d(e, t) {
  if (!c.TPd.GUILD_TEXTUAL.has(e.type) || !t.ready) return;
  let n = a.default.getCurrentUser();
  if (null == n) return;
  let r = l.ZP.getMentionCount(e.id);
  if (r <= 0) return;
  let {
    enableTracking: d
  } = u.getConfig({
    location: "trackMentionsOnInitialUnreadChannelLoad"
  });
  if (!d) return;
  let p = l.ZP.ackMessageId(e.id),
    f = null != p;
  if (null == p) {
    let t = i.Z.getGuild(e.guild_id);
    null != t && null != t.joinedAt && (p = s.default.fromTimestamp(t.joinedAt.getTime()))
  }
  let h = 0;
  t.forAll(e => {
    s.default.compare(e.id, p) > 0 && (0, l.Ex)(e, n) && h++
  }), o.default.track(c.rMx.CHANNEL_WITH_UNREAD_MENTIONS_LOADED, {
    channel_id: e.id,
    channel_type: e.type,
    total_badge_count: r,
    loaded_mention_count: h,
    has_previous_ack: f
  })
}