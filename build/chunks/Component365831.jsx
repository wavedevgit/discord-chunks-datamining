/** Chunk was on 43342 **/
/** chunk id: 365831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => w
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk203463 = require("./203463.js"),
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
  _ = {
    mass: 1,
    friction: 64,
    tension: 1e3
  },
  P = {
    mass: 1,
    friction: 35,
    tension: 1e3
  };

function w(e) {
  var t;
  let {} = e, {
    activeVoice: n
  } = (0, g.o)(), o = (0, d.Z)(n), w = (0, b.z)(n), {
    toggleLoopback: C,
    isLoopbackEnabled: E
  } = function() {
    let {
      activeVoice: e
    } = (0, g.o)(), t = (0, s.e7)([m.Z], () => m.Z.getVoiceFilterPlaybackEnabled()), n = i.useCallback(() => {
      (0, p.GN)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, f._j)(!t)
    }, [t]);
    return i.useEffect(() => (u.Z.setLoopback("voice_filter_preview", null != e && t), () => {
      u.Z.setLoopback("voice_filter_preview", false)
    }), [t, e]), {
      isLoopbackEnabled: t,
      toggleLoopback: n
    }
  }(), I = E ? c.Iy5 : c.X_q, T = i.useCallback(() => (0, f.v6)(null), []), S = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOWER).hex(), N = (0, c.dQu)(c.TVs.colors.WHITE).hex(), Z = i.useRef(0), D = n !== o ? Z.current + 1 : Z.current;
  i.useEffect(() => {
    Z.current = D
  }, [D]);
  let k = null != n,
    M = !k,
    A = k && null != o,
    R = null == n && null != o,
    L = (0, c.q_F)({
      opacity: +!!k,
      height: 72 * !!k,
      pointerEvents: k ? "auto" : "none",
      backgroundColor: null != (t = null == w ? true : w.baseColor) ? t : S,
      config: e => "backgroundColor" === e ? {
        easing: h,
        duration: 200
      } : x,
      delay: 100 * !!A
    }, "respect-motion-settings"),
    V = (0, c.Yzy)(null == w ? true : w.id, {
      key: D,
      from: {
        opacity: 0,
        background: null == w ? true : w.splashGradient
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
      } : _,
      delay: R ? 50 - 50 * e : 200 + 50 * e
    }), "respect-motion-settings", [n]),
    U = (0, c.Yzy)(null == w ? true : w.iconURL, {
      key: D,
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
        scale: k ? 80 / 88 : 1,
        translateX: 24 * !!k,
        delay: 150 * !A
      },
      config: e => "opacity" === e ? {
        easing: h,
        duration: 200
      } : k ? x : P
    }, "respect-motion-settings"),
    Y = (0, c.Yzy)(null == w ? true : w.name, {
      key: D,
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
        } : A ? x : _
      },
      leave: {
        opacity: 0,
        translateX: 24 * (null != n),
        translateY: 16 * (null == n),
        delay: R ? 100 : 50,
        config: e => "opacity" === e ? {
          easing: h,
          duration: 200
        } : A ? x : _
      }
    }, "respect-motion-settings"),
    H = v.intl.string(E ? v.t.esVyo6 : v.t.UQqFCF);
  return (0, r.jsxs)(a.animated.div, {
    className: y.voiceFilterHero,
    "aria-hidden": M,
    style: L,
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
          children: v.intl.string(v.t.WW5DAC)
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: null != t ? v.intl.string(t) : ""
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: y.buttonWrapper,
      children: [(0, r.jsx)(c.aML, {
        "data-migration-pending": true,
        "aria-label": H,
        tooltipClassName: y.tooltip,
        tooltipContentClassName: y.tooltipContent,
        shouldShow: k,
        text: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-sm/normal",
            color: "header-primary",
            className: y.tooltipHeader,
            children: H
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: v.intl.string(E ? v.t.Sg6cfm : v.t.ZKhtw0)
          })]
        }),
        children: e => (0, r.jsx)(a.animated.div, {
          className: y.buttonWrapper,
          style: F[0],
          children: (0, r.jsx)(c.P3F, O(j({
            className: l()(y.button, {
              [y.loopbackEnabled]: E
            }),
            "aria-hidden": M,
            focusProps: {
              enabled: k
            },
            tabIndex: k ? 0 : false
          }, e), {
            onClick: () => C(),
            children: (0, r.jsx)(I, {
              size: "custom",
              width: 20,
              height: 20,
              color: N
            })
          }))
        })
      }), (0, r.jsx)(c.aML, {
        "data-migration-pending": true,
        shouldShow: k,
        text: v.intl.string(v.t.UvMx7F),
        children: e => (0, r.jsx)(a.animated.div, {
          className: y.buttonWrapper,
          style: F[1],
          children: (0, r.jsx)(c.P3F, O(j({
            className: y.button,
            "aria-hidden": M,
            focusProps: {
              enabled: k
            },
            tabIndex: k ? 0 : false
          }, e), {
            onClick: T,
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