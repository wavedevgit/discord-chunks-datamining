/** Chunk was on 98783 **/
n.d(t, {
  Z: () => m
});
var i = n(200651),
  l = n(192379),
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

function m(e) {
  let {
    user: t,
    guildId: n,
    channelId: m,
    context: v
  } = e, {
    id: N
  } = t, {
    loading: p,
    note: O
  } = (0, s.Z)(N), h = !p && null != O && O.length > 0, j = v === f.IlC.POPOUT || v === f.IlC.OVERLAY, x = l.useContext(g.AnalyticsContext), {
    analyticsLocations: y
  } = (0, a.ZP)(), P = (0, o.kc)({
    location: "useAddNoteItem"
  });
  return N === c.default.getId() || d.Z.hidePersonalInformation || j ? null : (0, i.jsx)(r.sNh, {
    id: "note",
    label: p ? Z.NW.string(Z.t["WLKx//"]) : h ? P ? Z.NW.string(Z.t["gs+qcH"]) : Z.NW.string(Z.t.sHHsOD) : P ? Z.NW.string(Z.t["1ZZttr"]) : Z.NW.string(Z.t.Dglxra),
    action: () => {
      (0, u.openUserProfileModal)({
        userId: t.id,
        section: b.oh.USER_INFO,
        subsection: b.Tb.NOTE,
        guildId: n,
        channelId: m,
        sourceAnalyticsLocations: y,
        analyticsLocation: x.location,
        appContext: v
      })
    }
  })
}