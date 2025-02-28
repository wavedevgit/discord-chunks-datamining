/** Chunk was on 35755 **/
n.d(t, {
  Z: () => m
});
var i = n(442837),
  l = n(595519),
  r = n(374065),
  o = n(761122),
  a = n(542094),
  s = n(973616),
  c = n(496675),
  u = n(358085),
  d = n(231338),
  p = n(388032);

function m(e) {
  let t, {
      context: n,
      application: m,
      activityAction: h
    } = e,
    f = "channel" === n.type ? n.channel : void 0,
    v = (0, i.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, f)),
    N = (0, r.KF)(null == f ? void 0 : f.id),
    y = !1;
  switch (h) {
    case a.JS.LEAVE:
      y = !1;
      break;
    case a.JS.START:
      null == f ? y = !1 : (null == f ? void 0 : f.isGuildVoice()) ? N !== r.jy.CAN_LAUNCH && (y = !0) : (0, l.WS)(f) || (y = !0);
      break;
    case a.JS.JOIN:
      (null == f ? void 0 : f.isGuildVoice()) ? y = !v: (0, l.WS)(f) || (y = !0)
  }
  if (h !== a.JS.LEAVE) {
    let e = m instanceof s.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
      n = (0, o.Z)((0, u.getOS)());
    null == e || e.supported_platforms.includes(n) ? (null == f ? void 0 : f.isThread()) && (y = !0, t = p.NW.string(p.t.ddSR3t)) : (y = !1, t = p.NW.string(p.t.z2YTgI))
  }
  return y && null == t && (t = p.NW.string(p.t.f41E1t)), {
    disabled: y,
    reason: t
  }
}