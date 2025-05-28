/** Chunk was on 86797 **/
n.d(e, {
  Z: () => s
});
var i = n(255367);
n(73800);
var r = n(442837),
  l = n(481060),
  a = n(569471),
  o = n(346479),
  c = n(388032);

function s(t, e) {
  return (0, r.e7)([a.Z], () => a.Z.hasJoined(t.id)) ? (0, i.jsx)(l.sNh, {
    id: "leave-thread",
    label: t.isForumPost() ? c.intl.string(c.t["2LsZdX"]) : c.intl.string(c.t["fa/84u"]),
    action: () => o.Z.leaveThread(t, e)
  }) : (0, i.jsx)(l.sNh, {
    id: "join-thread",
    label: t.isForumPost() ? c.intl.string(c.t.ihLPiI) : c.intl.string(c.t["10kukZ"]),
    action: () => o.Z.joinThread(t, e)
  })
}