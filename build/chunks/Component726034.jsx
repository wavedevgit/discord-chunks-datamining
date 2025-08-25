/** Chunk was on web.js **/
/** chunk id: 726034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => et
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk146187 = require("./146187.jsx"),
  Chunk861066 = require("./861066.jsx"),
  Chunk179538 = require("./179538.jsx"),
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

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e) {
  let [t, n] = i.useState(0), [r, a] = i.useState(false), o = i.useRef(e);
  return i.useEffect(() => {
    e === o.current || r || n(e => e + 1), o.current = e, a(false)
  }, [e, r]), {
    key: t,
    handleInternalChange: i.useCallback(e => (a(true), e), [])
  }
}

function Y(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, r.jsx)("div", {
    className: G.closeButton,
    children: (0, r.jsx)(u.P, {
      size: "sm",
      onClick: () => {
        null == t || t(j.L.USER_DISMISS), (0, y.Ll)()
      }
    })
  })
}

function W() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk461917.headerContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/bold",
      children: Chunk388032.intl.string(Chunk119475.default["AsmU8/"])
    }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t["5AFxuL"]),
      children: e => (0, r.jsx)(p.SrA, Z({
        size: "custom",
        height: 20,
        width: 20,
        colorClass: G.nitroIcon
      }, e))
    }), (0, Chunk951288.jsx)(Y, {})]
  })
}

function K(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, O.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? (0, r.jsx)(z, {
    markAsDismissed: t
  }) : (0, r.jsx)(W, {}) : (0, r.jsx)(z, {
    markAsDismissed: () => (0, O.Q3)(l.z.CUSTOM_THEME_COACHMARK)
  })
}

function z(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, T.m)(k.p9.TIER_2);
  return (0, r.jsxs)("div", {
    className: G.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: G.badgeAndCloseRow,
      children: [(0, r.jsx)(p.lBU, {
        text: U.intl.string(U.t.oW0eUV)
      }), (0, r.jsx)(Y, {
        markAsDismissed: t
      })]
    }), (0, r.jsxs)("div", {
      className: G.coachmarkHeaderTextContainer,
      children: [(0, r.jsx)(p.X6q, {
        variant: "heading-lg/extrabold",
        children: U.intl.string(M.default["23QUzs"])
      }), (0, r.jsx)(p.Text, {
        className: G.subtitle,
        variant: "text-sm/medium",
        color: "text-muted",
        children: U.intl.string(n ? M.default.TRCE4u : M.default["UV/Vtr"])
      })]
    })]
  })
}

function q(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: i,
    handleInternalChange: a
  } = H(t);
  return (0, r.jsxs)("div", {
    className: o()(G.sliderContainer, G.gradientDirectionSliderContainer),
    children: [(0, r.jsx)(p.Text, {
      variant: "text-sm/medium",
      children: U.intl.string(M.default.dZkwg4)
    }), (0, r.jsx)(p.iRW, {
      initialValue: t,
      defaultValue: 0,
      minValue: 0,
      maxValue: 360,
      onValueChange: e => {
        (0, w.fR)(), a(e), n(e)
      },
      onValueRender: e => "".concat(Math.round(e), "\xb0"),
      keyboardStep: 1
    }, i)]
  })
}

function X(e) {
  let {
    chassisMixAmount: t,
    setChassisMixAmount: n
  } = e, {
    key: i,
    handleInternalChange: a
  } = H(t);
  return (0, r.jsxs)("div", {
    className: G.sliderContainer,
    children: [(0, r.jsx)(p.Text, {
      variant: "text-sm/medium",
      children: U.intl.string(M.default.xlXkaG)
    }), (0, r.jsx)(p.iRW, {
      initialValue: t,
      defaultValue: C.BH,
      minValue: 0,
      maxValue: 100,
      onValueChange: e => {
        (0, w.z3)(), a(e), n(e)
      },
      keyboardStep: 1
    }, i)]
  })
}

function Q(e) {
  let {
    type: t
  } = e, n = i.useCallback(() => {
    var e;
    (0, w.Om)();
    let t = (0, N.C)();
    C.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : C.Ig.getState().gradientAngle,
      chassisMixAmount: t.intensity
    })
  }, []);
  return (0, r.jsx)(p.ua7, {
    text: U.intl.string(M.default.c9MBEB),
    children: e => "with-text" === t ? (0, r.jsx)(c.z, F(Z({}, e), {
      variant: "secondary",
      onClick: n,
      icon: p.T$Z,
      text: U.intl.string(M.default.c9MBEB),
      fullWidth: true
    })) : (0, r.jsx)("div", {
      className: G.surpriseMeButton,
      children: (0, r.jsx)(d.h, F(Z({}, e), {
        variant: "icon-only",
        size: "md",
        onClick: n,
        icon: p.T$Z,
        "aria-label": U.intl.string(M.default.c9MBEB)
      }))
    })
  })
}

function J(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return (0, r.jsx)(p.ua7, {
    text: U.intl.string(M.default.SFyHIC),
    shouldShow: n,
    children: e => (0, r.jsx)(c.z, F(Z({}, e), {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: U.intl.string(U.t["1Qm829"]),
      fullWidth: i
    }))
  })
}

function $(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, T.m)(k.p9.TIER_2);
  return (0, w.hf)(i, E.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsxs)("div", {
    className: G.coachmarkFooterContainer,
    children: [(0, r.jsx)(Q, {
      type: "with-text"
    }), i ? (0, r.jsx)(J, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(v.Z, {
      premiumModalAnalyticsLocation: {
        page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: L.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
      },
      textOptions: {
        subscribeText: U.intl.string(U.t.JST6jo)
      },
      subscriptionTier: k.Si.TIER_2,
      showGradient: true,
      color: _.Tt.BRAND
    })]
  })
}

function ee(e) {
  let {
    onSaveTheme: t,
    canApply: n,
    metadata: i
  } = e, a = (0, T.m)(k.p9.TIER_2);
  (0, w.hf)(a, E.Z.CUSTOM_THEMES_EDITOR);
  let o = () => {
    (0, w.Vb)(), (0, O.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? true : i.from) === y.tE.SETTING ? (m.Z.open(), (0, y.Ll)()) : (null == i ? true : i.from) === y.tE.CLIENT_THEMES_EDITOR ? (0, y.XO)(y.wh.CLIENT_THEMES) : (0, y.Ll)()
  };
  return (0, r.jsxs)("div", {
    className: G.footerContainer,
    children: [(0, r.jsx)(Q, {
      type: "no-text"
    }), (0, r.jsx)(f.A, {
      variant: "secondary",
      onClick: o,
      text: U.intl.string(U.t["13/7kZ"])
    }), a ? (0, r.jsx)(J, {
      disabled: !n,
      onApply: t
    }) : (0, r.jsx)(I.Z, {
      className: G.subscribeButton,
      size: _.zx.Sizes.MEDIUM,
      subscriptionTier: k.Si.TIER_2,
      showGradient: true,
      premiumModalAnalyticsLocation: {
        page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: L.jXE.CUSTOM_THEMES_FOOTER
      },
      textOptions: {
        textOverride: U.intl.string(U.t.pj0XBA)
      }
    })]
  })
}

function et(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: a,
    isCoachmark: o
  } = e, u = P.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, d = (0, R.jJ)(), f = i.useRef(false), {
    colors: _,
    chassisMixAmount: m,
    gradientAngle: v,
    setColors: I,
    setChassisMixAmount: T,
    setGradientAngle: N
  } = (0, C.Ig)(), [L, k] = i.useState(null != (t = _[0]) ? t : C.Dp), M = (0, s.e7)([A.Z], () => A.Z.theme), B = (0, O.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: Z
  } = (0, b.ZP)(E.Z.CUSTOM_THEMES_EDITOR), V = async () => {
    f.current = true, await (0, h.ZI)({
      theme: M,
      customUserThemeSettings: {
        colors: _,
        gradientColorStops: [],
        gradientAngle: v,
        baseMix: m
      }
    }), (0, w.u7)(_, m, v, M, Z), null == a || a(j.L.TAKE_ACTION), B || (0, O.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, y.Ll)(), (0, S.UD)()
  }, F = () => {
    d(R._m.RESET_BUTTON), (0, w.uf)()
  }, H = _.length > 0;
  return (i.useEffect(() => () => {
    f.current || d(R._m.EDITOR_CLOSE)
  }, [d]), (0, g.ZP)(() => {
    o || (0, R.lT)(_, L, I)
  }), u) ? (0, r.jsx)("div", {
    className: G.container,
    "data-app-right-panel": true,
    children: (0, r.jsxs)("div", {
      className: G.containerInner,
      children: [(0, r.jsx)(p.Ttm, {
        children: (0, r.jsxs)("div", {
          className: G.editorBody,
          children: [(0, r.jsx)(K, {
            markAsDismissed: a,
            isCoachmark: o
          }), (0, r.jsx)(x.o, {}), (0, r.jsx)(D.U, {
            onChange: e => {
              k(e), 0 === _.length && (0, R.lT)(_, e, I)
            },
            value: L,
            colors: _,
            setColors: I
          }), _.length > 1 && (0, r.jsx)(q, {
            gradientAngle: v,
            setGradientAngle: N
          }), (0, r.jsx)(X, {
            chassisMixAmount: m,
            setChassisMixAmount: e => {
              T(e), 0 === _.length && (0, R.lT)(_, L, I)
            }
          }), (0, r.jsx)(c.z, {
            variant: "secondary",
            onClick: F,
            icon: p.Oe7,
            text: U.intl.string(U.t.yBZMsb),
            fullWidth: true
          })]
        })
      }), o ? (0, r.jsx)($, {
        onSaveTheme: V,
        canApply: H
      }) : (0, r.jsx)(ee, {
        onSaveTheme: V,
        canApply: H,
        metadata: n
      })]
    })
  }) : null
}