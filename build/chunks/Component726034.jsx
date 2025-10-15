/** Chunk was on web.js **/
/** chunk id: 726034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk687101 = require("./687101.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk461917 = require("./461917.js");

function G(e) {
  let [t, n] = i.useState(0), [r, a] = i.useState(false), o = i.useRef(e);
  return i.useEffect(() => {
    e === o.current || r || n(e => e + 1), o.current = e, a(false)
  }, [e, r]), {
    key: t,
    handleInternalChange: i.useCallback(e => (a(true), e), [])
  }
}

function B(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, r.jsx)("div", {
    className: U.closeButton,
    children: (0, r.jsx)(u.PZ7, {
      size: "sm",
      onClick: () => {
        null == t || t(x.L.USER_DISMISS), (0, g.Ll)()
      }
    })
  })
}

function Z() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk461917.headerContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/bold",
      children: Chunk388032.intl.string(Chunk687101.default.AsmU85)
    }), (0, Chunk951288.jsx)(Chunk28664.u, {
      text: Chunk388032.intl.string(Chunk388032.t["5AFxuK"]),
      children: (0, Chunk951288.jsx)(Chunk481060.SrA, {
        size: "custom",
        height: 20,
        width: 20,
        colorClass: Chunk461917.nitroIcon
      })
    }), (0, Chunk951288.jsx)(B, {})]
  })
}

function F(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? (0, r.jsx)(V, {
    markAsDismissed: t
  }) : (0, r.jsx)(Z, {}) : (0, r.jsx)(V, {
    markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK)
  })
}

function V(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, O.m)(M.PremiumTypes.TIER_2);
  return (0, r.jsxs)("div", {
    className: U.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: U.badgeAndCloseRow,
      children: [(0, r.jsx)(f.lBU, {
        text: k.intl.string(k.t.oW0eUd)
      }), (0, r.jsx)(B, {
        markAsDismissed: t
      })]
    }), (0, r.jsxs)("div", {
      className: U.coachmarkHeaderTextContainer,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-lg/extrabold",
        children: k.intl.string(j.default["23QUzv"])
      }), (0, r.jsx)(f.Text, {
        className: U.subtitle,
        variant: "text-sm/medium",
        color: "text-muted",
        children: k.intl.string(n ? j.default.TRCE4g : j.default["UV/Vtv"])
      })]
    })]
  })
}

function H(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: i,
    handleInternalChange: a
  } = G(t);
  return (0, r.jsxs)("div", {
    className: o()(U.sliderContainer, U.gradientDirectionSliderContainer),
    children: [(0, r.jsx)(f.Text, {
      variant: "text-sm/medium",
      children: k.intl.string(j.default.dZkwgx)
    }), (0, r.jsx)(f.iRW, {
      initialValue: t,
      defaultValue: 0,
      minValue: 0,
      maxValue: 360,
      onValueChange: e => {
        (0, P.fR)(), a(e), n(e)
      },
      onValueRender: e => "".concat(Math.round(e), "\xb0"),
      keyboardStep: 1
    }, i)]
  })
}

function Y(e) {
  let {
    chassisMixAmount: t,
    setChassisMixAmount: n
  } = e, {
    key: i,
    handleInternalChange: a
  } = G(t);
  return (0, r.jsxs)("div", {
    className: U.sliderContainer,
    children: [(0, r.jsx)(f.Text, {
      variant: "text-sm/medium",
      children: k.intl.string(j.default.xlXkaL)
    }), (0, r.jsx)(f.iRW, {
      initialValue: t,
      defaultValue: A.BH,
      minValue: 0,
      maxValue: 100,
      onValueChange: e => {
        (0, P.z3)(), a(e), n(e)
      },
      keyboardStep: 1
    }, i)]
  })
}

function W(e) {
  let {
    type: t
  } = e, n = i.useCallback(() => {
    var e;
    (0, P.Om)();
    let t = (0, C.C)();
    A.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : A.Ig.getState().gradientAngle,
      chassisMixAmount: t.intensity
    })
  }, []);
  return (0, r.jsx)(c.u, {
    text: k.intl.string(j.default.c9MBEH),
    children: "with-text" === t ? (0, r.jsx)(u.zxk, {
      variant: "secondary",
      onClick: n,
      icon: f.T$Z,
      text: k.intl.string(j.default.c9MBEH),
      fullWidth: true
    }) : (0, r.jsx)("div", {
      className: U.surpriseMeButton,
      children: (0, r.jsx)(u.hU, {
        variant: "icon-only",
        size: "md",
        onClick: n,
        icon: f.T$Z,
        "aria-label": k.intl.string(j.default.c9MBEH)
      })
    })
  })
}

function K(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return (0, r.jsx)(c.u, {
    text: k.intl.string(j.default.SFyHIP),
    shouldShow: n,
    children: (0, r.jsx)(u.zxk, {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: k.intl.string(k.t["1Qm822"]),
      fullWidth: i
    })
  })
}

function z(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, O.m)(M.PremiumTypes.TIER_2);
  return (0, P.hf)(i, h.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsxs)("div", {
    className: U.coachmarkFooterContainer,
    children: [(0, r.jsx)(W, {
      type: "with-text"
    }), i ? (0, r.jsx)(K, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(b.Z, {
      premiumModalAnalyticsLocation: {
        page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: L.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
      },
      textOptions: {
        subscribeText: k.intl.string(k.t.JST6jl)
      },
      subscriptionTier: M.Si.TIER_2,
      showGradient: true,
      color: d.Tt.BRAND
    })]
  })
}

function q(e) {
  let {
    onSaveTheme: t,
    canApply: n,
    metadata: i
  } = e, a = (0, O.m)(M.PremiumTypes.TIER_2);
  (0, P.hf)(a, h.Z.CUSTOM_THEMES_EDITOR);
  let o = () => {
    (0, P.Vb)(), (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? true : i.from) === g.tE.SETTING ? ((0, S.openUserSettings)(T.n.APPEARANCE_PANEL, {
      section: L.oAB.APPEARANCE
    }), (0, g.Ll)()) : (null == i ? true : i.from) === g.tE.CLIENT_THEMES_EDITOR ? (0, g.XO)(g.wh.CLIENT_THEMES) : (0, g.Ll)()
  };
  return (0, r.jsxs)("div", {
    className: U.footerContainer,
    children: [(0, r.jsx)(W, {
      type: "no-text"
    }), (0, r.jsx)(u.Avr, {
      variant: "secondary",
      onClick: o,
      text: k.intl.string(k.t["13/7kX"])
    }), a ? (0, r.jsx)(K, {
      disabled: !n,
      onApply: t
    }) : (0, r.jsx)(y.Z, {
      className: U.subscribeButton,
      size: d.zx.Sizes.MEDIUM,
      subscriptionTier: M.Si.TIER_2,
      showGradient: true,
      premiumModalAnalyticsLocation: {
        page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: L.jXE.CUSTOM_THEMES_FOOTER
      },
      textOptions: {
        textOverride: k.intl.string(k.t.pj0XBN)
      }
    })]
  })
}

function X(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: a,
    isCoachmark: c,
    isMobile: d
  } = e, b = R.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, y = (0, N.jJ)(), O = i.useRef(false), {
    colors: T,
    chassisMixAmount: S,
    gradientAngle: C,
    setColors: L,
    setChassisMixAmount: M,
    setGradientAngle: j
  } = (0, A.Ig)(), [G, B] = i.useState(null != (t = T[0]) ? t : A.Dp), Z = (0, s.e7)([I.Z], () => I.Z.theme), V = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: W
  } = (0, m.ZP)(h.Z.CUSTOM_THEMES_EDITOR), K = async () => {
    O.current = true, await (0, _.ZI)({
      theme: Z,
      customUserThemeSettings: {
        colors: T,
        gradientColorStops: [],
        gradientAngle: C,
        baseMix: S
      }
    }), (0, P.u7)(T, S, C, Z, W), null == a || a(x.L.TAKE_ACTION), V || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, g.Ll)(), (0, v.UD)()
  }, X = () => {
    y(N._m.RESET_BUTTON), (0, P.uf)()
  }, Q = T.length > 0;
  return (i.useEffect(() => () => {
    O.current || y(N._m.EDITOR_CLOSE)
  }, [y]), (0, p.ZP)(() => {
    c || (0, N.lT)(T, G, L)
  }), b) ? (0, r.jsx)("div", {
    className: o()(U.container, {
      [U.mobileContainer]: d
    }),
    "data-app-right-panel": !d,
    children: (0, r.jsxs)("div", {
      className: U.containerInner,
      children: [(0, r.jsx)(f.Ttm, {
        children: (0, r.jsxs)("div", {
          className: o()(U.editorBody, {
            [U.mobileEditorBody]: d
          }),
          children: [(0, r.jsx)(F, {
            markAsDismissed: a,
            isCoachmark: c
          }), (0, r.jsx)(D.o, {}), (0, r.jsx)(w.U, {
            onChange: e => {
              B(e), 0 === T.length && (0, N.lT)(T, e, L)
            },
            value: G,
            colors: T,
            setColors: L
          }), T.length > 1 && (0, r.jsx)(H, {
            gradientAngle: C,
            setGradientAngle: j
          }), (0, r.jsx)(Y, {
            chassisMixAmount: S,
            setChassisMixAmount: e => {
              M(e), 0 === T.length && (0, N.lT)(T, G, L)
            }
          }), (0, r.jsx)(u.zxk, {
            variant: "secondary",
            onClick: X,
            icon: f.Oe7,
            text: k.intl.string(k.t.yBZMsQ),
            fullWidth: true
          })]
        })
      }), c ? (0, r.jsx)(z, {
        onSaveTheme: K,
        canApply: Q
      }) : (0, r.jsx)(q, {
        onSaveTheme: K,
        canApply: Q,
        metadata: n
      })]
    })
  }) : null
}