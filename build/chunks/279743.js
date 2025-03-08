/** Chunk was on 74329 **/
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(642128),
  s = n(748780),
  c = n(481060),
  u = n(442837),
  d = n(607070),
  _ = n(663389),
  p = n(974508);

function E(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: o,
    animationDelay: u = 500
  } = e, _ = c.TVs.colors.TEXT_LINK, E = (0, c.dQu)(_).spring({
    opacity: 0
  }), f = (0, c.dQu)(_).spring({
    opacity: .1
  }), m = (0, c.dQu)(_).spring({
    opacity: 0
  }), h = (0, c.dQu)(_).spring({
    opacity: 1
  }), [b, g] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: E,
      borderColor: E
    }
  }), "animate-never"), O = {
    startColor: E,
    handleRest: e => {
      e.finished && (null == o || o())
    },
    endColor: m,
    targetBorderColor: h,
    targetColor: f,
    animationDelay: u
  }, N = i.useRef(O);
  return i.useEffect(() => {
    N.current = O
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: o
    } = N.current, {
      useReducedMotion: l
    } = d.Z, a = 200 * !l;
    g({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: e,
        borderColor: e
      },
      config: {
        duration: a,
        easing: s.Z.Easing.ease
      }
    }), g({
      delay: o,
      immediate: l,
      to: [{
        backgroundColor: i,
        borderColor: r
      }],
      config: {
        duration: a,
        easing: s.Z.Easing.ease
      }
    }), g({
      delay: o + 200 + 200,
      immediate: l,
      to: [{
        backgroundColor: n,
        borderColor: n
      }],
      config: {
        duration: a,
        easing: s.Z.Easing.ease
      },
      onRest: t
    })
  }, [g]), (0, r.jsx)(a.animated.div, {
    style: b,
    className: l()(p.settingsItemHighlight, n),
    children: t
  })
}

function f(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: o
  } = e, l = (0, u.e7)([_.Z], () => _.Z.getScrollPosition() === n), [a, s] = i.useState(!1);
  return (i.useEffect(() => {
    l && s(!0)
  }, [l]), a) ? (0, r.jsx)(E, {
    animationDelay: o,
    onFlashEnd: () => s(!1),
    children: t
  }) : t
}