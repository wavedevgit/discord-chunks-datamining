/** Chunk was on 75909 **/
/** chunk id: 922826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./781311.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk620389 = require("./620389.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk561779 = require("./561779.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk184299 = require("./184299.js"),
  Chunk542347 = require("./542347.js"),
  Chunk157160 = require("./157160.jsx"),
  Chunk295029 = require("./295029.jsx"),
  Chunk954633 = require("./954633.jsx"),
  Chunk325916 = require("./325916.js"),
  Chunk939389 = require("./939389.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209668 = require("./209668.js");
let _ = "-:--",
  x = {
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
  y = {
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
  } = e, o = null != t ? (0, S.yv)(t) : _, l = null != n ? (0, S.yv)(n) : _;
  return (0, r.jsxs)("div", {
    className: i()(O.durationTimeWrapper, O.controlsBarItem),
    children: [(0, r.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: O.durationTimeDisplay,
      children: o
    }), (0, r.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: O.durationTimeSeparator,
      children: "/"
    }), (0, r.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: O.durationTimeDisplay,
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
    buttonSize: h = C.Cq.MD
  } = e, S = e => {
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
      className: i()(O.videoControlsBtnCont, {
        [O.videoControlsBtnContDisabled]: f
      }),
      "aria-label": s,
      "aria-disabled": f,
      innerRef: t,
      children: (0, r.jsx)(a.animated.div, {
        className: O.videoControlsBtnCont,
        style: {
          opacity: (0, a.to)([o.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(l ? e : Math.pow(e, 8))),
          height: {
            [C.Cq.LG]: "32px",
            [C.Cq.MD]: "24px"
          } [h]
        },
        children: (0, r.jsx)(n, {
          size: j[h],
          color: true !== f ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
          className: i()(O.controlsBarItem, {
            [O.controlsBarItemActive]: u,
            [O.videoControlsBtn]: !f
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
    children: S()
  }) : S()
});

function T(e) {
  var t, n;
  let {
    videoRef: l,
    playerState: d,
    animSpring: S,
    visible: _,
    seekForwardEnabled: j,
    hideCaptionBtn: T,
    hideTranscriptBtn: R,
    videoTask: N,
    size: I,
    handlePlaybackBtnClick: A,
    handleTranscriptBtnClick: w,
    handleCaptionBtnClick: k,
    handleFullScreenBtnClick: L,
    handleSeekBackBtnClick: M,
    handleSeekForwardBtnClick: V,
    handleControlBarPendingInteraction: Z,
    onVolumeChange: F
  } = e, B = (0, p.km)(e => e.volume), U = (0, p.km)(e => e.setVolume), q = (0, p.km)(e => e.muted), Y = (0, p.km)(e => e.setMuted), H = (0, p.km)(e => e.transcriptEnabled), Q = (0, p.km)(e => e.captionEnabled), G = (0, p.km)(e => e.fullScreenEnabled), K = (0, s.e7)([f.Z], () => f.Z.useReducedMotion), W = (0, s.e7)([f.Z], () => f.Z.keyboardModeEnabled), [z, X] = o.useState(q ? 0 : B), [$, J] = o.useState(false), [ee, et] = o.useState(false), [{
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
  })), eo = o.useRef(null), el = (0, v.ZS)(N), ei = o.useCallback(e => {
    null != l.current && (e !== l.current.volume && (l.current.volume = e), e !== z && X(e))
  }, [l, z]), ea = o.useCallback(() => {
    null != l.current && (0 === z ? (ei(B), Y(false), F(B)) : (U(z), ei(0), Y(true), F(0)))
  }, [l, z, ei, B, Y, U, F]), es = () => {
    J(true)
  }, ec = () => {
    J(false)
  }, eu = o.useCallback(e => {
    switch (e.key) {
      case C.Y1.PLAYBACK:
        A();
        break;
      case C.Y1.SPACE:
        W || (e.preventDefault(), A());
        break;
      case C.Y1.SEEK_BACK:
        M();
        break;
      case C.Y1.SEEK_FORWARD:
        V();
        break;
      case C.Y1.CAPTION:
        k();
        break;
      case C.Y1.FULLSCREEN:
        L();
        break;
      case C.Y1.MUTE:
        ea()
    }
  }, [k, L, A, M, V, ea, W]);
  o.useEffect(() => {
    null != eo.current && eo.current.focus()
  }, []), o.useEffect(() => (er({
    volumeAnimSpring: ee || $ ? 1 : 0,
    immediate: K
  }), () => {
    en.stop()
  }), [ee, $, er, K, en]), o.useEffect(() => (window.addEventListener("keydown", eu), () => {
    window.removeEventListener("keydown", eu)
  }), [eu]);
  let ed = 0 === z ? m.OyP : z < .5 ? m.X2j : m.gj8,
    {
      icon: em,
      label: ef
    } = x[d];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: O.videoControlsGroup,
      children: [(0, r.jsx)(D, {
        iconComponent: em,
        animationTime: S,
        visible: _,
        ariaLabel: ef,
        tooltipLabel: ef,
        shortcut: C.Y1.PLAYBACK,
        onClick: A,
        ref: eo,
        buttonSize: y[I]
      }), "portrait" !== el && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          iconComponent: g.F,
          animationTime: S,
          visible: _,
          onClick: M,
          ariaLabel: b.intl.string(b.t.r9s3Uv),
          tooltipLabel: b.intl.string(b.t.r9s3Uv),
          shortcut: C.Y1.SEEK_BACK,
          buttonSize: y[I]
        }), (0, r.jsx)(D, {
          iconComponent: h.j,
          animationTime: S,
          visible: _,
          onClick: V,
          disabled: !j,
          ariaLabel: j ? b.intl.string(b.t.zWDcNP) : b.intl.string(b.t.xXh3yw),
          tooltipLabel: j ? b.intl.string(b.t.zWDcNP) : b.intl.string(b.t.xXh3yw),
          tooltipDelayMs: 1500 * !!j,
          shortcut: C.Y1.SEEK_FORWARD,
          buttonSize: y[I]
        })]
      })]
    }), (0, r.jsxs)(a.animated.div, {
      className: i()(O.videoControlsGroup, O.videoControlsGroupMid),
      style: {
        opacity: (0, a.to)([S.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(_ ? e : Math.pow(e, 8)))
      },
      children: [(0, r.jsxs)("div", {
        onMouseEnter: es,
        onMouseLeave: ec,
        onFocus: es,
        onBlur: ec,
        className: O.volumeControlGroup,
        children: [(0, r.jsx)(D, {
          iconComponent: ed,
          animationTime: S,
          visible: _,
          onClick: ea,
          ariaLabel: b.intl.string(b.t["eIl+AK"]),
          tooltipLabel: b.intl.string(b.t["eIl+AK"]),
          shortcut: C.Y1.MUTE,
          buttonSize: y[I]
        }), (0, r.jsx)(a.animated.div, {
          className: O.volumeSlider,
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
            "aria-label": b.intl.string(b.t["eIl+AK"])
          })
        })]
      }), (0, r.jsx)(P, {
        current: null == l || null == (t = l.current) ? true : t.currentTime,
        duration: null == l || null == (n = l.current) ? true : n.duration
      })]
    }), (0, r.jsxs)("div", {
      className: i()(O.videoControlsGroup, O.videoControlsGroupEnd),
      children: [!R && (0, r.jsx)(D, {
        iconComponent: m.hH0,
        animationTime: S,
        visible: _,
        onClick: w,
        active: H && d !== C.rq.ENDED,
        disabled: d === C.rq.ENDED,
        ariaLabel: b.intl.string(b.t.KCzjTi),
        tooltipLabel: b.intl.string(b.t.KCzjTi),
        buttonSize: y[I]
      }), !T && (0, r.jsx)(D, {
        iconComponent: E.c,
        animationTime: S,
        visible: _,
        active: Q,
        onClick: k,
        ariaLabel: b.intl.string(b.t.bDSZO1),
        tooltipLabel: b.intl.string(b.t.bDSZO1),
        shortcut: C.Y1.CAPTION,
        buttonSize: y[I]
      }), (0, r.jsx)(D, {
        iconComponent: G ? m.wvt : m.NpZ,
        animationTime: S,
        visible: _,
        onClick: L,
        ariaLabel: b.intl.string(b.t.vKZT5t),
        tooltipLabel: b.intl.string(b.t.vKZT5t),
        shortcut: C.Y1.FULLSCREEN,
        buttonSize: y[I]
      })]
    })]
  })
}