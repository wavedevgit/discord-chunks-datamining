/** Chunk was on web.js **/
/** chunk id: 726034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk230711 = require("./230711.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk266454 = require("./266454.js"),
  Chunk784238 = require("./784238.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk233398 = require("./233398.js"),
  Chunk263198 = require("./263198.js"),
  Chunk866419 = require("./866419.js"),
  Chunk803038 = require("./803038.js"),
  Chunk507962 = require("./507962.js"),
  Chunk877865 = require("./877865.jsx"),
  Chunk536847 = require("./536847.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk119475 = require("./119475.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk461917 = require("./461917.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let [t, n] = i.useState(0), [r, a] = i.useState(false), o = i.useRef(e);
  return i.useEffect(() => {
    e === o.current || r || n(e => e + 1), o.current = e, a(false)
  }, [e, r]), {
    key: t,
    handleInternalChange: i.useCallback(e => (a(true), e), [])
  }
}

function F(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, r.jsx)("div", {
    className: M.closeButton,
    children: (0, r.jsx)(c.PZ7, {
      size: "sm",
      onClick: () => {
        null == t || t(D.L.USER_DISMISS), (0, g.Ll)()
      }
    })
  })
}

function V() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk461917.headerContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/bold",
      children: Chunk388032.intl.string(Chunk119475.default["AsmU8/"])
    }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t["5AFxuL"]),
      children: e => (0, r.jsx)(d.SrA, U({
        size: "custom",
        height: 20,
        width: 20,
        colorClass: M.nitroIcon
      }, e))
    }), (0, Chunk951288.jsx)(F, {})]
  })
}

function H(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? (0, r.jsx)(Y, {
    markAsDismissed: t
  }) : (0, r.jsx)(V, {}) : (0, r.jsx)(Y, {
    markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK)
  })
}

function Y(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, O.m)(x.p9.TIER_2);
  return (0, r.jsxs)("div", {
    className: M.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: M.badgeAndCloseRow,
      children: [(0, r.jsx)(d.lBU, {
        text: j.intl.string(j.t.oW0eUV)
      }), (0, r.jsx)(F, {
        markAsDismissed: t
      })]
    }), (0, r.jsxs)("div", {
      className: M.coachmarkHeaderTextContainer,
      children: [(0, r.jsx)(d.X6q, {
        variant: "heading-lg/extrabold",
        children: j.intl.string(L.default["23QUzs"])
      }), (0, r.jsx)(d.Text, {
        className: M.subtitle,
        variant: "text-sm/medium",
        color: "text-muted",
        children: j.intl.string(n ? L.default.TRCE4u : L.default["UV/Vtr"])
      })]
    })]
  })
}

function W(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: i,
    handleInternalChange: a
  } = Z(t);
  return (0, r.jsxs)("div", {
    className: o()(M.sliderContainer, M.gradientDirectionSliderContainer),
    children: [(0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      children: j.intl.string(L.default.dZkwg4)
    }), (0, r.jsx)(d.iRW, {
      initialValue: t,
      defaultValue: 0,
      minValue: 0,
      maxValue: 360,
      onValueChange: e => {
        (0, N.fR)(), a(e), n(e)
      },
      onValueRender: e => "".concat(Math.round(e), "\xb0"),
      keyboardStep: 1
    }, i)]
  })
}

function K(e) {
  let {
    chassisMixAmount: t,
    setChassisMixAmount: n
  } = e, {
    key: i,
    handleInternalChange: a
  } = Z(t);
  return (0, r.jsxs)("div", {
    className: M.sliderContainer,
    children: [(0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      children: j.intl.string(L.default.xlXkaG)
    }), (0, r.jsx)(d.iRW, {
      initialValue: t,
      defaultValue: T.BH,
      minValue: 0,
      maxValue: 100,
      onValueChange: e => {
        (0, N.z3)(), a(e), n(e)
      },
      keyboardStep: 1
    }, i)]
  })
}

function z(e) {
  let {
    type: t
  } = e, n = i.useCallback(() => {
    var e;
    (0, N.Om)();
    let t = (0, S.C)();
    T.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : T.Ig.getState().gradientAngle,
      chassisMixAmount: t.intensity
    })
  }, []);
  return (0, r.jsx)(d.ua7, {
    text: j.intl.string(L.default.c9MBEB),
    children: e => "with-text" === t ? (0, r.jsx)(c.zxk, B(U({}, e), {
      variant: "secondary",
      onClick: n,
      icon: d.T$Z,
      text: j.intl.string(L.default.c9MBEB),
      fullWidth: true
    })) : (0, r.jsx)("div", {
      className: M.surpriseMeButton,
      children: (0, r.jsx)(c.hU, B(U({}, e), {
        variant: "icon-only",
        size: "md",
        onClick: n,
        icon: d.T$Z,
        "aria-label": j.intl.string(L.default.c9MBEB)
      }))
    })
  })
}

function q(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return (0, r.jsx)(d.ua7, {
    text: j.intl.string(L.default.SFyHIC),
    shouldShow: n,
    children: e => (0, r.jsx)(c.zxk, B(U({}, e), {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: j.intl.string(j.t["1Qm829"]),
      fullWidth: i
    }))
  })
}

function X(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, O.m)(x.p9.TIER_2);
  return (0, N.hf)(i, h.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsxs)("div", {
    className: M.coachmarkFooterContainer,
    children: [(0, r.jsx)(z, {
      type: "with-text"
    }), i ? (0, r.jsx)(q, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(b.Z, {
      premiumModalAnalyticsLocation: {
        page: w.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: w.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
      },
      textOptions: {
        subscribeText: j.intl.string(j.t.JST6jo)
      },
      subscriptionTier: x.Si.TIER_2,
      showGradient: true,
      color: u.Tt.BRAND
    })]
  })
}

function Q(e) {
  let {
    onSaveTheme: t,
    canApply: n,
    metadata: i
  } = e, a = (0, O.m)(x.p9.TIER_2);
  (0, N.hf)(a, h.Z.CUSTOM_THEMES_EDITOR);
  let o = () => {
    (0, N.Vb)(), (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? true : i.from) === g.tE.SETTING ? (_.Z.open(), (0, g.Ll)()) : (null == i ? true : i.from) === g.tE.CLIENT_THEMES_EDITOR ? (0, g.XO)(g.wh.CLIENT_THEMES) : (0, g.Ll)()
  };
  return (0, r.jsxs)("div", {
    className: M.footerContainer,
    children: [(0, r.jsx)(z, {
      type: "no-text"
    }), (0, r.jsx)(c.Avr, {
      variant: "secondary",
      onClick: o,
      text: j.intl.string(j.t["13/7kZ"])
    }), a ? (0, r.jsx)(q, {
      disabled: !n,
      onApply: t
    }) : (0, r.jsx)(y.Z, {
      className: M.subscribeButton,
      size: u.zx.Sizes.MEDIUM,
      subscriptionTier: x.Si.TIER_2,
      showGradient: true,
      premiumModalAnalyticsLocation: {
        page: w.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: w.jXE.CUSTOM_THEMES_FOOTER
      },
      textOptions: {
        textOverride: j.intl.string(j.t.pj0XBA)
      }
    })]
  })
}

function J(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: a,
    isCoachmark: u,
    isMobile: _
  } = e, b = C.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, y = (0, A.jJ)(), O = i.useRef(false), {
    colors: S,
    chassisMixAmount: w,
    gradientAngle: x,
    setColors: L,
    setChassisMixAmount: k,
    setGradientAngle: U
  } = (0, T.Ig)(), [G, B] = i.useState(null != (t = S[0]) ? t : T.Dp), Z = (0, s.e7)([I.Z], () => I.Z.theme), F = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: V
  } = (0, m.ZP)(h.Z.CUSTOM_THEMES_EDITOR), Y = async () => {
    O.current = true, await (0, f.ZI)({
      theme: Z,
      customUserThemeSettings: {
        colors: S,
        gradientColorStops: [],
        gradientAngle: x,
        baseMix: w
      }
    }), (0, N.u7)(S, w, x, Z, V), null == a || a(D.L.TAKE_ACTION), F || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, g.Ll)(), (0, v.UD)()
  }, z = () => {
    y(A._m.RESET_BUTTON), (0, N.uf)()
  }, q = S.length > 0;
  return (i.useEffect(() => () => {
    O.current || y(A._m.EDITOR_CLOSE)
  }, [y]), (0, p.ZP)(() => {
    u || (0, A.lT)(S, G, L)
  }), b) ? (0, r.jsx)("div", {
    className: o()(M.container, {
      [M.mobileContainer]: _
    }),
    "data-app-right-panel": !_,
    children: (0, r.jsxs)("div", {
      className: M.containerInner,
      children: [(0, r.jsx)(d.Ttm, {
        children: (0, r.jsxs)("div", {
          className: o()(M.editorBody, {
            [M.mobileEditorBody]: _
          }),
          children: [(0, r.jsx)(H, {
            markAsDismissed: a,
            isCoachmark: u
          }), (0, r.jsx)(P.o, {}), (0, r.jsx)(R.U, {
            onChange: e => {
              B(e), 0 === S.length && (0, A.lT)(S, e, L)
            },
            value: G,
            colors: S,
            setColors: L
          }), S.length > 1 && (0, r.jsx)(W, {
            gradientAngle: x,
            setGradientAngle: U
          }), (0, r.jsx)(K, {
            chassisMixAmount: w,
            setChassisMixAmount: e => {
              k(e), 0 === S.length && (0, A.lT)(S, G, L)
            }
          }), (0, r.jsx)(c.zxk, {
            variant: "secondary",
            onClick: z,
            icon: d.Oe7,
            text: j.intl.string(j.t.yBZMsb),
            fullWidth: true
          })]
        })
      }), u ? (0, r.jsx)(X, {
        onSaveTheme: Y,
        canApply: q
      }) : (0, r.jsx)(Q, {
        onSaveTheme: Y,
        canApply: q,
        metadata: n
      })]
    })
  }) : null
}