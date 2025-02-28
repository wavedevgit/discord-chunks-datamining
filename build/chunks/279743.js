/** Chunk was on 49750 **/
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(642128),
  a = n(748780),
  c = n(481060),
  u = n(442837),
  d = n(607070),
  _ = n(663389),
  E = n(974508);

function p(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: l,
    animationDelay: u = 500
  } = e, _ = c.TVs.colors.TEXT_LINK, p = (0, c.dQu)(_).spring({
    opacity: 0
  }), m = (0, c.dQu)(_).spring({
    opacity: .1
  }), h = (0, c.dQu)(_).spring({
    opacity: 0
  }), f = (0, c.dQu)(_).spring({
    opacity: 1
  }), [g, N] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: p,
      borderColor: p
    }
  }), "animate-never"), O = {
    startColor: p,
    handleRest: e => {
      e.finished && (null == l || l())
    },
    endColor: h,
    targetBorderColor: f,
    targetColor: m,
    animationDelay: u
  }, I = i.useRef(O);
  return i.useEffect(() => {
    I.current = O
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: l
    } = I.current, {
      useReducedMotion: o
    } = d.Z, s = 200 * !o;
    N({
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
    }), N({
      delay: l,
      immediate: o,
      to: [{
        backgroundColor: i,
        borderColor: r
      }],
      config: {
        duration: s,
        easing: a.Z.Easing.ease
      }
    }), N({
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
  }, [N]), (0, r.jsx)(s.animated.div, {
    style: g,
    className: o()(E.settingsItemHighlight, n),
    children: t
  })
}

function m(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: l
  } = e, o = (0, u.e7)([_.Z], () => _.Z.getScrollPosition() === n), [s, a] = i.useState(!1);
  return (i.useEffect(() => {
    o && a(!0)
  }, [o]), s) ? (0, r.jsx)(p, {
    animationDelay: l,
    onFlashEnd: () => a(!1),
    children: t
  }) : t
}