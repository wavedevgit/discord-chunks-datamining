/** Chunk was on 27805 **/
i.d(t, {
  Z: () => _
}), i(47120);
var n = i(200651),
  r = i(192379),
  o = i(120356),
  s = i.n(o),
  l = i(642128),
  a = i(748780),
  c = i(481060),
  d = i(442837),
  u = i(607070),
  h = i(663389),
  E = i(291847);

function g(e) {
  let {
    children: t,
    className: i,
    onFlashEnd: o,
    animationDelay: d = 500
  } = e, h = c.TVs.colors.TEXT_LINK, g = (0, c.dQu)(h).spring({
    opacity: 0
  }), _ = (0, c.dQu)(h).spring({
    opacity: .1
  }), L = (0, c.dQu)(h).spring({
    opacity: 0
  }), m = (0, c.dQu)(h).spring({
    opacity: 1
  }), [p, C] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: g,
      borderColor: g
    }
  }), "animate-never"), f = {
    startColor: g,
    handleRest: e => {
      e.finished && (null == o || o())
    },
    endColor: L,
    targetBorderColor: m,
    targetColor: _,
    animationDelay: d
  }, O = r.useRef(f);
  return r.useEffect(() => {
    O.current = f
  }), r.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: i,
      targetBorderColor: n,
      targetColor: r,
      animationDelay: o
    } = O.current, {
      useReducedMotion: s
    } = u.Z, l = 200 * !s;
    C({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: e,
        borderColor: e
      },
      config: {
        duration: l,
        easing: a.Z.Easing.ease
      }
    }), C({
      delay: o,
      immediate: s,
      to: [{
        backgroundColor: r,
        borderColor: n
      }],
      config: {
        duration: l,
        easing: a.Z.Easing.ease
      }
    }), C({
      delay: o + 200 + 200,
      immediate: s,
      to: [{
        backgroundColor: i,
        borderColor: i
      }],
      config: {
        duration: l,
        easing: a.Z.Easing.ease
      },
      onRest: t
    })
  }, [C]), (0, n.jsx)(l.animated.div, {
    style: p,
    className: s()(E.settingsItemHighlight, i),
    children: t
  })
}

function _(e) {
  let {
    children: t,
    scrollPosition: i,
    animationDelay: o
  } = e, s = (0, d.e7)([h.Z], () => h.Z.getScrollPosition() === i), [l, a] = r.useState(!1);
  return (r.useEffect(() => {
    s && a(!0)
  }, [s]), l) ? (0, n.jsx)(g, {
    animationDelay: o,
    onFlashEnd: () => a(!1),
    children: t
  }) : (0, n.jsx)(n.Fragment, {
    children: t
  })
}