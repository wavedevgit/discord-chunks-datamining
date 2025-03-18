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
      activityAction: f
    } = e,
    h = "channel" === n.type ? n.channel : void 0,
    v = (0, i.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
    y = (0, r.KF)(null == h ? void 0 : h.id),
    b = !1;
  switch (f) {
    case a.JS.LEAVE:
      b = !1;
      break;
    case a.JS.START:
      null == h ? b = !1 : (null == h ? void 0 : h.isGuildVoice()) ? y !== r.jy.CAN_LAUNCH && (b = !0) : (0, l.WS)(h) || (b = !0);
      break;
    case a.JS.JOIN:
      (null == h ? void 0 : h.isGuildVoice()) ? b = !v: (0, l.WS)(h) || (b = !0)
  }
  if (f !== a.JS.LEAVE) {
    let e = m instanceof s.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
      n = (0, o.Z)((0, u.getOS)());
    null == e || e.supported_platforms.includes(n) ? (null == h ? void 0 : h.isThread()) && (b = !0, t = p.NW.string(p.t.ddSR3t)) : (b = !1, t = p.NW.string(p.t.z2YTgI))
  }
  return b && null == t && (t = p.NW.string(p.t.f41E1t)), {
    disabled: b,
    reason: t
  }
}