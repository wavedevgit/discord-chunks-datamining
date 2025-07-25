/** Chunk was on 64946 **/
n.d(t, {
  Z: () => f
}), n(388685);
var i = n(255367),
  r = n(73800),
  l = n(120356),
  o = n.n(l),
  s = n(652141),
  a = n(748780),
  u = n(481060),
  c = n(442837),
  d = n(607070),
  h = n(663389),
  p = n(834166);

function g(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: l,
    animationDelay: c = 500
  } = e, h = u.TVs.colors.TEXT_LINK, g = (0, u.dQu)(h).spring({
    opacity: 0
  }), f = (0, u.dQu)(h).spring({
    opacity: .1
  }), E = (0, u.dQu)(h).spring({
    opacity: 0
  }), m = (0, u.dQu)(h).spring({
    opacity: 1
  }), [_, O] = (0, u.q_F)(() => ({
    from: {
      backgroundColor: g,
      borderColor: g
    }
  }), "animate-never"), b = {
    startColor: g,
    handleRest: e => {
      e.finished && (null == l || l())
    },
    endColor: E,
    targetBorderColor: m,
    targetColor: f,
    animationDelay: c
  }, C = r.useRef(b);
  return r.useEffect(() => {
    C.current = b
  }), r.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: i,
      targetColor: r,
      animationDelay: l
    } = C.current, {
      useReducedMotion: o
    } = d.Z, s = 200 * !o;
    O({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: e,
        borderColor: e
      },
      config: {
        duration: s,
        easing: a.Z.Easing.ease
      }
    }), O({
      delay: l,
      immediate: o,
      to: [{
        backgroundColor: r,
        borderColor: i
      }],
      config: {
        duration: s,
        easing: a.Z.Easing.ease
      }
    }), O({
      delay: l + 200 + 200,
      immediate: o,
      to: [{
        backgroundColor: n,
        borderColor: n
      }],
      config: {
        duration: s,
        easing: a.Z.Easing.ease
      },
      onRest: t
    })
  }, [O]), (0, i.jsx)(s.animated.div, {
    style: _,
    className: o()(p.settingsItemHighlight, n),
    children: t
  })
}

function f(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: l
  } = e, o = (0, c.e7)([h.Z], () => h.Z.getScrollPosition() === n), [s, a] = r.useState(!1);
  return (r.useEffect(() => {
    o && a(!0)
  }, [o]), s) ? (0, i.jsx)(g, {
    animationDelay: l,
    onFlashEnd: () => a(!1),
    children: t
  }) : t
}