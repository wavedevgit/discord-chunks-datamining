/** Chunk was on web.js **/
/** chunk id: 726034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => $
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
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk233398 = require("./233398.js"),
  Chunk263198 = require("./263198.js"),
  Chunk866419 = require("./866419.js"),
  Chunk803038 = require("./803038.js"),
  Chunk771934 = require("./771934.js"),
  Chunk877865 = require("./877865.jsx"),
  Chunk536847 = require("./536847.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk119475 = require("./119475.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk461917 = require("./461917.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  let [t, n] = i.useState(0), [r, a] = i.useState(false), o = i.useRef(e);
  return i.useEffect(() => {
    e === o.current || r || n(e => e + 1), o.current = e, a(false)
  }, [e, r]), {
    key: t,
    handleInternalChange: i.useCallback(e => (a(true), e), [])
  }
}

function V(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, r.jsx)("div", {
    className: k.closeButton,
    children: (0, r.jsx)(c.PZ7, {
      size: "sm",
      onClick: () => {
        null == t || t(x.L.USER_DISMISS), (0, m.Ll)()
      }
    })
  })
}

function H() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk461917.headerContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/bold",
      children: Chunk388032.intl.string(Chunk119475.default["AsmU8/"])
    }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t["5AFxuL"]),
      children: e => (0, r.jsx)(d.SrA, G({
        size: "custom",
        height: 20,
        width: 20,
        colorClass: k.nitroIcon
      }, e))
    }), (0, Chunk951288.jsx)(V, {})]
  })
}

function Y(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, g.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? (0, r.jsx)(W, {
    markAsDismissed: t
  }) : (0, r.jsx)(H, {}) : (0, r.jsx)(W, {
    markAsDismissed: () => (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK)
  })
}

function W(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, y.m)(L.p9.TIER_2);
  return (0, r.jsxs)("div", {
    className: k.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: k.badgeAndCloseRow,
      children: [(0, r.jsx)(d.lBU, {
        text: M.intl.string(M.t.oW0eUV)
      }), (0, r.jsx)(V, {
        markAsDismissed: t
      })]
    }), (0, r.jsxs)("div", {
      className: k.coachmarkHeaderTextContainer,
      children: [(0, r.jsx)(d.X6q, {
        variant: "heading-lg/extrabold",
        children: M.intl.string(j.default["23QUzs"])
      }), (0, r.jsx)(d.Text, {
        className: k.subtitle,
        variant: "text-sm/medium",
        color: "text-muted",
        children: M.intl.string(n ? j.default.TRCE4u : j.default["UV/Vtr"])
      })]
    })]
  })
}

function K(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: i,
    handleInternalChange: a
  } = F(t);
  return (0, r.jsxs)("div", {
    className: o()(k.sliderContainer, k.gradientDirectionSliderContainer),
    children: [(0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      children: M.intl.string(j.default.dZkwg4)
    }), (0, r.jsx)(d.iRW, {
      initialValue: t,
      defaultValue: 0,
      minValue: 0,
      maxValue: 360,
      onValueChange: e => {
        (0, R.fR)(), a(e), n(e)
      },
      onValueRender: e => "".concat(Math.round(e), "\xb0"),
      keyboardStep: 1
    }, i)]
  })
}

function z(e) {
  let {
    chassisMixAmount: t,
    setChassisMixAmount: n
  } = e, {
    key: i,
    handleInternalChange: a
  } = F(t);
  return (0, r.jsxs)("div", {
    className: k.sliderContainer,
    children: [(0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      children: M.intl.string(j.default.xlXkaG)
    }), (0, r.jsx)(d.iRW, {
      initialValue: t,
      defaultValue: S.BH,
      minValue: 0,
      maxValue: 100,
      onValueChange: e => {
        (0, R.z3)(), a(e), n(e)
      },
      keyboardStep: 1
    }, i)]
  })
}

function q(e) {
  let {
    type: t
  } = e, n = i.useCallback(() => {
    var e;
    (0, R.Om)();
    let t = (0, A.C)();
    S.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : S.Ig.getState().gradientAngle,
      chassisMixAmount: t.intensity
    })
  }, []);
  return (0, r.jsx)(d.ua7, {
    text: M.intl.string(j.default.c9MBEB),
    children: e => "with-text" === t ? (0, r.jsx)(c.zxk, Z(G({}, e), {
      variant: "secondary",
      onClick: n,
      icon: d.T$Z,
      text: M.intl.string(j.default.c9MBEB),
      fullWidth: true
    })) : (0, r.jsx)("div", {
      className: k.surpriseMeButton,
      children: (0, r.jsx)(c.hU, Z(G({}, e), {
        variant: "icon-only",
        size: "md",
        onClick: n,
        icon: d.T$Z,
        "aria-label": M.intl.string(j.default.c9MBEB)
      }))
    })
  })
}

function X(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return (0, r.jsx)(d.ua7, {
    text: M.intl.string(j.default.SFyHIC),
    shouldShow: n,
    children: e => (0, r.jsx)(c.zxk, Z(G({}, e), {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: M.intl.string(M.t["1Qm829"]),
      fullWidth: i
    }))
  })
}

function Q(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, y.m)(L.p9.TIER_2);
  return (0, R.hf)(i, p.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsxs)("div", {
    className: k.coachmarkFooterContainer,
    children: [(0, r.jsx)(q, {
      type: "with-text"
    }), i ? (0, r.jsx)(X, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(E.Z, {
      premiumModalAnalyticsLocation: {
        page: D.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: D.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
      },
      textOptions: {
        subscribeText: M.intl.string(M.t.JST6jo)
      },
      subscriptionTier: L.Si.TIER_2,
      showGradient: true,
      color: u.Tt.BRAND
    })]
  })
}

function J(e) {
  let {
    onSaveTheme: t,
    canApply: n,
    metadata: i
  } = e, a = (0, y.m)(L.p9.TIER_2);
  (0, R.hf)(a, p.Z.CUSTOM_THEMES_EDITOR);
  let o = () => {
    (0, R.Vb)(), (0, g.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? true : i.from) === m.tE.SETTING ? ((0, T.openUserSettings)(I.n.APPEARANCE_PANEL, {
      section: D.oAB.APPEARANCE
    }), (0, m.Ll)()) : (null == i ? true : i.from) === m.tE.CLIENT_THEMES_EDITOR ? (0, m.XO)(m.wh.CLIENT_THEMES) : (0, m.Ll)()
  };
  return (0, r.jsxs)("div", {
    className: k.footerContainer,
    children: [(0, r.jsx)(q, {
      type: "no-text"
    }), (0, r.jsx)(c.Avr, {
      variant: "secondary",
      onClick: o,
      text: M.intl.string(M.t["13/7kZ"])
    }), a ? (0, r.jsx)(X, {
      disabled: !n,
      onApply: t
    }) : (0, r.jsx)(b.Z, {
      className: k.subscribeButton,
      size: u.zx.Sizes.MEDIUM,
      subscriptionTier: L.Si.TIER_2,
      showGradient: true,
      premiumModalAnalyticsLocation: {
        page: D.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: D.jXE.CUSTOM_THEMES_FOOTER
      },
      textOptions: {
        textOverride: M.intl.string(M.t.pj0XBA)
      }
    })]
  })
}

function $(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: a,
    isCoachmark: u,
    isMobile: E
  } = e, b = N.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, y = (0, C.jJ)(), I = i.useRef(false), {
    colors: T,
    chassisMixAmount: A,
    gradientAngle: D,
    setColors: L,
    setChassisMixAmount: j,
    setGradientAngle: U
  } = (0, S.Ig)(), [G, B] = i.useState(null != (t = T[0]) ? t : S.Dp), Z = (0, s.e7)([v.Z], () => v.Z.theme), F = (0, g.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: V
  } = (0, h.ZP)(p.Z.CUSTOM_THEMES_EDITOR), H = async () => {
    I.current = true, await (0, f.ZI)({
      theme: Z,
      customUserThemeSettings: {
        colors: T,
        gradientColorStops: [],
        gradientAngle: D,
        baseMix: A
      }
    }), (0, R.u7)(T, A, D, Z, V), null == a || a(x.L.TAKE_ACTION), F || (0, g.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, m.Ll)(), (0, O.UD)()
  }, W = () => {
    y(C._m.RESET_BUTTON), (0, R.uf)()
  }, q = T.length > 0;
  return (i.useEffect(() => () => {
    I.current || y(C._m.EDITOR_CLOSE)
  }, [y]), (0, _.ZP)(() => {
    u || (0, C.lT)(T, G, L)
  }), b) ? (0, r.jsx)("div", {
    className: o()(k.container, {
      [k.mobileContainer]: E
    }),
    "data-app-right-panel": !E,
    children: (0, r.jsxs)("div", {
      className: k.containerInner,
      children: [(0, r.jsx)(d.Ttm, {
        children: (0, r.jsxs)("div", {
          className: o()(k.editorBody, {
            [k.mobileEditorBody]: E
          }),
          children: [(0, r.jsx)(Y, {
            markAsDismissed: a,
            isCoachmark: u
          }), (0, r.jsx)(w.o, {}), (0, r.jsx)(P.U, {
            onChange: e => {
              B(e), 0 === T.length && (0, C.lT)(T, e, L)
            },
            value: G,
            colors: T,
            setColors: L
          }), T.length > 1 && (0, r.jsx)(K, {
            gradientAngle: D,
            setGradientAngle: U
          }), (0, r.jsx)(z, {
            chassisMixAmount: A,
            setChassisMixAmount: e => {
              j(e), 0 === T.length && (0, C.lT)(T, G, L)
            }
          }), (0, r.jsx)(c.zxk, {
            variant: "secondary",
            onClick: W,
            icon: d.Oe7,
            text: M.intl.string(M.t.yBZMsb),
            fullWidth: true
          })]
        })
      }), u ? (0, r.jsx)(Q, {
        onSaveTheme: H,
        canApply: q
      }) : (0, r.jsx)(J, {
        onSaveTheme: H,
        canApply: q,
        metadata: n
      })]
    })
  }) : null
}