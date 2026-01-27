/** Chunk was on web.js **/
/** chunk id: 176128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jp: () => o,
  qo: () => a
}), require("./896048.js");
var Chunk860689 = require("./860689.js"),
  Chunk652215 = require("./652215.js"),
  a = function(e) {
    return e.PUBLIC = "PUBLIC", e.INVITE_ONLY = "INVITE_ONLY", e.APPLY_TO_JOIN = "APPLY_TO_JOIN", e
  }({});

function o(e) {
  let t = new Set(e.features),
    n = "INVITE_ONLY";
  t.has(i.GuildFeatures.COMMUNITY) && t.has(i.GuildFeatures.DISCOVERABLE) ? n = "PUBLIC" : t.has(i.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && t.has(i.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && (n = "APPLY_TO_JOIN");
  let a = s(e),
    o = 0;
  if (a) {
    var l;
    o = null != (l = (0, r.fh)(e) ? e.premiumSubscriberCount : e.premiumSubscriptionCount) ? l : 0
  }
  let c = (0, r.fh)(e) ? e.premiumTier : i.TVA.NONE;
  return {
    verified: t.has(i.GuildFeatures.VERIFIED),
    partnered: t.has(i.GuildFeatures.PARTNERED),
    community: t.has(i.GuildFeatures.COMMUNITY),
    staff: t.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
    visibility: n,
    premium: a,
    premiumSubscriberCount: o,
    premiumTier: c
  }
}

function s(e) {
  return null != e && ((0, r.fh)(e) ? e.premiumSubscriberCount > 0 || e.premiumTier > i.TVA.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
}