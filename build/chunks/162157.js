/** Chunk was on 58511 **/
/** chunk id: 162157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BT: () => c,
  N8: () => s
});
var Chunk442837 = require("./442837.js");
require("./467319.js");
var Chunk496675 = require("./496675.js"),
  Chunk533244 = require("./533244.js"),
  Chunk487419 = require("./487419.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let t = (0, i.e7)([r.Z], () => (function(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.Z;
      return t.can(a.Plq.BAN_MEMBERS, e) || t.can(a.Plq.KICK_MEMBERS, e) || t.can(a.Plq.MANAGE_GUILD, e)
    })(e, r.Z), [e]),
    n = (0, i.e7)([o.Z], () => null != e ? o.Z.getGuildIncident(e.id) : null, [e]);
  return !(null != n && (0, l.i9)(n)) && t
}

function c(e) {
  return (0, i.e7)([r.Z], () => (function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.Z;
    return t.can(a.Plq.MANAGE_GUILD, e)
  })(e, r.Z), [e])
}