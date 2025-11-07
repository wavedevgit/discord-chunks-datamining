/** Chunk was on 64982 **/
/** chunk id: 490597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P5: () => s,
  UA: () => a
});
var Chunk626135 = require("./626135.js"),
  Chunk929834 = require("./929834.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  let n = false,
    i = {
      guild_id: e.id,
      automatic: false
    };
  (null == t || e.discoverySplash !== t.discoverySplash) && (i.discovery_splash_edit_type = null == e.discoverySplash ? "removed" : "uploaded", n = true), (null == t || e.features.has(l.GuildFeatures.DISCOVERABLE) !== t.features.has(l.GuildFeatures.DISCOVERABLE)) && (i.is_discoverable = e.features.has(l.GuildFeatures.DISCOVERABLE), n = true), (null == t || e.rulesChannelId !== t.rulesChannelId) && (i.rules_channel_id = e.rulesChannelId, n = true), n && r.default.track(l.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, i)
}

function s(e) {
  var t, n;
  return null != (n = null == (t = i.U2[e]) ? true : t.map(e => e())) ? n : []
}