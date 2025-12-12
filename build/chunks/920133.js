/** Chunk was on web.js **/
/** chunk id: 920133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => a,
  Q: () => o
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  r.default.track(i.rMx.DM_SETTINGS_UPSELL_ACTION, {
    action: e,
    guild_id: t
  })
}
var o = function(e) {
  return e.MODAL_VIEWED = "modal_viewed", e.MODAL_DISMISSED = "modal_dismissed", e.MODAL_GUILD_SETTINGS_CLICKED = "modal_guild_settings_clicked", e.SUPPRESSED_BY_COOLDOWN = "suppressed_by_cooldown", e.MODAL_DISABLED_DMS = "modal_disabled_dms", e
}({})