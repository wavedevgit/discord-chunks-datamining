/** Chunk was on 43342 **/
/** chunk id: 365831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => P
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk807794 = require("./807794.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk110924 = require("./110924.js"),
  Chunk460181 = require("./460181.js"),
  Chunk131951 = require("./131951.js"),
  Chunk743498 = require("./743498.js"),
  Chunk56848 = require("./56848.js"),
  Chunk378441 = require("./378441.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk62530 = require("./62530.js");
let O = e => 1 - Math.pow(1 - e, 4),
  h = {
    mass: 1,
    friction: 64,
    tension: 1e3,
    clamp: true
  },
  x = {
    mass: 1,
    friction: 64,
    tension: 1e3
  },
  _ = {
    mass: 1,
    friction: 35,
    tension: 1e3
  };

function P(e) {
  var t;
  let {} = e, {
    activeVoice: n
  } = (0, v.o)(), o = (0, p.Z)(n), P = (0, g.z)(n), {
    toggleLoopback: C,
    isLoopbackEnabled: E
  } = function() {
    let {
      activeVoice: e
    } = (0, v.o)(), t = (0, s.e7)([f.Z], () => f.Z.getVoiceFilterPlaybackEnabled()), n = i.useCallback(() => {
      (0, m.GN)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, b._j)(!t)
    }, [t]);
    return i.useEffect(() => (d.Z.setLoopback("voice_filter_preview", null != e && t), () => {
      d.Z.setLoopback("voice_filter_preview", false)
    }), [t, e]), {
      isLoopbackEnabled: t,
      toggleLoopback: n
    }
  }(), w = E ? u.Iy5 : u.X_q, I = i.useCallback(() => (0, b.v6)(null), []), T = (0, u.dQu)(u.TVs.colors.BACKGROUND_BASE_LOWER).hex(), S = (0, u.dQu)(u.TVs.colors.WHITE).hex(), N = i.useRef(0), Z = n !== o ? N.current + 1 : N.current;
  i.useEffect(() => {
    N.current = Z
  }, [Z]);
  let k = null != n,
    D = !k,
    M = k && null != o,
    A = null == n && null != o,
    R = (0, u.q_F)({
      opacity: +!!k,
      height: 72 * !!k,
      pointerEvents: k ? "auto" : "none",
      backgroundColor: null != (t = null == P ? true : P.baseColor) ? t : T,
      config: e => "backgroundColor" === e ? {
        easing: O,
        duration: 200
      } : h,
      delay: 100 * !!M
    }, "respect-motion-settings"),
    V = (0, u.Yzy)(null == P ? true : P.id, {
      key: Z,
      from: {
        opacity: 0,
        background: null == P ? true : P.splashGradient
      },
      enter: {
        opacity: 1,
        delay: M ? 100 : 50
      },
      leave: {
        opacity: 0,
        delay: M ? 100 : 150
      },
      config: {
        easing: O,
        duration: M ? 250 : 200
      }
    }, "respect-motion-settings"),
    [L] = (0, u.bYB)(2, e => ({
      from: M ? {
        translateY: 0,
        opacity: 1
      } : {
        translateY: 16,
        opacity: 0
      },
      to: null == n ? {
        translateY: 16,
        opacity: 0
      } : M ? null : {
        translateY: 0,
        opacity: 1
      },
      config: e => "opacity" === e ? {
        easing: O,
        duration: 200
      } : x,
      delay: A ? 50 - 50 * e : 200 + 50 * e
    }), "respect-motion-settings", [n]),
    F = (0, u.Yzy)(null == P ? true : P.iconURL, {
      key: Z,
      from: {
        opacity: 0,
        scale: 80 / 88,
        translateX: M ? false : 0
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
        delay: 150 * !M
      },
      config: e => "opacity" === e ? {
        easing: O,
        duration: 200
      } : k ? h : _
    }, "respect-motion-settings"),
    U = (0, u.Yzy)(null == P ? true : P.name, {
      key: Z,
      from: {
        opacity: 0,
        scale: M ? .9 : 1,
        translateY: 16 * !M
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        translateY: 0,
        delay: 150,
        config: e => "opacity" === e ? {
          easing: O,
          duration: 200
        } : M ? h : x
      },
      leave: {
        opacity: 0,
        translateX: 24 * (null != n),
        translateY: 16 * (null == n),
        delay: A ? 100 : 50,
        config: e => "opacity" === e ? {
          easing: O,
          duration: 200
        } : M ? h : x
      }
    }, "respect-motion-settings"),
    Y = y.intl.string(E ? y.t.esVyo6 : y.t.UQqFCF);
  return (0, r.jsxs)(a.animated.div, {
    className: j.voiceFilterHero,
    "aria-hidden": D,
    style: R,
    children: [(0, r.jsx)("div", {
      className: l()([j.bgGradient, j.bgGradientHighlight])
    }), V(e => (0, r.jsx)(a.animated.div, {
      className: j.bgGradient,
      style: e
    })), (0, r.jsx)("div", {
      className: j.iconWrapper,
      children: F((e, t) => (0, r.jsx)(a.animated.img, {
        className: j.activeVoiceIcon,
        style: e,
        alt: "",
        src: t
      }, t))
    }), (0, r.jsx)("div", {
      className: j.descriptionWrapper,
      children: U((e, t) => (0, r.jsxs)(a.animated.div, {
        className: j.description,
        style: e,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          className: j.offWhiteText,
          children: y.intl.string(y.t.WW5DAC)
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: null != t ? y.intl.string(t) : ""
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: j.buttonWrapper,
      children: [(0, r.jsx)(c.u, {
        __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-sm/normal",
            color: "text-strong",
            className: j.tooltipHeader,
            children: Y
          }), (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: y.intl.string(E ? y.t.Sg6cfm : y.t.ZKhtw0)
          })]
        }),
        shouldShow: k,
        ariaHidden: true,
        children: (0, r.jsx)(a.animated.div, {
          className: j.buttonWrapper,
          style: L[0],
          children: (0, r.jsx)(u.P3F, {
            className: l()(j.button, {
              [j.loopbackEnabled]: E
            }),
            "aria-label": Y,
            "aria-hidden": D,
            focusProps: {
              enabled: k
            },
            tabIndex: k ? 0 : false,
            onClick: () => C(),
            children: (0, r.jsx)(w, {
              size: "custom",
              width: 20,
              height: 20,
              color: S
            })
          })
        })
      }), (0, r.jsx)(c.u, {
        shouldShow: k,
        text: y.intl.string(y.t.UvMx7F),
        children: (0, r.jsx)(a.animated.div, {
          className: j.buttonWrapper,
          style: L[1],
          children: (0, r.jsx)(u.P3F, {
            className: j.button,
            "aria-hidden": D,
            focusProps: {
              enabled: k
            },
            tabIndex: k ? 0 : false,
            onClick: I,
            children: (0, r.jsx)(u.k$p, {
              size: "custom",
              width: 20,
              height: 20,
              color: S
            })
          })
        })
      })]
    })]
  })
}