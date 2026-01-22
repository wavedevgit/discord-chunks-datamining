/** Chunk was on web.js **/
/** chunk id: 154325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l
});
var Chunk469993 = require("./469993.js"),
  Chunk836039 = require("./836039.js"),
  Chunk567305 = require("./567305.js"),
  Chunk555325 = require("./555325.js"),
  Chunk287809 = require("./287809.js");

function l(e) {
  var t;
  let n = e.ownerId === (null == (t = o.default.getCurrentUser()) ? true : t.id);
  return (0, s.V9)({
    guild: e,
    isOwner: n,
    canManageGuildRoleSubscriptions: (0, s.X9)(e),
    isMonetizationWaitlistEnabledForGuild: (0, r.Kw)(e.id),
    isGuildEligibleForRoleSubscriptions: (0, a.OV)(e.id),
    isExpeditedMonetizationOnboardingGuild: (0, r.Sm)(e),
    isUserInCreatorMonetizationEligibleCountry: (0, r.Z1)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.mk)(e.id)
  })
}