/** Chunk was on 77978 **/
n.d(t, {
  Z: () => p
}), n(388685);
var i = n(255367),
  l = n(73800),
  r = n(120356),
  o = n.n(r),
  s = n(240894),
  a = n(748780),
  u = n(481060),
  c = n(442837),
  d = n(607070),
  h = n(663389),
  g = n(834166);

function f(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: r,
    animationDelay: c = 500
  } = e, h = u.TVs.colors.TEXT_LINK, f = (0, u.dQu)(h).spring({
    opacity: 0
  }), p = (0, u.dQu)(h).spring({
    opacity: .1
  }), E = (0, u.dQu)(h).spring({
    opacity: 0
  }), _ = (0, u.dQu)(h).spring({
    opacity: 1
  }), [m, b] = (0, u.q_F)(() => ({
    from: {
      backgroundColor: f,
      borderColor: f
    }
  }), "animate-never"), O = {
    startColor: f,
    handleRest: e => {
      e.finished && (null == r || r())
    },
    endColor: E,
    targetBorderColor: _,
    targetColor: p,
    animationDelay: c
  }, C = l.useRef(O);
  return l.useEffect(() => {
    C.current = O
  }), l.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: i,
      targetColor: l,
      animationDelay: r
    } = C.current, {
      useReducedMotion: o
    } = d.Z, s = 200 * !o;
    b({
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
    }), b({
      delay: r,
      immediate: o,
      to: [{
        backgroundColor: l,
        borderColor: i
      }],
      config: {
        duration: s,
        easing: a.Z.Easing.ease
      }
    }), b({
      delay: r + 200 + 200,
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
  }, [b]), (0, i.jsx)(s.animated.div, {
    style: m,
    className: o()(g.settingsItemHighlight, n),
    children: t
  })
}

function p(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: r
  } = e, o = (0, c.e7)([h.Z], () => h.Z.getScrollPosition() === n), [s, a] = l.useState(!1);
  return (l.useEffect(() => {
    o && a(!0)
  }, [o]), s) ? (0, i.jsx)(f, {
    animationDelay: r,
    onFlashEnd: () => a(!1),
    children: t
  }) : t
}