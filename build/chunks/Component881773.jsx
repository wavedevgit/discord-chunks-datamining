/** Chunk was on 32249 **/
/** chunk id: 881773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./781311.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
let h = "-:--",
  _ = {
    [Chunk223418.rq.PLAYING]: {
      icon: Chunk481060.fpf,
      label: Chunk388032.intl.string(Chunk388032.t.ZcgDJS)
    },
    [Chunk223418.rq.PAUSED]: {
      icon: Chunk481060.o1U,
      label: Chunk388032.intl.string(Chunk388032.t.RscU7O)
    },
    [Chunk223418.rq.ENDED]: {
      icon: Chunk481060.Oe7,
      label: Chunk388032.intl.string(Chunk388032.t.hsvh0t)
    }
  };

function j(e) {
  let {
    current: t,
    duration: n
  } = e, l = null != t ? (0, b.yv)(t) : h, o = null != n ? (0, b.yv)(n) : h;
  return l = l.padStart(o.length, "0"), (0, r.jsxs)("div", {
    className: i()(S.durationTimeWrapper, S.controlsBarItem),
    children: [(0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: S.durationTimeDisplay,
      children: l
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: S.durationTimeSeparator,
      children: "/"
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: S.durationTimeDisplay,
      children: o
    })]
  })
}
let y = Chunk73800.forwardRef(function(e, t) {
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
          opacity: (0, a.to)([l.to({
            range: [0, 1],
            output: [0, 1]
          })], e => "".concat(o ? e : Math.pow(e, 8)))
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
  if (null == p || !o) return g();
  {
    let e = (0, r.jsxs)(r.Fragment, {
      children: [p, "" !== (null != v ? v : "").trim() && (0, r.jsx)(d.M2$, {
        shortcut: null != v ? v : "",
        className: S.videoControlsBtnTooltipKeyCombo
      })]
    });
    return (0, r.jsx)(d.ua7, {
      text: e,
      "aria-label": p,
      tooltipContentClassName: S.videoControlsBtnTooltip,
      delay: f,
      children: e => g(e)
    })
  }
});

function x(e) {
  var t, n;
  let {
    videoRef: o,
    playerState: b,
    animSpring: h,
    visible: x,
    seekForwardEnabled: T,
    hideCaptionBtn: D,
    hideTranscriptBtn: P,
    videoTask: R,
    handlePlaybackBtnClick: N,
    handleTranscriptBtnClick: I,
    handleCaptionBtnClick: k,
    handleFullScreenBtnClick: A,
    handleSeekBackBtnClick: w,
    handleSeekForwardBtnClick: L,
    handleControlBarPendingInteraction: M,
    onVolumeChange: V
  } = e, B = (0, f.km)(e => e.volume), Z = (0, f.km)(e => e.setVolume), F = (0, f.km)(e => e.muted), U = (0, f.km)(e => e.setMuted), q = (0, f.km)(e => e.transcriptEnabled), Y = (0, f.km)(e => e.captionEnabled), H = (0, f.km)(e => e.fullScreenEnabled), Q = (0, s.e7)([m.Z], () => m.Z.useReducedMotion), z = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled), [G, K] = l.useState(F ? 0 : B), [W, X] = l.useState(false), [$, J] = l.useState(false), [{
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
  })), en = l.useRef(null), er = (0, p.ZS)(R), el = l.useCallback(e => {
    null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== G && K(e))
  }, [o, G]), eo = l.useCallback(() => {
    null != o.current && (0 === G ? (el(B), U(false), V(B)) : (Z(G), el(0), U(true), V(0)))
  }, [o, G, el, B, U, Z, V]), ei = () => {
    X(true)
  }, ea = () => {
    X(false)
  }, es = l.useCallback(e => {
    switch (e.key) {
      case O.Y1.PLAYBACK:
        N();
        break;
      case O.Y1.SPACE:
        z || (e.preventDefault(), N());
        break;
      case O.Y1.SEEK_BACK:
        w();
        break;
      case O.Y1.SEEK_FORWARD:
        L();
        break;
      case O.Y1.CAPTION:
        k();
        break;
      case O.Y1.FULLSCREEN:
        A();
        break;
      case O.Y1.MUTE:
        eo()
    }
  }, [k, A, N, w, L, eo, z]);
  l.useEffect(() => {
    null != en.current && en.current.focus()
  }, []), l.useEffect(() => (et({
    volumeAnimSpring: $ || W ? 1 : 0,
    immediate: Q
  }), () => {
    ee.stop()
  }), [$, W, et, Q, ee]), l.useEffect(() => (window.addEventListener("keydown", es), () => {
    window.removeEventListener("keydown", es)
  }), [es]);
  let ec = 0 === G ? d.OyP : G < .5 ? d.X2j : d.gj8,
    {
      icon: eu,
      label: ed
    } = _[b];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: S.videoControlsGroup,
      children: [(0, r.jsx)(y, {
        iconComponent: eu,
        animationTime: h,
        visible: x,
        ariaLabel: ed,
        tooltipLabel: ed,
        shortcut: O.Y1.PLAYBACK,
        onClick: N,
        ref: en
      }), "portrait" !== er && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(y, {
          iconComponent: E.d,
          animationTime: h,
          visible: x,
          onClick: w,
          ariaLabel: C.intl.string(C.t.r9s3Ul),
          tooltipLabel: C.intl.string(C.t.r9s3Ul),
          shortcut: O.Y1.SEEK_BACK
        }), (0, r.jsx)(y, {
          iconComponent: g.o,
          animationTime: h,
          visible: x,
          onClick: L,
          disabled: !T,
          ariaLabel: T ? C.intl.string(C.t.zWDcND) : C.intl.string(C.t.xXh3y8),
          tooltipLabel: T ? C.intl.string(C.t.zWDcND) : C.intl.string(C.t.xXh3y8),
          tooltipDelayMs: 1500 * !!T,
          shortcut: O.Y1.SEEK_FORWARD
        })]
      })]
    }), (0, r.jsxs)(a.animated.div, {
      className: i()(S.videoControlsGroup, S.videoControlsGroupMid),
      style: {
        opacity: (0, a.to)([h.to({
          range: [0, 1],
          output: [0, 1]
        })], e => "".concat(x ? e : Math.pow(e, 8)))
      },
      children: [(0, r.jsxs)("div", {
        onMouseEnter: ei,
        onMouseLeave: ea,
        onFocus: ei,
        onBlur: ea,
        className: S.volumeControlGroup,
        children: [(0, r.jsx)(y, {
          iconComponent: ec,
          animationTime: h,
          visible: x,
          onClick: eo,
          ariaLabel: C.intl.string(C.t["eIl+AA"]),
          tooltipLabel: C.intl.string(C.t["eIl+AA"]),
          shortcut: O.Y1.MUTE
        }), (0, r.jsx)(a.animated.div, {
          className: S.volumeSlider,
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
            initialValue: G,
            keyboardStep: .1,
            minValue: 0,
            maxValue: 1,
            onValueChange: e => {
              el(e), Z(e), V(e), $ && (J(false), M(false)), F && e > 0 && U(false)
            },
            asValueChanges: e => {
              el(e), $ || (J(true), M(true))
            },
            fillStyles: {
              backgroundColor: c.Z.colors.WHITE.css
            },
            orientation: "horizontal",
            "aria-label": C.intl.string(C.t["eIl+AA"])
          })
        })]
      }), (0, r.jsx)(j, {
        current: null == o || null == (t = o.current) ? true : t.currentTime,
        duration: null == o || null == (n = o.current) ? true : n.duration
      })]
    }), (0, r.jsxs)("div", {
      className: i()(S.videoControlsGroup, S.videoControlsGroupEnd),
      children: [!P && (0, r.jsx)(y, {
        iconComponent: d.hH0,
        animationTime: h,
        visible: x,
        onClick: I,
        active: q && b !== O.rq.ENDED,
        disabled: b === O.rq.ENDED,
        ariaLabel: C.intl.string(C.t.KCzjTk),
        tooltipLabel: C.intl.string(C.t.KCzjTk)
      }), !D && (0, r.jsx)(y, {
        iconComponent: v.c,
        animationTime: h,
        visible: x,
        active: Y,
        onClick: k,
        ariaLabel: C.intl.string(C.t.bDSZOz),
        tooltipLabel: C.intl.string(C.t.bDSZOz),
        shortcut: O.Y1.CAPTION
      }), (0, r.jsx)(y, {
        iconComponent: H ? d.wvt : d.NpZ,
        animationTime: h,
        visible: x,
        onClick: A,
        ariaLabel: C.intl.string(C.t.vKZT5u),
        tooltipLabel: C.intl.string(C.t.vKZT5u),
        shortcut: O.Y1.FULLSCREEN
      })]
    })]
  })
}