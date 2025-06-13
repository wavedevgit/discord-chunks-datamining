/** Chunk was on 86797 **/
n.d(e, {
  Z: () => b
}), n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
  l = n.n(r),
  a = n(442837),
  o = n(481060),
  c = n(777861),
  s = n(569471),
  u = n(346479),
  d = n(776568),
  f = n(388032);

function b(t) {
  let [e, n, r] = (0, a.Wu)([s.Z], () => [s.Z.isMuted(t.id), s.Z.getMuteConfig(t.id), s.Z.hasJoined(t.id)]), b = (0, c.U)(n);

  function h(e) {
    u.Z.setNotificationSettings(t, {
      muted: e
    })
  }
  return r ? e ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: t.isForumPost() ? f.intl.string(f.t["0JQfsL"]) : f.intl.string(f.t["Cq/TzM"]),
    subtext: b,
    action: () => h(!1)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: t.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    action: () => h(!0),
    children: (0, d.k)().map(e => {
      let {
        value: n,
        label: r
      } = e;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(n),
        label: r,
        action: () => (function(e) {
          let n = e > 0 ? l()().add(e, "second").toISOString() : null;
          u.Z.setNotificationSettings(t, {
            muted: !0,
            mute_config: {
              selected_time_window: e,
              end_time: n
            }
          })
        })(n)
      }, n)
    })
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-disabled",
    label: t.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    disabled: !0
  })
}