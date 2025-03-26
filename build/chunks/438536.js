/** Chunk was on 52272 **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(569471),
  l = n(346479),
  s = n(388032);

function c(e, t) {
  return (0, i.e7)([a.Z], () => a.Z.hasJoined(e.id)) ? (0, r.jsx)(o.sNh, {
    id: "leave-thread",
    label: e.isForumPost() ? s.NW.string(s.t["2LsZdX"]) : s.NW.string(s.t["fa/84u"]),
    action: () => l.Z.leaveThread(e, t)
  }) : (0, r.jsx)(o.sNh, {
    id: "join-thread",
    label: e.isForumPost() ? s.NW.string(s.t.ihLPiI) : s.NW.string(s.t["10kukZ"]),
    action: () => l.Z.joinThread(e, t)
  })
}