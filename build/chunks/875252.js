/** Chunk was on 56826 **/
t.d(e, {
  H: () => c
});
var i = t(200651);
t(192379);
var r = t(442837),
  l = t(481060),
  s = t(378298),
  d = t(359119),
  a = t(832239),
  u = t(594174),
  o = t(388032);

function c(n) {
  let e = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
    t = (0, r.e7)([d.ZP], () => d.ZP.getChannelSafetyWarnings(n.id));
  return (null == e ? void 0 : e.isStaff()) !== !0 || null == t || 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.sNh, {
      id: "delete-safety-warnings",
      label: o.NW.string(o.t.g7o9bm),
      action: () => (0, a.Vp)(n.id)
    }), (0, i.jsx)(l.sNh, {
      id: "clear-safety-warnings",
      label: o.NW.string(o.t.VuSvGh),
      action: () => (0, s.wS)(n.id)
    })]
  })
}