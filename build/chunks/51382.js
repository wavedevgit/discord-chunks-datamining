/** Chunk was on 1272 (d2669c1c27f74703.js) **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(324262),
  l = n(536442),
  o = n(703656),
  a = n(922482),
  s = n(981631),
  c = n(388032),
  u = n(882977);
let d = e => {
  let {
    channel: t,
    guild: n
  } = e;
  return (0, r.jsx)(i.Z, {
    guild: n,
    onDismissed: () => {
      (0, l.Kw)(l.v6.HUB_STUDY_ROOM_NOTICE)
    },
    onClick: () => {
      (0, l.Kw)(l.v6.HUB_STUDY_ROOM_NOTICE), null != t && null != t.getGuildId() && ((0, a.Cq)(t), (0, o.XU)(t.getGuildId(), t.id))
    },
    title: c.NW.string(c.t["4Y2AS0"]),
    message: c.NW.string(c.t.wTsxTU),
    cta: c.NW.string(c.t.wBoE6O),
    image: u,
    type: s.vID.HUB_STUDY_ROOM
  })
}