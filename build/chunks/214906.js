/** Chunk was on 78650 **/
n.d(t, {
  Z: () => h
}), n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
  l = n.n(r),
  a = n(442837),
  o = n(481060),
  s = n(777861),
  d = n(569471),
  u = n(346479),
  c = n(776568),
  f = n(388032);

function h(e) {
  let [t, n, r] = (0, a.Wu)([d.Z], () => [d.Z.isMuted(e.id), d.Z.getMuteConfig(e.id), d.Z.hasJoined(e.id)]), h = (0, s.U)(n);

  function g(t) {
    u.Z.setNotificationSettings(e, {
      muted: t
    })
  }
  return r ? t ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: e.isForumPost() ? f.intl.string(f.t["0JQfsL"]) : f.intl.string(f.t["Cq/TzM"]),
    subtext: h,
    action: () => g(!1)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: e.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    action: () => g(!0),
    children: (0, c.k)().map(t => {
      let {
        value: n,
        label: r
      } = t;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(n),
        label: r,
        action: () => (function(t) {
          let n = t > 0 ? l()().add(t, "second").toISOString() : null;
          u.Z.setNotificationSettings(e, {
            muted: !0,
            mute_config: {
              selected_time_window: t,
              end_time: n
            }
          })
        })(n)
      }, n)
    })
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-disabled",
    label: e.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    disabled: !0
  })
}