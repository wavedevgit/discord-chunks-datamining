/** Chunk was on 66950 **/
t.d(n, {
  Z: () => h
}), t(388685);
var i = t(255367);
t(73800);
var r = t(913527),
  a = t.n(r),
  l = t(442837),
  o = t(481060),
  d = t(777861),
  u = t(569471),
  s = t(346479),
  c = t(776568),
  f = t(388032);

function h(e) {
  let [n, t, r] = (0, l.Wu)([u.Z], () => [u.Z.isMuted(e.id), u.Z.getMuteConfig(e.id), u.Z.hasJoined(e.id)]), h = (0, d.U)(t);

  function v(n) {
    s.Z.setNotificationSettings(e, {
      muted: n
    })
  }
  return r ? n ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: e.isForumPost() ? f.intl.string(f.t["0JQfsL"]) : f.intl.string(f.t["Cq/TzM"]),
    subtext: h,
    action: () => v(!1)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: e.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    action: () => v(!0),
    children: (0, c.k)().map(n => {
      let {
        value: t,
        label: r
      } = n;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(t),
        label: r,
        action: () => (function(n) {
          let t = n > 0 ? a()().add(n, "second").toISOString() : null;
          s.Z.setNotificationSettings(e, {
            muted: !0,
            mute_config: {
              selected_time_window: n,
              end_time: t
            }
          })
        })(t)
      }, t)
    })
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-disabled",
    label: e.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    disabled: !0
  })
}