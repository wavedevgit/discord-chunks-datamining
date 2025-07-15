/** Chunk was on 78650 **/
e.d(n, {
  Z: () => d
});
var i = e(255367);
e(73800);
var r = e(442837),
  l = e(481060),
  a = e(569471),
  o = e(346479),
  s = e(388032);

function d(t, n) {
  return (0, r.e7)([a.Z], () => a.Z.hasJoined(t.id)) ? (0, i.jsx)(l.sNh, {
    id: "leave-thread",
    label: t.isForumPost() ? s.intl.string(s.t["2LsZdX"]) : s.intl.string(s.t["fa/84u"]),
    action: () => o.Z.leaveThread(t, n)
  }) : (0, i.jsx)(l.sNh, {
    id: "join-thread",
    label: t.isForumPost() ? s.intl.string(s.t.ihLPiI) : s.intl.string(s.t["10kukZ"]),
    action: () => o.Z.joinThread(t, n)
  })
}