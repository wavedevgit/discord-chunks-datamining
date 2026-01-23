/** Chunk was on web.js **/
/** chunk id: 542675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk15285 = require("./15285.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk980504 = require("./980504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function d(e, t) {
  return e.guildId === l.mV ? "default" : t ? "custom-external" : "custom"
}

function f(e, t, n, f, p) {
  var _;
  let h = i.A.getChannel(s.A.getVoiceChannelId()),
    m = null == h ? true : h.getGuildId(),
    g = a.A.getMediaSessionId(),
    E = a.A.getRTCConnectionId(),
    y = null == (_ = r.Ay.getCurrentGameForAnalytics()) ? true : _.name,
    b = m !== n.guildId && n.guildId !== l.mV,
    O = d(n, b);
  o.default.track(c.HAw.PREMIUM_FEATURE_USAGE, {
    feature_name: u.Ae.SOUNDBOARD_PLAY,
    feature_tier: b ? u.tz.PREMIUM_STANDARD : u.tz.FREE,
    guild_id: m,
    home_guild_id: n.guildId,
    location_stack: e,
    rtc_connection_id: E,
    media_session_id: g,
    in_overlay: t,
    application_name: y,
    emoji_count: +(null != n.emojiId || null != n.emojiName),
    feature_selection: O,
    feature_selection_id: n.soundId,
    sound_type: f,
    sequence_number: null != p ? p + 1 : null
  })
}