/** Chunk was on 93886 **/
n.d(t, {
  Z: () => h
});
var a = n(200651);
n(192379);
var r = n(913527),
  l = n.n(r),
  i = n(442837),
  s = n(481060),
  o = n(87051),
  c = n(776568),
  d = n(777861),
  u = n(9156),
  m = n(621600),
  x = n(388032);

function h(e, t) {
  let n = null == e ? void 0 : e.id,
    {
      muted: r,
      muteConfig: h
    } = (0, i.cj)([u.ZP], () => ({
      muted: null != n ? u.ZP.isMuted(n) : void 0,
      muteConfig: null != n ? u.ZP.getMuteConfig(n) : void 0
    }), [n]),
    p = (0, d.U)(h);
  return null == n ? null : r ? (0, a.jsx)(s.sNh, {
    id: "unmute-guild",
    label: x.intl.string(x.t.De0BTE),
    subtext: p,
    action: () => o.Z.updateGuildNotificationSettings(n, {
      muted: !1
    }, m.ZB.Unmuted)
  }) : (0, a.jsx)(s.sNh, {
    id: "mute-guild",
    label: x.intl.string(x.t.vRzp7O),
    action: () => o.Z.updateGuildNotificationSettings(n, {
      muted: !0
    }, m.ZB.Muted),
    children: (0, c.k)().map(e => {
      let {
        value: r,
        label: i
      } = e;
      return (0, a.jsx)(s.sNh, {
        id: "".concat(r),
        label: i,
        action: () => (function(e) {
          if (null == n) return;
          let a = e > 0 ? l()().add(e, "second").toISOString() : null;
          o.Z.updateGuildNotificationSettings(n, {
            muted: !0,
            mute_config: {
              selected_time_window: e,
              end_time: a
            }
          }, m.ZB.Muted, t)
        })(r)
      }, r)
    })
  })
}