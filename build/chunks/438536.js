/** Chunk was on 72453 **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(442837),
  a = n(481060),
  o = n(569471),
  l = n(346479),
  s = n(388032);

function c(e, t) {
  return (0, i.e7)([o.Z], () => o.Z.hasJoined(e.id)) ? (0, r.jsx)(a.sNh, {
    id: "leave-thread",
    label: e.isForumPost() ? s.NW.string(s.t["2LsZdX"]) : s.NW.string(s.t["fa/84u"]),
    action: () => l.Z.leaveThread(e, t)
  }) : (0, r.jsx)(a.sNh, {
    id: "join-thread",
    label: e.isForumPost() ? s.NW.string(s.t.ihLPiI) : s.NW.string(s.t["10kukZ"]),
    action: () => l.Z.joinThread(e, t)
  })
}