/** Chunk was on 1272 **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  l = n(642128),
  o = n(442837),
  a = n(481060),
  s = n(607070),
  c = n(898302);
let u = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
  },
  d = function(e) {
    let {
      animate: t,
      state: n,
      cleanUp: d,
      children: p
    } = e, h = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), f = i.useMemo(() => !1 === t || h ? {
      opacity: 1
    } : n === a.pJH.ENTERED || n === a.pJH.MOUNTED ? {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: u
    } : {
      from: {
        opacity: 1
      },
      to: {
        opacity: 0
      },
      config: u,
      onRest: () => {
        d()
      }
    }, [t, d, h, n]), g = (0, a.q_F)(f);
    return (0, r.jsx)(l.animated.div, {
      style: g,
      className: c.transitionItem,
      children: p
    })
  }