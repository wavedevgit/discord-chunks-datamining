/** Chunk was on 78650 **/
n.d(t, {
  Z: () => s
});
var i = n(255367);
n(73800);
var r = n(481060),
  l = n(346479),
  a = n(665906),
  o = n(388032);

function s(e) {
  let t = (0, a.Xb)(e),
    n = e.isLockedThread();
  if (!(!t || e.isModeratorReportChannel())) return n ? (0, i.jsx)(r.sNh, {
    id: "unlock-thread",
    label: e.isForumPost() ? o.intl.string(o.t["/OKSxs"]) : o.intl.string(o.t["jeyb/f"]),
    action: () => l.Z.unlockThread(e)
  }) : (0, i.jsx)(r.sNh, {
    id: "lock-thread",
    label: e.isForumPost() ? o.intl.string(o.t["Ur/0NT"]) : o.intl.string(o.t.HoCqm5),
    action: () => l.Z.lockThread(e)
  })
}