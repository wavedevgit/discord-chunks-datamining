/** Chunk was on 56826 **/
t.d(e, {
  Z: () => a
});
var i = t(200651);
t(192379);
var r = t(481060),
  l = t(493683),
  s = t(592125),
  d = t(388032);

function a(n, e) {
  let t = s.Z.getChannel(n);
  return null == t || t.isMultiUserDM() ? null : (0, i.jsx)(r.sNh, {
    id: "close-dm",
    label: d.NW.string(d.t.jsvgc3),
    action: () => l.Z.closePrivateChannel(n, e)
  })
}