/** Chunk was on 27978 **/
n.d(t, {
  Z: () => N
}), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  s = n(388905),
  l = n(409059),
  c = n(962220),
  u = n(306453),
  d = n(108427),
  p = n(314897),
  h = n(626135),
  g = n(587444),
  _ = n(981631),
  m = n(58346),
  f = n(388032),
  b = n(802138);

function x(e, t, n) {
  e.preventDefault(), h.default.track(_.rMx.GUILD_TEMPLATE_APP_OPENED, {
    guild_template_code: t,
    guild_template_name: n.name,
    guild_template_description: n.description,
    guild_template_guild_id: n.sourceGuildId
  });
  let r = p.default.getFingerprint(),
    i = null != r ? r : p.default.getId();
  c.Z.openMobileApp(n.state === m.Rj.RESOLVED ? t : void 0, i)
}

function N(e) {
  let {
    code: t
  } = e, n = (0, o.e7)([l.Z], () => l.Z.getGuildTemplate(t));
  return (i.useEffect(() => {
    (0, d.e)("guild_template_mobile")
  }, []), null == n || n.state === m.Rj.RESOLVING) ? (0, r.jsx)(s.ZP, {
    children: (0, r.jsx)(a.$jN, {})
  }) : n.state === m.Rj.RESOLVED ? (0, r.jsxs)(s.ZP, {
    children: [(0, r.jsx)(u.Z, {
      guildTemplate: n,
      tall: !0
    }), (0, r.jsx)(s.zx, {
      onClick: e => x(e, t, n),
      className: b.marginTop20,
      children: f.NW.string(f.t["a3Gl+f"])
    })]
  }) : (0, r.jsx)(g.Z, {
    text: f.NW.string(f.t["e/rZ2t"]),
    buttonCta: f.NW.string(f.t.HAvYn5),
    onClick: e => x(e, t, n)
  })
}
o.ZP.initialize()