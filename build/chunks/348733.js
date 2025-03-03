/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  Z: () => f
}), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
  s = n.n(r),
  o = n(392711),
  a = n(442837),
  l = n(261435),
  c = n(237997),
  d = n(692546),
  u = n(438015),
  h = n(981631),
  p = n(870181);

function f(e) {
  let {
    locked: t,
    keybind: n
  } = e, r = (0, a.Wu)([l.Z], () => l.Z.getNotifications()), u = (0, a.e7)([c.default], () => c.default.getNotificationPositionMode());
  if (u === h._vf.DISABLED) return null;
  let f = r.filter(e => !t || e.status !== h._1z.TIMED_OUT),
    m = (0, o.groupBy)(f, e => e.type);
  return (0, i.jsx)(d.Z, {
    observeInterval: 200,
    children: (0, i.jsx)("div", {
      className: s()(p.container, p[u]),
      children: Object.entries(m).map(e => {
        let [r, s] = e;
        return 0 === s.length ? null : (0, i.jsx)(g, {
          locked: t,
          keybind: n,
          position: u,
          notification: s[0]
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
    locked: s
  } = e;
  return (0, i.jsx)("div", {
    className: p.notificationGroup,
    children: (0, i.jsx)(u.Z, {
      zIndex: 100,
      position: n,
      notification: t,
      keybind: r,
      locked: s
    }, t.id)
  })
}