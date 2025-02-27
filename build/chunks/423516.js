/** Chunk was on 29611 **/
n.d(t, {
  Z: () => _
});
var i = n(200651);
n(192379);
var o = n(120356),
  r = n.n(o),
  a = n(481060),
  l = n(570928),
  c = n(540059),
  s = n(977059),
  u = n(388032),
  d = n(850224);
let _ = function(e) {
  let {
    className: t,
    hasVideo: n,
    text: o,
    hasConnectedChannel: _,
    textVariant: h = "text-md/medium"
  } = e, f = (0, c.Q3)("RTCConnectionStatusText"), {
    enabled: p
  } = (0, s.S)({
    location: "RTCConnectionStatusText"
  }), g = n ? u.NW.string(u.t.IlHdW1) : u.NW.string(u.t.WsOisr);
  return (0, i.jsx)(l.Z, {
    className: r()(t, p ? d.hoverableStatus : d.status),
    hoverText: p && _ ? f ? (0, i.jsx)(a.Text, {
      variant: h,
      color: "currentColor",
      children: g
    }) : g : null,
    children: f ? (0, i.jsx)(a.Text, {
      variant: h,
      color: "currentColor",
      children: o
    }) : o
  })
}