/** Chunk was on 32249 **/
/** chunk id: 881773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
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
let S = "-:--",
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
  };

function y(e) {
  let {
    current: t,
    duration: n
  } = e, l = null != t ? (0, O.yv)(t) : S, o = null != n ? (0, O.yv)(n) : S;
  return l = l.padStart(o.length, "0"), (0, r.jsxs)("div", {
    className: i()(C.durationTimeWrapper, C.controlsBarItem),
    children: [(0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: C.durationTimeDisplay,
      children: l
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: C.durationTimeSeparator,
      children: "/"
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: C.durationTimeDisplay,
      children: o
    })]
  })
}
let j = Chunk647438.forwardRef(function(e, t) {
  let {
    iconComponent: n,
    animationTime: l,
    visible: o,
    ariaLabel: s,
    active: u,
    disabled: m,
    tooltipLabel: f,
    tooltipDelayMs: p = 1500,
    shortcut: v,
    onClick: g
  } = e, E = e => {
    var f, p;
    return (0, r.jsx)(d.P3F, (f = function(e) {
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
      onClick: true === m ? true : g,
      className: i()(C.videoControlsBtnCont, {
        [C.videoControlsBtnContDisabled]: m
      }),
      "aria-label": s,
      "aria-disabled": m,
      innerRef: t,
      children: (0, r.jsx)(a.animated.div, {
        className: C.videoControlsBtnCont,
        style: {
          opacity: (0, a.to)([l.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(o ? e : Math.pow(e, 8)))
        },
        children: (0, r.jsx)(n, {
          color: true !== m ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
          className: i()(C.controlsBarItem, {
            [C.controlsBarItemActive]: u,
            [C.videoControlsBtn]: !m
          })
        })
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(p)).forEach(function(e) {
      Object.defineProperty(f, e, Object.getOwnPropertyDescriptor(p, e))
    }), f))
  };
  if (null == f || !o) return E();
  {
    let e = (0, r.jsxs)(r.Fragment, {
      children: [f, "" !== (null != v ? v : "").trim() && (0, r.jsx)(d.M2$, {
        shortcut: null != v ? v : "",
        className: C.videoControlsBtnTooltipKeyCombo
      })]
    });
    return (0, r.jsx)(d.aML, {
      text: e,
      "aria-label": f,
      tooltipContentClassName: C.videoControlsBtnTooltip,
      delay: p,
      children: e => E(e)
    })
  }
});

function x(e) {
  var t, n;
  let {
    videoRef: o,
    playerState: O,
    animSpring: S,
    visible: x,
    seekForwardEnabled: T,
    hideCaptionBtn: D,
    hideTranscriptBtn: P,
    videoTask: R,
    handlePlaybackBtnClick: I,
    handleTranscriptBtnClick: N,
    handleCaptionBtnClick: k,
    handleFullScreenBtnClick: w,
    handleSeekBackBtnClick: A,
    handleSeekForwardBtnClick: L,
    handleControlBarPendingInteraction: M,
    onVolumeChange: V
  } = e, Z = (0, p.km)(e => e.volume), B = (0, p.km)(e => e.setVolume), F = (0, p.km)(e => e.muted), U = (0, p.km)(e => e.setMuted), q = (0, p.km)(e => e.transcriptEnabled), H = (0, p.km)(e => e.captionEnabled), Y = (0, p.km)(e => e.fullScreenEnabled), Q = (0, s.e7)([m.Z], () => m.Z.useReducedMotion), G = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled), [W, z] = l.useState(F ? 0 : Z), [K, X] = l.useState(false), [J, $] = l.useState(false), [{
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
  })), en = l.useRef(null), er = (0, f.ZS)(R), el = l.useCallback(e => {
    null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== W && z(e))
  }, [o, W]), eo = l.useCallback(() => {
    null != o.current && (0 === W ? (el(Z), U(false), V(Z)) : (B(W), el(0), U(true), V(0)))
  }, [o, W, el, Z, U, B, V]), ei = () => {
    X(true)
  }, ea = () => {
    X(false)
  }, es = l.useCallback(e => {
    switch (e.key) {
      case b.Y1.PLAYBACK:
        I();
        break;
      case b.Y1.SPACE:
        G || (e.preventDefault(), I());
        break;
      case b.Y1.SEEK_BACK:
        A();
        break;
      case b.Y1.SEEK_FORWARD:
        L();
        break;
      case b.Y1.CAPTION:
        k();
        break;
      case b.Y1.FULLSCREEN:
        w();
        break;
      case b.Y1.MUTE:
        eo()
    }
  }, [k, w, I, A, L, eo, G]);
  l.useEffect(() => {
    null != en.current && en.current.focus()
  }, []), l.useEffect(() => (et({
    volumeAnimSpring: J || K ? 1 : 0,
    immediate: Q
  }), () => {
    ee.stop()
  }), [J, K, et, Q, ee]), l.useEffect(() => (window.addEventListener("keydown", es), () => {
    window.removeEventListener("keydown", es)
  }), [es]);
  let ec = 0 === W ? d.OyP : W < .5 ? d.X2j : d.gj8,
    {
      icon: eu,
      label: ed
    } = _[O];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: C.videoControlsGroup,
      children: [(0, r.jsx)(j, {
        iconComponent: eu,
        animationTime: S,
        visible: x,
        ariaLabel: ed,
        tooltipLabel: ed,
        shortcut: b.Y1.PLAYBACK,
        onClick: I,
        ref: en
      }), "portrait" !== er && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(j, {
          iconComponent: g.d,
          animationTime: S,
          visible: x,
          onClick: A,
          ariaLabel: h.intl.string(h.t.r9s3Uv),
          tooltipLabel: h.intl.string(h.t.r9s3Uv),
          shortcut: b.Y1.SEEK_BACK
        }), (0, r.jsx)(j, {
          iconComponent: E.o,
          animationTime: S,
          visible: x,
          onClick: L,
          disabled: !T,
          ariaLabel: T ? h.intl.string(h.t.zWDcNP) : h.intl.string(h.t.xXh3yw),
          tooltipLabel: T ? h.intl.string(h.t.zWDcNP) : h.intl.string(h.t.xXh3yw),
          tooltipDelayMs: 1500 * !!T,
          shortcut: b.Y1.SEEK_FORWARD
        })]
      })]
    }), (0, r.jsxs)(a.animated.div, {
      className: i()(C.videoControlsGroup, C.videoControlsGroupMid),
      style: {
        opacity: (0, a.to)([S.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(x ? e : Math.pow(e, 8)))
      },
      children: [(0, r.jsxs)("div", {
        onMouseEnter: ei,
        onMouseLeave: ea,
        onFocus: ei,
        onBlur: ea,
        className: C.volumeControlGroup,
        children: [(0, r.jsx)(j, {
          iconComponent: ec,
          animationTime: S,
          visible: x,
          onClick: eo,
          ariaLabel: h.intl.string(h.t["eIl+AK"]),
          tooltipLabel: h.intl.string(h.t["eIl+AK"]),
          shortcut: b.Y1.MUTE
        }), (0, r.jsx)(a.animated.div, {
          className: C.volumeSlider,
          style: {
            opacity: (0, a.to)([ee.to({
              range: [0, 1],
              output: [0, 1]
            })], e => "".concat(x ? e : Math.pow(e, 8))),
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
              el(e), B(e), V(e), J && ($(false), M(false)), F && e > 0 && U(false)
            },
            asValueChanges: e => {
              el(e), J || ($(true), M(true))
            },
            fillStyles: {
              backgroundColor: c.Z.colors.WHITE.css
            },
            orientation: "horizontal",
            "aria-label": h.intl.string(h.t["eIl+AK"])
          })
        })]
      }), (0, r.jsx)(y, {
        current: null == o || null == (t = o.current) ? true : t.currentTime,
        duration: null == o || null == (n = o.current) ? true : n.duration
      })]
    }), (0, r.jsxs)("div", {
      className: i()(C.videoControlsGroup, C.videoControlsGroupEnd),
      children: [!P && (0, r.jsx)(j, {
        iconComponent: d.hH0,
        animationTime: S,
        visible: x,
        onClick: N,
        active: q && O !== b.rq.ENDED,
        disabled: O === b.rq.ENDED,
        ariaLabel: h.intl.string(h.t.KCzjTi),
        tooltipLabel: h.intl.string(h.t.KCzjTi)
      }), !D && (0, r.jsx)(j, {
        iconComponent: v.c,
        animationTime: S,
        visible: x,
        active: H,
        onClick: k,
        ariaLabel: h.intl.string(h.t.bDSZO1),
        tooltipLabel: h.intl.string(h.t.bDSZO1),
        shortcut: b.Y1.CAPTION
      }), (0, r.jsx)(j, {
        iconComponent: Y ? d.wvt : d.NpZ,
        animationTime: S,
        visible: x,
        onClick: w,
        ariaLabel: h.intl.string(h.t.vKZT5t),
        tooltipLabel: h.intl.string(h.t.vKZT5t),
        shortcut: b.Y1.FULLSCREEN
      })]
    })]
  })
}