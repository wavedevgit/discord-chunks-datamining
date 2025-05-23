/** Chunk was on 66950 **/
t.d(n, {
  Z: () => u
});
var i = t(255367);
t(73800);
var r = t(442837),
  a = t(481060),
  l = t(569471),
  o = t(346479),
  d = t(388032);

function u(e, n) {
  return (0, r.e7)([l.Z], () => l.Z.hasJoined(e.id)) ? (0, i.jsx)(a.sNh, {
    id: "leave-thread",
    label: e.isForumPost() ? d.intl.string(d.t["2LsZdX"]) : d.intl.string(d.t["fa/84u"]),
    action: () => o.Z.leaveThread(e, n)
  }) : (0, i.jsx)(a.sNh, {
    id: "join-thread",
    label: e.isForumPost() ? d.intl.string(d.t.ihLPiI) : d.intl.string(d.t["10kukZ"]),
    action: () => o.Z.joinThread(e, n)
  })
}