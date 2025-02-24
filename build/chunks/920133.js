/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  L: () => o,
  Q: () => a
});
var r = n(626135),
  i = n(981631);

function o(e, t) {
  r.default.track(i.rMx.DM_SETTINGS_UPSELL_ACTION, {
    action: e,
    guild_id: t
  })
}
var a = function(e) {
  return e.MODAL_VIEWED = "modal_viewed", e.MODAL_DISMISSED = "modal_dismissed", e.MODAL_GUILD_SETTINGS_CLICKED = "modal_guild_settings_clicked", e.SUPPRESSED_BY_COOLDOWN = "suppressed_by_cooldown", e.MODAL_DISABLED_DMS = "modal_disabled_dms", e
}({})