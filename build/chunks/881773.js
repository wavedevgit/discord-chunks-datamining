/** Chunk was on 32249 **/
n.d(t, {
  Z: () => T
}), n(566702), n(47120);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  i = n.n(o),
  a = n(642128),
  s = n(442837),
  c = n(692547),
  u = n(561779),
  d = n(481060),
  m = n(607070),
  p = n(540059),
  f = n(617136),
  v = n(184299),
  g = n(902749),
  b = n(957099),
  E = n(312729),
  O = n(223418),
  h = n(604162),
  S = n(981631),
  C = n(388032),
  j = n(881382);

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = "-:--",
  D = {
    [O.rq.PLAYING]: {
      icon: d.fpf,
      label: C.NW.string(C.t.ZcgDJS)
    },
    [O.rq.PAUSED]: {
      icon: d.o1U,
      label: C.NW.string(C.t.RscU7O)
    },
    [O.rq.ENDED]: {
      icon: d.Oe7,
      label: C.NW.string(C.t.hsvh0t)
    }
  };

function N(e) {
  let {
    current: t,
    duration: n
  } = e, l = null != t ? (0, h.yv)(t) : x, o = null != n ? (0, h.yv)(n) : x;
  return l = l.padStart(o.length, "0"), (0, r.jsxs)("div", {
    className: i()(j.durationTimeWrapper, j.controlsBarItem),
    children: [(0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: j.durationTimeDisplay,
      children: l
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: j.durationTimeSeparator,
      children: "/"
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: j.durationTimeDisplay,
      children: o
    })]
  })
}
let P = l.forwardRef(function(e, t) {
  let {
    iconComponent: n,
    animationTime: l,
    visible: o,
    ariaLabel: s,
    active: u,
    disabled: m,
    tooltipLabel: p,
    tooltipDelayMs: f = 1500,
    shortcut: v,
    onClick: g
  } = e, b = e => (0, r.jsx)(d.P3F, _(y({}, e), {
    onClick: !0 === m ? void 0 : g,
    className: i()(j.videoControlsBtnCont, {
      [j.videoControlsBtnContDisabled]: m
    }),
    "aria-label": s,
    "aria-disabled": m,
    innerRef: t,
    children: (0, r.jsx)(a.animated.div, {
      className: j.videoControlsBtnCont,
      style: {
        opacity: (0, a.to)([l.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(o ? e : Math.pow(e, 8)))
      },
      children: (0, r.jsx)(n, {
        color: !0 !== m ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
        className: i()(j.controlsBarItem, {
          [j.controlsBarItemActive]: u,
          [j.videoControlsBtn]: !m
        })
      })
    })
  }));
  if (null == p) return b();
  {
    let e = (0, r.jsxs)(r.Fragment, {
      children: [p, "" !== (null != v ? v : "").trim() && (0, r.jsx)(d.M2$, {
        shortcut: null != v ? v : "",
        className: j.videoControlsBtnTooltipKeyCombo
      })]
    });
    return (0, r.jsx)(d.ua7, {
      text: e,
      "aria-label": p,
      tooltipContentClassName: j.videoControlsBtnTooltip,
      delay: f,
      children: e => b(e)
    })
  }
});

function T(e) {
  var t, n;
  let {
    videoRef: o,
    quest: h,
    playerState: x,
    animSpring: T,
    visible: k,
    seekForwardEnabled: w,
    hideCaptionBtn: A,
    handlePlaybackBtnClick: I,
    handleTranscriptBtnClick: L,
    handleCaptionBtnClick: R,
    handleFullScreenBtnClick: M,
    handleSeekBackBtnClick: V,
    handleSeekForwardBtnClick: B,
    handleControlBarPendingInteraction: F
  } = e, Z = (0, p.Q3)("ListSectionItem"), U = (0, v.km)(e => e.volume), q = (0, v.km)(e => e.setVolume), Y = (0, v.km)(e => e.muted), W = (0, v.km)(e => e.setMuted), Q = (0, v.km)(e => e.transcriptEnabled), z = (0, v.km)(e => e.captionEnabled), G = (0, v.km)(e => e.fullScreenEnabled), H = (0, s.e7)([m.Z], () => m.Z.useReducedMotion), K = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled), [X, $] = l.useState(Y ? 0 : U), [J, ee] = l.useState(!1), [et, en] = l.useState(!1), [{
    volumeAnimSpring: er
  }, el] = (0, d.q_F)(() => ({
    from: {
      volumeAnimSpring: 0
    },
    config: {
      tension: 100,
      friction: 3,
      clamp: !0
    }
  })), eo = l.useRef(null), ei = (0, f._F)(), ea = l.useCallback(e => {
    null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== X && $(e))
  }, [o, X]), es = l.useCallback((e, t) => {
    ei({
      questId: e,
      event: S.rMx.QUEST_VIDEO_VOLUME_CHANGED,
      properties: {
        volume_threshold: t > 0 && t < 1 ? .5 : t
      }
    })
  }, [ei]), ec = l.useCallback(() => {
    null != o.current && (0 === X ? (ea(U), W(!1), es(h.id, U)) : (q(X), ea(0), W(!0), es(h.id, 0)))
  }, [o, X, ea, U, W, es, h.id, q]), eu = () => {
    ee(!0)
  }, ed = () => {
    ee(!1)
  }, em = l.useCallback(e => {
    switch (e.key) {
      case O.Y1.PLAYBACK:
        I();
        break;
      case O.Y1.SPACE:
        K || (e.preventDefault(), I());
        break;
      case O.Y1.SEEK_BACK:
        V();
        break;
      case O.Y1.SEEK_FORWARD:
        B();
        break;
      case O.Y1.CAPTION:
        R();
        break;
      case O.Y1.FULLSCREEN:
        M();
        break;
      case O.Y1.MUTE:
        ec()
    }
  }, [R, M, I, V, B, ec, K]);
  l.useEffect(() => {
    null != eo.current && eo.current.focus()
  }, []), l.useEffect(() => (el({
    volumeAnimSpring: et || J ? 1 : 0,
    immediate: H
  }), () => {
    er.stop()
  }), [et, J, el, H, er]), l.useEffect(() => (window.addEventListener("keydown", em), () => {
    window.removeEventListener("keydown", em)
  }), [em]);
  let ep = 0 === X ? d.OyP : X < .5 ? d.X2j : d.gj8,
    {
      icon: ef,
      label: ev
    } = D[x];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: j.videoControlsGroup,
      children: [(0, r.jsx)(P, {
        iconComponent: ef,
        animationTime: T,
        visible: k,
        ariaLabel: ev,
        tooltipLabel: ev,
        shortcut: O.Y1.PLAYBACK,
        onClick: I,
        ref: eo
      }), (0, r.jsx)(P, {
        iconComponent: b.d,
        animationTime: T,
        visible: k,
        onClick: V,
        ariaLabel: C.NW.string(C.t.r9s3Ul),
        tooltipLabel: C.NW.string(C.t.r9s3Ul),
        shortcut: O.Y1.SEEK_BACK
      }), (0, r.jsx)(P, {
        iconComponent: E.o,
        animationTime: T,
        visible: k,
        onClick: B,
        disabled: !w,
        ariaLabel: w ? C.NW.string(C.t.zWDcND) : C.NW.string(C.t.xXh3y8),
        tooltipLabel: w ? C.NW.string(C.t.zWDcND) : C.NW.string(C.t.xXh3y8),
        tooltipDelayMs: 1500 * !!w,
        shortcut: O.Y1.SEEK_FORWARD
      })]
    }), (0, r.jsxs)(a.animated.div, {
      className: i()(j.videoControlsGroup, j.videoControlsGroupMid),
      style: {
        opacity: (0, a.to)([T.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(k ? e : Math.pow(e, 8)))
      },
      children: [(0, r.jsxs)("div", {
        onMouseEnter: eu,
        onMouseLeave: ed,
        onFocus: eu,
        onBlur: ed,
        className: j.volumeControlGroup,
        children: [(0, r.jsx)(P, {
          iconComponent: ep,
          animationTime: T,
          visible: k,
          onClick: ec,
          ariaLabel: C.NW.string(C.t["eIl+AA"]),
          tooltipLabel: C.NW.string(C.t["eIl+AA"]),
          shortcut: O.Y1.MUTE
        }), (0, r.jsx)(a.animated.div, {
          className: j.volumeSlider,
          style: {
            opacity: (0, a.to)([er.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(k ? e : Math.pow(e, 8))),
            width: (0, a.to)([er.to({
              range: [0, 1],
              output: [0, 100]
            })], e => "".concat(e, "px"))
          },
          children: (0, r.jsx)(u.i, _(y({
            mini: !0
          }, Z ? {} : {
            barStyles: {
              height: "5px",
              top: "10px"
            },
            grabberStyles: {
              marginTop: "-5px",
              backgroundColor: c.Z.colors.WHITE.css,
              cursor: "pointer"
            },
            fillStyles: {
              backgroundColor: c.Z.colors.WHITE.css
            }
          }), {
            initialValue: X,
            keyboardStep: .1,
            minValue: 0,
            maxValue: 1,
            onValueChange: e => {
              ea(e), q(e), es(h.id, e), et && (en(!1), F(!1)), Y && e > 0 && W(!1)
            },
            asValueChanges: e => {
              ea(e), et || (en(!0), F(!0))
            },
            fillStyles: {
              backgroundColor: c.Z.colors.WHITE.css
            },
            orientation: "horizontal",
            "aria-label": C.NW.string(C.t["eIl+AA"])
          }))
        })]
      }), (0, r.jsx)(N, {
        current: null == o ? void 0 : null === (t = o.current) || void 0 === t ? void 0 : t.currentTime,
        duration: null == o ? void 0 : null === (n = o.current) || void 0 === n ? void 0 : n.duration
      })]
    }), (0, r.jsxs)("div", {
      className: i()(j.videoControlsGroup, j.videoControlsGroupEnd),
      children: [(0, r.jsx)(P, {
        iconComponent: d.hH0,
        animationTime: T,
        visible: k,
        onClick: L,
        active: Q && x !== O.rq.ENDED,
        disabled: x === O.rq.ENDED,
        ariaLabel: C.NW.string(C.t.KCzjTk),
        tooltipLabel: C.NW.string(C.t.KCzjTk)
      }), !A && (0, r.jsx)(P, {
        iconComponent: g.c,
        animationTime: T,
        visible: k,
        active: z,
        onClick: R,
        ariaLabel: C.NW.string(C.t.bDSZOz),
        tooltipLabel: C.NW.string(C.t.bDSZOz),
        shortcut: O.Y1.CAPTION
      }), (0, r.jsx)(P, {
        iconComponent: G ? d.wvt : d.NpZ,
        animationTime: T,
        visible: k,
        onClick: M,
        ariaLabel: C.NW.string(C.t.vKZT5u),
        tooltipLabel: C.NW.string(C.t.vKZT5u),
        shortcut: O.Y1.FULLSCREEN
      })]
    })]
  })
}