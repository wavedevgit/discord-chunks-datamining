/** Chunk was on web.js **/
/** chunk id: 202776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  u: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk164956 = require("./164956.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  return (0, r.bG)([i.A], () => {
    if ((null == e ? true : e.id) == null) returnfalse;
    let t = i.A.isFullServerPreview(e.id),
      n = i.A.isOnboardingEnabled(e.id);
    return t && n
  }) || (null == e ? true : e.features.has(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
}

function o(e) {
  if (null == e) returnfalse;
  let t = i.A.isFullServerPreview(e.id),
    n = i.A.isOnboardingEnabled(e.id);
  return t && n || e.features.has(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
}