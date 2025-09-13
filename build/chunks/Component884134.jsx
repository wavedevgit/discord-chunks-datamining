/** Chunk was on web.js **/
/** chunk id: 884134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => et
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk230711 = require("./230711.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk266454 = require("./266454.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk626135 = require("./626135.js"),
  Chunk233398 = require("./233398.js"),
  Chunk263198 = require("./263198.js"),
  Chunk866419 = require("./866419.js"),
  Chunk803038 = require("./803038.js"),
  Chunk507962 = require("./507962.js"),
  Chunk857658 = require("./857658.jsx"),
  Chunk174278 = require("./174278.jsx"),
  Chunk714097 = require("./714097.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk119475 = require("./119475.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882741 = require("./882741.js");

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
    className: k.closeButton,
    children: (0, r.jsx)(u.PZ7, {
      size: "sm",
      onClick: () => {
        null == t || t(x.L.USER_DISMISS), (0, g.Ll)()
      }
    })
  })
}

function W() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk882741.headerContainer,
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
    }), (0, Chunk951288.jsx)(Y, {})]
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
  } = e, n = (0, y.m)(L.p9.TIER_2);
  return (0, r.jsxs)("div", {
    className: k.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: k.badgeAndCloseRow,
      children: [(0, r.jsx)(d.lBU, {
        text: M.intl.string(M.t.oW0eUV)
      }), (0, r.jsx)(Y, {
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

function q(e) {
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
    c("".concat(i, "\xb0")), (0, N.Ac)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: o()(k.sliderContainer, k.gradientDirectionSliderContainer),
    children: [(0, r.jsxs)("div", {
      className: k.controlLabelContainer,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        children: M.intl.string(j.default.dZkwg4)
      }), (0, r.jsx)("input", {
        type: "text",
        value: l,
        onChange: e => u(e.target.value),
        placeholder: "".concat(F, "\xb0"),
        className: k.controlLabelInput
      })]
    }), (0, r.jsxs)("div", {
      className: k.sliderWrapper,
      children: [(0, r.jsxs)("div", {
        className: k.angleIndicatorOverlay,
        children: [(0, r.jsx)("div", {
          className: k.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: k.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: k.angleIndicatorLargeDot
        }), (0, r.jsx)("div", {
          className: k.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: k.angleIndicatorDot
        })]
      }), (0, r.jsx)(d.iRW, {
        initialValue: t,
        defaultValue: 0,
        minValue: 0,
        maxValue: 360,
        onValueChange: e => {
          (0, N.fR)(), s(e), n(e)
        },
        onValueRender: () => null,
        keyboardStep: 1
      }, a)]
    })]
  })
}

function X(e) {
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
    l("".concat(i, "%")), (0, N.PI)(), n(i)
  };
  return (0, r.jsxs)("div", {
    className: k.sliderContainer,
    children: [(0, r.jsxs)("div", {
      className: k.controlLabelContainer,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        children: M.intl.string(j.default.xlXkaG)
      }), (0, r.jsx)("input", {
        type: "text",
        value: s,
        onChange: e => c(e.target.value),
        placeholder: "".concat(T.BH, "%"),
        className: k.controlLabelInput
      })]
    }), (0, r.jsx)(d.iRW, {
      initialValue: t,
      defaultValue: T.BH,
      minValue: 0,
      maxValue: 100,
      onValueChange: e => {
        (0, N.z3)(), o(e), n(e)
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
  } = e, [a, o] = i.useState(false), s = i.useRef(false), [l, f] = i.useState(false), _ = i.useRef(null), p = i.useRef(null), h = i.useCallback(() => {
    var e;
    (0, N.Om)();
    let t = (0, S.C)();
    T.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : T.Ig.getState().gradientAngle,
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
    b = () => (0, r.jsx)(u.zxk, {
      buttonRef: p,
      variant: "secondary",
      onClick: h,
      onMouseEnter: () => f(true),
      onMouseLeave: () => f(false),
      icon: n ? {
        type: "icon",
        asset: d.$2U
      } : {
        type: "rive",
        asset: d.xhK,
        riveProps: {
          dataBinding: {
            fill: d.TVs.colors.ICON_PRIMARY
          },
          eventTargetRef: p
        }
      },
      text: M.intl.string(j.default.c9MBEB),
      fullWidth: true
    });
  return n ? b() : (0, r.jsx)(c.i_, {
    title: M.intl.string(j.default.NJ9m8f),
    body: M.intl.string(j.default["6pabtb"]),
    position: "left",
    asset: E ? (0, r.jsx)(d.$2U, {}) : true,
    forceOpen: a,
    onTooltipShow: m,
    onTooltipHide: g,
    targetElementRef: p,
    children: b()
  })
}

function J(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return (0, r.jsx)(d.ua7, {
    text: M.intl.string(j.default.SFyHIC),
    shouldShow: n,
    children: e => (0, r.jsx)(u.zxk, Z(G({}, e), {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: M.intl.string(M.t["1Qm829"]),
      fullWidth: i
    }))
  })
}

function $(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, y.m)(L.p9.TIER_2);
  return (0, N.hf)(i, h.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsx)("div", {
    className: k.coachmarkFooterContainer,
    children: i ? (0, r.jsx)(J, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(b.Z, {
      subscriptionTier: L.Si.TIER_2,
      buttonTextOverride: M.intl.string(M.t.JST6jo),
      premiumModalAnalyticsLocation: {
        page: D.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: D.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
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
  } = e, s = (0, y.m)(L.p9.TIER_2), c = (null == (t = (0, g.oq)().metadata) ? true : t.from) === g.tE.SHARE_MESSAGE;
  (0, N.hf)(s, h.Z.CUSTOM_THEMES_EDITOR);
  let d = () => {
      (0, N.Vb)(), (0, E.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == a ? true : a.from) === g.tE.SETTING ? (_.Z.open(), (0, g.Ll)()) : (null == a ? true : a.from) === g.tE.CLIENT_THEMES_EDITOR ? (0, g.XO)(g.wh.CLIENT_THEMES) : (0, g.Ll)()
    },
    f = o()(k.footerContainer, {
      [k.footerContainerNonPremium]: !s
    });
  return (0, r.jsx)("div", {
    className: f,
    children: s ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(P.q, {}), (0, r.jsx)(u.zxk, {
        variant: "secondary",
        onClick: d,
        text: M.intl.string(M.t["13/7kZ"])
      }), (0, r.jsx)(J, {
        disabled: !i,
        onApply: () => {
          c && I.default.track(D.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n()
        }
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(b.Z, {
        subscriptionTier: L.Si.TIER_2,
        defaultTextOverride: M.intl.string(M.t.pj0XBA),
        premiumModalAnalyticsLocation: {
          page: D.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
          section: D.jXE.CUSTOM_THEMES_FOOTER
        },
        fullWidth: true
      }), (0, r.jsx)(u.zxk, {
        variant: "secondary",
        onClick: d,
        text: c ? M.intl.string(M.t["13/7kZ"]) : M.intl.string(M.t.Olc2Ky),
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
  } = e, _ = C.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, b = (0, A.jJ)(), y = (0, A.SK)(), I = i.useRef(false), {
    colors: S,
    chassisMixAmount: P,
    gradientAngle: D,
    setColors: L,
    setChassisMixAmount: U,
    setGradientAngle: G
  } = (0, T.Ig)(), [B, Z] = i.useState(null != (t = S[0]) ? t : T.Dp), F = (0, s.e7)([v.Z], () => v.Z.theme), V = (0, E.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: H
  } = (0, m.ZP)(h.Z.CUSTOM_THEMES_EDITOR), Y = async () => {
    I.current = true, await (0, f.ZI)({
      theme: F,
      customUserThemeSettings: {
        colors: S,
        gradientColorStops: [],
        gradientAngle: D,
        baseMix: P
      }
    }), (0, N.u7)(S, P, D, F, H), null == a || a(x.L.TAKE_ACTION), V || (0, E.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, g.Ll)(), (0, O.UD)()
  }, W = () => {
    b(A._m.RESET_BUTTON), (0, N.uf)()
  }, z = S.length > 0;
  return (i.useEffect(() => () => {
    I.current || b(A._m.EDITOR_CLOSE)
  }, [b]), (0, p.ZP)(() => {
    o || (0, A.lT)(S, B, L)
  }), _) ? (0, r.jsxs)("div", {
    className: c ? k.mobileContainer : k.container,
    "data-app-right-panel": !c,
    children: [(0, r.jsx)(d.Ttm, {
      children: (0, r.jsxs)("div", {
        className: k.editorBody,
        children: [(0, r.jsx)(K, {
          markAsDismissed: a,
          isCoachmark: o
        }), (0, r.jsxs)("div", {
          className: k.section,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: M.intl.string(j.default.o2NfLC)
          }), (0, r.jsx)(w.o, {})]
        }), (0, r.jsxs)("div", {
          className: k.section,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: M.intl.string(j.default.uSL2Gx)
          }), (0, r.jsx)(R.U, {
            onChange: e => {
              Z(e), 0 === S.length && (0, A.lT)(S, e, L)
            },
            value: B,
            colors: S,
            setColors: L
          })]
        }), (0, r.jsxs)("div", {
          className: k.section,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: M.intl.string(j.default.F1t0c3)
          }), S.length > 1 && (0, r.jsx)(q, {
            gradientAngle: D,
            setGradientAngle: G
          }), (0, r.jsx)(X, {
            chassisMixAmount: P,
            setChassisMixAmount: e => {
              U(e), 0 === S.length && (0, A.lT)(S, B, L)
            }
          })]
        }), (0, r.jsxs)("div", {
          className: k.resetButton,
          children: [(0, r.jsx)(Q, {
            isCoachmark: o,
            isMobile: c
          }), (0, r.jsx)(u.zxk, {
            variant: "secondary",
            onClick: W,
            disabled: y,
            text: M.intl.string(M.t.yBZMsb),
            fullWidth: true
          })]
        })]
      })
    }), o ? (0, r.jsx)($, {
      onSaveTheme: Y,
      canApply: z
    }) : (0, r.jsx)(ee, {
      onSaveTheme: Y,
      canApply: z,
      metadata: n
    })]
  }) : null
}