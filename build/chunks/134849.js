/** Chunk was on 50751 **/
n.d(t, {
  Z: () => x
}), n(653041), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(442837),
  l = n(481060),
  s = n(237997),
  a = n(804570),
  u = n(388627),
  c = n(561064),
  d = n(380736),
  p = n(693091),
  h = n(371467),
  f = n(981631),
  m = n(388032),
  g = n(734377);
let O = [];

function v(e) {
  return e.notification.id
}

function y(e, t, n, r) {
  let {
    index: o,
    notification: l,
    locked: s
  } = t;
  return (0, i.jsx)(d.ZP, {
    index: o,
    notification: l,
    locked: s,
    transitionState: n,
    cleanUp: r
  }, e)
}

function E(e) {
  return (0, i.jsx)("div", {
    className: g.container,
    children: e
  })
}
let b = e => r.useState(() => new p.AS(e))[0],
  x = r.memo(function(e) {
    let {
      locked: t,
      showEmpty: n = !0
    } = e, d = (0, o.e7)([s.default, h.Z], () => {
      if (s.default.getNotificationPositionMode() === f._vf.DISABLED) return O;
      let e = [],
        n = 0;
      for (let i of h.Z.getNotifications()) {
        if (n > 4) break;
        (!t || i.status !== f._1z.TIMED_OUT) && (e.push({
          index: n,
          locked: t,
          notification: i
        }), n++)
      }
      return e
    }, [t], u.E6), g = b(t);
    return (r.useLayoutEffect(() => g.updateState(d, t)), r.useLayoutEffect(() => (g.initialize((0, c.i)()), () => g.cleanUp()), [g]), 0 !== d.length || t) ? (0, i.jsx)(p.S4.Provider, {
      value: g,
      children: (0, i.jsx)(l.W3x, {
        items: d,
        renderItem: y,
        getItemKey: v,
        wrapChildren: E
      })
    }) : n ? t ? null : (0, i.jsx)(a.E, {
      emptyText: m.NW.string(m.t.O1Nbjo),
      icon: l.Dkj,
      absolute: !0
    }) : null
  })