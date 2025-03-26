/** Chunk was on 98783 **/
n.d(t, {
  Z: () => N
});
var l = n(200651),
  i = n(192379),
  r = n(481060),
  a = n(906732),
  o = n(748545),
  s = n(531301),
  u = n(171368),
  c = n(314897),
  d = n(246946),
  g = n(626135),
  f = n(981631),
  b = n(228168),
  Z = n(388032);

function N(e) {
  let {
    user: t,
    guildId: n,
    channelId: N,
    context: m
  } = e, {
    id: v
  } = t, {
    loading: p,
    note: O
  } = (0, s.Z)(v), j = !p && null != O && O.length > 0, x = m === f.IlC.POPOUT || m === f.IlC.OVERLAY, h = i.useContext(g.AnalyticsContext), {
    analyticsLocations: y
  } = (0, a.ZP)(), _ = (0, o.k)({
    location: "useAddNoteItem"
  });
  return v === c.default.getId() || d.Z.hidePersonalInformation || x ? null : (0, l.jsx)(r.sNh, {
    id: "note",
    label: p ? Z.NW.string(Z.t["WLKx//"]) : j ? _ ? Z.NW.string(Z.t["gs+qcH"]) : Z.NW.string(Z.t.sHHsOD) : _ ? Z.NW.string(Z.t["1ZZttr"]) : Z.NW.string(Z.t.Dglxra),
    action: () => {
      (0, u.openUserProfileModal)({
        userId: t.id,
        section: b.oh.USER_INFO,
        subsection: b.Tb.NOTE,
        guildId: n,
        channelId: N,
        sourceAnalyticsLocations: y,
        analyticsLocation: h.location,
        appContext: m
      })
    }
  })
}