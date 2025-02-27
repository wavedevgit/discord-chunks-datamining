/** Chunk was on 32249 **/
n.d(t, {
  Z: () => T
}), n(566702), n(47120);
var r = n(200651),
  o = n(192379),
  l = n(120356),
  i = n.n(l),
  s = n(642128),
  a = n(442837),
  c = n(692547),
  u = n(561779),
  d = n(481060),
  m = n(607070),
  p = n(540059),
  v = n(617136),
  f = n(184299),
  E = n(902749),
  g = n(957099),
  O = n(312729),
  b = n(223418),
  S = n(604162),
  C = n(981631),
  j = n(388032),
  h = n(677488);

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
    [b.rq.PLAYING]: {
      icon: d.fpf,
      label: j.NW.string(j.t.ZcgDJS)
    },
    [b.rq.PAUSED]: {
      icon: d.o1U,
      label: j.NW.string(j.t.RscU7O)
    },
    [b.rq.ENDED]: {
      icon: d.Oe7,
      label: j.NW.string(j.t.hsvh0t)
    }
  };

function N(e) {
  let {
    current: t,
    duration: n
  } = e, o = null != t ? (0, S.yv)(t) : x, l = null != n ? (0, S.yv)(n) : x;
  return o = o.padStart(l.length, "0"), (0, r.jsxs)("div", {
    className: i()(h.durationTimeWrapper, h.controlsBarItem),
    children: [(0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: h.durationTimeDisplay,
      children: o
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: h.durationTimeSeparator,
      children: "/"
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: h.durationTimeDisplay,
      children: l
    })]
  })
}
let P = o.forwardRef(function(e, t) {
  let {
    iconComponent: n,
    animationTime: o,
    visible: l,
    ariaLabel: a,
    active: u,
    disabled: m,
    tooltipLabel: p,
    tooltipDelayMs: v = 1500,
    shortcut: f,
    onClick: E
  } = e, g = e => (0, r.jsx)(d.P3F, _(y({}, e), {
    onClick: !0 === m ? void 0 : E,
    className: i()(h.videoControlsBtnCont, {
      [h.videoControlsBtnContDisabled]: m
    }),
    "aria-label": a,
    "aria-disabled": m,
    innerRef: t,
    children: (0, r.jsx)(s.animated.div, {
      className: i()(h.videoControlsBtnCont),
      style: {
        opacity: (0, s.to)([o.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(l ? e : Math.pow(e, 8)))
      },
      children: (0, r.jsx)(n, {
        color: !0 !== m ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
        className: i()(h.controlsBarItem, {
          [h.controlsBarItemActive]: u,
          [h.videoControlsBtn]: !m
        })
      })
    })
  }));
  if (null == p) return g();
  {
    let e = (0, r.jsxs)(r.Fragment, {
      children: [p, "" !== (null != f ? f : "").trim() && (0, r.jsx)(d.M2$, {
        shortcut: null != f ? f : "",
        className: h.videoControlsBtnTooltipKeyCombo
      })]
    });
    return (0, r.jsx)(d.ua7, {
      text: e,
      "aria-label": p,
      tooltipContentClassName: h.videoControlsBtnTooltip,
      delay: v,
      children: e => g(e)
    })
  }
});

function T(e) {
  var t, n;
  let {
    videoRef: l,
    quest: S,
    playerState: x,
    animSpring: T,
    visible: I,
    seekForwardEnabled: A,
    hideCaptionBtn: w,
    handlePlaybackBtnClick: L,
    handleTranscriptBtnClick: R,
    handleCaptionBtnClick: k,
    handleFullScreenBtnClick: M,
    handleSeekBackBtnClick: q,
    handleSeekForwardBtnClick: B,
    handleControlBarPendingInteraction: F
  } = e, U = (0, p.Q3)("ListSectionItem"), V = (0, f.km)(e => e.volume), Z = (0, f.km)(e => e.setVolume), Y = (0, f.km)(e => e.muted), W = (0, f.km)(e => e.setMuted), z = (0, f.km)(e => e.transcriptEnabled), G = (0, f.km)(e => e.captionEnabled), H = (0, f.km)(e => e.fullScreenEnabled), K = (0, a.e7)([m.Z], () => m.Z.useReducedMotion), Q = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled), [X, $] = o.useState(Y ? 0 : V), [J, ee] = o.useState(!1), [et, en] = o.useState(!1), [{
    volumeAnimSpring: er
  }, eo] = (0, d.q_F)(() => ({
    from: {
      volumeAnimSpring: 0
    },
    config: {
      tension: 100,
      friction: 3,
      clamp: !0
    }
  })), el = o.useRef(null), ei = (0, v._F)(), es = o.useCallback(e => {
    null != l.current && (e !== l.current.volume && (l.current.volume = e), e !== X && $(e))
  }, [l, X]), ea = o.useCallback((e, t) => {
    ei({
      questId: e,
      event: C.rMx.QUEST_VIDEO_VOLUME_CHANGED,
      properties: {
        volume_threshold: t > 0 && t < 1 ? .5 : t
      }
    })
  }, [ei]), ec = o.useCallback(() => {
    null != l.current && (0 === X ? (es(V), W(!1), ea(S.id, V)) : (Z(X), es(0), W(!0), ea(S.id, 0)))
  }, [l, X, es, V, W, ea, S.id, Z]), eu = () => {
    ee(!0)
  }, ed = () => {
    ee(!1)
  }, em = o.useCallback(e => {
    switch (e.key) {
      case b.Y1.PLAYBACK:
        L();
        break;
      case b.Y1.SPACE:
        Q || (e.preventDefault(), L());
        break;
      case b.Y1.SEEK_BACK:
        q();
        break;
      case b.Y1.SEEK_FORWARD:
        B();
        break;
      case b.Y1.CAPTION:
        k();
        break;
      case b.Y1.FULLSCREEN:
        M();
        break;
      case b.Y1.MUTE:
        ec()
    }
  }, [k, M, L, q, B, ec, Q]);
  o.useEffect(() => {
    null != el.current && el.current.focus()
  }, []), o.useEffect(() => (eo({
    volumeAnimSpring: et || J ? 1 : 0,
    immediate: K
  }), () => {
    er.stop()
  }), [et, J, eo, K, er]), o.useEffect(() => (window.addEventListener("keydown", em), () => {
    window.removeEventListener("keydown", em)
  }), [em]);
  let ep = 0 === X ? d.OyP : X < .5 ? d.X2j : d.gj8,
    {
      icon: ev,
      label: ef
    } = D[x];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: h.videoControlsGroup,
      children: [(0, r.jsx)(P, {
        iconComponent: ev,
        animationTime: T,
        visible: I,
        ariaLabel: ef,
        tooltipLabel: ef,
        shortcut: b.Y1.PLAYBACK,
        onClick: L,
        ref: el
      }), (0, r.jsx)(P, {
        iconComponent: g.d,
        animationTime: T,
        visible: I,
        onClick: q,
        ariaLabel: j.NW.string(j.t.r9s3Ul),
        tooltipLabel: j.NW.string(j.t.r9s3Ul),
        shortcut: b.Y1.SEEK_BACK
      }), (0, r.jsx)(P, {
        iconComponent: O.o,
        animationTime: T,
        visible: I,
        onClick: B,
        disabled: !A,
        ariaLabel: A ? j.NW.string(j.t.zWDcND) : j.NW.string(j.t.xXh3y8),
        tooltipLabel: A ? j.NW.string(j.t.zWDcND) : j.NW.string(j.t.xXh3y8),
        tooltipDelayMs: 1500 * !!A,
        shortcut: b.Y1.SEEK_FORWARD
      })]
    }), (0, r.jsxs)(s.animated.div, {
      className: i()(h.videoControlsGroup, h.videoControlsGroupMid),
      style: {
        opacity: (0, s.to)([T.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(I ? e : Math.pow(e, 8)))
      },
      children: [(0, r.jsxs)("div", {
        onMouseEnter: eu,
        onMouseLeave: ed,
        onFocus: eu,
        onBlur: ed,
        className: h.volumeControlGroup,
        children: [(0, r.jsx)(P, {
          iconComponent: ep,
          animationTime: T,
          visible: I,
          onClick: ec,
          ariaLabel: j.NW.string(j.t["eIl+AA"]),
          tooltipLabel: j.NW.string(j.t["eIl+AA"]),
          shortcut: b.Y1.MUTE
        }), (0, r.jsx)(s.animated.div, {
          className: h.volumeSlider,
          style: {
            opacity: (0, s.to)([er.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(I ? e : Math.pow(e, 8))),
            width: (0, s.to)([er.to({
              range: [0, 1],
              output: [0, 100]
            })], e => "".concat(e, "px"))
          },
          children: (0, r.jsx)(u.i, _(y({
            mini: !0
          }, U ? {} : {
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
              es(e), Z(e), ea(S.id, e), et && (en(!1), F(!1)), Y && e > 0 && W(!1)
            },
            asValueChanges: e => {
              es(e), et || (en(!0), F(!0))
            },
            fillStyles: {
              backgroundColor: c.Z.colors.WHITE.css
            },
            orientation: "horizontal",
            "aria-label": j.NW.string(j.t["eIl+AA"])
          }))
        })]
      }), (0, r.jsx)(N, {
        current: null == l ? void 0 : null === (t = l.current) || void 0 === t ? void 0 : t.currentTime,
        duration: null == l ? void 0 : null === (n = l.current) || void 0 === n ? void 0 : n.duration
      })]
    }), (0, r.jsxs)("div", {
      className: i()(h.videoControlsGroup, h.videoControlsGroupEnd),
      children: [(0, r.jsx)(P, {
        iconComponent: d.hH0,
        animationTime: T,
        visible: I,
        onClick: R,
        active: z && x !== b.rq.ENDED,
        disabled: x === b.rq.ENDED,
        ariaLabel: j.NW.string(j.t.KCzjTk),
        tooltipLabel: j.NW.string(j.t.KCzjTk)
      }), !w && (0, r.jsx)(P, {
        iconComponent: E.c,
        animationTime: T,
        visible: I,
        active: G,
        onClick: k,
        ariaLabel: j.NW.string(j.t.bDSZOz),
        tooltipLabel: j.NW.string(j.t.bDSZOz),
        shortcut: b.Y1.CAPTION
      }), (0, r.jsx)(P, {
        iconComponent: H ? d.wvt : d.NpZ,
        animationTime: T,
        visible: I,
        onClick: M,
        ariaLabel: j.NW.string(j.t.vKZT5u),
        tooltipLabel: j.NW.string(j.t.vKZT5u),
        shortcut: b.Y1.FULLSCREEN
      })]
    })]
  })
}