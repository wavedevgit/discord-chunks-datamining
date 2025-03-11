/** Chunk was on 56826 **/
t.d(e, {
  e: () => o
});
var i = t(200651);
t(192379);
var r = t(442837),
  l = t(481060),
  s = t(378712),
  d = t(605984),
  a = t(594174),
  u = t(388032);

function o(n) {
  let e = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
    t = (0, d.k)(n.id);
  return (null == e ? void 0 : e.isStaff()) === !0 && n.isDM() && null == t ? (0, i.jsx)(l.sNh, {
    id: "mark-as-likely-ato",
    label: u.NW.string(u.t.AWKKgY),
    action: () => (0, s.J)(n.id)
  }) : null
}