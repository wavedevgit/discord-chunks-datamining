/** Chunk was on 9424 **/
n.d(t, {
  Z: () => x
}), n(653041), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(442837),
  l = n(481060),
  a = n(486016),
  s = n(804570),
  c = n(624864),
  u = n(388627),
  d = n(561064),
  p = n(380736),
  h = n(693091),
  f = n(371467),
  m = n(981631),
  g = n(388032),
  v = n(571677);
let y = [];

function O(e) {
  return e.notification.id
}

function b(e, t, n, r) {
  let {
    index: o,
    notification: l,
    locked: a
  } = t;
  return (0, i.jsx)(p.Z, {
    index: o,
    notification: l,
    locked: a,
    transitionState: n,
    cleanUp: r
  }, e)
}

function _(e) {
  return (0, i.jsx)("div", {
    className: v.container,
    children: e
  })
}
let E = e => r.useState(() => new h.AS(e))[0],
  x = r.memo(function(e) {
    let {
      locked: t,
      showEmpty: n = !0
    } = e, p = (0, o.e7)([f.Z, c.Z], () => {
      if (c.Z.isNotificationDisabled(a.OverlayNotificationDisabledSetting.TEXT_CHAT)) return y;
      let e = [],
        n = 0;
      for (let i of f.Z.getNotifications()) {
        if (n > 4) break;
        (!t || i.status !== m._1z.TIMED_OUT) && (e.push({
          index: n,
          locked: t,
          notification: i
        }), n++)
      }
      return e
    }, [t], u.E6), v = E(t);
    return (r.useLayoutEffect(() => v.updateState(p, t)), r.useLayoutEffect(() => (v.initialize((0, d.i)()), () => v.cleanUp()), [v]), 0 !== p.length || t) ? (0, i.jsx)(h.S4.Provider, {
      value: v,
      children: (0, i.jsx)(l.W3x, {
        items: p,
        renderItem: b,
        getItemKey: O,
        wrapChildren: _
      })
    }) : n ? t ? null : (0, i.jsx)(s.E, {
      emptyText: g.NW.string(g.t.O1Nbjo),
      icon: l.Dkj,
      absolute: !0
    }) : null
  })