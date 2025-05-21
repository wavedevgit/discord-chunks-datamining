/** Chunk was on 44022 **/
n.d(t, {
  Z: () => f
}), n(388685);
var i = n(255367),
  r = n(73800),
  l = n(120356),
  o = n.n(l),
  s = n(366594),
  a = n(748780),
  u = n(481060),
  c = n(442837),
  d = n(607070),
  h = n(663389),
  g = n(834166);

function p(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: l,
    animationDelay: c = 500
  } = e, h = u.TVs.colors.TEXT_LINK, p = (0, u.dQu)(h).spring({
    opacity: 0
  }), f = (0, u.dQu)(h).spring({
    opacity: .1
  }), E = (0, u.dQu)(h).spring({
    opacity: 0
  }), m = (0, u.dQu)(h).spring({
    opacity: 1
  }), [b, _] = (0, u.q_F)(() => ({
    from: {
      backgroundColor: p,
      borderColor: p
    }
  }), "animate-never"), O = {
    startColor: p,
    handleRest: e => {
      e.finished && (null == l || l())
    },
    endColor: E,
    targetBorderColor: m,
    targetColor: f,
    animationDelay: c
  }, C = r.useRef(O);
  return r.useEffect(() => {
    C.current = O
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
    _({
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
    }), _({
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
    }), _({
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
  }, [_]), (0, i.jsx)(s.animated.div, {
    style: b,
    className: o()(g.settingsItemHighlight, n),
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
  }, [o]), s) ? (0, i.jsx)(p, {
    animationDelay: l,
    onFlashEnd: () => a(!1),
    children: t
  }) : t
}