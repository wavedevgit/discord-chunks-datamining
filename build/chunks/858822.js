/** Chunk was on 43730 **/
n.d(t, {
  Z: () => p
});
var a = n(255367);
n(73800);
var i = n(913527),
  r = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(87051),
  s = n(776568),
  u = n(777861),
  d = n(9156),
  m = n(621600),
  _ = n(388032);

function p(e, t) {
  let n = null == e ? void 0 : e.id,
    {
      muted: i,
      muteConfig: p
    } = (0, l.cj)([d.ZP], () => ({
      muted: null != n ? d.ZP.isMuted(n) : void 0,
      muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
    }), [n]),
    f = (0, u.U)(p);
  return null == n ? null : i ? (0, a.jsx)(o.sNh, {
    id: "unmute-guild",
    label: _.intl.string(_.t.De0BTE),
    subtext: f,
    action: () => c.Z.updateGuildNotificationSettings(n, {
      muted: !1
    }, m.ZB.Unmuted)
  }) : (0, a.jsx)(o.sNh, {
    id: "mute-guild",
    label: _.intl.string(_.t.vRzp7O),
    action: () => c.Z.updateGuildNotificationSettings(n, {
      muted: !0
    }, m.ZB.Muted),
    children: (0, s.k)().map(e => {
      let {
        value: i,
        label: l
      } = e;
      return (0, a.jsx)(o.sNh, {
        id: "".concat(i),
        label: l,
        action: () => (function(e) {
          if (null == n) return;
          let a = e > 0 ? r()().add(e, "second").toISOString() : null;
          c.Z.updateGuildNotificationSettings(n, {
            muted: !0,
            mute_config: {
              selected_time_window: e,
              end_time: a
            }
          }, m.ZB.Muted, t)
        })(i)
      }, i)
    })
  })
}