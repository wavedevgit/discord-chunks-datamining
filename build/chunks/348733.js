/** Chunk was on 48799 **/
n.d(t, {
  Z: () => f
}), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
  o = n.n(r),
  s = n(392711),
  l = n(442837),
  a = n(261435),
  c = n(237997),
  d = n(692546),
  u = n(438015),
  h = n(981631),
  p = n(514386);

function f(e) {
  let {
    locked: t,
    keybind: n
  } = e, r = (0, l.Wu)([a.Z], () => a.Z.getNotifications()), u = (0, l.e7)([c.default], () => c.default.getNotificationPositionMode());
  if (u === h._vf.DISABLED) return null;
  let f = r.filter(e => !t || e.status !== h._1z.TIMED_OUT),
    m = (0, s.groupBy)(f, e => e.type);
  return (0, i.jsx)(d.Z, {
    observeInterval: 200,
    children: (0, i.jsx)("div", {
      className: o()(p.container, p[u]),
      children: Object.entries(m).map(e => {
        let [r, o] = e;
        return 0 === o.length ? null : (0, i.jsx)(g, {
          locked: t,
          keybind: n,
          position: u,
          notification: o[0]
        }, r)
      })
    })
  })
}

function g(e) {
  let {
    notification: t,
    position: n,
    keybind: r,
    locked: o
  } = e;
  return (0, i.jsx)("div", {
    className: p.notificationGroup,
    children: (0, i.jsx)(u.Z, {
      zIndex: 100,
      position: n,
      notification: t,
      keybind: r,
      locked: o
    }, t.id)
  })
}