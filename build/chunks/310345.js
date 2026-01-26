/** Chunk was on 39048 **/
/** chunk id: 310345, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  dl: () => s,
  hV: () => a
});
var Chunk954571 = require("./954571.js"),
  Chunk814758 = require("./814758.js"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  let n = false,
    i = {
      guild_id: e.id,
      automatic: false
    };
  (null == t || e.discoverySplash !== t.discoverySplash) && (i.discovery_splash_edit_type = null == e.discoverySplash ? "removed" : "uploaded", n = true), (null == t || e.features.has(l.GuildFeatures.DISCOVERABLE) !== t.features.has(l.GuildFeatures.DISCOVERABLE)) && (i.is_discoverable = e.features.has(l.GuildFeatures.DISCOVERABLE), n = true), (null == t || e.rulesChannelId !== t.rulesChannelId) && (i.rules_channel_id = e.rulesChannelId, n = true), n && r.default.track(l.HAw.GUILD_SETTINGS_DISCOVERY_UPDATED, i)
}

function a(e) {
  var t, n;
  return null != (t = null == (n = i.Dz[e]) ? true : n.map(e => e())) ? t : []
}