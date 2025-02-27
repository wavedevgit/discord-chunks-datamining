/** Chunk was on 59479 **/
n.d(r, {
  Z: () => c
});
var t = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  o = n(493683),
  a = n(592125),
  d = n(594174),
  l = n(388032);

function c(e, r) {
  var n;
  let c = (0, i.e7)([d.default], () => d.default.getCurrentUser(), []),
    u = (0, i.e7)([a.Z], () => a.Z.getChannel(r), [r]);
  return null == u || u.isOwner(e) || null == c || !u.isOwner(c.id) || !(null === (n = u.recipients) || void 0 === n ? void 0 : n.includes(e)) ? null : (0, t.jsx)(s.sNh, {
    id: "remove",
    label: l.NW.string(l.t.n5zMIy),
    action: () => o.Z.removeRecipient(r, e),
    color: "danger"
  })
}