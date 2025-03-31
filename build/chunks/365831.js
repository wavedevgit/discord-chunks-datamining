/** Chunk was on 9857 **/
n.d(t, {
  y: () => N
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  a = n(120356),
  o = n.n(a),
  l = n(642128),
  s = n(442837),
  c = n(481060),
  d = n(846027),
  u = n(110924),
  _ = n(460181),
  m = n(131951),
  f = n(743498),
  p = n(56848),
  g = n(378441),
  v = n(388032),
  h = n(409076);

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function y(e, t) {
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
let C = {
    mass: 2,
    friction: 30,
    tension: 500,
    clamp: !0
  },
  x = {
    mass: 1,
    friction: 28,
    tension: 700,
    clamp: !0
  },
  j = {
    mass: 1,
    friction: 28,
    tension: 500
  },
  I = {
    mass: 1,
    friction: 28,
    tension: 800
  };

function N(e) {
  var t;
  let {} = e, {
    activeVoice: n
  } = (0, g.o)(), a = (0, u.Z)(n), N = (0, p.z)(n), {
    toggleLoopback: O,
    isLoopbackEnabled: E
  } = function() {
    let {
      activeVoice: e
    } = (0, g.o)(), t = (0, s.e7)([m.Z], () => m.Z.getVoiceFilterPlaybackEnabled()), n = i.useCallback(() => {
      (0, _.GN)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, f._j)(!t)
    }, [t]);
    return i.useEffect(() => (d.Z.setLoopback("voice_filter_preview", null != e && t), () => {
      d.Z.setLoopback("voice_filter_preview", !1)
    }), [t, e]), {
      isLoopbackEnabled: t,
      toggleLoopback: n
    }
  }(), P = E ? c.Iy5 : c.X_q, S = i.useCallback(() => (0, f.v6)(null), []), w = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(), T = (0, c.dQu)(c.TVs.colors.WHITE).hex(), L = i.useRef(0), k = n !== a ? L.current + 1 : L.current;
  i.useEffect(() => {
    L.current = k
  }, [k]);
  let Z = null != n,
    A = !Z,
    D = Z && null != a,
    W = null == n && null != a,
    M = (0, c.q_F)({
      opacity: +!!Z,
      height: 72 * !!Z,
      pointerEvents: Z ? "auto" : "none",
      backgroundColor: null !== (t = null == N ? void 0 : N.baseColor) && void 0 !== t ? t : w,
      config: C,
      delay: D ? 150 : 100 * !!W
    }, "respect-motion-settings"),
    F = (0, c.Yzy)(null == N ? void 0 : N.id, {
      key: k,
      from: {
        opacity: 0,
        background: null == N ? void 0 : N.splashGradient
      },
      enter: {
        opacity: 1,
        delay: 150
      },
      leave: {
        opacity: 0,
        delay: 50
      },
      config: C
    }, "respect-motion-settings"),
    [R] = (0, c.bYB)(3, e => ({
      from: null == a ? {
        translateY: 16,
        opacity: 0
      } : {
        translateY: 0,
        opacity: 1
      },
      to: null == n ? {
        translateY: 16,
        opacity: 0
      } : null == a ? {
        translateY: 0,
        opacity: 1
      } : [{
        translateY: -4,
        config: y(b({}, I), {
          restVelocity: .5
        })
      }, {
        translateY: 0,
        config: I
      }],
      config: j,
      delay: W ? 100 - 50 * e : 150 + 50 * e
    }), "respect-motion-settings", [n]),
    B = (0, c.Yzy)(null == N ? void 0 : N.iconURL, {
      key: k,
      from: {
        opacity: 0,
        scale: .5,
        translateX: null == a ? 0 : -30
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        delay: 200 * (null != a)
      },
      leave: {
        opacity: 0,
        scale: null == n ? .5 : 1,
        translateX: 32 * (null != n),
        delay: 0
      },
      config: C
    }, "respect-motion-settings"),
    z = (0, c.Yzy)(null == N ? void 0 : N.name, {
      key: k,
      from: {
        opacity: 0,
        scale: null == a ? 1 : .5,
        translateY: 16 * (null == a)
      },
      enter: {
        opacity: 1,
        scale: 1,
        translateX: 0,
        translateY: 0,
        delay: null == a ? 100 : 275,
        config: null == a ? j : x
      },
      leave: {
        opacity: 0,
        translateX: 40 * (null != n),
        translateY: 16 * (null == n),
        delay: W ? 200 : 150,
        config: null == a ? j : x
      },
      config: j
    }, "respect-motion-settings"),
    U = v.NW.string(E ? v.t.esVyo6 : v.t.UQqFCA);
  return (0, r.jsxs)(l.animated.div, {
    className: h.voiceFilterHero,
    "aria-hidden": A,
    style: M,
    children: [(0, r.jsx)("div", {
      className: o()([h.bgGradient, h.bgGradientHighlight])
    }), F(e => (0, r.jsx)(l.animated.div, {
      className: h.bgGradient,
      style: e
    })), (0, r.jsx)("div", {
      className: h.iconWrapper,
      children: B((e, t) => (0, r.jsx)(l.animated.img, {
        className: h.activeVoiceIcon,
        style: e,
        alt: "",
        src: t
      }, t))
    }), (0, r.jsx)("div", {
      className: h.descriptionWrapper,
      children: z((e, t) => (0, r.jsxs)(l.animated.div, {
        className: h.description,
        style: e,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          className: h.offWhiteText,
          children: v.NW.string(v.t.WW5DAA)
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "always-white",
          children: null != t ? v.NW.string(t) : ""
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: h.buttonWrapper,
      children: [(0, r.jsx)(c.ua7, {
        "aria-label": U,
        tooltipClassName: h.tooltip,
        tooltipContentClassName: h.tooltipContent,
        shouldShow: Z,
        text: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-sm/normal",
            color: "header-primary",
            className: h.tooltipHeader,
            children: U
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: v.NW.string(E ? v.t.Sg6cfn : v.t.ZKhtw8)
          })]
        }),
        children: e => (0, r.jsx)(l.animated.div, {
          className: h.buttonWrapper,
          style: R[0],
          children: (0, r.jsx)(c.P3F, y(b({
            className: o()(h.button, {
              [h.loopbackEnabled]: E
            }),
            "aria-hidden": A,
            focusProps: {
              enabled: Z
            },
            tabIndex: Z ? 0 : -1
          }, e), {
            onClick: () => O(),
            children: (0, r.jsx)(P, {
              size: "custom",
              width: 20,
              height: 20,
              color: T
            })
          }))
        })
      }), (0, r.jsx)(c.ua7, {
        shouldShow: Z,
        text: v.NW.string(v.t.UvMx7O),
        children: e => (0, r.jsx)(l.animated.div, {
          className: h.buttonWrapper,
          style: R[1],
          children: (0, r.jsx)(c.P3F, y(b({
            className: h.button,
            "aria-hidden": A,
            focusProps: {
              enabled: Z
            },
            tabIndex: Z ? 0 : -1
          }, e), {
            onClick: S,
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