/** Chunk was on 54082 **/
n.d(t, {
  Z: () => x
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  c = n(774078),
  u = n(906732),
  d = n(522651),
  p = n(579185),
  h = n(272929),
  f = n(456631),
  m = n(861254),
  g = n(221241),
  b = n(82965),
  _ = n(643720),
  C = n(127379),
  v = n(981631),
  y = n(633678);
let x = e => {
  let {
    channel: t,
    className: n,
    whichPopoutIsOpen: l,
    setWhichPopoutIsOpen: x
  } = e, {
    isHovered: j,
    setIsHovered: O,
    onMouseEnter: E,
    onMouseLeave: N,
    cancelTimers: I
  } = (0, p.Z)(200, 300), [P, S] = i.useState(!1), Z = (0, a.e7)([f.Z], () => f.Z.effectCooldownEndTime), T = i.useMemo(() => null != Z ? (Z.getTime() - Date.now()) / 1e3 : 0, [Z]), {
    seconds: A
  } = (0, c.Z)(null != Z ? Z : new Date), w = A > 0, {
    mode: R
  } = (0, m.ZP)({
    location: "ActionBarSoundboardButton"
  }), M = (0, b.Z)({
    location: "ActionBarSoundboardButton"
  }), {
    coloredIconsEnabled: k,
    squareButtonsEnabled: L
  } = (0, g.Z)({
    location: "ActionBarSoundboardButton"
  }), {
    parentAnalyticsLocation: D
  } = (0, u.ZP)(), W = i.useCallback(e => {
    "focus" !== e.type && (P || w || E())
  }, [P, w, E]), U = i.useCallback(() => {
    P || N()
  }, [N, P]), B = i.useCallback((e, t) => {
    I(), S(!P), l === C.D.EMOJI ? null == x || x(void 0) : null == x || x(C.D.EMOJI), (!j || P) && (null == t || t(e))
  }, [I, P, j, x, l]), H = (j || P) && (l === C.D.EMOJI || null == l);
  return (0, r.jsx)(s.yRy, {
    shouldShow: H,
    animation: M ? s.yRy.Animation.FADE : s.yRy.Animation.TRANSLATE,
    animationPosition: M ? "top" : "bottom",
    position: "bottom",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      O(!1), S(!1), null == x || x(void 0)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(_.Z, {
        isHovered: H,
        channel: t,
        closePopout: n,
        onMouseEnter: E,
        onMouseLeave: U,
        onFocus: () => S(!0)
      })
    },
    children: e => {
      let {
        onClick: t,
        onKeyDown: i
      } = e;
      return (0, r.jsx)(h.Z, {
        isCenterButton: !0,
        color: P ? k ? "primaryDark" : R === m.BK.GroupedButtonsRedMic || L ? "green" : void 0 : void 0,
        totalCooldownSeconds: T,
        remainingCooldownSeconds: A,
        className: o()(!M && y.controlButton, n),
        onKeyDown: e => {
          e.keyCode === v.yXg.ENTER && e.keyCode === v.yXg.SPACE && B(e, i)
        },
        onClick: e => {
          (0, d.v)(D, d.d.EMOJI), B(e, t)
        },
        onMouseEnter: W,
        onMouseLeave: U,
        isActive: P
      })
    }
  })
}