/** Chunk was on 43498 **/
n.d(t, {
  Z: () => g
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
  f = n(834166);

function p(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: l,
    animationDelay: u = 500
  } = e, h = c.TVs.colors.TEXT_LINK, p = (0, c.dQu)(h).spring({
    opacity: 0
  }), g = (0, c.dQu)(h).spring({
    opacity: .1
  }), E = (0, c.dQu)(h).spring({
    opacity: 0
  }), b = (0, c.dQu)(h).spring({
    opacity: 1
  }), [m, O] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: p,
      borderColor: p
    }
  }), "animate-never"), _ = {
    startColor: p,
    handleRest: e => {
      e.finished && (null == l || l())
    },
    endColor: E,
    targetBorderColor: b,
    targetColor: g,
    animationDelay: u
  }, C = r.useRef(_);
  return r.useEffect(() => {
    C.current = _
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
    style: m,
    className: o()(f.settingsItemHighlight, n),
    children: t
  })
}

function g(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: l
  } = e, o = (0, u.e7)([h.Z], () => h.Z.getScrollPosition() === n), [s, a] = r.useState(!1);
  return (r.useEffect(() => {
    o && a(!0)
  }, [o]), s) ? (0, i.jsx)(p, {
    animationDelay: l,
    onFlashEnd: () => a(!1),
    children: t
  }) : t
}