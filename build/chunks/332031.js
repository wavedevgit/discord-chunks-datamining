/** Chunk was on 98783 (c1632cd4386708cb.js) **/
n.d(t, {
  Z: () => c
});
var i = n(200651);
n(192379);
var l = n(442837),
  r = n(481060),
  o = n(655922),
  a = n(158776),
  u = n(981631),
  s = n(388032);

function c(e, t) {
  let n = (0, l.e7)([a.Z], () => (0, o.Z)(a.Z.findActivity(e, e => e.type === u.IIU.STREAMING)), [e]);
  return null == n ? null : (0, i.jsx)(r.sNh, {
    id: "watch-stream",
    label: s.NW.string(s.t["7Xq/nZ"]),
    action: () => {
      null == t || t(), window.open(n, "_blank")
    }
  })
}