/** Chunk was on 78650 **/
n.d(t, {
  Z: () => d
});
var i = n(255367);
n(73800);
var r = n(442837),
  l = n(481060),
  a = n(569471),
  o = n(346479),
  s = n(388032);

function d(e, t) {
  return (0, r.e7)([a.Z], () => a.Z.hasJoined(e.id)) ? (0, i.jsx)(l.sNh, {
    id: "leave-thread",
    label: e.isForumPost() ? s.intl.string(s.t["2LsZdX"]) : s.intl.string(s.t["fa/84u"]),
    action: () => o.Z.leaveThread(e, t)
  }) : (0, i.jsx)(l.sNh, {
    id: "join-thread",
    label: e.isForumPost() ? s.intl.string(s.t.ihLPiI) : s.intl.string(s.t["10kukZ"]),
    action: () => o.Z.joinThread(e, t)
  })
}