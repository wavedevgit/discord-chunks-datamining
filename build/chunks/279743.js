/** Chunk was on 51424 **/
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(642128),
  s = n(748780),
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
  }), f = (0, c.dQu)(_).spring({
    opacity: 0
  }), h = (0, c.dQu)(_).spring({
    opacity: 1
  }), [g, O] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: p,
      borderColor: p
    }
  }), "animate-never"), N = {
    startColor: p,
    handleRest: e => {
      e.finished && (null == l || l())
    },
    endColor: f,
    targetBorderColor: h,
    targetColor: m,
    animationDelay: u
  }, I = i.useRef(N);
  return i.useEffect(() => {
    I.current = N
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
    } = d.Z, a = 200 * !o;
    O({
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
    }), O({
      delay: l,
      immediate: o,
      to: [{
        backgroundColor: i,
        borderColor: r
      }],
      config: {
        duration: a,
        easing: s.Z.Easing.ease
      }
    }), O({
      delay: l + 200 + 200,
      immediate: o,
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
  }, [O]), (0, r.jsx)(a.animated.div, {
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
  } = e, o = (0, u.e7)([_.Z], () => _.Z.getScrollPosition() === n), [a, s] = i.useState(!1);
  return (i.useEffect(() => {
    o && s(!0)
  }, [o]), a) ? (0, r.jsx)(p, {
    animationDelay: l,
    onFlashEnd: () => s(!1),
    children: t
  }) : t
}