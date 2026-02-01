/** Chunk was on 61344 **/
/** chunk id: 61939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => d
});
var Chunk945810 = require("./945810.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");
let u = (0, Chunk945810.mj)({
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
  if (!c.kvI.GUILD_TEXTUAL.has(e.type) || !t.ready) return;
  let n = a.default.getCurrentUser();
  if (null == n) return;
  let l = i.Ay.getMentionCount(e.id);
  if (l <= 0) return;
  let {
    enableTracking: d
  } = u.getConfig({
    location: "trackMentionsOnInitialUnreadChannelLoad"
  });
  if (!d) return;
  let h = i.Ay.ackMessageId(e.id),
    p = null != h;
  if (null == h) {
    let t = r.A.getGuild(e.guild_id);
    null != t && null != t.joinedAt && (h = o.default.fromTimestamp(t.joinedAt.getTime()))
  }
  let f = 0;
  t.forAll(e => {
    o.default.compare(e.id, h) > 0 && (0, i.Wm)(e, n) && f++
  }), s.default.track(c.HAw.CHANNEL_WITH_UNREAD_MENTIONS_LOADED, {
    channel_id: e.id,
    channel_type: e.type,
    total_badge_count: l,
    loaded_mention_count: f,
    has_previous_ack: p
  })
}