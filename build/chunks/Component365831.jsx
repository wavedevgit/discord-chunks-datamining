/** Chunk was on web.js **/
/** chunk id: 365831, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => N
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk401393 = require("./401393.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk110924 = require("./110924.js"),
  Chunk460181 = require("./460181.js"),
  Chunk131951 = require("./131951.js"),
  Chunk743498 = require("./743498.js"),
  Chunk56848 = require("./56848.js"),
  Chunk378441 = require("./378441.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk729159 = require("./729159.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => 1 - Math.pow(1 - e, 4),
  T = {
    mass: 1,
    friction: 64,
    tension: 1e3,
    clamp: true
  },
  S = {
    mass: 1,
    friction: 64,
    tension: 1e3
  },
  A = {
    mass: 1,
    friction: 35,
    tension: 1e3
  };

function C() {
  let {
    activeVoice: e
  } = (0, Chunk378441.o)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getVoiceFilterPlaybackEnabled()), n = Chunk647438.useCallback(() => {
    (0, Chunk460181.GN)(exports ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, Chunk743498._j)(!exports)
  }, [exports]);
  return Chunk647438.useEffect(() => (Chunk846027.Z.setLoopback("voice_filter_preview", null != module && exports), () => {
    Chunk846027.Z.setLoopback("voice_filter_preview", false)
  }), [exports, module]), {
    isLoopbackEnabled: exports,
    toggleLoopback: require
  }
}

function N(e) {
  var t;
  let {} = e, {
    activeVoice: n
  } = (0, m.o)(), a = (0, d.Z)(n), l = (0, h.z)(n), {
    toggleLoopback: u,
    isLoopbackEnabled: f
  } = C(), _ = f ? c.Iy5 : c.X_q, b = i.useCallback(() => (0, p.v6)(null), []), O = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOWER).hex(), N = (0, c.dQu)(c.TVs.colors.WHITE).hex(), R = i.useRef(0), P = n !== a ? R.current + 1 : R.current;
  i.useEffect(() => {
    R.current = P
  }, [P]);
  let w = null != n,
    D = !w,
    x = w && null != a,
    L = null == n && null != a,
    j = (0, c.q_F)({
      opacity: +!!w,
      height: 72 * !!w,
      pointerEvents: w ? "auto" : "none",
      backgroundColor: null != (t = null == l ? true : l.baseColor) ? t : O,
      config: e => "backgroundColor" === e ? {
        easing: I,
        duration: 200
      } : T,
      delay: 100 * !!x
    }, "respect-motion-settings"),
    M = (0, c.Yzy)(null == l ? true : l.id, {
      key: P,
      from: {
        opacity: 0,
        background: null == l ? true : l.splashGradient
      },
      enter: {
        opacity: 1,
        delay: x ? 100 : 50
      },
      leave: {
        opacity: 0,
        delay: x ? 100 : 150
      },
      config: {
        easing: I,
        duration: x ? 250 : 200
      }
    }, "respect-motion-settings"),
    [k] = (0, c.bYB)(2, e => ({
      from: x ? {
        translateY: 0,
        opacity: 1
      } : {
        translateY: 16,
        opacity: 0
      },
      to: null == n ? {
        translateY: 16,
        opacity: 0
      } : x ? null : {
        translateY: 0,
        opacity: 1
      },
      config: e => "opacity" === e ? {
        easing: I,
        duration: 200
      } : S,
      delay: L ? 50 - 50 * e : 200 + 50 * e
    }), "respect-motion-settings", [n]),
    U = (0, c.Yzy)(null == l ? true : l.iconURL, {
      key: P,
      from: {
        opacity: 0,
        scale: 80 / 88,
        translateX: x ? false : 0
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        delay: 50
      },
      leave: {
        opacity: 0,
        scale: w ? 80 / 88 : 1,
        translateX: 24 * !!w,
        delay: 150 * !x
      },
      config: e => "opacity" === e ? {
        easing: I,
        duration: 200
      } : w ? T : A
    }, "respect-motion-settings"),
    G = (0, c.Yzy)(null == l ? true : l.name, {
      key: P,
      from: {
        opacity: 0,
        scale: x ? .9 : 1,
        translateY: 16 * !x
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        translateY: 0,
        delay: 150,
        config: e => "opacity" === e ? {
          easing: I,
          duration: 200
        } : x ? T : S
      },
      leave: {
        opacity: 0,
        translateX: 24 * (null != n),
        translateY: 16 * (null == n),
        delay: L ? 100 : 50,
        config: e => "opacity" === e ? {
          easing: I,
          duration: 200
        } : x ? T : S
      }
    }, "respect-motion-settings"),
    B = g.intl.string(f ? g.t.esVyo6 : g.t.UQqFCA);
  return (0, r.jsxs)(s.animated.div, {
    className: E.voiceFilterHero,
    "aria-hidden": D,
    style: j,
    children: [(0, r.jsx)("div", {
      className: o()([E.bgGradient, E.bgGradientHighlight])
    }), M(e => (0, r.jsx)(s.animated.div, {
      className: E.bgGradient,
      style: e
    })), (0, r.jsx)("div", {
      className: E.iconWrapper,
      children: U((e, t) => (0, r.jsx)(s.animated.img, {
        className: E.activeVoiceIcon,
        style: e,
        alt: "",
        src: t
      }, t))
    }), (0, r.jsx)("div", {
      className: E.descriptionWrapper,
      children: G((e, t) => (0, r.jsxs)(s.animated.div, {
        className: E.description,
        style: e,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          className: E.offWhiteText,
          children: g.intl.string(g.t.WW5DAA)
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: null != t ? g.intl.string(t) : ""
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: E.buttonWrapper,
      children: [(0, r.jsx)(c.ua7, {
        "aria-label": B,
        tooltipClassName: E.tooltip,
        tooltipContentClassName: E.tooltipContent,
        shouldShow: w,
        text: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-sm/normal",
            color: "header-primary",
            className: E.tooltipHeader,
            children: B
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: g.intl.string(f ? g.t.Sg6cfn : g.t.ZKhtw8)
          })]
        }),
        children: e => (0, r.jsx)(s.animated.div, {
          className: E.buttonWrapper,
          style: k[0],
          children: (0, r.jsx)(c.P3F, v(y({
            className: o()(E.button, {
              [E.loopbackEnabled]: f
            }),
            "aria-hidden": D,
            focusProps: {
              enabled: w
            },
            tabIndex: w ? 0 : false
          }, e), {
            onClick: () => u(),
            children: (0, r.jsx)(_, {
              size: "custom",
              width: 20,
              height: 20,
              color: N
            })
          }))
        })
      }), (0, r.jsx)(c.ua7, {
        shouldShow: w,
        text: g.intl.string(g.t.UvMx7O),
        children: e => (0, r.jsx)(s.animated.div, {
          className: E.buttonWrapper,
          style: k[1],
          children: (0, r.jsx)(c.P3F, v(y({
            className: E.button,
            "aria-hidden": D,
            focusProps: {
              enabled: w
            },
            tabIndex: w ? 0 : false
          }, e), {
            onClick: b,
            children: (0, r.jsx)(c.k$p, {
              size: "custom",
              width: 20,
              height: 20,
              color: N
            })
          }))
        })
      })]
    })]
  })
}