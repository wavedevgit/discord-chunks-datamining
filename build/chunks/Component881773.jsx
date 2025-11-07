/** Chunk was on 32249 **/
/** chunk id: 881773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk430799 = require("./430799.js");
let y = "-:--",
  C = {
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
  };

function _(e) {
  let {
    current: t,
    duration: n
  } = e, o = null != t ? (0, h.yv)(t) : y, l = null != n ? (0, h.yv)(n) : y;
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
let x = Chunk647438.forwardRef(function(e, t) {
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
    onClick: E
  } = e, g = e => {
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
      onClick: true === m ? true : E,
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
          })], e => "".concat(l ? e : Math.pow(e, 8)))
        },
        children: (0, r.jsx)(n, {
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
  if (null == p || !l) return g();
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
      children: e => g(e)
    })
  }
});

function j(e) {
  var t, n;
  let {
    videoRef: l,
    playerState: h,
    animSpring: y,
    visible: j,
    seekForwardEnabled: T,
    hideCaptionBtn: D,
    hideTranscriptBtn: P,
    videoTask: R,
    handlePlaybackBtnClick: I,
    handleTranscriptBtnClick: N,
    handleCaptionBtnClick: w,
    handleFullScreenBtnClick: A,
    handleSeekBackBtnClick: k,
    handleSeekForwardBtnClick: L,
    handleControlBarPendingInteraction: M,
    onVolumeChange: V
  } = e, Z = (0, f.km)(e => e.volume), F = (0, f.km)(e => e.setVolume), B = (0, f.km)(e => e.muted), U = (0, f.km)(e => e.setMuted), H = (0, f.km)(e => e.transcriptEnabled), q = (0, f.km)(e => e.captionEnabled), Y = (0, f.km)(e => e.fullScreenEnabled), Q = (0, s.e7)([m.Z], () => m.Z.useReducedMotion), G = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled), [W, K] = o.useState(B ? 0 : Z), [z, X] = o.useState(false), [J, $] = o.useState(false), [{
    volumeAnimSpring: ee
  }, et] = (0, d.q_F)(() => ({
    from: {
      volumeAnimSpring: 0
    },
    config: {
      tension: 100,
      friction: 3,
      clamp: true
    }
  })), en = o.useRef(null), er = (0, p.ZS)(R), eo = o.useCallback(e => {
    null != l.current && (e !== l.current.volume && (l.current.volume = e), e !== W && K(e))
  }, [l, W]), el = o.useCallback(() => {
    null != l.current && (0 === W ? (eo(Z), U(false), V(Z)) : (F(W), eo(0), U(true), V(0)))
  }, [l, W, eo, Z, U, F, V]), ei = () => {
    X(true)
  }, ea = () => {
    X(false)
  }, es = o.useCallback(e => {
    switch (e.key) {
      case O.Y1.PLAYBACK:
        I();
        break;
      case O.Y1.SPACE:
        G || (e.preventDefault(), I());
        break;
      case O.Y1.SEEK_BACK:
        k();
        break;
      case O.Y1.SEEK_FORWARD:
        L();
        break;
      case O.Y1.CAPTION:
        w();
        break;
      case O.Y1.FULLSCREEN:
        A();
        break;
      case O.Y1.MUTE:
        el()
    }
  }, [w, A, I, k, L, el, G]);
  o.useEffect(() => {
    null != en.current && en.current.focus()
  }, []), o.useEffect(() => (et({
    volumeAnimSpring: J || z ? 1 : 0,
    immediate: Q
  }), () => {
    ee.stop()
  }), [J, z, et, Q, ee]), o.useEffect(() => (window.addEventListener("keydown", es), () => {
    window.removeEventListener("keydown", es)
  }), [es]);
  let ec = 0 === W ? d.OyP : W < .5 ? d.X2j : d.gj8,
    {
      icon: eu,
      label: ed
    } = C[h];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.videoControlsGroup,
      children: [(0, r.jsx)(x, {
        iconComponent: eu,
        animationTime: y,
        visible: j,
        ariaLabel: ed,
        tooltipLabel: ed,
        shortcut: O.Y1.PLAYBACK,
        onClick: I,
        ref: en
      }), "portrait" !== er && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(x, {
          iconComponent: E.d,
          animationTime: y,
          visible: j,
          onClick: k,
          ariaLabel: b.intl.string(b.t.r9s3Uv),
          tooltipLabel: b.intl.string(b.t.r9s3Uv),
          shortcut: O.Y1.SEEK_BACK
        }), (0, r.jsx)(x, {
          iconComponent: g.o,
          animationTime: y,
          visible: j,
          onClick: L,
          disabled: !T,
          ariaLabel: T ? b.intl.string(b.t.zWDcNP) : b.intl.string(b.t.xXh3yw),
          tooltipLabel: T ? b.intl.string(b.t.zWDcNP) : b.intl.string(b.t.xXh3yw),
          tooltipDelayMs: 1500 * !!T,
          shortcut: O.Y1.SEEK_FORWARD
        })]
      })]
    }), (0, r.jsxs)(a.animated.div, {
      className: i()(S.videoControlsGroup, S.videoControlsGroupMid),
      style: {
        opacity: (0, a.to)([y.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(j ? e : Math.pow(e, 8)))
      },
      children: [(0, r.jsxs)("div", {
        onMouseEnter: ei,
        onMouseLeave: ea,
        onFocus: ei,
        onBlur: ea,
        className: S.volumeControlGroup,
        children: [(0, r.jsx)(x, {
          iconComponent: ec,
          animationTime: y,
          visible: j,
          onClick: el,
          ariaLabel: b.intl.string(b.t["eIl+AK"]),
          tooltipLabel: b.intl.string(b.t["eIl+AK"]),
          shortcut: O.Y1.MUTE
        }), (0, r.jsx)(a.animated.div, {
          className: S.volumeSlider,
          style: {
            opacity: (0, a.to)([ee.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(j ? e : Math.pow(e, 8))),
            width: (0, a.to)([ee.to({
              range: [0, 1],
              output: [0, 100]
            })], e => "".concat(e, "px"))
          },
          children: (0, r.jsx)(u.i, {
            mini: true,
            initialValue: W,
            keyboardStep: .1,
            minValue: 0,
            maxValue: 1,
            onValueChange: e => {
              eo(e), F(e), V(e), J && ($(false), M(false)), B && e > 0 && U(false)
            },
            asValueChanges: e => {
              eo(e), J || ($(true), M(true))
            },
            fillStyles: {
              backgroundColor: c.Z.colors.WHITE.css
            },
            orientation: "horizontal",
            "aria-label": b.intl.string(b.t["eIl+AK"])
          })
        })]
      }), (0, r.jsx)(_, {
        current: null == l || null == (t = l.current) ? true : t.currentTime,
        duration: null == l || null == (n = l.current) ? true : n.duration
      })]
    }), (0, r.jsxs)("div", {
      className: i()(S.videoControlsGroup, S.videoControlsGroupEnd),
      children: [!P && (0, r.jsx)(x, {
        iconComponent: d.hH0,
        animationTime: y,
        visible: j,
        onClick: N,
        active: H && h !== O.rq.ENDED,
        disabled: h === O.rq.ENDED,
        ariaLabel: b.intl.string(b.t.KCzjTi),
        tooltipLabel: b.intl.string(b.t.KCzjTi)
      }), !D && (0, r.jsx)(x, {
        iconComponent: v.c,
        animationTime: y,
        visible: j,
        active: q,
        onClick: w,
        ariaLabel: b.intl.string(b.t.bDSZO1),
        tooltipLabel: b.intl.string(b.t.bDSZO1),
        shortcut: O.Y1.CAPTION
      }), (0, r.jsx)(x, {
        iconComponent: Y ? d.wvt : d.NpZ,
        animationTime: y,
        visible: j,
        onClick: A,
        ariaLabel: b.intl.string(b.t.vKZT5t),
        tooltipLabel: b.intl.string(b.t.vKZT5t),
        shortcut: O.Y1.FULLSCREEN
      })]
    })]
  })
}