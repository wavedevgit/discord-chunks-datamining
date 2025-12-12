/** Chunk was on web.js **/
/** chunk id: 854218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PZ: () => o,
  XX: () => a
}), require("./388685.js");
var Chunk411198 = require("./411198.js"),
  Chunk981631 = require("./981631.js"),
  o = function(e) {
    return e.PUBLIC = "PUBLIC", e.INVITE_ONLY = "INVITE_ONLY", e.APPLY_TO_JOIN = "APPLY_TO_JOIN", e
  }({});

function a(e) {
  let t = new Set(e.features),
    n = "INVITE_ONLY";
  t.has(i.GuildFeatures.COMMUNITY) && t.has(i.GuildFeatures.DISCOVERABLE) ? n = "PUBLIC" : t.has(i.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && t.has(i.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && (n = "APPLY_TO_JOIN");
  let o = s(e),
    a = 0;
  if (o) {
    var l;
    a = null != (l = (0, r.lM)(e) ? e.premiumSubscriberCount : e.premiumSubscriptionCount) ? l : 0
  }
  let c = (0, r.lM)(e) ? e.premiumTier : i.Eu4.NONE;
  return {
    verified: t.has(i.GuildFeatures.VERIFIED),
    partnered: t.has(i.GuildFeatures.PARTNERED),
    community: t.has(i.GuildFeatures.COMMUNITY),
    staff: t.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
    visibility: n,
    premium: o,
    premiumSubscriberCount: a,
    premiumTier: c
  }
}

function s(e) {
  return null != e && ((0, r.lM)(e) ? e.premiumSubscriberCount > 0 || e.premiumTier > i.Eu4.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
}