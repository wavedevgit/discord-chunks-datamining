/** Chunk was on 86863 **/
/** chunk id: 365831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
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
  Chunk395760 = require("./395760.js");

function j(e) {
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
}

function O(e, t) {
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
let h = e => 1 - Math.pow(1 - e, 4),
  x = {
    mass: 1,
    friction: 64,
    tension: 1e3,
    clamp: true
  },
  E = {
    mass: 1,
    friction: 64,
    tension: 1e3
  },
  P = {
    mass: 1,
    friction: 35,
    tension: 1e3
  };

function _(e) {
  var t;
  let {} = e, {
    activeVoice: n
  } = (0, v.o)(), o = (0, d.Z)(n), _ = (0, b.z)(n), {
    toggleLoopback: w,
    isLoopbackEnabled: C
  } = function() {
    let {
      activeVoice: e
    } = (0, v.o)(), t = (0, s.e7)([m.Z], () => m.Z.getVoiceFilterPlaybackEnabled()), n = i.useCallback(() => {
      (0, p.GN)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, f._j)(!t)
    }, [t]);
    return i.useEffect(() => (u.Z.setLoopback("voice_filter_preview", null != e && t), () => {
      u.Z.setLoopback("voice_filter_preview", false)
    }), [t, e]), {
      isLoopbackEnabled: t,
      toggleLoopback: n
    }
  }(), S = C ? c.Iy5 : c.X_q, I = i.useCallback(() => (0, f.v6)(null), []), N = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOWER).hex(), T = (0, c.dQu)(c.TVs.colors.WHITE).hex(), D = i.useRef(0), k = n !== o ? D.current + 1 : D.current;
  i.useEffect(() => {
    D.current = k
  }, [k]);
  let Z = null != n,
    M = !Z,
    A = Z && null != o,
    L = null == n && null != o,
    R = (0, c.q_F)({
      opacity: +!!Z,
      height: 72 * !!Z,
      pointerEvents: Z ? "auto" : "none",
      backgroundColor: null != (t = null == _ ? true : _.baseColor) ? t : N,
      config: e => "backgroundColor" === e ? {
        easing: h,
        duration: 200
      } : x,
      delay: 100 * !!A
    }, "respect-motion-settings"),
    V = (0, c.Yzy)(null == _ ? true : _.id, {
      key: k,
      from: {
        opacity: 0,
        background: null == _ ? true : _.splashGradient
      },
      enter: {
        opacity: 1,
        delay: A ? 100 : 50
      },
      leave: {
        opacity: 0,
        delay: A ? 100 : 150
      },
      config: {
        easing: h,
        duration: A ? 250 : 200
      }
    }, "respect-motion-settings"),
    [F] = (0, c.bYB)(2, e => ({
      from: A ? {
        translateY: 0,
        opacity: 1
      } : {
        translateY: 16,
        opacity: 0
      },
      to: null == n ? {
        translateY: 16,
        opacity: 0
      } : A ? null : {
        translateY: 0,
        opacity: 1
      },
      config: e => "opacity" === e ? {
        easing: h,
        duration: 200
      } : E,
      delay: L ? 50 - 50 * e : 200 + 50 * e
    }), "respect-motion-settings", [n]),
    U = (0, c.Yzy)(null == _ ? true : _.iconURL, {
      key: k,
      from: {
        opacity: 0,
        scale: 80 / 88,
        translateX: A ? false : 0
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        delay: 50
      },
      leave: {
        opacity: 0,
        scale: Z ? 80 / 88 : 1,
        translateX: 24 * !!Z,
        delay: 150 * !A
      },
      config: e => "opacity" === e ? {
        easing: h,
        duration: 200
      } : Z ? x : P
    }, "respect-motion-settings"),
    Y = (0, c.Yzy)(null == _ ? true : _.name, {
      key: k,
      from: {
        opacity: 0,
        scale: A ? .9 : 1,
        translateY: 16 * !A
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        translateY: 0,
        delay: 150,
        config: e => "opacity" === e ? {
          easing: h,
          duration: 200
        } : A ? x : E
      },
      leave: {
        opacity: 0,
        translateX: 24 * (null != n),
        translateY: 16 * (null == n),
        delay: L ? 100 : 50,
        config: e => "opacity" === e ? {
          easing: h,
          duration: 200
        } : A ? x : E
      }
    }, "respect-motion-settings"),
    H = g.intl.string(C ? g.t.esVyo6 : g.t.UQqFCF);
  return (0, r.jsxs)(a.animated.div, {
    className: y.voiceFilterHero,
    "aria-hidden": M,
    style: R,
    children: [(0, r.jsx)("div", {
      className: l()([y.bgGradient, y.bgGradientHighlight])
    }), V(e => (0, r.jsx)(a.animated.div, {
      className: y.bgGradient,
      style: e
    })), (0, r.jsx)("div", {
      className: y.iconWrapper,
      children: U((e, t) => (0, r.jsx)(a.animated.img, {
        className: y.activeVoiceIcon,
        style: e,
        alt: "",
        src: t
      }, t))
    }), (0, r.jsx)("div", {
      className: y.descriptionWrapper,
      children: Y((e, t) => (0, r.jsxs)(a.animated.div, {
        className: y.description,
        style: e,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          className: y.offWhiteText,
          children: g.intl.string(g.t.WW5DAC)
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: null != t ? g.intl.string(t) : ""
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: y.buttonWrapper,
      children: [(0, r.jsx)(c.aML, {
        "data-migration-pending": true,
        "aria-label": H,
        tooltipClassName: y.tooltip,
        tooltipContentClassName: y.tooltipContent,
        shouldShow: Z,
        text: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-sm/normal",
            color: "header-primary",
            className: y.tooltipHeader,
            children: H
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: g.intl.string(C ? g.t.Sg6cfm : g.t.ZKhtw0)
          })]
        }),
        children: e => (0, r.jsx)(a.animated.div, {
          className: y.buttonWrapper,
          style: F[0],
          children: (0, r.jsx)(c.P3F, O(j({
            className: l()(y.button, {
              [y.loopbackEnabled]: C
            }),
            "aria-hidden": M,
            focusProps: {
              enabled: Z
            },
            tabIndex: Z ? 0 : false
          }, e), {
            onClick: () => w(),
            children: (0, r.jsx)(S, {
              size: "custom",
              width: 20,
              height: 20,
              color: T
            })
          }))
        })
      }), (0, r.jsx)(c.aML, {
        "data-migration-pending": true,
        shouldShow: Z,
        text: g.intl.string(g.t.UvMx7F),
        children: e => (0, r.jsx)(a.animated.div, {
          className: y.buttonWrapper,
          style: F[1],
          children: (0, r.jsx)(c.P3F, O(j({
            className: y.button,
            "aria-hidden": M,
            focusProps: {
              enabled: Z
            },
            tabIndex: Z ? 0 : false
          }, e), {
            onClick: I,
            children: (0, r.jsx)(c.k$p, {
              size: "custom",
              width: 20,
              height: 20,
              color: T
            })
          }))
        })
      })]
    })]
  })
}