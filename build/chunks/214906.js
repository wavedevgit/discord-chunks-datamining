/** Chunk was on 78650 **/
e.d(n, {
  Z: () => h
}), e(388685);
var i = e(255367);
e(73800);
var r = e(913527),
  l = e.n(r),
  a = e(442837),
  o = e(481060),
  s = e(777861),
  d = e(569471),
  u = e(346479),
  c = e(776568),
  f = e(388032);

function h(t) {
  let [n, e, r] = (0, a.Wu)([d.Z], () => [d.Z.isMuted(t.id), d.Z.getMuteConfig(t.id), d.Z.hasJoined(t.id)]), h = (0, s.U)(e);

  function v(n) {
    u.Z.setNotificationSettings(t, {
      muted: n
    })
  }
  return r ? n ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: t.isForumPost() ? f.intl.string(f.t["0JQfsL"]) : f.intl.string(f.t["Cq/TzM"]),
    subtext: h,
    action: () => v(!1)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: t.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    action: () => v(!0),
    children: (0, c.k)().map(n => {
      let {
        value: e,
        label: r
      } = n;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(e),
        label: r,
        action: () => (function(n) {
          let e = n > 0 ? l()().add(n, "second").toISOString() : null;
          u.Z.setNotificationSettings(t, {
            muted: !0,
            mute_config: {
              selected_time_window: n,
              end_time: e
            }
          })
        })(e)
      }, e)
    })
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-disabled",
    label: t.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    disabled: !0
  })
}