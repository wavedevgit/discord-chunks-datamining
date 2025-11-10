/** Chunk was on web.js **/
/** chunk id: 162157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BT: () => d,
  N8: () => c,
  al: () => l
});
var Chunk442837 = require("./442837.js");
require("./467319.js");
var Chunk496675 = require("./496675.js"),
  Chunk533244 = require("./533244.js"),
  Chunk487419 = require("./487419.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.Z;
  return t.can(s.Plq.BAN_MEMBERS, e) || t.can(s.Plq.KICK_MEMBERS, e) || t.can(s.Plq.MODERATE_MEMBERS, e) || t.can(s.Plq.MANAGE_GUILD, e)
}

function c(e) {
  let t = (0, r.e7)([i.Z], () => l(e, i.Z), [e]),
    n = (0, r.e7)([o.Z], () => null != e ? o.Z.getGuildIncident(e.id) : null, [e]);
  return !(null != n && (0, a.i9)(n)) && t
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.Z;
  return t.can(s.Plq.MANAGE_GUILD, e)
}

function d(e) {
  return (0, r.e7)([i.Z], () => u(e, i.Z), [e])
}