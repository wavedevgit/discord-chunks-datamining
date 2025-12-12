/** Chunk was on web.js **/
/** chunk id: 738774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ol: () => l,
  Q6: () => c,
  cu: () => u,
  m8: () => d,
  uq: () => s
});
var Chunk289393 = require("./289393.js"),
  Chunk430824 = require("./430824.js"),
  Chunk308636 = require("./308636.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return null != e && e.includes(a.o.NEW_PURCHASES_DISABLED)
}

function l(e) {
  var t;
  if (null == e) returnfalse;
  let n = r.Z.getMonetizationRestrictionsFetchState(e),
    a = r.Z.getMonetizationRestrictions(e),
    l = i.Z.getGuild(e);
  return n === r.M.FETCHED ? s(a) : null == (t = null == l ? true : l.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t
}

function c(e) {
  return null != e && e.includes(a.o.SETTINGS_READ_ONLY)
}

function u(e) {
  var t;
  if (null == e) returnfalse;
  let n = r.Z.getMonetizationRestrictionsFetchState(e),
    a = r.Z.getMonetizationRestrictions(e),
    s = i.Z.getGuild(e);
  return n === r.M.FETCHED ? c(a) : null == (t = null == s ? true : s.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t
}

function d(e) {
  return null != e && e.includes(a.o.REAPPLICATION_DISABLED)
}