/** Chunk was on 54255 **/
/** chunk id: 162157, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  BT: () => l,
  N8: () => u
});
var Chunk442837 = require("./442837.js");
require("./467319.js");
var Chunk496675 = require("./496675.js"),
  Chunk533244 = require("./533244.js"),
  Chunk487419 = require("./487419.js"),
  Chunk981631 = require("./981631.js");

function u(n) {
  let e = (0, o.e7)([i.Z], () => (function(n) {
      let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.Z;
      return e.can(d.Plq.BAN_MEMBERS, n) || e.can(d.Plq.KICK_MEMBERS, n) || e.can(d.Plq.MANAGE_GUILD, n)
    })(n, i.Z), [n]),
    t = (0, o.e7)([r.Z], () => null != n ? r.Z.getGuildIncident(n.id) : null, [n]);
  return !(null != t && (0, a.i9)(t)) && e
}

function l(n) {
  return (0, o.e7)([i.Z], () => (function(n) {
    let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.Z;
    return e.can(d.Plq.MANAGE_GUILD, n)
  })(n, i.Z), [n])
}