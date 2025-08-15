/** Chunk was on web.js **/
/** chunk id: 965638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ij: () => c,
  MQ: () => s,
  O4: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk487419 = require("./487419.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return (0, r.e7)([a.Z], () => null != e && a.Z.can(o.Plq.MANAGE_GUILD, e), [e])
}

function l(e) {
  let t = (0, r.e7)([i.Z], () => null != e ? i.Z.getGuildIncident(e.id) : null);
  return (null == e ? true : e.features.has(o.oNc.INVITES_DISABLED)) || (null == t ? true : t.invitesDisabledUntil) != null && new Date(t.invitesDisabledUntil) > new Date
}

function c(e) {
  let t = s(e),
    n = l(e);
  return t && n
}