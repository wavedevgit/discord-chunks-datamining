/** Chunk was on web.js **/
/** chunk id: 884134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => et
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk266454 = require("./266454.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk233398 = require("./233398.js"),
  Chunk263198 = require("./263198.js"),
  Chunk866419 = require("./866419.js"),
  Chunk36982 = require("./36982.js"),
  Chunk990924 = require("./990924.js"),
  Chunk771934 = require("./771934.js"),
  Chunk857658 = require("./857658.jsx"),
  Chunk174278 = require("./174278.jsx"),
  Chunk714097 = require("./714097.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk831989 = require("./831989.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk23766 = require("./23766.js");
let F = 0,
  B = 5e3;

function V(e) {
  let [t, n] = i.useState(0), [r, a] = i.useState(false), o = i.useRef(e);
  return i.useEffect(() => {
    e === o.current || r || n(e => e + 1), o.current = e, a(false)
  }, [e, r]), {
    key: t,
    handleInternalChange: i.useCallback(e => (a(true), e), [])
  }
}

function H(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, r.jsx)("div", {
    className: Z.closeButton,
    children: (0, r.jsx)(d.PZ7, {
      size: "sm",
      onClick: () => {
        null == t || t(M.L.USER_DISMISS), (0, g.Ll)()
      }
    })
  })
}

function Y() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk23766.headerContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/bold",
      children: Chunk388032.intl.string(Chunk831989.default.AsmU85)
    }), (0, Chunk54381.jsx)(Chunk28664.u, {
      text: Chunk388032.intl.string(Chunk388032.t["5AFxuK"]),
      children: (0, Chunk54381.jsx)(Chunk481060.SrA, {
        size: "custom",
        height: 20,
        width: 20,
        colorClass: Chunk23766.nitroIcon
      })
    }), (0, Chunk54381.jsx)(H, {})]
  })
}

function W(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? (0, r.jsx)(K, {
    markAsDismissed: t
  }) : (0, r.jsx)(Y, {}) : (0, r.jsx)(K, {
    markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK)
  })
}

function K(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, y.m)(k.PremiumTypes.TIER_2);
  return (0, r.jsxs)("div", {
    className: Z.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: Z.headerAndCloseRow,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-lg/extrabold",
        children: G.intl.string(U.default["23QUzv"])
      }), (0, r.jsx)(H, {
        markAsDismissed: t
      })]
    }), (0, r.jsx)(f.Text, {
      className: Z.subtitle,
      variant: "text-sm/medium",
      color: "text-muted",
      children: G.intl.string(n ? U.default.TRCE4g : U.default["UV/Vtv"])
    })]
  })
}

function z(e) {
  let t = 10;
  for (let n of [90, 180, 270])
    if (Math.abs(e - n) <= t) return n;
  return e
}

function q(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: a,
    handleInternalChange: s
  } = V(t), [l, c] = i.useState("".concat(Math.round(t), "\xb0"));
  i.useEffect(() => {
    c("".concat(Math.round(t), "\xb0"))
  }, [t]);
  let u = e => {
    let t = e.replace(/°/g, "").trim();
    if ("" === t) return void c("");
    let r = parseInt(t, 10);
    if (isNaN(r)) return;
    let i = Math.max(0, Math.min(360, r));
    c("".concat(i, "\xb0")), (0, w.Ac)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: o()(Z.sliderContainer, Z.gradientDirectionSliderContainer),
    children: [(0, r.jsxs)("div", {
      className: Z.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: G.intl.string(U.default.dZkwgx)
      }), (0, r.jsx)("input", {
        type: "text",
        value: l,
        onChange: e => u(e.target.value),
        placeholder: "".concat(F, "\xb0"),
        className: Z.controlLabelInput
      })]
    }), (0, r.jsxs)("div", {
      className: Z.sliderWrapper,
      children: [(0, r.jsxs)("div", {
        className: Z.angleIndicatorOverlay,
        children: [(0, r.jsx)("div", {
          className: Z.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: Z.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: Z.angleIndicatorLargeDot
        }), (0, r.jsx)("div", {
          className: Z.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: Z.angleIndicatorDot
        })]
      }), (0, r.jsx)(f.iRW, {
        initialValue: t,
        defaultValue: 0,
        minValue: 0,
        maxValue: 360,
        onValueChange: e => {
          (0, w.fR)();
          let t = z(e);
          t !== e || s(e), n(t)
        },
        onValueRender: () => null,
        keyboardStep: 1
      }, a)]
    })]
  })
}

function Q(e) {
  let {
    chassisMixAmount: t,
    setChassisMixAmount: n
  } = e, {
    key: a,
    handleInternalChange: o
  } = V(t), [s, l] = i.useState("".concat(Math.round(t), "%"));
  i.useEffect(() => {
    l("".concat(Math.round(t), "%"))
  }, [t]);
  let c = e => {
    let t = e.replace(/%/g, "").trim();
    if ("" === t) return void l("");
    let r = parseInt(t, 10);
    if (isNaN(r)) return;
    let i = Math.max(0, Math.min(100, r));
    l("".concat(i, "%")), (0, w.PI)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: Z.sliderContainer,
    children: [(0, r.jsxs)("div", {
      className: Z.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: G.intl.string(U.default.xlXkaL)
      }), (0, r.jsx)("input", {
        type: "text",
        value: s,
        onChange: e => c(e.target.value),
        placeholder: "".concat(C.BH, "%"),
        className: Z.controlLabelInput
      })]
    }), (0, r.jsx)(f.iRW, {
      initialValue: t,
      defaultValue: C.BH,
      minValue: 0,
      maxValue: 100,
      onValueChange: e => {
        (0, w.z3)(), o(e), n(e)
      },
      onValueRender: () => null,
      keyboardStep: 1
    }, a)]
  })
}

function X(e) {
  let {
    isCoachmark: t,
    isMobile: n
  } = e, [a, o] = i.useState(false), s = i.useRef(false), [l, u] = i.useState(false), p = i.useRef(null), _ = i.useRef(null), m = i.useCallback(() => {
    var e;
    (0, w.Om)();
    let t = (0, A.C)();
    C.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : C.Ig.getState().gradientAngle,
      chassisMixAmount: t.intensity
    })
  }, []);
  i.useEffect(() => {
    if (t) return s.current = false, p.current = setTimeout(() => {
      s.current || o(true)
    }, B), () => {
      null != p.current && clearTimeout(p.current)
    }
  }, [t]);
  let h = i.useCallback(() => {
      s.current = true
    }, []),
    g = i.useCallback(() => {
      o(false)
    }, []),
    E = a && !l,
    b = () => (0, r.jsx)(d.zxk, {
      buttonRef: _,
      variant: "secondary",
      onClick: m,
      onMouseEnter: () => u(true),
      onMouseLeave: () => u(false),
      icon: n ? {
        type: "icon",
        asset: f.kBK
      } : {
        type: "rive",
        asset: f.q8_,
        riveProps: {
          dataBinding: {
            fill: f.TVs.colors.ICON_STRONG
          },
          eventTargetRef: _
        }
      },
      text: G.intl.string(U.default.c9MBEH),
      fullWidth: true
    });
  return n ? b() : (0, r.jsx)(c.i, {
    title: G.intl.string(U.default.NJ9m8Y),
    body: G.intl.string(U.default["6pabtR"]),
    position: "left",
    asset: E ? (0, r.jsx)(f.kBK, {}) : true,
    forceOpen: a,
    onTooltipShow: h,
    onTooltipHide: g,
    targetElementRef: _,
    children: b()
  })
}

function J(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return (0, r.jsx)(u.u, {
    text: G.intl.string(U.default.SFyHIP),
    shouldShow: n,
    children: (0, r.jsx)(d.zxk, {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: G.intl.string(G.t["1Qm822"]),
      fullWidth: i
    })
  })
}

function $(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, y.m)(k.PremiumTypes.TIER_2);
  return (0, w.hf)(i, m.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsx)("div", {
    className: Z.coachmarkFooterContainer,
    children: i ? (0, r.jsx)(J, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(b.Z, {
      subscriptionTier: k.Si.TIER_2,
      buttonTextOverride: G.intl.string(G.t.JST6jl),
      premiumModalAnalyticsLocation: {
        page: j.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: j.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
      },
      fullWidth: true
    })
  })
}

function ee(e) {
  var t;
  let {
    onSaveTheme: n,
    canApply: i,
    metadata: a
  } = e, s = (0, y.m)(k.PremiumTypes.TIER_2), c = (null == (t = (0, g.oq)().metadata) ? true : t.from) === g.tE.SHARE_MESSAGE;
  (0, w.hf)(s, m.Z.CUSTOM_THEMES_EDITOR);
  let u = () => {
      (0, w.Vb)(), (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == a ? true : a.from) === g.tE.SETTING ? ((0, I.openUserSettings)(S.n.APPEARANCE_PANEL, {
        section: j.oAB.APPEARANCE
      }), (0, g.Ll)()) : (null == a ? true : a.from) === g.tE.CLIENT_THEMES_EDITOR ? (0, g.XO)(g.wh.CLIENT_THEMES) : (0, g.Ll)()
    },
    f = o()(Z.footerContainer, {
      [Z.footerContainerNonPremium]: !s
    });
  return (0, r.jsx)("div", {
    className: f,
    children: s ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x.q, {}), (0, r.jsx)(d.zxk, {
        variant: "secondary",
        onClick: u,
        text: G.intl.string(G.t["13/7kX"])
      }), (0, r.jsx)(J, {
        disabled: !i,
        onApply: () => {
          c && T.default.track(j.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n()
        }
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(b.Z, {
        subscriptionTier: k.Si.TIER_2,
        defaultTextOverride: G.intl.string(G.t.pj0XBN),
        premiumModalAnalyticsLocation: {
          page: j.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
          section: j.jXE.CUSTOM_THEMES_FOOTER
        },
        fullWidth: true
      }), (0, r.jsx)(d.zxk, {
        variant: "secondary",
        onClick: u,
        text: c ? G.intl.string(G.t["13/7kX"]) : G.intl.string(G.t.Olc2K3),
        fullWidth: true
      })]
    })
  })
}

function et(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: a,
    isCoachmark: o,
    isMobile: c
  } = e, u = R.y.useConfig({
    location: "CustomThemesEditorV2"
  }).enabled, b = (0, N.jJ)(), y = (0, N.SK)(), S = i.useRef(false), {
    colors: I,
    chassisMixAmount: T,
    gradientAngle: A,
    setColors: x,
    setChassisMixAmount: j,
    setGradientAngle: k
  } = (0, C.Ig)(), [F, B] = i.useState(null != (t = I[0]) ? t : C.Dp), V = (0, s.e7)([v.Z], () => v.Z.theme), H = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: Y
  } = (0, h.ZP)(m.Z.CUSTOM_THEMES_EDITOR), K = (0, s.e7)([P.Z], () => P.Z.getSavedCustomTheme()), z = async () => {
    S.current = true, await (0, p.ZI)({
      theme: V,
      customUserThemeSettings: {
        colors: I,
        gradientColorStops: [],
        gradientAngle: A,
        baseMix: T
      }
    }), (0, w.u7)(I, T, A, V, Y), null == a || a(M.L.TAKE_ACTION), H || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, g.Ll)(), (0, O.UD)()
  }, J = () => {
    b(N._m.RESET_BUTTON), (0, w.uf)()
  }, et = I.length > 0;
  return i.useEffect(() => () => {
    S.current || b(N._m.EDITOR_CLOSE)
  }, [b]), (0, _.ZP)(() => {
    if (!o) {
      var e;
      let t = (null != (e = null == I ? true : I.length) ? e : 0) > 0,
        n = null != K;
      !t && n && u ? (C.Ig.getState().setAll({
        colors: K.colors,
        gradientAngle: K.gradient_angle,
        chassisMixAmount: K.base_mix
      }), (0, N.Bv)(K.base_theme)) : (0, N.lT)(I, F, x)
    }
  }), (0, r.jsxs)("div", {
    className: c ? Z.mobileContainer : Z.container,
    "data-app-right-panel": !c,
    children: [(0, r.jsx)(f.Ttm, {
      children: (0, r.jsxs)("div", {
        className: Z.editorBody,
        children: [(0, r.jsx)(W, {
          markAsDismissed: a,
          isCoachmark: o
        }), (0, r.jsxs)("div", {
          className: Z.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: G.intl.string(U.default.o2NfLF)
          }), (0, r.jsx)(L.o, {})]
        }), (0, r.jsxs)("div", {
          className: Z.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: G.intl.string(U.default.uSL2Gy)
          }), (0, r.jsx)(D.U, {
            onChange: e => {
              B(e), 0 === I.length && (0, N.lT)(I, e, x)
            },
            value: F,
            colors: I,
            setColors: x
          })]
        }), (0, r.jsxs)("div", {
          className: Z.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: G.intl.string(U.default.F1t0c8)
          }), I.length > 1 && (0, r.jsx)(q, {
            gradientAngle: A,
            setGradientAngle: k
          }), (0, r.jsx)(Q, {
            chassisMixAmount: T,
            setChassisMixAmount: e => {
              j(e), 0 === I.length && (0, N.lT)(I, F, x)
            }
          })]
        }), (0, r.jsxs)("div", {
          className: Z.resetButton,
          children: [(0, r.jsx)(X, {
            isCoachmark: o,
            isMobile: c
          }), (0, r.jsx)(d.zxk, {
            variant: "secondary",
            onClick: J,
            disabled: y,
            text: G.intl.string(G.t.yBZMsQ),
            fullWidth: true
          })]
        })]
      })
    }), o ? (0, r.jsx)($, {
      onSaveTheme: z,
      canApply: et
    }) : (0, r.jsx)(ee, {
      onSaveTheme: z,
      canApply: et,
      metadata: n
    })]
  })
}