/** Chunk was on web.js **/
/** chunk id: 836039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EM: () => d,
  Y5: () => o,
  a1: () => c,
  mk: () => u,
  tE: () => l
});
var Chunk636194 = require("./636194.js"),
  Chunk71393 = require("./71393.js"),
  Chunk867164 = require("./867164.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  return null != e && e.includes(a.t.NEW_PURCHASES_DISABLED)
}

function l(e) {
  var t;
  if (null == e) returnfalse;
  let n = r.A.getMonetizationRestrictionsFetchState(e),
    a = r.A.getMonetizationRestrictions(e),
    l = i.A.getGuild(e);
  return n === r.e.FETCHED ? o(a) : null == (t = null == l ? true : l.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t
}

function c(e) {
  return null != e && e.includes(a.t.SETTINGS_READ_ONLY)
}

function u(e) {
  var t;
  if (null == e) returnfalse;
  let n = r.A.getMonetizationRestrictionsFetchState(e),
    a = r.A.getMonetizationRestrictions(e),
    o = i.A.getGuild(e);
  return n === r.e.FETCHED ? c(a) : null == (t = null == o ? true : o.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t
}

function d(e) {
  return null != e && e.includes(a.t.REAPPLICATION_DISABLED)
}