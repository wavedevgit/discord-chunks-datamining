/** Chunk was on 63061 **/
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  s = n(642128),
  a = n(748780),
  c = n(481060),
  u = n(442837),
  d = n(607070),
  _ = n(663389),
  E = n(291847);

function p(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: o,
    animationDelay: u = 500
  } = e, _ = c.TVs.colors.TEXT_LINK, p = (0, c.dQu)(_).spring({
    opacity: 0
  }), m = (0, c.dQu)(_).spring({
    opacity: .1
  }), h = (0, c.dQu)(_).spring({
    opacity: 0
  }), f = (0, c.dQu)(_).spring({
    opacity: 1
  }), [g, O] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: p,
      borderColor: p
    }
  }), "animate-never"), N = {
    startColor: p,
    handleRest: e => {
      e.finished && (null == o || o())
    },
    endColor: h,
    targetBorderColor: f,
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
      animationDelay: o
    } = I.current, {
      useReducedMotion: l
    } = d.Z, s = 200 * !l;
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
      delay: o,
      immediate: l,
      to: [{
        backgroundColor: i,
        borderColor: r
      }],
      config: {
        duration: s,
        easing: a.Z.Easing.ease
      }
    }), O({
      delay: o + 200 + 200,
      immediate: l,
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
  }, [O]), (0, r.jsx)(s.animated.div, {
    style: g,
    className: l()(E.settingsItemHighlight, n),
    children: t
  })
}

function m(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: o
  } = e, l = (0, u.e7)([_.Z], () => _.Z.getScrollPosition() === n), [s, a] = i.useState(!1);
  return (i.useEffect(() => {
    l && a(!0)
  }, [l]), s) ? (0, r.jsx)(p, {
    animationDelay: o,
    onFlashEnd: () => a(!1),
    children: t
  }) : (0, r.jsx)(r.Fragment, {
    children: t
  })
}