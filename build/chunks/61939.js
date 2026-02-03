/** Chunk was on 61344 **/
/** chunk id: 61939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => d
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
    enableTracking: false,
    enableNavigation: false
  },
  variations: {
    1: {
      enableTracking: true,
      enableNavigation: false
    },
    2: {
      enableTracking: true,
      enableNavigation: true
    }
  }
});

function d(e, t) {
  if (!c.kvI.GUILD_TEXTUAL.has(e.type) || !t.ready) return null;
  let n = a.default.getCurrentUser();
  if (null == n) return null;
  let l = i.Ay.getMentionCount(e.id);
  if (l <= 0) return null;
  let {
    enableTracking: d,
    enableNavigation: h
  } = u.getConfig({
    location: "trackMentionsOnInitialUnreadChannelLoad"
  });
  if (!d && !h) return null;
  let p = i.Ay.ackMessageId(e.id),
    f = null != p;
  if (null == p) {
    let t = r.A.getGuild(e.guild_id);
    null != t && null != t.joinedAt && (p = o.default.fromTimestamp(t.joinedAt.getTime()))
  }
  let m = 0,
    g = null;
  return t.forAll(e => {
    o.default.compare(e.id, p) > 0 && (0, i.Wm)(e, n) && (m++, h && (null == g || 0 > o.default.compare(e.id, g)) && (g = e.id))
  }), d && s.default.track(c.HAw.CHANNEL_WITH_UNREAD_MENTIONS_LOADED, {
    channel_id: e.id,
    channel_type: e.type,
    total_badge_count: l,
    loaded_mention_count: m,
    has_previous_ack: f
  }), g
}