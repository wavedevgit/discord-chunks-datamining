/** Chunk was on web.js **/
/** chunk id: 100986, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk594190 = require("./594190.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function d(e, t) {
  return e.guildId === l.X8 ? "default" : t ? "custom-external" : "custom"
}

function f(e, t, n, f) {
  var _;
  let p = i.Z.getChannel(o.Z.getVoiceChannelId()),
    h = null == p ? true : p.getGuildId(),
    m = a.Z.getMediaSessionId(),
    g = a.Z.getRTCConnectionId(),
    E = null == (_ = r.ZP.getCurrentGameForAnalytics()) ? true : _.name,
    b = h !== n.guildId && n.guildId !== l.X8,
    y = d(n, b);
  s.default.track(c.rMx.PREMIUM_FEATURE_USAGE, {
    feature_name: u.QP.SOUNDBOARD_PLAY,
    feature_tier: b ? u.h1.PREMIUM_STANDARD : u.h1.FREE,
    guild_id: h,
    home_guild_id: n.guildId,
    location_stack: e,
    rtc_connection_id: g,
    media_session_id: m,
    in_overlay: t,
    application_name: E,
    emoji_count: +(null != n.emojiId || null != n.emojiName),
    feature_selection: y,
    feature_selection_id: n.soundId,
    sound_type: f
  })
}