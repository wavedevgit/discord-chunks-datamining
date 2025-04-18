/** Chunk was on 63035 **/
n.d(t, {
  BT: () => s,
  N8: () => c
});
var i = n(442837);
n(467319);
var r = n(496675),
  a = n(533244),
  l = n(487419),
  o = n(981631);

function c(e) {
  let t = (0, i.e7)([r.Z], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
      return t.can(o.Plq.BAN_MEMBERS, e) || t.can(o.Plq.KICK_MEMBERS, e) || t.can(o.Plq.MANAGE_GUILD, e)
    })(e, r.Z), [e]),
    n = (0, i.e7)([l.Z], () => null != e ? l.Z.getGuildIncident(e.id) : null, [e]);
  return !(null != n && (0, a.i9)(n)) && t
}

function s(e) {
  return (0, i.e7)([r.Z], () => (function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
    return t.can(o.Plq.MANAGE_GUILD, e)
  })(e, r.Z), [e])
}