/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => f
});
var r = n(594190),
  i = n(592125),
  o = n(19780),
  a = n(944486),
  s = n(626135),
  l = n(710111),
  c = n(981631),
  u = n(474936);

function d(e, t) {
  return e.guildId === l.X8 ? "default" : t ? "custom-external" : "custom"
}

function f(e, t, n, f) {
  var p;
  let _ = i.Z.getChannel(a.Z.getVoiceChannelId()),
    h = null == _ ? void 0 : _.getGuildId(),
    m = o.Z.getMediaSessionId(),
    g = o.Z.getRTCConnectionId(),
    E = null === (p = r.ZP.getCurrentGameForAnalytics()) || void 0 === p ? void 0 : p.name,
    v = h !== n.guildId && n.guildId !== l.X8,
    b = d(n, v);
  s.default.track(c.rMx.PREMIUM_FEATURE_USAGE, {
    feature_name: u.QP.SOUNDBOARD_PLAY,
    feature_tier: v ? u.h1.PREMIUM_STANDARD : u.h1.FREE,
    guild_id: h,
    location_stack: e,
    rtc_connection_id: g,
    media_session_id: m,
    in_overlay: t,
    application_name: E,
    emoji_count: +(null != n.emojiId || null != n.emojiName),
    feature_selection: b,
    feature_selection_id: n.soundId,
    sound_type: f
  })
}