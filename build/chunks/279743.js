/** Chunk was on 69313 **/
n.d(t, {
  Z: () => f
}), n(388685);
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(200100),
  a = n(748780),
  c = n(481060),
  u = n(442837),
  d = n(607070),
  h = n(663389),
  E = n(834166);

function g(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: l,
    animationDelay: u = 500
  } = e, h = c.TVs.colors.TEXT_LINK, g = (0, c.dQu)(h).spring({
    opacity: 0
  }), f = (0, c.dQu)(h).spring({
    opacity: .1
  }), p = (0, c.dQu)(h).spring({
    opacity: 0
  }), _ = (0, c.dQu)(h).spring({
    opacity: 1
  }), [O, m] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: g,
      borderColor: g
    }
  }), "animate-never"), C = {
    startColor: g,
    handleRest: e => {
      e.finished && (null == l || l())
    },
    endColor: p,
    targetBorderColor: _,
    targetColor: f,
    animationDelay: u
  }, b = r.useRef(C);
  return r.useEffect(() => {
    b.current = C
  }), r.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: i,
      targetColor: r,
      animationDelay: l
    } = b.current, {
      useReducedMotion: o
    } = d.Z, s = 200 * !o;
    m({
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
    }), m({
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
    }), m({
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
  }, [m]), (0, i.jsx)(s.animated.div, {
    style: O,
    className: o()(E.settingsItemHighlight, n),
    children: t
  })
}

function f(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: l
  } = e, o = (0, u.e7)([h.Z], () => h.Z.getScrollPosition() === n), [s, a] = r.useState(!1);
  return (r.useEffect(() => {
    o && a(!0)
  }, [o]), s) ? (0, i.jsx)(g, {
    animationDelay: l,
    onFlashEnd: () => a(!1),
    children: t
  }) : t
}