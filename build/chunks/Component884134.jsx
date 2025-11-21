/** Chunk was on web.js **/
/** chunk id: 884134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
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
  Chunk803038 = require("./803038.js"),
  Chunk990924 = require("./990924.js"),
  Chunk771934 = require("./771934.js"),
  Chunk857658 = require("./857658.jsx"),
  Chunk174278 = require("./174278.jsx"),
  Chunk714097 = require("./714097.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk896591 = require("./896591.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882741 = require("./882741.js");
let F = 0,
  V = 5e3;

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
    className: Z.closeButton,
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
      children: Chunk388032.intl.string(Chunk896591.default.AsmU85)
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
    className: Z.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: Z.badgeAndCloseRow,
      children: [(0, r.jsx)(f.lBU, {
        text: B.intl.string(B.t.oW0eUd)
      }), (0, r.jsx)(Y, {
        markAsDismissed: t
      })]
    }), (0, r.jsxs)("div", {
      className: Z.coachmarkHeaderTextContainer,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-lg/extrabold",
        children: B.intl.string(G.default["23QUzv"])
      }), (0, r.jsx)(f.Text, {
        className: Z.subtitle,
        variant: "text-sm/medium",
        color: "text-muted",
        children: B.intl.string(n ? G.default.TRCE4g : G.default["UV/Vtv"])
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

function X(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: a,
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
    c("".concat(i, "\xb0")), (0, w.Ac)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: o()(Z.sliderContainer, Z.gradientDirectionSliderContainer),
    children: [(0, r.jsxs)("div", {
      className: Z.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: B.intl.string(G.default.dZkwgx)
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
          let t = q(e);
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
    l("".concat(i, "%")), (0, w.PI)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: Z.sliderContainer,
    children: [(0, r.jsxs)("div", {
      className: Z.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: B.intl.string(G.default.xlXkaL)
      }), (0, r.jsx)("input", {
        type: "text",
        value: s,
        onChange: e => c(e.target.value),
        placeholder: "".concat(A.BH, "%"),
        className: Z.controlLabelInput
      })]
    }), (0, r.jsx)(f.iRW, {
      initialValue: t,
      defaultValue: A.BH,
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

function J(e) {
  let {
    isCoachmark: t,
    isMobile: n
  } = e, [a, o] = i.useState(false), s = i.useRef(false), [l, u] = i.useState(false), _ = i.useRef(null), p = i.useRef(null), h = i.useCallback(() => {
    var e;
    (0, w.Om)();
    let t = (0, C.C)();
    A.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : A.Ig.getState().gradientAngle,
      chassisMixAmount: t.intensity
    })
  }, []);
  i.useEffect(() => {
    if (t) return s.current = false, _.current = setTimeout(() => {
      s.current || o(true)
    }, V), () => {
      null != _.current && clearTimeout(_.current)
    }
  }, [t]);
  let m = i.useCallback(() => {
      s.current = true
    }, []),
    g = i.useCallback(() => {
      o(false)
    }, []),
    E = a && !l,
    b = () => (0, r.jsx)(d.zxk, {
      buttonRef: p,
      variant: "secondary",
      onClick: h,
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
            fill: f.TVs.colors.ICON_PRIMARY
          },
          eventTargetRef: p
        }
      },
      text: B.intl.string(G.default.c9MBEH),
      fullWidth: true
    });
  return n ? b() : (0, r.jsx)(c.i, {
    title: B.intl.string(G.default.NJ9m8Y),
    body: B.intl.string(G.default["6pabtR"]),
    position: "left",
    asset: E ? (0, r.jsx)(f.kBK, {}) : true,
    forceOpen: a,
    onTooltipShow: m,
    onTooltipHide: g,
    targetElementRef: p,
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
    text: B.intl.string(G.default.SFyHIP),
    shouldShow: n,
    children: (0, r.jsx)(d.zxk, {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: B.intl.string(B.t["1Qm822"]),
      fullWidth: i
    })
  })
}

function ee(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, y.m)(U.PremiumTypes.TIER_2);
  return (0, w.hf)(i, h.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsx)("div", {
    className: Z.coachmarkFooterContainer,
    children: i ? (0, r.jsx)($, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(b.Z, {
      subscriptionTier: U.Si.TIER_2,
      buttonTextOverride: B.intl.string(B.t.JST6jl),
      premiumModalAnalyticsLocation: {
        page: j.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: j.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
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
    metadata: a
  } = e, s = (0, y.m)(U.PremiumTypes.TIER_2), c = (null == (t = (0, g.oq)().metadata) ? true : t.from) === g.tE.SHARE_MESSAGE;
  (0, w.hf)(s, h.Z.CUSTOM_THEMES_EDITOR);
  let u = () => {
      (0, w.Vb)(), (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == a ? true : a.from) === g.tE.SETTING ? ((0, T.openUserSettings)(I.n.APPEARANCE_PANEL, {
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
        text: B.intl.string(B.t["13/7kX"])
      }), (0, r.jsx)($, {
        disabled: !i,
        onApply: () => {
          c && S.default.track(j.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n()
        }
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(b.Z, {
        subscriptionTier: U.Si.TIER_2,
        defaultTextOverride: B.intl.string(B.t.pj0XBN),
        premiumModalAnalyticsLocation: {
          page: j.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
          section: j.jXE.CUSTOM_THEMES_FOOTER
        },
        fullWidth: true
      }), (0, r.jsx)(d.zxk, {
        variant: "secondary",
        onClick: u,
        text: c ? B.intl.string(B.t["13/7kX"]) : B.intl.string(B.t.Olc2K3),
        fullWidth: true
      })]
    })
  })
}

function en(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: a,
    isCoachmark: o,
    isMobile: c
  } = e, u = P.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, b = D.y.useConfig({
    location: "CustomThemesEditorV2"
  }).enabled, y = (0, N.jJ)(), I = (0, N.SK)(), T = i.useRef(false), {
    colors: S,
    chassisMixAmount: C,
    gradientAngle: x,
    setColors: j,
    setChassisMixAmount: U,
    setGradientAngle: F
  } = (0, A.Ig)(), [V, H] = i.useState(null != (t = S[0]) ? t : A.Dp), Y = (0, s.e7)([v.Z], () => v.Z.theme), W = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: z
  } = (0, m.ZP)(h.Z.CUSTOM_THEMES_EDITOR), q = (0, s.e7)([R.Z], () => R.Z.getSavedCustomTheme()), $ = async () => {
    T.current = true, await (0, _.ZI)({
      theme: Y,
      customUserThemeSettings: {
        colors: S,
        gradientColorStops: [],
        gradientAngle: x,
        baseMix: C
      }
    }), (0, w.u7)(S, C, x, Y, z), null == a || a(k.L.TAKE_ACTION), W || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, g.Ll)(), (0, O.UD)()
  }, en = () => {
    y(N._m.RESET_BUTTON), (0, w.uf)()
  }, er = S.length > 0;
  return (i.useEffect(() => () => {
    T.current || y(N._m.EDITOR_CLOSE)
  }, [y]), (0, p.ZP)(() => {
    if (!o) {
      var e;
      let t = (null != (e = null == S ? true : S.length) ? e : 0) > 0,
        n = null != q;
      !t && n && b ? (A.Ig.getState().setAll({
        colors: q.colors,
        gradientAngle: q.gradient_angle,
        chassisMixAmount: q.base_mix
      }), (0, N.Bv)(q.base_theme)) : (0, N.lT)(S, V, j)
    }
  }), u) ? (0, r.jsxs)("div", {
    className: c ? Z.mobileContainer : Z.container,
    "data-app-right-panel": !c,
    children: [(0, r.jsx)(f.Ttm, {
      children: (0, r.jsxs)("div", {
        className: Z.editorBody,
        children: [(0, r.jsx)(K, {
          markAsDismissed: a,
          isCoachmark: o
        }), (0, r.jsxs)("div", {
          className: Z.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: B.intl.string(G.default.o2NfLF)
          }), (0, r.jsx)(M.o, {})]
        }), (0, r.jsxs)("div", {
          className: Z.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: B.intl.string(G.default.uSL2Gy)
          }), (0, r.jsx)(L.U, {
            onChange: e => {
              H(e), 0 === S.length && (0, N.lT)(S, e, j)
            },
            value: V,
            colors: S,
            setColors: j
          })]
        }), (0, r.jsxs)("div", {
          className: Z.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: B.intl.string(G.default.F1t0c8)
          }), S.length > 1 && (0, r.jsx)(X, {
            gradientAngle: x,
            setGradientAngle: F
          }), (0, r.jsx)(Q, {
            chassisMixAmount: C,
            setChassisMixAmount: e => {
              U(e), 0 === S.length && (0, N.lT)(S, V, j)
            }
          })]
        }), (0, r.jsxs)("div", {
          className: Z.resetButton,
          children: [(0, r.jsx)(J, {
            isCoachmark: o,
            isMobile: c
          }), (0, r.jsx)(d.zxk, {
            variant: "secondary",
            onClick: en,
            disabled: I,
            text: B.intl.string(B.t.yBZMsQ),
            fullWidth: true
          })]
        })]
      })
    }), o ? (0, r.jsx)(ee, {
      onSaveTheme: $,
      canApply: er
    }) : (0, r.jsx)(et, {
      onSaveTheme: $,
      canApply: er,
      metadata: n
    })]
  }) : null
}