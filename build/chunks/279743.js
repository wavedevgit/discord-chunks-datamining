/** Chunk was on 87791 **/
n.d(t, {
  Z: () => m
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
  p = n(663389),
  f = n(974508);

function h(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: o,
    animationDelay: u = 500
  } = e, p = c.TVs.colors.TEXT_LINK, h = (0, c.dQu)(p).spring({
    opacity: 0
  }), m = (0, c.dQu)(p).spring({
    opacity: .1
  }), _ = (0, c.dQu)(p).spring({
    opacity: 0
  }), b = (0, c.dQu)(p).spring({
    opacity: 1
  }), [g, E] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: h,
      borderColor: h
    }
  }), "animate-never"), v = {
    startColor: h,
    handleRest: e => {
      e.finished && (null == o || o())
    },
    endColor: _,
    targetBorderColor: b,
    targetColor: m,
    animationDelay: u
  }, O = i.useRef(v);
  return i.useEffect(() => {
    O.current = v
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: o
    } = O.current, {
      useReducedMotion: l
    } = d.Z, a = 200 * !l;
    E({
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
    }), E({
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
    }), E({
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
  }, [E]), (0, r.jsx)(a.animated.div, {
    style: g,
    className: l()(f.settingsItemHighlight, n),
    children: t
  })
}

function m(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: o
  } = e, l = (0, u.e7)([p.Z], () => p.Z.getScrollPosition() === n), [a, s] = i.useState(!1);
  return (i.useEffect(() => {
    l && s(!0)
  }, [l]), a) ? (0, r.jsx)(h, {
    animationDelay: o,
    onFlashEnd: () => s(!1),
    children: t
  }) : t
}