/** Chunk was on 92917 **/
/** chunk id: 974103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ic: () => c,
  nc: () => o,
  w: () => u
});
var Chunk311907 = require("./311907.js");
require("./928108.js");
var Chunk576705 = require("./576705.js"),
  Chunk903093 = require("./903093.js"),
  Chunk610136 = require("./610136.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.A;
  return t.can(s.xBc.BAN_MEMBERS, e) || t.can(s.xBc.KICK_MEMBERS, e) || t.can(s.xBc.MODERATE_MEMBERS, e) || t.can(s.xBc.MANAGE_GUILD, e)
}

function c(e) {
  let t = (0, r.bG)([i.A], () => o(e, i.A), [e]),
    n = (0, r.bG)([a.A], () => null != e ? a.A.getGuildIncident(e.id) : null, [e]);
  return !(null != n && (0, l.k$)(n)) && t
}

function u(e) {
  return (0, r.bG)([i.A], () => (function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.A;
    return t.can(s.xBc.MANAGE_GUILD, e)
  })(e, i.A), [e])
}