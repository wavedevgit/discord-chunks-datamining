/** Chunk was on 78650 **/
n.d(t, {
  Z: () => c
});
var i = n(255367);
n(73800);
var r = n(442837),
  l = n(481060),
  a = n(569471),
  o = n(346479),
  s = n(723170),
  d = n(124368),
  u = n(388032);

function c(e) {
  let t = (0, s.B)(e);
  return (0, r.e7)([a.Z], () => a.Z.hasJoined(e.id)) ? (0, i.jsx)(l.sNh, {
    id: "thread-notifications",
    label: u.intl.string(u.t.h850Sk),
    children: (0, d.zb)().map(n => {
      let {
        setting: r,
        label: a
      } = n;
      return (0, i.jsx)(l.k5B, {
        group: "thread-notifications",
        id: "".concat(r),
        label: a,
        action: () => o.Z.setNotificationSettings(e, {
          flags: r
        }),
        checked: r === t
      }, r)
    })
  }) : (0, i.jsx)(l.sNh, {
    id: "notifications-disabled",
    label: u.intl.string(u.t.h850Sk),
    disabled: !0
  })
}