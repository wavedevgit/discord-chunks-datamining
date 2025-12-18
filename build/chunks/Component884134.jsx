/** Chunk was on web.js **/
/** chunk id: 884134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ee
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
let Z = 0,
  F = 5e3;

function B(e) {
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
    className: G.closeButton,
    children: (0, r.jsx)(d.PZ7, {
      size: "sm",
      onClick: () => {
        null == t || t(j.L.USER_DISMISS), (0, g.Ll)()
      }
    })
  })
}

function H() {
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
    }), (0, Chunk54381.jsx)(V, {})]
  })
}

function Y(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, E.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? (0, r.jsx)(W, {
    markAsDismissed: t
  }) : (0, r.jsx)(H, {}) : (0, r.jsx)(W, {
    markAsDismissed: () => (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK)
  })
}

function W(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, y.m)(M.PremiumTypes.TIER_2);
  return (0, r.jsxs)("div", {
    className: G.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: G.headerAndCloseRow,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-lg/extrabold",
        children: U.intl.string(k.default["23QUzv"])
      }), (0, r.jsx)(V, {
        markAsDismissed: t
      })]
    }), (0, r.jsx)(f.Text, {
      className: G.subtitle,
      variant: "text-sm/medium",
      color: "text-muted",
      children: U.intl.string(n ? k.default.TRCE4g : k.default["UV/Vtv"])
    })]
  })
}

function K(e) {
  let t = 10;
  for (let n of [90, 180, 270])
    if (Math.abs(e - n) <= t) return n;
  return e
}

function z(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: a,
    handleInternalChange: s
  } = B(t), [l, c] = i.useState("".concat(Math.round(t), "\xb0"));
  i.useEffect(() => {
    c("".concat(Math.round(t), "\xb0"))
  }, [t]);
  let u = e => {
    let t = e.replace(/°/g, "").trim();
    if ("" === t) return void c("");
    let r = parseInt(t, 10);
    if (isNaN(r)) return;
    let i = Math.max(0, Math.min(360, r));
    c("".concat(i, "\xb0")), (0, R.Ac)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: o()(G.sliderContainer, G.gradientDirectionSliderContainer),
    children: [(0, r.jsxs)("div", {
      className: G.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: U.intl.string(k.default.dZkwgx)
      }), (0, r.jsx)("input", {
        type: "text",
        value: l,
        onChange: e => u(e.target.value),
        placeholder: "".concat(Z, "\xb0"),
        className: G.controlLabelInput
      })]
    }), (0, r.jsxs)("div", {
      className: G.sliderWrapper,
      children: [(0, r.jsxs)("div", {
        className: G.angleIndicatorOverlay,
        children: [(0, r.jsx)("div", {
          className: G.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: G.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: G.angleIndicatorLargeDot
        }), (0, r.jsx)("div", {
          className: G.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: G.angleIndicatorDot
        })]
      }), (0, r.jsx)(f.iRW, {
        initialValue: t,
        defaultValue: 0,
        minValue: 0,
        maxValue: 360,
        onValueChange: e => {
          (0, R.fR)();
          let t = K(e);
          t !== e || s(e), n(t)
        },
        onValueRender: () => null,
        keyboardStep: 1
      }, a)]
    })]
  })
}

function q(e) {
  let {
    chassisMixAmount: t,
    setChassisMixAmount: n
  } = e, {
    key: a,
    handleInternalChange: o
  } = B(t), [s, l] = i.useState("".concat(Math.round(t), "%"));
  i.useEffect(() => {
    l("".concat(Math.round(t), "%"))
  }, [t]);
  let c = e => {
    let t = e.replace(/%/g, "").trim();
    if ("" === t) return void l("");
    let r = parseInt(t, 10);
    if (isNaN(r)) return;
    let i = Math.max(0, Math.min(100, r));
    l("".concat(i, "%")), (0, R.PI)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: G.sliderContainer,
    children: [(0, r.jsxs)("div", {
      className: G.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: U.intl.string(k.default.xlXkaL)
      }), (0, r.jsx)("input", {
        type: "text",
        value: s,
        onChange: e => c(e.target.value),
        placeholder: "".concat(C.BH, "%"),
        className: G.controlLabelInput
      })]
    }), (0, r.jsx)(f.iRW, {
      initialValue: t,
      defaultValue: C.BH,
      minValue: 0,
      maxValue: 100,
      onValueChange: e => {
        (0, R.z3)(), o(e), n(e)
      },
      onValueRender: () => null,
      keyboardStep: 1
    }, a)]
  })
}

function Q(e) {
  let {
    isCoachmark: t,
    isMobile: n
  } = e, [a, o] = i.useState(false), s = i.useRef(false), [l, u] = i.useState(false), p = i.useRef(null), _ = i.useRef(null), m = i.useCallback(() => {
    var e;
    (0, R.Om)();
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
    }, F), () => {
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
      text: U.intl.string(k.default.c9MBEH),
      fullWidth: true
    });
  return n ? b() : (0, r.jsx)(c.i, {
    title: U.intl.string(k.default.NJ9m8Y),
    body: U.intl.string(k.default["6pabtR"]),
    position: "left",
    asset: E ? (0, r.jsx)(f.kBK, {}) : true,
    forceOpen: a,
    onTooltipShow: h,
    onTooltipHide: g,
    targetElementRef: _,
    children: b()
  })
}

function X(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return (0, r.jsx)(u.u, {
    text: U.intl.string(k.default.SFyHIP),
    shouldShow: n,
    children: (0, r.jsx)(d.zxk, {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: U.intl.string(U.t["1Qm822"]),
      fullWidth: i
    })
  })
}

function J(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, y.m)(M.PremiumTypes.TIER_2);
  return (0, R.hf)(i, m.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsx)("div", {
    className: G.coachmarkFooterContainer,
    children: i ? (0, r.jsx)(X, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(b.Z, {
      subscriptionTier: M.Si.TIER_2,
      buttonTextOverride: U.intl.string(U.t.JST6jl),
      premiumModalAnalyticsLocation: {
        page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: L.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
      },
      fullWidth: true
    })
  })
}

function $(e) {
  var t;
  let {
    onSaveTheme: n,
    canApply: i,
    metadata: a
  } = e, s = (0, y.m)(M.PremiumTypes.TIER_2), c = (null == (t = (0, g.oq)().metadata) ? true : t.from) === g.tE.SHARE_MESSAGE;
  (0, R.hf)(s, m.Z.CUSTOM_THEMES_EDITOR);
  let u = () => {
      (0, R.Vb)(), (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == a ? true : a.from) === g.tE.SETTING ? ((0, I.openUserSettings)(S.n.APPEARANCE_PANEL, {
        section: L.oAB.APPEARANCE
      }), (0, g.Ll)()) : (null == a ? true : a.from) === g.tE.CLIENT_THEMES_EDITOR ? (0, g.XO)(g.wh.CLIENT_THEMES) : (0, g.Ll)()
    },
    f = o()(G.footerContainer, {
      [G.footerContainerNonPremium]: !s
    });
  return (0, r.jsx)("div", {
    className: f,
    children: s ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(D.q, {}), (0, r.jsx)(d.zxk, {
        variant: "secondary",
        onClick: u,
        text: U.intl.string(U.t["13/7kX"])
      }), (0, r.jsx)(X, {
        disabled: !i,
        onApply: () => {
          c && T.default.track(L.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n()
        }
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(b.Z, {
        subscriptionTier: M.Si.TIER_2,
        defaultTextOverride: U.intl.string(U.t.pj0XBN),
        premiumModalAnalyticsLocation: {
          page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
          section: L.jXE.CUSTOM_THEMES_FOOTER
        },
        fullWidth: true
      }), (0, r.jsx)(d.zxk, {
        variant: "secondary",
        onClick: u,
        text: c ? U.intl.string(U.t["13/7kX"]) : U.intl.string(U.t.Olc2K3),
        fullWidth: true
      })]
    })
  })
}

function ee(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: a,
    isCoachmark: o,
    isMobile: c
  } = e, u = (0, N.jJ)(), b = (0, N.SK)(), y = i.useRef(false), {
    colors: S,
    chassisMixAmount: I,
    gradientAngle: T,
    setColors: A,
    setChassisMixAmount: D,
    setGradientAngle: L
  } = (0, C.Ig)(), [M, Z] = i.useState(null != (t = S[0]) ? t : C.Dp), F = (0, s.e7)([v.Z], () => v.Z.theme), B = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: V
  } = (0, h.ZP)(m.Z.CUSTOM_THEMES_EDITOR), H = (0, s.e7)([P.Z], () => P.Z.getSavedCustomTheme()), W = async () => {
    y.current = true, await (0, p.ZI)({
      theme: F,
      customUserThemeSettings: {
        colors: S,
        gradientColorStops: [],
        gradientAngle: T,
        baseMix: I
      }
    }), (0, R.u7)(S, I, T, F, V), null == a || a(j.L.TAKE_ACTION), B || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, g.Ll)(), (0, O.UD)()
  }, K = () => {
    u(N._m.RESET_BUTTON), (0, R.uf)()
  }, X = S.length > 0;
  return i.useEffect(() => () => {
    y.current || u(N._m.EDITOR_CLOSE)
  }, [u]), (0, _.ZP)(() => {
    if (!o) {
      var e;
      let t = (null != (e = null == S ? true : S.length) ? e : 0) > 0,
        n = null != H;
      !t && n ? (C.Ig.getState().setAll({
        colors: H.colors,
        gradientAngle: H.gradient_angle,
        chassisMixAmount: H.base_mix
      }), (0, N.Bv)(H.base_theme)) : (0, N.lT)(S, M, A)
    }
  }), (0, r.jsxs)("div", {
    className: c ? G.mobileContainer : G.container,
    "data-app-right-panel": !c,
    children: [(0, r.jsx)(f.Ttm, {
      children: (0, r.jsxs)("div", {
        className: G.editorBody,
        children: [(0, r.jsx)(Y, {
          markAsDismissed: a,
          isCoachmark: o
        }), (0, r.jsxs)("div", {
          className: G.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: U.intl.string(k.default.o2NfLF)
          }), (0, r.jsx)(x.o, {})]
        }), (0, r.jsxs)("div", {
          className: G.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: U.intl.string(k.default.uSL2Gy)
          }), (0, r.jsx)(w.U, {
            onChange: e => {
              Z(e), 0 === S.length && (0, N.lT)(S, e, A)
            },
            value: M,
            colors: S,
            setColors: A
          })]
        }), (0, r.jsxs)("div", {
          className: G.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: U.intl.string(k.default.F1t0c8)
          }), S.length > 1 && (0, r.jsx)(z, {
            gradientAngle: T,
            setGradientAngle: L
          }), (0, r.jsx)(q, {
            chassisMixAmount: I,
            setChassisMixAmount: e => {
              D(e), 0 === S.length && (0, N.lT)(S, M, A)
            }
          })]
        }), (0, r.jsxs)("div", {
          className: G.resetButton,
          children: [(0, r.jsx)(Q, {
            isCoachmark: o,
            isMobile: c
          }), (0, r.jsx)(d.zxk, {
            variant: "secondary",
            onClick: K,
            disabled: b,
            text: U.intl.string(U.t.yBZMsQ),
            fullWidth: true
          })]
        })]
      })
    }), o ? (0, r.jsx)(J, {
      onSaveTheme: W,
      canApply: X
    }) : (0, r.jsx)($, {
      onSaveTheme: W,
      canApply: X,
      metadata: n
    })]
  })
}