/** Chunk was on 75909 **/
/** chunk id: 922826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./781311.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk790519 = require("./790519.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk561779 = require("./561779.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk509212 = require("./509212.js"),
  Chunk184299 = require("./184299.js"),
  Chunk157160 = require("./157160.jsx"),
  Chunk295029 = require("./295029.jsx"),
  Chunk954633 = require("./954633.jsx"),
  Chunk325916 = require("./325916.js"),
  Chunk939389 = require("./939389.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk273339 = require("./273339.js");
let _ = "-:--",
  y = {
    [Chunk325916.rq.PLAYING]: {
      icon: Chunk481060.fpf,
      label: Chunk388032.intl.string(Chunk388032.t.ZcgDJX)
    },
    [Chunk325916.rq.PAUSED]: {
      icon: Chunk481060.o1U,
      label: Chunk388032.intl.string(Chunk388032.t.RscU7I)
    },
    [Chunk325916.rq.ENDED]: {
      icon: Chunk481060.Oe7,
      label: Chunk388032.intl.string(Chunk388032.t.hsvh0i)
    }
  },
  x = {
    [Chunk325916._H.MD]: Chunk325916.Cq.MD,
    [Chunk325916._H.LG]: Chunk325916.Cq.LG
  },
  j = {
    [Chunk325916.Cq.MD]: "md",
    [Chunk325916.Cq.LG]: "lg"
  };

function P(e) {
  let {
    current: t,
    duration: n
  } = e, o = null != t ? (0, b.yv)(t) : _, l = null != n ? (0, b.yv)(n) : _;
  return o = o.padStart(l.length, "0"), (0, r.jsxs)("div", {
    className: i()(S.durationTimeWrapper, S.controlsBarItem),
    children: [(0, r.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: S.durationTimeDisplay,
      children: o
    }), (0, r.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: S.durationTimeSeparator,
      children: "/"
    }), (0, r.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: S.durationTimeDisplay,
      children: l
    })]
  })
}
let D = Chunk473749.forwardRef(function(e, t) {
  let {
    iconComponent: n,
    animationTime: o,
    visible: l,
    ariaLabel: s,
    active: u,
    disabled: f,
    tooltipLabel: p,
    tooltipDelayMs: v = 1500,
    shortcut: E,
    onClick: g,
    buttonSize: O = h.Cq.MD
  } = e, b = e => {
    var d, p;
    return (0, r.jsx)(m.P3F, (d = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, e), p = p = {
      onClick: true === f ? true : g,
      className: i()(S.videoControlsBtnCont, {
        [S.videoControlsBtnContDisabled]: f
      }),
      "aria-label": s,
      "aria-disabled": f,
      innerRef: t,
      children: (0, r.jsx)(a.animated.div, {
        className: S.videoControlsBtnCont,
        style: {
          opacity: (0, a.to)([o.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(l ? e : Math.pow(e, 8))),
          height: {
            [h.Cq.LG]: "32px",
            [h.Cq.MD]: "24px"
          } [O]
        },
        children: (0, r.jsx)(n, {
          size: j[O],
          color: true !== f ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
          className: i()(S.controlsBarItem, {
            [S.controlsBarItemActive]: u,
            [S.videoControlsBtn]: !f
          })
        })
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(p)).forEach(function(e) {
      Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e))
    }), d))
  };
  return null != p && l ? (0, r.jsx)(d.u, {
    text: p,
    keyboardShortcut: "" !== (null != E ? E : "").trim() ? E : true,
    delay: v,
    children: b()
  }) : b()
});

function R(e) {
  var t, n;
  let {
    videoRef: l,
    playerState: d,
    animSpring: b,
    visible: _,
    seekForwardEnabled: j,
    hideCaptionBtn: R,
    hideTranscriptBtn: T,
    videoTask: I,
    size: N,
    handlePlaybackBtnClick: A,
    handleTranscriptBtnClick: w,
    handleCaptionBtnClick: k,
    handleFullScreenBtnClick: L,
    handleSeekBackBtnClick: M,
    handleSeekForwardBtnClick: V,
    handleControlBarPendingInteraction: Z,
    onVolumeChange: F
  } = e, B = (0, v.km)(e => e.volume), U = (0, v.km)(e => e.setVolume), q = (0, v.km)(e => e.muted), Y = (0, v.km)(e => e.setMuted), H = (0, v.km)(e => e.transcriptEnabled), Q = (0, v.km)(e => e.captionEnabled), G = (0, v.km)(e => e.fullScreenEnabled), K = (0, s.e7)([f.Z], () => f.Z.useReducedMotion), W = (0, s.e7)([f.Z], () => f.Z.keyboardModeEnabled), [z, X] = o.useState(q ? 0 : B), [J, $] = o.useState(false), [ee, et] = o.useState(false), [{
    volumeAnimSpring: en
  }, er] = (0, m.q_F)(() => ({
    from: {
      volumeAnimSpring: 0
    },
    config: {
      tension: 100,
      friction: 3,
      clamp: true
    }
  })), eo = o.useRef(null), el = (0, p.ZS)(I), ei = o.useCallback(e => {
    null != l.current && (e !== l.current.volume && (l.current.volume = e), e !== z && X(e))
  }, [l, z]), ea = o.useCallback(() => {
    null != l.current && (0 === z ? (ei(B), Y(false), F(B)) : (U(z), ei(0), Y(true), F(0)))
  }, [l, z, ei, B, Y, U, F]), es = () => {
    $(true)
  }, ec = () => {
    $(false)
  }, eu = o.useCallback(e => {
    switch (e.key) {
      case h.Y1.PLAYBACK:
        A();
        break;
      case h.Y1.SPACE:
        W || (e.preventDefault(), A());
        break;
      case h.Y1.SEEK_BACK:
        M();
        break;
      case h.Y1.SEEK_FORWARD:
        V();
        break;
      case h.Y1.CAPTION:
        k();
        break;
      case h.Y1.FULLSCREEN:
        L();
        break;
      case h.Y1.MUTE:
        ea()
    }
  }, [k, L, A, M, V, ea, W]);
  o.useEffect(() => {
    null != eo.current && eo.current.focus()
  }, []), o.useEffect(() => (er({
    volumeAnimSpring: ee || J ? 1 : 0,
    immediate: K
  }), () => {
    en.stop()
  }), [ee, J, er, K, en]), o.useEffect(() => (window.addEventListener("keydown", eu), () => {
    window.removeEventListener("keydown", eu)
  }), [eu]);
  let ed = 0 === z ? m.OyP : z < .5 ? m.X2j : m.gj8,
    {
      icon: em,
      label: ef
    } = y[d];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.videoControlsGroup,
      children: [(0, r.jsx)(D, {
        iconComponent: em,
        animationTime: b,
        visible: _,
        ariaLabel: ef,
        tooltipLabel: ef,
        shortcut: h.Y1.PLAYBACK,
        onClick: A,
        ref: eo,
        buttonSize: x[N]
      }), "portrait" !== el && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          iconComponent: g.F,
          animationTime: b,
          visible: _,
          onClick: M,
          ariaLabel: C.intl.string(C.t.r9s3Uv),
          tooltipLabel: C.intl.string(C.t.r9s3Uv),
          shortcut: h.Y1.SEEK_BACK,
          buttonSize: x[N]
        }), (0, r.jsx)(D, {
          iconComponent: O.j,
          animationTime: b,
          visible: _,
          onClick: V,
          disabled: !j,
          ariaLabel: j ? C.intl.string(C.t.zWDcNP) : C.intl.string(C.t.xXh3yw),
          tooltipLabel: j ? C.intl.string(C.t.zWDcNP) : C.intl.string(C.t.xXh3yw),
          tooltipDelayMs: 1500 * !!j,
          shortcut: h.Y1.SEEK_FORWARD,
          buttonSize: x[N]
        })]
      })]
    }), (0, r.jsxs)(a.animated.div, {
      className: i()(S.videoControlsGroup, S.videoControlsGroupMid),
      style: {
        opacity: (0, a.to)([b.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(_ ? e : Math.pow(e, 8)))
      },
      children: [(0, r.jsxs)("div", {
        onMouseEnter: es,
        onMouseLeave: ec,
        onFocus: es,
        onBlur: ec,
        className: S.volumeControlGroup,
        children: [(0, r.jsx)(D, {
          iconComponent: ed,
          animationTime: b,
          visible: _,
          onClick: ea,
          ariaLabel: C.intl.string(C.t["eIl+AK"]),
          tooltipLabel: C.intl.string(C.t["eIl+AK"]),
          shortcut: h.Y1.MUTE,
          buttonSize: x[N]
        }), (0, r.jsx)(a.animated.div, {
          className: S.volumeSlider,
          style: {
            opacity: (0, a.to)([en.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(_ ? e : Math.pow(e, 8))),
            width: (0, a.to)([en.to({
              range: [0, 1],
              output: [0, 100]
            })], e => "".concat(e, "px"))
          },
          children: (0, r.jsx)(u.i, {
            mini: true,
            initialValue: z,
            keyboardStep: .1,
            minValue: 0,
            maxValue: 1,
            onValueChange: e => {
              ei(e), U(e), F(e), ee && (et(false), Z(false)), q && e > 0 && Y(false)
            },
            asValueChanges: e => {
              ei(e), ee || (et(true), Z(true))
            },
            fillStyles: {
              backgroundColor: c.Z.colors.WHITE.css
            },
            orientation: "horizontal",
            "aria-label": C.intl.string(C.t["eIl+AK"])
          })
        })]
      }), (0, r.jsx)(P, {
        current: null == l || null == (t = l.current) ? true : t.currentTime,
        duration: null == l || null == (n = l.current) ? true : n.duration
      })]
    }), (0, r.jsxs)("div", {
      className: i()(S.videoControlsGroup, S.videoControlsGroupEnd),
      children: [!T && (0, r.jsx)(D, {
        iconComponent: m.hH0,
        animationTime: b,
        visible: _,
        onClick: w,
        active: H && d !== h.rq.ENDED,
        disabled: d === h.rq.ENDED,
        ariaLabel: C.intl.string(C.t.KCzjTi),
        tooltipLabel: C.intl.string(C.t.KCzjTi),
        buttonSize: x[N]
      }), !R && (0, r.jsx)(D, {
        iconComponent: E.c,
        animationTime: b,
        visible: _,
        active: Q,
        onClick: k,
        ariaLabel: C.intl.string(C.t.bDSZO1),
        tooltipLabel: C.intl.string(C.t.bDSZO1),
        shortcut: h.Y1.CAPTION,
        buttonSize: x[N]
      }), (0, r.jsx)(D, {
        iconComponent: G ? m.wvt : m.NpZ,
        animationTime: b,
        visible: _,
        onClick: L,
        ariaLabel: C.intl.string(C.t.vKZT5t),
        tooltipLabel: C.intl.string(C.t.vKZT5t),
        shortcut: h.Y1.FULLSCREEN,
        buttonSize: x[N]
      })]
    })]
  })
}