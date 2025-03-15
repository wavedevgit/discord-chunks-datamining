/** Chunk was on 58173 **/
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var l = n(120356),
  o = n.n(l),
  i = n(481060),
  s = n(570928),
  a = n(540059),
  c = n(977059),
  u = n(388032),
  d = n(605251);
let h = function(e) {
  let {
    className: t,
    hasVideo: n,
    text: l,
    hasConnectedChannel: h,
    textVariant: f = "text-md/medium"
  } = e, p = (0, a.Q3)("RTCConnectionStatusText"), {
    enabled: g
  } = (0, c.S)({
    location: "RTCConnectionStatusText"
  }), y = n ? u.NW.string(u.t.IlHdW1) : u.NW.string(u.t.WsOisr);
  return (0, r.jsx)(s.Z, {
    className: o()(t, g ? d.hoverableStatus : d.status),
    hoverText: g && h ? p ? (0, r.jsx)(i.Text, {
      variant: f,
      color: "currentColor",
      children: y
    }) : y : null,
    children: p ? (0, r.jsx)(i.Text, {
      variant: f,
      color: "currentColor",
      children: l
    }) : l
  })
}