/** Chunk was on 75909 **/
/** chunk id: 922826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
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
let y = "-:--",
  _ = {
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

function D(e) {
  let {
    current: t,
    duration: n
  } = e, o = null != t ? (0, b.yv)(t) : y, l = null != n ? (0, b.yv)(n) : y;
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
let P = Chunk473749.forwardRef(function(e, t) {
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
      className: i()(C.videoControlsBtnCont, {
        [C.videoControlsBtnContDisabled]: f
      }),
      "aria-label": s,
      "aria-disabled": f,
      innerRef: t,
      children: (0, r.jsx)(a.animated.div, {
        className: C.videoControlsBtnCont,
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
          className: i()(C.controlsBarItem, {
            [C.controlsBarItemActive]: u,
            [C.videoControlsBtn]: !f
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

function T(e) {
  var t, n;
  let {
    videoRef: l,
    playerState: d,
    animSpring: b,
    visible: y,
    seekForwardEnabled: j,
    hideCaptionBtn: T,
    hideTranscriptBtn: R,
    videoTask: I,
    size: N,
    handlePlaybackBtnClick: A,
    handleTranscriptBtnClick: w,
    handleCaptionBtnClick: k,
    handleFullScreenBtnClick: M,
    handleSeekBackBtnClick: L,
    handleSeekForwardBtnClick: V,
    handleControlBarPendingInteraction: Z,
    onVolumeChange: F
  } = e, B = (0, v.km)(e => e.volume), H = (0, v.km)(e => e.setVolume), U = (0, v.km)(e => e.muted), q = (0, v.km)(e => e.setMuted), Y = (0, v.km)(e => e.transcriptEnabled), Q = (0, v.km)(e => e.captionEnabled), G = (0, v.km)(e => e.fullScreenEnabled), W = (0, s.e7)([f.Z], () => f.Z.useReducedMotion), z = (0, s.e7)([f.Z], () => f.Z.keyboardModeEnabled), [K, X] = o.useState(U ? 0 : B), [J, $] = o.useState(false), [ee, et] = o.useState(false), [{
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
    null != l.current && (e !== l.current.volume && (l.current.volume = e), e !== K && X(e))
  }, [l, K]), ea = o.useCallback(() => {
    null != l.current && (0 === K ? (ei(B), q(false), F(B)) : (H(K), ei(0), q(true), F(0)))
  }, [l, K, ei, B, q, H, F]), es = () => {
    $(true)
  }, ec = () => {
    $(false)
  }, eu = o.useCallback(e => {
    switch (e.key) {
      case h.Y1.PLAYBACK:
        A();
        break;
      case h.Y1.SPACE:
        z || (e.preventDefault(), A());
        break;
      case h.Y1.SEEK_BACK:
        L();
        break;
      case h.Y1.SEEK_FORWARD:
        V();
        break;
      case h.Y1.CAPTION:
        k();
        break;
      case h.Y1.FULLSCREEN:
        M();
        break;
      case h.Y1.MUTE:
        ea()
    }
  }, [k, M, A, L, V, ea, z]);
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
  let ed = 0 === K ? m.OyP : K < .5 ? m.X2j : m.gj8,
    {
      icon: em,
      label: ef
    } = _[d];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: C.videoControlsGroup,
      children: [(0, r.jsx)(P, {
        iconComponent: em,
        animationTime: b,
        visible: y,
        ariaLabel: ef,
        tooltipLabel: ef,
        shortcut: h.Y1.PLAYBACK,
        onClick: A,
        ref: eo,
        buttonSize: x[N]
      }), "portrait" !== el && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(P, {
          iconComponent: g.F,
          animationTime: b,
          visible: y,
          onClick: L,
          ariaLabel: S.intl.string(S.t.r9s3Uv),
          tooltipLabel: S.intl.string(S.t.r9s3Uv),
          shortcut: h.Y1.SEEK_BACK,
          buttonSize: x[N]
        }), (0, r.jsx)(P, {
          iconComponent: O.j,
          animationTime: b,
          visible: y,
          onClick: V,
          disabled: !j,
          ariaLabel: j ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
          tooltipLabel: j ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
          tooltipDelayMs: 1500 * !!j,
          shortcut: h.Y1.SEEK_FORWARD,
          buttonSize: x[N]
        })]
      })]
    }), (0, r.jsxs)(a.animated.div, {
      className: i()(C.videoControlsGroup, C.videoControlsGroupMid),
      style: {
        opacity: (0, a.to)([b.to({
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
        children: [(0, r.jsx)(P, {
          iconComponent: ed,
          animationTime: b,
          visible: y,
          onClick: ea,
          ariaLabel: S.intl.string(S.t["eIl+AK"]),
          tooltipLabel: S.intl.string(S.t["eIl+AK"]),
          shortcut: h.Y1.MUTE,
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
            initialValue: K,
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
      children: [!R && (0, r.jsx)(P, {
        iconComponent: m.hH0,
        animationTime: b,
        visible: y,
        onClick: w,
        active: Y && d !== h.rq.ENDED,
        disabled: d === h.rq.ENDED,
        ariaLabel: S.intl.string(S.t.KCzjTi),
        tooltipLabel: S.intl.string(S.t.KCzjTi),
        buttonSize: x[N]
      }), !T && (0, r.jsx)(P, {
        iconComponent: E.c,
        animationTime: b,
        visible: y,
        active: Q,
        onClick: k,
        ariaLabel: S.intl.string(S.t.bDSZO1),
        tooltipLabel: S.intl.string(S.t.bDSZO1),
        shortcut: h.Y1.CAPTION,
        buttonSize: x[N]
      }), (0, r.jsx)(P, {
        iconComponent: G ? m.wvt : m.NpZ,
        animationTime: b,
        visible: y,
        onClick: M,
        ariaLabel: S.intl.string(S.t.vKZT5t),
        tooltipLabel: S.intl.string(S.t.vKZT5t),
        shortcut: h.Y1.FULLSCREEN,
        buttonSize: x[N]
      })]
    })]
  })
}