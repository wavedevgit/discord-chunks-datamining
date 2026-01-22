/** Chunk was on web.js **/
/** chunk id: 101750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2023-10_social_proofing_message_nitro_badge",
  label: "Social Proofing Message Nitro Badge",
  defaultConfig: {
    enabled: false,
    hideNitroBadgeWhenRoleBadgePresent: false
  },
  treatments: [{
    id: 1,
    label: "Prefer BOTH nitro badge AND role icon(s)",
    config: {
      enabled: true,
      hideNitroBadgeWhenRoleBadgePresent: false
    }
  }, {
    id: 2,
    label: "Prefer role icon(s) over nitro badge if both are present",
    config: {
      enabled: true,
      hideNitroBadgeWhenRoleBadgePresent: true
    }
  }]
});

function i(e, t) {
  let n = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n.enabled && (!n.hideNitroBadgeWhenRoleBadgePresent || n.hideNitroBadgeWhenRoleBadgePresent && !e)
}