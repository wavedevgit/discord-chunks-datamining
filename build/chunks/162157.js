/** Chunk was on 54255 **/
/** chunk id: 162157, original params: n,t,e (module,exports,require) **/
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
  let t = (0, i.e7)([o.Z], () => (function(n) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o.Z;
      return t.can(d.Plq.BAN_MEMBERS, n) || t.can(d.Plq.KICK_MEMBERS, n) || t.can(d.Plq.MANAGE_GUILD, n)
    })(n, o.Z), [n]),
    e = (0, i.e7)([r.Z], () => null != n ? r.Z.getGuildIncident(n.id) : null, [n]);
  return !(null != e && (0, a.i9)(e)) && t
}

function l(n) {
  return (0, i.e7)([o.Z], () => (function(n) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o.Z;
    return t.can(d.Plq.MANAGE_GUILD, n)
  })(n, o.Z), [n])
}