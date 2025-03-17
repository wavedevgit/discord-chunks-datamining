/** Chunk was on 31823 **/
n.d(r, {
  Z: () => c
});
var t = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  s = n(493683),
  a = n(592125),
  l = n(594174),
  d = n(388032);

function c(e, r) {
  var n;
  let c = (0, i.e7)([l.default], () => l.default.getCurrentUser(), []),
    u = (0, i.e7)([a.Z], () => a.Z.getChannel(r), [r]);
  return null == u || u.isOwner(e) || null == c || !u.isOwner(c.id) || !(null === (n = u.recipients) || void 0 === n ? void 0 : n.includes(e)) ? null : (0, t.jsx)(o.sNh, {
    id: "remove",
    label: d.NW.string(d.t.n5zMIy),
    action: () => s.Z.removeRecipient(r, e),
    color: "danger"
  })
}