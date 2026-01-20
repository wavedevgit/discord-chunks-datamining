/** Chunk was on 11010 **/
/** chunk id: 365831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => S
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
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
let y = e => 1 - Math.pow(1 - e, 4),
  _ = {
    mass: 1,
    friction: 64,
    tension: 1e3,
    clamp: true
  },
  O = {
    mass: 1,
    friction: 64,
    tension: 1e3
  },
  C = {
    mass: 1,
    friction: 35,
    tension: 1e3
  };

function S(e) {
  var t;
  let {} = e, {
    activeVoice: n
  } = (0, h.o)(), l = (0, f.Z)(n), S = (0, b.z)(n), {
    toggleLoopback: x,
    isLoopbackEnabled: I
  } = function() {
    let {
      activeVoice: e
    } = (0, h.o)(), t = (0, c.e7)([g.Z], () => g.Z.getVoiceFilterPlaybackEnabled()), n = i.useCallback(() => {
      (0, p.GN)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, m._j)(!t)
    }, [t]);
    return i.useEffect(() => (d.Z.setLoopback("voice_filter_preview", null != e && t), () => {
      d.Z.setLoopback("voice_filter_preview", false)
    }), [t, e]), {
      isLoopbackEnabled: t,
      toggleLoopback: n
    }
  }(), N = I ? u.Iy5 : u.X_q, T = i.useCallback(() => (0, m.v6)(null), []), j = (0, u.dQu)(u.TVs.colors.BACKGROUND_BASE_LOWER).hex(), P = (0, u.dQu)(u.TVs.colors.WHITE).hex(), w = i.useRef(0), Z = n !== l ? w.current + 1 : w.current;
  i.useEffect(() => {
    w.current = Z
  }, [Z]);
  let A = null != n,
    R = !A,
    D = A && null != l,
    M = null == n && null != l,
    k = (0, u.q_F)({
      opacity: +!!A,
      height: 72 * !!A,
      pointerEvents: A ? "auto" : "none",
      backgroundColor: null != (t = null == S ? true : S.baseColor) ? t : j,
      config: e => "backgroundColor" === e ? {
        easing: y,
        duration: 200
      } : _,
      delay: 100 * !!D
    }, "respect-motion-settings"),
    L = (0, u.Yzy)(null == S ? true : S.id, {
      key: Z,
      from: {
        opacity: 0,
        background: null == S ? true : S.splashGradient
      },
      enter: {
        opacity: 1,
        delay: D ? 100 : 50
      },
      leave: {
        opacity: 0,
        delay: D ? 100 : 150
      },
      config: {
        easing: y,
        duration: D ? 250 : 200
      }
    }, "respect-motion-settings"),
    [U] = (0, u.bYB)(2, e => ({
      from: D ? {
        translateY: 0,
        opacity: 1
      } : {
        translateY: 16,
        opacity: 0
      },
      to: null == n ? {
        translateY: 16,
        opacity: 0
      } : D ? null : {
        translateY: 0,
        opacity: 1
      },
      config: e => "opacity" === e ? {
        easing: y,
        duration: 200
      } : O,
      delay: M ? 50 - 50 * e : 200 + 50 * e
    }), "respect-motion-settings", [n]),
    F = (0, u.Yzy)(null == S ? true : S.iconURL, {
      key: Z,
      from: {
        opacity: 0,
        scale: 80 / 88,
        translateX: D ? false : 0
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        delay: 50
      },
      leave: {
        opacity: 0,
        scale: A ? 80 / 88 : 1,
        translateX: 24 * !!A,
        delay: 150 * !D
      },
      config: e => "opacity" === e ? {
        easing: y,
        duration: 200
      } : A ? _ : C
    }, "respect-motion-settings"),
    V = (0, u.Yzy)(null == S ? true : S.name, {
      key: Z,
      from: {
        opacity: 0,
        scale: D ? .9 : 1,
        translateY: 16 * !D
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        translateY: 0,
        delay: 150,
        config: e => "opacity" === e ? {
          easing: y,
          duration: 200
        } : D ? _ : O
      },
      leave: {
        opacity: 0,
        translateX: 24 * (null != n),
        translateY: 16 * (null == n),
        delay: M ? 100 : 50,
        config: e => "opacity" === e ? {
          easing: y,
          duration: 200
        } : D ? _ : O
      }
    }, "respect-motion-settings"),
    W = v.intl.string(I ? v.t.esVyo6 : v.t.UQqFCF);
  return (0, r.jsxs)(o.animated.div, {
    className: E.voiceFilterHero,
    "aria-hidden": R,
    style: k,
    children: [(0, r.jsx)("div", {
      className: a()([E.bgGradient, E.bgGradientHighlight])
    }), L(e => (0, r.jsx)(o.animated.div, {
      className: E.bgGradient,
      style: e
    })), (0, r.jsx)("div", {
      className: E.iconWrapper,
      children: F((e, t) => (0, r.jsx)(o.animated.img, {
        className: E.activeVoiceIcon,
        style: e,
        alt: "",
        src: t
      }, t))
    }), (0, r.jsx)("div", {
      className: E.descriptionWrapper,
      children: V((e, t) => (0, r.jsxs)(o.animated.div, {
        className: E.description,
        style: e,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          className: E.offWhiteText,
          children: v.intl.string(v.t.WW5DAC)
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: null != t ? v.intl.string(t) : ""
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: E.buttonWrapper,
      children: [(0, r.jsx)(s.u, {
        __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-sm/normal",
            color: "text-strong",
            className: E.tooltipHeader,
            children: W
          }), (0, r.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: v.intl.string(I ? v.t.Sg6cfm : v.t.ZKhtw0)
          })]
        }),
        shouldShow: A,
        ariaHidden: true,
        children: (0, r.jsx)(o.animated.div, {
          className: E.buttonWrapper,
          style: U[0],
          children: (0, r.jsx)(u.P3F, {
            className: a()(E.button, {
              [E.loopbackEnabled]: I
            }),
            "aria-label": W,
            "aria-hidden": R,
            focusProps: {
              enabled: A
            },
            tabIndex: A ? 0 : false,
            onClick: () => x(),
            children: (0, r.jsx)(N, {
              size: "custom",
              width: 20,
              height: 20,
              color: P
            })
          })
        })
      }), (0, r.jsx)(s.u, {
        shouldShow: A,
        text: v.intl.string(v.t.UvMx7F),
        children: (0, r.jsx)(o.animated.div, {
          className: E.buttonWrapper,
          style: U[1],
          children: (0, r.jsx)(u.P3F, {
            className: E.button,
            "aria-hidden": R,
            focusProps: {
              enabled: A
            },
            tabIndex: A ? 0 : false,
            onClick: T,
            children: (0, r.jsx)(u.k$p, {
              size: "custom",
              width: 20,
              height: 20,
              color: P
            })
          })
        })
      })]
    })]
  })
}