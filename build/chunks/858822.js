/** Chunk was on 67826 **/
n.d(t, {
  Z: () => m
});
var a = n(255367);
n(73800);
var i = n(913527),
  o = n.n(i),
  r = n(442837),
  c = n(481060),
  l = n(87051),
  s = n(776568),
  d = n(777861),
  u = n(9156),
  _ = n(621600),
  p = n(388032);

function m(e, t) {
  let n = null == e ? void 0 : e.id,
    {
      muted: i,
      muteConfig: m
    } = (0, r.cj)([u.ZP], () => ({
      muted: null != n ? u.ZP.isMuted(n) : void 0,
      muteConfig: null != n ? u.ZP.getMuteConfig(n) : void 0
    }), [n]),
    g = (0, d.U)(m);
  return null == n ? null : i ? (0, a.jsx)(c.sNh, {
    id: "unmute-guild",
    label: p.intl.string(p.t.De0BTE),
    subtext: g,
    action: () => l.Z.updateGuildNotificationSettings(n, {
      muted: !1
    }, _.ZB.Unmuted)
  }) : (0, a.jsx)(c.sNh, {
    id: "mute-guild",
    label: p.intl.string(p.t.vRzp7O),
    action: () => l.Z.updateGuildNotificationSettings(n, {
      muted: !0
    }, _.ZB.Muted),
    children: (0, s.k)().map(e => {
      let {
        value: i,
        label: r
      } = e;
      return (0, a.jsx)(c.sNh, {
        id: "".concat(i),
        label: r,
        action: () => (function(e) {
          if (null == n) return;
          let a = e > 0 ? o()().add(e, "second").toISOString() : null;
          l.Z.updateGuildNotificationSettings(n, {
            muted: !0,
            mute_config: {
              selected_time_window: e,
              end_time: a
            }
          }, _.ZB.Muted, t)
        })(i)
      }, i)
    })
  })
}