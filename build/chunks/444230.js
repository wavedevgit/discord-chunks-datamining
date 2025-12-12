/** Chunk was on web.js **/
/** chunk id: 444230, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => l
});
var Chunk223892 = require("./223892.js"),
  Chunk738774 = require("./738774.js"),
  Chunk923726 = require("./923726.js"),
  Chunk144507 = require("./144507.js"),
  Chunk594174 = require("./594174.js");

function l(e) {
  var t;
  let n = e.ownerId === (null == (t = s.default.getCurrentUser()) ? true : t.id);
  return (0, a.X$)({
    guild: e,
    isOwner: n,
    canManageGuildRoleSubscriptions: (0, a.H2)(e),
    isMonetizationWaitlistEnabledForGuild: (0, r.mG)(e.id),
    isGuildEligibleForRoleSubscriptions: (0, o.kT)(e.id),
    isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(e),
    isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
    shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(e.id)
  })
}