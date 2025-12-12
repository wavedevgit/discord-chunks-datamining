/** Chunk was on web.js **/
/** chunk id: 884134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk803038 = require("./803038.js"),
  Chunk990924 = require("./990924.js"),
  Chunk771934 = require("./771934.js"),
  Chunk857658 = require("./857658.jsx"),
  Chunk174278 = require("./174278.jsx"),
  Chunk714097 = require("./714097.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk939101 = require("./939101.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882741 = require("./882741.js");
let B = 0,
  V = 5e3;

function H(e) {
  let [t, n] = i.useState(0), [r, o] = i.useState(false), a = i.useRef(e);
  return i.useEffect(() => {
    e === a.current || r || n(e => e + 1), a.current = e, o(false)
  }, [e, r]), {
    key: t,
    handleInternalChange: i.useCallback(e => (o(true), e), [])
  }
}

function Y(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, r.jsx)("div", {
    className: F.closeButton,
    children: (0, r.jsx)(d.PZ7, {
      size: "sm",
      onClick: () => {
        null == t || t(k.L.USER_DISMISS), (0, g.Ll)()
      }
    })
  })
}

function W() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk882741.headerContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/bold",
      children: Chunk388032.intl.string(Chunk939101.default.AsmU85)
    }), (0, Chunk54381.jsx)(Chunk28664.u, {
      text: Chunk388032.intl.string(Chunk388032.t["5AFxuK"]),
      children: (0, Chunk54381.jsx)(Chunk481060.SrA, {
        size: "custom",
        height: 20,
        width: 20,
        colorClass: Chunk882741.nitroIcon
      })
    }), (0, Chunk54381.jsx)(Y, {})]
  })
}

function K(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? (0, r.jsx)(z, {
    markAsDismissed: t
  }) : (0, r.jsx)(W, {}) : (0, r.jsx)(z, {
    markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK)
  })
}

function z(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, y.m)(U.PremiumTypes.TIER_2);
  return (0, r.jsxs)("div", {
    className: F.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: F.badgeAndCloseRow,
      children: [(0, r.jsx)(f.lBU, {
        text: Z.intl.string(Z.t.oW0eUd)
      }), (0, r.jsx)(Y, {
        markAsDismissed: t
      })]
    }), (0, r.jsxs)("div", {
      className: F.coachmarkHeaderTextContainer,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-lg/extrabold",
        children: Z.intl.string(G.default["23QUzv"])
      }), (0, r.jsx)(f.Text, {
        className: F.subtitle,
        variant: "text-sm/medium",
        color: "text-muted",
        children: Z.intl.string(n ? G.default.TRCE4g : G.default["UV/Vtv"])
      })]
    })]
  })
}

function q(e) {
  let t = 10;
  for (let n of [90, 180, 270])
    if (Math.abs(e - n) <= t) return n;
  return e
}

function Q(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: o,
    handleInternalChange: s
  } = H(t), [l, c] = i.useState("".concat(Math.round(t), "\xb0"));
  i.useEffect(() => {
    c("".concat(Math.round(t), "\xb0"))
  }, [t]);
  let u = e => {
    let t = e.replace(/°/g, "").trim();
    if ("" === t) return void c("");
    let r = parseInt(t, 10);
    if (isNaN(r)) return;
    let i = Math.max(0, Math.min(360, r));
    c("".concat(i, "\xb0")), (0, D.Ac)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: a()(F.sliderContainer, F.gradientDirectionSliderContainer),
    children: [(0, r.jsxs)("div", {
      className: F.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: Z.intl.string(G.default.dZkwgx)
      }), (0, r.jsx)("input", {
        type: "text",
        value: l,
        onChange: e => u(e.target.value),
        placeholder: "".concat(B, "\xb0"),
        className: F.controlLabelInput
      })]
    }), (0, r.jsxs)("div", {
      className: F.sliderWrapper,
      children: [(0, r.jsxs)("div", {
        className: F.angleIndicatorOverlay,
        children: [(0, r.jsx)("div", {
          className: F.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: F.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: F.angleIndicatorLargeDot
        }), (0, r.jsx)("div", {
          className: F.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: F.angleIndicatorDot
        })]
      }), (0, r.jsx)(f.iRW, {
        initialValue: t,
        defaultValue: 0,
        minValue: 0,
        maxValue: 360,
        onValueChange: e => {
          (0, D.fR)();
          let t = q(e);
          t !== e || s(e), n(t)
        },
        onValueRender: () => null,
        keyboardStep: 1
      }, o)]
    })]
  })
}

function X(e) {
  let {
    chassisMixAmount: t,
    setChassisMixAmount: n
  } = e, {
    key: o,
    handleInternalChange: a
  } = H(t), [s, l] = i.useState("".concat(Math.round(t), "%"));
  i.useEffect(() => {
    l("".concat(Math.round(t), "%"))
  }, [t]);
  let c = e => {
    let t = e.replace(/%/g, "").trim();
    if ("" === t) return void l("");
    let r = parseInt(t, 10);
    if (isNaN(r)) return;
    let i = Math.max(0, Math.min(100, r));
    l("".concat(i, "%")), (0, D.PI)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: F.sliderContainer,
    children: [(0, r.jsxs)("div", {
      className: F.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: Z.intl.string(G.default.xlXkaL)
      }), (0, r.jsx)("input", {
        type: "text",
        value: s,
        onChange: e => c(e.target.value),
        placeholder: "".concat(C.BH, "%"),
        className: F.controlLabelInput
      })]
    }), (0, r.jsx)(f.iRW, {
      initialValue: t,
      defaultValue: C.BH,
      minValue: 0,
      maxValue: 100,
      onValueChange: e => {
        (0, D.z3)(), a(e), n(e)
      },
      onValueRender: () => null,
      keyboardStep: 1
    }, o)]
  })
}

function J(e) {
  let {
    isCoachmark: t,
    isMobile: n
  } = e, [o, a] = i.useState(false), s = i.useRef(false), [l, u] = i.useState(false), p = i.useRef(null), _ = i.useRef(null), m = i.useCallback(() => {
    var e;
    (0, D.Om)();
    let t = (0, A.C)();
    C.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : C.Ig.getState().gradientAngle,
      chassisMixAmount: t.intensity
    })
  }, []);
  i.useEffect(() => {
    if (t) return s.current = false, p.current = setTimeout(() => {
      s.current || a(true)
    }, V), () => {
      null != p.current && clearTimeout(p.current)
    }
  }, [t]);
  let h = i.useCallback(() => {
      s.current = true
    }, []),
    g = i.useCallback(() => {
      a(false)
    }, []),
    E = o && !l,
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
      text: Z.intl.string(G.default.c9MBEH),
      fullWidth: true
    });
  return n ? b() : (0, r.jsx)(c.i, {
    title: Z.intl.string(G.default.NJ9m8Y),
    body: Z.intl.string(G.default["6pabtR"]),
    position: "left",
    asset: E ? (0, r.jsx)(f.kBK, {}) : true,
    forceOpen: o,
    onTooltipShow: h,
    onTooltipHide: g,
    targetElementRef: _,
    children: b()
  })
}

function $(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return (0, r.jsx)(u.u, {
    text: Z.intl.string(G.default.SFyHIP),
    shouldShow: n,
    children: (0, r.jsx)(d.zxk, {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: Z.intl.string(Z.t["1Qm822"]),
      fullWidth: i
    })
  })
}

function ee(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, y.m)(U.PremiumTypes.TIER_2);
  return (0, D.hf)(i, m.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsx)("div", {
    className: F.coachmarkFooterContainer,
    children: i ? (0, r.jsx)($, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(b.Z, {
      subscriptionTier: U.Si.TIER_2,
      buttonTextOverride: Z.intl.string(Z.t.JST6jl),
      premiumModalAnalyticsLocation: {
        page: M.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: M.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
      },
      fullWidth: true
    })
  })
}

function et(e) {
  var t;
  let {
    onSaveTheme: n,
    canApply: i,
    metadata: o
  } = e, s = (0, y.m)(U.PremiumTypes.TIER_2), c = (null == (t = (0, g.oq)().metadata) ? true : t.from) === g.tE.SHARE_MESSAGE;
  (0, D.hf)(s, m.Z.CUSTOM_THEMES_EDITOR);
  let u = () => {
      (0, D.Vb)(), (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == o ? true : o.from) === g.tE.SETTING ? ((0, I.openUserSettings)(S.n.APPEARANCE_PANEL, {
        section: M.oAB.APPEARANCE
      }), (0, g.Ll)()) : (null == o ? true : o.from) === g.tE.CLIENT_THEMES_EDITOR ? (0, g.XO)(g.wh.CLIENT_THEMES) : (0, g.Ll)()
    },
    f = a()(F.footerContainer, {
      [F.footerContainerNonPremium]: !s
    });
  return (0, r.jsx)("div", {
    className: f,
    children: s ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(L.q, {}), (0, r.jsx)(d.zxk, {
        variant: "secondary",
        onClick: u,
        text: Z.intl.string(Z.t["13/7kX"])
      }), (0, r.jsx)($, {
        disabled: !i,
        onApply: () => {
          c && T.default.track(M.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n()
        }
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(b.Z, {
        subscriptionTier: U.Si.TIER_2,
        defaultTextOverride: Z.intl.string(Z.t.pj0XBN),
        premiumModalAnalyticsLocation: {
          page: M.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
          section: M.jXE.CUSTOM_THEMES_FOOTER
        },
        fullWidth: true
      }), (0, r.jsx)(d.zxk, {
        variant: "secondary",
        onClick: u,
        text: c ? Z.intl.string(Z.t["13/7kX"]) : Z.intl.string(Z.t.Olc2K3),
        fullWidth: true
      })]
    })
  })
}

function en(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: o,
    isCoachmark: a,
    isMobile: c
  } = e, u = R.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, b = w.y.useConfig({
    location: "CustomThemesEditorV2"
  }).enabled, y = (0, N.jJ)(), S = (0, N.SK)(), I = i.useRef(false), {
    colors: T,
    chassisMixAmount: A,
    gradientAngle: L,
    setColors: M,
    setChassisMixAmount: U,
    setGradientAngle: B
  } = (0, C.Ig)(), [V, H] = i.useState(null != (t = T[0]) ? t : C.Dp), Y = (0, s.e7)([v.Z], () => v.Z.theme), W = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: z
  } = (0, h.ZP)(m.Z.CUSTOM_THEMES_EDITOR), q = (0, s.e7)([P.Z], () => P.Z.getSavedCustomTheme()), $ = async () => {
    I.current = true, await (0, p.ZI)({
      theme: Y,
      customUserThemeSettings: {
        colors: T,
        gradientColorStops: [],
        gradientAngle: L,
        baseMix: A
      }
    }), (0, D.u7)(T, A, L, Y, z), null == o || o(k.L.TAKE_ACTION), W || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, g.Ll)(), (0, O.UD)()
  }, en = () => {
    y(N._m.RESET_BUTTON), (0, D.uf)()
  }, er = T.length > 0;
  return (i.useEffect(() => () => {
    I.current || y(N._m.EDITOR_CLOSE)
  }, [y]), (0, _.ZP)(() => {
    if (!a) {
      var e;
      let t = (null != (e = null == T ? true : T.length) ? e : 0) > 0,
        n = null != q;
      !t && n && b ? (C.Ig.getState().setAll({
        colors: q.colors,
        gradientAngle: q.gradient_angle,
        chassisMixAmount: q.base_mix
      }), (0, N.Bv)(q.base_theme)) : (0, N.lT)(T, V, M)
    }
  }), u) ? (0, r.jsxs)("div", {
    className: c ? F.mobileContainer : F.container,
    "data-app-right-panel": !c,
    children: [(0, r.jsx)(f.Ttm, {
      children: (0, r.jsxs)("div", {
        className: F.editorBody,
        children: [(0, r.jsx)(K, {
          markAsDismissed: o,
          isCoachmark: a
        }), (0, r.jsxs)("div", {
          className: F.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: Z.intl.string(G.default.o2NfLF)
          }), (0, r.jsx)(j.o, {})]
        }), (0, r.jsxs)("div", {
          className: F.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: Z.intl.string(G.default.uSL2Gy)
          }), (0, r.jsx)(x.U, {
            onChange: e => {
              H(e), 0 === T.length && (0, N.lT)(T, e, M)
            },
            value: V,
            colors: T,
            setColors: M
          })]
        }), (0, r.jsxs)("div", {
          className: F.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: Z.intl.string(G.default.F1t0c8)
          }), T.length > 1 && (0, r.jsx)(Q, {
            gradientAngle: L,
            setGradientAngle: B
          }), (0, r.jsx)(X, {
            chassisMixAmount: A,
            setChassisMixAmount: e => {
              U(e), 0 === T.length && (0, N.lT)(T, V, M)
            }
          })]
        }), (0, r.jsxs)("div", {
          className: F.resetButton,
          children: [(0, r.jsx)(J, {
            isCoachmark: a,
            isMobile: c
          }), (0, r.jsx)(d.zxk, {
            variant: "secondary",
            onClick: en,
            disabled: S,
            text: Z.intl.string(Z.t.yBZMsQ),
            fullWidth: true
          })]
        })]
      })
    }), a ? (0, r.jsx)(ee, {
      onSaveTheme: $,
      canApply: er
    }) : (0, r.jsx)(et, {
      onSaveTheme: $,
      canApply: er,
      metadata: n
    })]
  }) : null
}