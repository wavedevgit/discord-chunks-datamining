/** Chunk was on 51724 **/
n.d(t, {
  Z: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(430824),
  l = n(626135),
  o = n(709054),
  c = n(88658),
  d = n(976978),
  u = n(695346),
  m = n(639814),
  p = n(838436),
  g = n(51331),
  h = n(922628),
  f = n(703115),
  x = n(526761),
  b = n(726985),
  N = n(736530),
  _ = n(981631),
  E = n(388032);

function j(e) {
  let {
    ingress: t,
    guildId: n
  } = e, x = (0, m.c_)(), j = u.h2.useSetting().includes(n), C = (0, d.q)(), O = i.useCallback(e => {
    let r = (0, c.YK)();
    e ? r.delete(n) : r.add(n), u.h2.updateSetting(Array.from(r)), l.default.track(_.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: f.Y.DIRECT_MESSAGES_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [n, t]);

  function v(e, t) {
    l.default.track(_.rMx.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  let S = e => {
    (0, h.V)({
      header: E.NW.string(E.t["uUr+GR"]),
      body: E.NW.string(E.t.hjGJBg),
      confirmText: E.NW.string(E.t.gm1Ven),
      cancelText: E.NW.string(E.t.p89ACg),
      confirmButtonColor: s.zxk.Colors.BRAND,
      onConfirm: () => {
        u.gR.updateSetting(e), v(e, !1)
      },
      onCancel: () => {
        u.gR.updateSetting(e), u.h2.updateSetting(e ? o.default.keys(a.Z.getGuilds()) : []), v(e, !0)
      }
    })
  };
  return (0, r.jsx)(p.U, {
    setting: b.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
    children: n === N.T ? (0, r.jsx)(g.Z, {
      title: E.NW.string(E.t.RAQUSE),
      note: E.NW.string(E.t.wbYDfX),
      value: !C,
      onChange: e => {
        S(!e)
      }
    }) : (0, r.jsx)(g.Z, {
      title: E.NW.string(E.t.RAQUSE),
      note: x ? E.NW.string(E.t.V0ka0d) : E.NW.string(E.t.G7c3Xl),
      value: !j,
      onChange: O
    })
  })
}

function C(e) {
  let {
    ingress: t = x.f4.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, m.is)();
  return (0, r.jsx)(j, {
    ingress: t,
    guildId: null != n ? n : i
  })
}