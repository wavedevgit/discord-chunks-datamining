/** Chunk was on web.js **/
/** chunk id: 974103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ic: () => c,
  nc: () => l,
  w: () => d
});
var Chunk311907 = require("./311907.js");
require("./928108.js");
var Chunk576705 = require("./576705.js"),
  Chunk903093 = require("./903093.js"),
  Chunk610136 = require("./610136.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.A;
  return t.can(o.xBc.BAN_MEMBERS, e) || t.can(o.xBc.KICK_MEMBERS, e) || t.can(o.xBc.MODERATE_MEMBERS, e) || t.can(o.xBc.MANAGE_GUILD, e)
}

function c(e) {
  let t = (0, r.bG)([i.A], () => l(e, i.A), [e]),
    n = (0, r.bG)([s.A], () => null != e ? s.A.getGuildIncident(e.id) : null, [e]);
  return !(null != n && (0, a.k$)(n)) && t
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.A;
  return t.can(o.xBc.MANAGE_GUILD, e)
}

function d(e) {
  return (0, r.bG)([i.A], () => u(e, i.A), [e])
}