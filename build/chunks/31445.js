/** Chunk was on web.js **/
/** chunk id: 31445, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a,
  t: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk160404 = require("./160404.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  return (0, r.e7)([i.Z], () => {
    if ((null == e ? true : e.id) == null) returnfalse;
    let t = i.Z.isFullServerPreview(e.id),
      n = i.Z.isOnboardingEnabled(e.id);
    return t && n
  }) || (null == e ? true : e.features.has(o.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
}

function s(e) {
  if (null == e) returnfalse;
  let t = i.Z.isFullServerPreview(e.id),
    n = i.Z.isOnboardingEnabled(e.id);
  return t && n || e.features.has(o.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
}