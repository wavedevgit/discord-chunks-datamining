/** Chunk was on 62940 **/
n.d(t, {
  default: () => c,
  e: () => s
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(239091),
  l = n(241635),
  a = n(388032);

function s(e, t) {
  return (0, l.Z)(e, t).length > 0
}

function c(e) {
  let {
    role: t,
    guild: n,
    onSelect: s
  } = e, c = (0, l.Z)(n, t);
  return 0 === c.length ? null : (0, r.jsx)(i.v2r, {
    navId: "guild-settings-role-context",
    "aria-label": a.NW.string(a.t["337Ja2"]),
    onClose: o.Zy,
    onSelect: s,
    children: c
  })
}