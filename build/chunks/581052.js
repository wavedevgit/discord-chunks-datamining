/** Chunk was on 56826 **/
t.d(e, {
  V: () => u
});
var i = t(200651);
t(192379);
var r = t(442837),
  l = t(481060),
  s = t(823162),
  d = t(594174),
  a = t(388032);

function u(n) {
  let e = (0, r.e7)([d.default], () => d.default.getCurrentUser());
  return (null == e ? void 0 : e.isStaff()) !== !0 ? null : (0, i.jsxs)(i.Fragment, {
    children: [!n.isMessageRequest && (0, i.jsx)(l.sNh, {
      id: "mark-as-message-request",
      label: a.NW.string(a.t.L6623t),
      action: () => (0, s.Xy)(n.id)
    }), (0, i.jsx)(l.sNh, {
      id: "clear-message-request",
      label: a.NW.string(a.t["85YWlZ"]),
      action: () => (0, s.qR)(n.id)
    })]
  })
}