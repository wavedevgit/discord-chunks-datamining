/** Chunk was on 32249 **/
/** chunk id: 881773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk561779 = require("./561779.jsx"),
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
  Chunk946232 = require("./946232.js");
let C = "-:--",
  y = {
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
  _ = {
    [Chunk223418._H.MD]: Chunk223418.Cq.MD,
    [Chunk223418._H.LG]: Chunk223418.Cq.LG
  },
  x = {
    [Chunk223418.Cq.MD]: "md",
    [Chunk223418.Cq.LG]: "lg"
  };

function j(e) {
  let {
    current: t,
    duration: n
  } = e, o = null != t ? (0, b.yv)(t) : C, l = null != n ? (0, b.yv)(n) : C;
  return o = o.padStart(l.length, "0"), (0, r.jsxs)("div", {
    className: i()(S.durationTimeWrapper, S.controlsBarItem),
    children: [(0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: S.durationTimeDisplay,
      children: o
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: S.durationTimeSeparator,
      children: "/"
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: S.durationTimeDisplay,
      children: l
    })]
  })
}
let D = Chunk647438.forwardRef(function(e, t) {
  let {
    iconComponent: n,
    animationTime: o,
    visible: l,
    ariaLabel: s,
    active: u,
    disabled: m,
    tooltipLabel: p,
    tooltipDelayMs: f = 1500,
    shortcut: v,
    onClick: g,
    buttonSize: E = O.Cq.MD
  } = e, b = e => {
    var p, f;
    return (0, r.jsx)(d.P3F, (p = function(e) {
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
      onClick: true === m ? true : g,
      className: i()(S.videoControlsBtnCont, {
        [S.videoControlsBtnContDisabled]: m
      }),
      "aria-label": s,
      "aria-disabled": m,
      innerRef: t,
      children: (0, r.jsx)(a.animated.div, {
        className: S.videoControlsBtnCont,
        style: {
          opacity: (0, a.to)([o.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(l ? e : Math.pow(e, 8))),
          height: {
            [O.Cq.LG]: "32px",
            [O.Cq.MD]: "24px"
          } [E]
        },
        children: (0, r.jsx)(n, {
          size: x[E],
          color: true !== m ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
          className: i()(S.controlsBarItem, {
            [S.controlsBarItemActive]: u,
            [S.videoControlsBtn]: !m
          })
        })
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(f)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(f)).forEach(function(e) {
      Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(f, e))
    }), p))
  };
  if (null == p || !l) return b();
  {
    let e = (0, r.jsxs)(r.Fragment, {
      children: [p, "" !== (null != v ? v : "").trim() && (0, r.jsx)(d.M2$, {
        shortcut: null != v ? v : "",
        className: S.videoControlsBtnTooltipKeyCombo
      })]
    });
    return (0, r.jsx)(d.aML, {
      text: e,
      "aria-label": p,
      tooltipContentClassName: S.videoControlsBtnTooltip,
      delay: f,
      children: e => b(e)
    })
  }
});

function T(e) {
  var t, n;
  let {
    videoRef: l,
    playerState: b,
    animSpring: C,
    visible: x,
    seekForwardEnabled: T,
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
  } = e, B = (0, f.km)(e => e.volume), H = (0, f.km)(e => e.setVolume), U = (0, f.km)(e => e.muted), q = (0, f.km)(e => e.setMuted), Y = (0, f.km)(e => e.transcriptEnabled), G = (0, f.km)(e => e.captionEnabled), Q = (0, f.km)(e => e.fullScreenEnabled), W = (0, s.e7)([m.Z], () => m.Z.useReducedMotion), K = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled), [z, X] = o.useState(U ? 0 : B), [J, $] = o.useState(false), [ee, et] = o.useState(false), [{
    volumeAnimSpring: en
  }, er] = (0, d.q_F)(() => ({
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
    null != l.current && (0 === z ? (ei(B), q(false), F(B)) : (H(z), ei(0), q(true), F(0)))
  }, [l, z, ei, B, q, H, F]), es = () => {
    $(true)
  }, ec = () => {
    $(false)
  }, eu = o.useCallback(e => {
    switch (e.key) {
      case O.Y1.PLAYBACK:
        w();
        break;
      case O.Y1.SPACE:
        K || (e.preventDefault(), w());
        break;
      case O.Y1.SEEK_BACK:
        L();
        break;
      case O.Y1.SEEK_FORWARD:
        V();
        break;
      case O.Y1.CAPTION:
        k();
        break;
      case O.Y1.FULLSCREEN:
        M();
        break;
      case O.Y1.MUTE:
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
  let ed = 0 === z ? d.OyP : z < .5 ? d.X2j : d.gj8,
    {
      icon: em,
      label: ep
    } = y[b];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.videoControlsGroup,
      children: [(0, r.jsx)(D, {
        iconComponent: em,
        animationTime: C,
        visible: x,
        ariaLabel: ep,
        tooltipLabel: ep,
        shortcut: O.Y1.PLAYBACK,
        onClick: w,
        ref: eo,
        buttonSize: _[N]
      }), "portrait" !== el && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          iconComponent: g.d,
          animationTime: C,
          visible: x,
          onClick: L,
          ariaLabel: h.intl.string(h.t.r9s3Uv),
          tooltipLabel: h.intl.string(h.t.r9s3Uv),
          shortcut: O.Y1.SEEK_BACK,
          buttonSize: _[N]
        }), (0, r.jsx)(D, {
          iconComponent: E.o,
          animationTime: C,
          visible: x,
          onClick: V,
          disabled: !T,
          ariaLabel: T ? h.intl.string(h.t.zWDcNP) : h.intl.string(h.t.xXh3yw),
          tooltipLabel: T ? h.intl.string(h.t.zWDcNP) : h.intl.string(h.t.xXh3yw),
          tooltipDelayMs: 1500 * !!T,
          shortcut: O.Y1.SEEK_FORWARD,
          buttonSize: _[N]
        })]
      })]
    }), (0, r.jsxs)(a.animated.div, {
      className: i()(S.videoControlsGroup, S.videoControlsGroupMid),
      style: {
        opacity: (0, a.to)([C.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(x ? e : Math.pow(e, 8)))
      },
      children: [(0, r.jsxs)("div", {
        onMouseEnter: es,
        onMouseLeave: ec,
        onFocus: es,
        onBlur: ec,
        className: S.volumeControlGroup,
        children: [(0, r.jsx)(D, {
          iconComponent: ed,
          animationTime: C,
          visible: x,
          onClick: ea,
          ariaLabel: h.intl.string(h.t["eIl+AK"]),
          tooltipLabel: h.intl.string(h.t["eIl+AK"]),
          shortcut: O.Y1.MUTE,
          buttonSize: _[N]
        }), (0, r.jsx)(a.animated.div, {
          className: S.volumeSlider,
          style: {
            opacity: (0, a.to)([en.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(x ? e : Math.pow(e, 8))),
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
            "aria-label": h.intl.string(h.t["eIl+AK"])
          })
        })]
      }), (0, r.jsx)(j, {
        current: null == l || null == (t = l.current) ? true : t.currentTime,
        duration: null == l || null == (n = l.current) ? true : n.duration
      })]
    }), (0, r.jsxs)("div", {
      className: i()(S.videoControlsGroup, S.videoControlsGroupEnd),
      children: [!R && (0, r.jsx)(D, {
        iconComponent: d.hH0,
        animationTime: C,
        visible: x,
        onClick: A,
        active: Y && b !== O.rq.ENDED,
        disabled: b === O.rq.ENDED,
        ariaLabel: h.intl.string(h.t.KCzjTi),
        tooltipLabel: h.intl.string(h.t.KCzjTi),
        buttonSize: _[N]
      }), !P && (0, r.jsx)(D, {
        iconComponent: v.c,
        animationTime: C,
        visible: x,
        active: G,
        onClick: k,
        ariaLabel: h.intl.string(h.t.bDSZO1),
        tooltipLabel: h.intl.string(h.t.bDSZO1),
        shortcut: O.Y1.CAPTION,
        buttonSize: _[N]
      }), (0, r.jsx)(D, {
        iconComponent: Q ? d.wvt : d.NpZ,
        animationTime: C,
        visible: x,
        onClick: M,
        ariaLabel: h.intl.string(h.t.vKZT5t),
        tooltipLabel: h.intl.string(h.t.vKZT5t),
        shortcut: O.Y1.FULLSCREEN,
        buttonSize: _[N]
      })]
    })]
  })
}