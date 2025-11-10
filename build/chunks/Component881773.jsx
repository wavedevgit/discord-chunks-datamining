/** Chunk was on 32249 **/
/** chunk id: 881773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk561779 = require("./561779.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk509212 = require("./509212.js"),
  Chunk184299 = require("./184299.js"),
  Chunk902749 = require("./902749.jsx"),
  Chunk957099 = require("./957099.jsx"),
  Chunk312729 = require("./312729.jsx"),
  Chunk223418 = require("./223418.js"),
  Chunk604162 = require("./604162.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430799 = require("./430799.js");
let y = "-:--",
  _ = {
    [Chunk223418.rq.PLAYING]: {
      icon: Chunk481060.fpf,
      label: Chunk388032.intl.string(Chunk388032.t.ZcgDJX)
    },
    [Chunk223418.rq.PAUSED]: {
      icon: Chunk481060.o1U,
      label: Chunk388032.intl.string(Chunk388032.t.RscU7I)
    },
    [Chunk223418.rq.ENDED]: {
      icon: Chunk481060.Oe7,
      label: Chunk388032.intl.string(Chunk388032.t.hsvh0i)
    }
  },
  x = {
    [Chunk223418._H.MD]: Chunk223418.Cq.MD,
    [Chunk223418._H.LG]: Chunk223418.Cq.LG
  },
  j = {
    [Chunk223418.Cq.MD]: "md",
    [Chunk223418.Cq.LG]: "lg"
  };

function D(e) {
  let {
    current: t,
    duration: n
  } = e, o = null != t ? (0, h.yv)(t) : y, l = null != n ? (0, h.yv)(n) : y;
  return o = o.padStart(l.length, "0"), (0, r.jsxs)("div", {
    className: i()(C.durationTimeWrapper, C.controlsBarItem),
    children: [(0, r.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: C.durationTimeDisplay,
      children: o
    }), (0, r.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: C.durationTimeSeparator,
      children: "/"
    }), (0, r.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: C.durationTimeDisplay,
      children: l
    })]
  })
}
let T = Chunk647438.forwardRef(function(e, t) {
  let {
    iconComponent: n,
    animationTime: o,
    visible: l,
    ariaLabel: s,
    active: u,
    disabled: p,
    tooltipLabel: f,
    tooltipDelayMs: v = 1500,
    shortcut: g,
    onClick: E,
    buttonSize: O = b.Cq.MD
  } = e, h = e => {
    var d, f;
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
    }({}, e), f = f = {
      onClick: true === p ? true : E,
      className: i()(C.videoControlsBtnCont, {
        [C.videoControlsBtnContDisabled]: p
      }),
      "aria-label": s,
      "aria-disabled": p,
      innerRef: t,
      children: (0, r.jsx)(a.animated.div, {
        className: C.videoControlsBtnCont,
        style: {
          opacity: (0, a.to)([o.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(l ? e : Math.pow(e, 8))),
          height: {
            [b.Cq.LG]: "32px",
            [b.Cq.MD]: "24px"
          } [O]
        },
        children: (0, r.jsx)(n, {
          size: j[O],
          color: true !== p ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
          className: i()(C.controlsBarItem, {
            [C.controlsBarItemActive]: u,
            [C.videoControlsBtn]: !p
          })
        })
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(f)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(f)).forEach(function(e) {
      Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(f, e))
    }), d))
  };
  return null != f && l ? (0, r.jsx)(d.u, {
    text: f,
    keyboardShortcut: "" !== (null != g ? g : "").trim() ? g : true,
    delay: v,
    children: h()
  }) : h()
});

function P(e) {
  var t, n;
  let {
    videoRef: l,
    playerState: d,
    animSpring: h,
    visible: y,
    seekForwardEnabled: j,
    hideCaptionBtn: P,
    hideTranscriptBtn: R,
    videoTask: I,
    size: N,
    handlePlaybackBtnClick: w,
    handleTranscriptBtnClick: A,
    handleCaptionBtnClick: k,
    handleFullScreenBtnClick: M,
    handleSeekBackBtnClick: L,
    handleSeekForwardBtnClick: V,
    handleControlBarPendingInteraction: Z,
    onVolumeChange: F
  } = e, B = (0, v.km)(e => e.volume), H = (0, v.km)(e => e.setVolume), U = (0, v.km)(e => e.muted), q = (0, v.km)(e => e.setMuted), Y = (0, v.km)(e => e.transcriptEnabled), G = (0, v.km)(e => e.captionEnabled), Q = (0, v.km)(e => e.fullScreenEnabled), W = (0, s.e7)([p.Z], () => p.Z.useReducedMotion), K = (0, s.e7)([p.Z], () => p.Z.keyboardModeEnabled), [z, X] = o.useState(U ? 0 : B), [J, $] = o.useState(false), [ee, et] = o.useState(false), [{
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
  })), eo = o.useRef(null), el = (0, f.ZS)(I), ei = o.useCallback(e => {
    null != l.current && (e !== l.current.volume && (l.current.volume = e), e !== z && X(e))
  }, [l, z]), ea = o.useCallback(() => {
    null != l.current && (0 === z ? (ei(B), q(false), F(B)) : (H(z), ei(0), q(true), F(0)))
  }, [l, z, ei, B, q, H, F]), es = () => {
    $(true)
  }, ec = () => {
    $(false)
  }, eu = o.useCallback(e => {
    switch (e.key) {
      case b.Y1.PLAYBACK:
        w();
        break;
      case b.Y1.SPACE:
        K || (e.preventDefault(), w());
        break;
      case b.Y1.SEEK_BACK:
        L();
        break;
      case b.Y1.SEEK_FORWARD:
        V();
        break;
      case b.Y1.CAPTION:
        k();
        break;
      case b.Y1.FULLSCREEN:
        M();
        break;
      case b.Y1.MUTE:
        ea()
    }
  }, [k, M, w, L, V, ea, K]);
  o.useEffect(() => {
    null != eo.current && eo.current.focus()
  }, []), o.useEffect(() => (er({
    volumeAnimSpring: ee || J ? 1 : 0,
    immediate: W
  }), () => {
    en.stop()
  }), [ee, J, er, W, en]), o.useEffect(() => (window.addEventListener("keydown", eu), () => {
    window.removeEventListener("keydown", eu)
  }), [eu]);
  let ed = 0 === z ? m.OyP : z < .5 ? m.X2j : m.gj8,
    {
      icon: em,
      label: ep
    } = _[d];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: C.videoControlsGroup,
      children: [(0, r.jsx)(T, {
        iconComponent: em,
        animationTime: h,
        visible: y,
        ariaLabel: ep,
        tooltipLabel: ep,
        shortcut: b.Y1.PLAYBACK,
        onClick: w,
        ref: eo,
        buttonSize: x[N]
      }), "portrait" !== el && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(T, {
          iconComponent: E.d,
          animationTime: h,
          visible: y,
          onClick: L,
          ariaLabel: S.intl.string(S.t.r9s3Uv),
          tooltipLabel: S.intl.string(S.t.r9s3Uv),
          shortcut: b.Y1.SEEK_BACK,
          buttonSize: x[N]
        }), (0, r.jsx)(T, {
          iconComponent: O.o,
          animationTime: h,
          visible: y,
          onClick: V,
          disabled: !j,
          ariaLabel: j ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
          tooltipLabel: j ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
          tooltipDelayMs: 1500 * !!j,
          shortcut: b.Y1.SEEK_FORWARD,
          buttonSize: x[N]
        })]
      })]
    }), (0, r.jsxs)(a.animated.div, {
      className: i()(C.videoControlsGroup, C.videoControlsGroupMid),
      style: {
        opacity: (0, a.to)([h.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(y ? e : Math.pow(e, 8)))
      },
      children: [(0, r.jsxs)("div", {
        onMouseEnter: es,
        onMouseLeave: ec,
        onFocus: es,
        onBlur: ec,
        className: C.volumeControlGroup,
        children: [(0, r.jsx)(T, {
          iconComponent: ed,
          animationTime: h,
          visible: y,
          onClick: ea,
          ariaLabel: S.intl.string(S.t["eIl+AK"]),
          tooltipLabel: S.intl.string(S.t["eIl+AK"]),
          shortcut: b.Y1.MUTE,
          buttonSize: x[N]
        }), (0, r.jsx)(a.animated.div, {
          className: C.volumeSlider,
          style: {
            opacity: (0, a.to)([en.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(y ? e : Math.pow(e, 8))),
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
              ei(e), H(e), F(e), ee && (et(false), Z(false)), U && e > 0 && q(false)
            },
            asValueChanges: e => {
              ei(e), ee || (et(true), Z(true))
            },
            fillStyles: {
              backgroundColor: c.Z.colors.WHITE.css
            },
            orientation: "horizontal",
            "aria-label": S.intl.string(S.t["eIl+AK"])
          })
        })]
      }), (0, r.jsx)(D, {
        current: null == l || null == (t = l.current) ? true : t.currentTime,
        duration: null == l || null == (n = l.current) ? true : n.duration
      })]
    }), (0, r.jsxs)("div", {
      className: i()(C.videoControlsGroup, C.videoControlsGroupEnd),
      children: [!R && (0, r.jsx)(T, {
        iconComponent: m.hH0,
        animationTime: h,
        visible: y,
        onClick: A,
        active: Y && d !== b.rq.ENDED,
        disabled: d === b.rq.ENDED,
        ariaLabel: S.intl.string(S.t.KCzjTi),
        tooltipLabel: S.intl.string(S.t.KCzjTi),
        buttonSize: x[N]
      }), !P && (0, r.jsx)(T, {
        iconComponent: g.c,
        animationTime: h,
        visible: y,
        active: G,
        onClick: k,
        ariaLabel: S.intl.string(S.t.bDSZO1),
        tooltipLabel: S.intl.string(S.t.bDSZO1),
        shortcut: b.Y1.CAPTION,
        buttonSize: x[N]
      }), (0, r.jsx)(T, {
        iconComponent: Q ? m.wvt : m.NpZ,
        animationTime: h,
        visible: y,
        onClick: M,
        ariaLabel: S.intl.string(S.t.vKZT5t),
        tooltipLabel: S.intl.string(S.t.vKZT5t),
        shortcut: b.Y1.FULLSCREEN,
        buttonSize: x[N]
      })]
    })]
  })
}