/** Chunk was on 24389 **/
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
  b = n(663389),
  h = n(974508);

function p(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: o,
    animationDelay: u = 500
  } = e, b = c.TVs.colors.TEXT_LINK, p = (0, c.dQu)(b).spring({
    opacity: 0
  }), f = (0, c.dQu)(b).spring({
    opacity: .1
  }), g = (0, c.dQu)(b).spring({
    opacity: 0
  }), O = (0, c.dQu)(b).spring({
    opacity: 1
  }), [v, m] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: p,
      borderColor: p
    }
  }), "animate-never"), y = {
    startColor: p,
    handleRest: e => {
      e.finished && (null == o || o())
    },
    endColor: g,
    targetBorderColor: O,
    targetColor: f,
    animationDelay: u
  }, E = i.useRef(y);
  return i.useEffect(() => {
    E.current = y
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: o
    } = E.current, {
      useReducedMotion: l
    } = d.Z, a = 200 * !l;
    m({
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
    }), m({
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
    }), m({
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
  }, [m]), (0, r.jsx)(a.animated.div, {
    style: v,
    className: l()(h.settingsItemHighlight, n),
    children: t
  })
}

function f(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: o
  } = e, l = (0, u.e7)([b.Z], () => b.Z.getScrollPosition() === n), [a, s] = i.useState(!1);
  return (i.useEffect(() => {
    l && s(!0)
  }, [l]), a) ? (0, r.jsx)(p, {
    animationDelay: o,
    onFlashEnd: () => s(!1),
    children: t
  }) : t
}