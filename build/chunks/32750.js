/** Chunk was on 78650 **/
n.d(t, {
  Z: () => d
});
var i = n(255367);
n(73800);
var r = n(481060),
  l = n(216572),
  a = n(346479),
  o = n(665906),
  s = n(388032);

function d(e) {
  var t;
  let n = (0, l.HL)(e),
    d = (0, o.C7)(e),
    u = (0, o.tc)(e);
  if ((e.isArchivedThread() ? u : d) && !n) return (null == (t = e.threadMetadata) ? void 0 : t.archived) ? (0, i.jsx)(r.sNh, {
    id: "unarchive-thread",
    label: e.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx),
    action: () => a.Z.unarchiveThread(e, !1)
  }) : (0, i.jsx)(r.sNh, {
    id: "archive-thread",
    label: e.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb),
    action: () => a.Z.archiveThread(e, !1)
  })
}