/** Chunk was on web.js **/
/** chunk id: 884134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk146187 = require("./146187.jsx"),
  Chunk454399 = require("./454399.jsx"),
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
  Chunk684555 = require("./684555.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk330749 = require("./330749.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = 0,
  H = 5e3;

function Y(e) {
  let [t, n] = i.useState(0), [r, a] = i.useState(false), o = i.useRef(e);
  return i.useEffect(() => {
    e === o.current || r || n(e => e + 1), o.current = e, a(false)
  }, [e, r]), {
    key: t,
    handleInternalChange: i.useCallback(e => (a(true), e), [])
  }
}

function W(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, r.jsx)("div", {
    className: U.closeButton,
    children: (0, r.jsx)(u.P, {
      size: "sm",
      onClick: () => {
        null == t || t(L.L.USER_DISMISS), (0, E.Ll)()
      }
    })
  })
}

function K() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk330749.headerContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/bold",
      children: Chunk388032.intl.string(Chunk684555.default["AsmU8/"])
    }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t["5AFxuL"]),
      children: e => (0, r.jsx)(f.SrA, B({
        size: "custom",
        height: 20,
        width: 20,
        colorClass: U.nitroIcon
      }, e))
    }), (0, Chunk951288.jsx)(W, {})]
  })
}

function z(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, b.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? (0, r.jsx)(q, {
    markAsDismissed: t
  }) : (0, r.jsx)(K, {}) : (0, r.jsx)(q, {
    markAsDismissed: () => (0, b.Q3)(l.z.CUSTOM_THEME_COACHMARK)
  })
}

function q(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, O.m)(j.p9.TIER_2);
  return (0, r.jsxs)("div", {
    className: U.coachmarkHeaderContainer,
    children: [(0, r.jsxs)("div", {
      className: U.badgeAndCloseRow,
      children: [(0, r.jsx)(f.lBU, {
        text: M.intl.string(M.t.oW0eUV)
      }), (0, r.jsx)(W, {
        markAsDismissed: t
      })]
    }), (0, r.jsxs)("div", {
      className: U.coachmarkHeaderTextContainer,
      children: [(0, r.jsx)(f.X6q, {
        variant: "heading-lg/extrabold",
        children: M.intl.string(k.default["23QUzs"])
      }), (0, r.jsx)(f.Text, {
        className: U.subtitle,
        variant: "text-sm/medium",
        color: "text-muted",
        children: M.intl.string(n ? k.default.TRCE4u : k.default["UV/Vtr"])
      })]
    })]
  })
}

function X(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: a,
    handleInternalChange: s
  } = Y(t), [l, c] = i.useState("".concat(Math.round(t), "\xb0"));
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
    className: o()(U.sliderContainer, U.gradientDirectionSliderContainer),
    children: [(0, r.jsxs)("div", {
      className: U.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: M.intl.string(k.default.dZkwg4)
      }), (0, r.jsx)("input", {
        type: "text",
        value: l,
        onChange: e => u(e.target.value),
        placeholder: "".concat(V, "\xb0"),
        className: U.controlLabelInput
      })]
    }), (0, r.jsxs)("div", {
      className: U.sliderWrapper,
      children: [(0, r.jsxs)("div", {
        className: U.angleIndicatorOverlay,
        children: [(0, r.jsx)("div", {
          className: U.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: U.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: U.angleIndicatorLargeDot
        }), (0, r.jsx)("div", {
          className: U.angleIndicatorDot
        }), (0, r.jsx)("div", {
          className: U.angleIndicatorDot
        })]
      }), (0, r.jsx)(f.iRW, {
        initialValue: t,
        defaultValue: 0,
        minValue: 0,
        maxValue: 360,
        onValueChange: e => {
          (0, R.fR)(), s(e), n(e)
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
  } = Y(t), [s, l] = i.useState("".concat(Math.round(t), "%"));
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
    className: U.sliderContainer,
    children: [(0, r.jsxs)("div", {
      className: U.controlLabelContainer,
      children: [(0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        children: M.intl.string(k.default.xlXkaG)
      }), (0, r.jsx)("input", {
        type: "text",
        value: s,
        onChange: e => c(e.target.value),
        placeholder: "".concat(S.BH, "%"),
        className: U.controlLabelInput
      })]
    }), (0, r.jsx)(f.iRW, {
      initialValue: t,
      defaultValue: S.BH,
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

function J(e) {
  let {
    isCoachmark: t,
    isMobile: n
  } = e, [a, o] = i.useState(false), s = i.useRef(false), [l, u] = i.useState(false), _ = i.useRef(null), p = i.useRef(null), h = i.useCallback(() => {
    var e;
    (0, R.Om)();
    let t = (0, A.C)();
    S.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : S.Ig.getState().gradientAngle,
      chassisMixAmount: t.intensity
    })
  }, []);
  i.useEffect(() => {
    if (t) return s.current = false, _.current = setTimeout(() => {
      s.current || o(true)
    }, H), () => {
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
    b = () => (0, r.jsx)(c.z, {
      buttonRef: p,
      variant: "secondary",
      onClick: h,
      onMouseEnter: () => u(true),
      onMouseLeave: () => u(false),
      icon: n ? {
        type: "icon",
        asset: f.$2U
      } : {
        type: "rive",
        asset: f.xhK,
        riveProps: {
          dataBinding: {
            fill: f.TVs.colors.ICON_PRIMARY
          },
          eventTargetRef: p
        }
      },
      text: M.intl.string(k.default.c9MBEB),
      fullWidth: true
    });
  return n ? b() : (0, r.jsx)(d.i_, {
    title: M.intl.string(k.default.NJ9m8f),
    body: M.intl.string(k.default["6pabtb"]),
    position: "left",
    asset: E ? (0, r.jsx)(f.$2U, {}) : true,
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
  return (0, r.jsx)(f.ua7, {
    text: M.intl.string(k.default.SFyHIC),
    shouldShow: n,
    children: e => (0, r.jsx)(c.z, F(B({}, e), {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: M.intl.string(M.t["1Qm829"]),
      fullWidth: i
    }))
  })
}

function ee(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, O.m)(j.p9.TIER_2);
  return (0, R.hf)(i, m.Z.CUSTOM_THEMES_EDITOR_COACHMARK), (0, r.jsx)("div", {
    className: U.coachmarkFooterContainer,
    children: i ? (0, r.jsx)($, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(y.Z, {
      subscriptionTier: j.Si.TIER_2,
      buttonTextOverride: M.intl.string(M.t.JST6jo),
      premiumModalAnalyticsLocation: {
        page: x.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: x.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
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
  } = e, s = (0, O.m)(j.p9.TIER_2), u = (null == (t = (0, E.oq)().metadata) ? true : t.from) === E.tE.SHARE_MESSAGE;
  (0, R.hf)(s, m.Z.CUSTOM_THEMES_EDITOR);
  let d = () => {
      (0, R.Vb)(), (0, b.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == a ? true : a.from) === E.tE.SETTING ? (p.Z.open(), (0, E.Ll)()) : (null == a ? true : a.from) === E.tE.CLIENT_THEMES_EDITOR ? (0, E.XO)(E.wh.CLIENT_THEMES) : (0, E.Ll)()
    },
    f = o()(U.footerContainer, {
      [U.footerContainerNonPremium]: !s
    });
  return (0, r.jsx)("div", {
    className: f,
    children: s ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(w.q, {}), (0, r.jsx)(c.z, {
        variant: "secondary",
        onClick: d,
        text: M.intl.string(M.t["13/7kZ"])
      }), (0, r.jsx)($, {
        disabled: !i,
        onApply: () => {
          u && T.default.track(x.rMx.CUSTOM_THEME_SHARE_APPLIED, {}), n()
        }
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(y.Z, {
        subscriptionTier: j.Si.TIER_2,
        defaultTextOverride: M.intl.string(M.t.pj0XBA),
        premiumModalAnalyticsLocation: {
          page: x.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
          section: x.jXE.CUSTOM_THEMES_FOOTER
        },
        fullWidth: true
      }), (0, r.jsx)(c.z, {
        variant: "secondary",
        onClick: d,
        text: u ? M.intl.string(M.t["13/7kZ"]) : M.intl.string(M.t.Olc2Ky),
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
    isMobile: u
  } = e, d = N.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, p = (0, C.jJ)(), y = (0, C.SK)(), O = i.useRef(false), {
    colors: T,
    chassisMixAmount: A,
    gradientAngle: w,
    setColors: x,
    setChassisMixAmount: j,
    setGradientAngle: G
  } = (0, S.Ig)(), [B, Z] = i.useState(null != (t = T[0]) ? t : S.Dp), F = (0, s.e7)([I.Z], () => I.Z.theme), V = (0, b.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: H
  } = (0, g.ZP)(m.Z.CUSTOM_THEMES_EDITOR), Y = async () => {
    O.current = true, await (0, _.ZI)({
      theme: F,
      customUserThemeSettings: {
        colors: T,
        gradientColorStops: [],
        gradientAngle: w,
        baseMix: A
      }
    }), (0, R.u7)(T, A, w, F, H), null == a || a(L.L.TAKE_ACTION), V || (0, b.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, E.Ll)(), (0, v.UD)()
  }, W = () => {
    p(C._m.RESET_BUTTON), (0, R.uf)()
  }, K = T.length > 0;
  return (i.useEffect(() => () => {
    O.current || p(C._m.EDITOR_CLOSE)
  }, [p]), (0, h.ZP)(() => {
    o || (0, C.lT)(T, B, x)
  }), d) ? (0, r.jsxs)("div", {
    className: u ? U.mobileContainer : U.container,
    "data-app-right-panel": !u,
    children: [(0, r.jsx)(f.Ttm, {
      children: (0, r.jsxs)("div", {
        className: U.editorBody,
        children: [(0, r.jsx)(z, {
          markAsDismissed: a,
          isCoachmark: o
        }), (0, r.jsxs)("div", {
          className: U.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: M.intl.string(k.default.o2NfLC)
          }), (0, r.jsx)(D.o, {})]
        }), (0, r.jsxs)("div", {
          className: U.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: M.intl.string(k.default.uSL2Gx)
          }), (0, r.jsx)(P.U, {
            onChange: e => {
              Z(e), 0 === T.length && (0, C.lT)(T, e, x)
            },
            value: B,
            colors: T,
            setColors: x
          })]
        }), (0, r.jsxs)("div", {
          className: U.section,
          children: [(0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            color: "text-secondary",
            children: M.intl.string(k.default.F1t0c3)
          }), T.length > 1 && (0, r.jsx)(X, {
            gradientAngle: w,
            setGradientAngle: G
          }), (0, r.jsx)(Q, {
            chassisMixAmount: A,
            setChassisMixAmount: e => {
              j(e), 0 === T.length && (0, C.lT)(T, B, x)
            }
          })]
        }), (0, r.jsxs)("div", {
          className: U.resetButton,
          children: [(0, r.jsx)(J, {
            isCoachmark: o,
            isMobile: u
          }), (0, r.jsx)(c.z, {
            variant: "secondary",
            onClick: W,
            disabled: y,
            text: M.intl.string(M.t.yBZMsb),
            fullWidth: true
          })]
        })]
      })
    }), o ? (0, r.jsx)(ee, {
      onSaveTheme: Y,
      canApply: K
    }) : (0, r.jsx)(et, {
      onSaveTheme: Y,
      canApply: K,
      metadata: n
    })]
  }) : null
}