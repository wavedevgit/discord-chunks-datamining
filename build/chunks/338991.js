/** Chunk was on 56049 **/
r.d(t, {
  default: () => u
});
var n = r(200651);
r(192379);
var o = r(481060),
  c = r(239091),
  l = r(714447),
  a = r(439827),
  i = r(388032);

function u(e) {
  let {
    guildId: t,
    onSelect: r,
    onPickerClose: u,
    onInteraction: s
  } = e, b = (0, a.Z)(t, u), p = (0, l.Z)();
  return (0, n.jsx)(o.v2r, {
    navId: "user-context",
    onClose: c.Zy,
    "aria-label": i.NW.string(i.t.liqwPD),
    className: "context-menu",
    onSelect: r,
    onInteraction: s,
    children: (0, n.jsxs)(o.kSQ, {
      children: [p, b]
    })
  })
}