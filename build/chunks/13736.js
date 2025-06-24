/** Chunk was on 78650 **/
n.d(t, {
  Z: () => s
});
var i = n(255367);
n(73800);
var r = n(481060),
  l = n(787014),
  a = n(665906),
  o = n(388032);

function s(e) {
  let t = (0, a.C7)(e),
    n = (0, a.$R)(e),
    s = (0, a.Gu)(e);
  return !t || !n || s || e.isModeratorReportChannel() || __OVERLAY__ ? null : (0, i.jsx)(r.sNh, {
    id: "edit-thread",
    label: e.isForumPost() ? o.intl.string(o.t.NP1yHB) : o.intl.string(o.t["2Mk1TE"]),
    action: () => {
      (0, r.pTH)(), l.ZP.open(e.id)
    }
  })
}