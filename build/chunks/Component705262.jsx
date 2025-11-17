/** Chunk was on web.js **/
/** chunk id: 705262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yk: () => W,
  ZP: () => et,
  yH: () => V
}), require("./314940.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk313201 = require("./313201.js"),
  Chunk98278 = require("./98278.js"),
  Chunk639119 = require("./639119.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk587446 = require("./587446.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk342386 = require("./342386.js"),
  Chunk626135 = require("./626135.js"),
  Chunk238302 = require("./238302.js"),
  Chunk514361 = require("./514361.js"),
  Chunk717953 = require("./717953.jsx"),
  Chunk583901 = require("./583901.jsx"),
  Chunk469115 = require("./469115.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk874893 = require("./874893.js"),
  Chunk526761 = require("./526761.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk227674 = require("./227674.js");

function j(e, t, n) {
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
      j(e, t, n[t])
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

function Z(e, t) {
  if (null == e) return {};
  var n, r, i = F(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var V = function(e) {
  return e.EDITOR = "EDITOR", e.SETTINGS = "SETTINGS", e
}({});
let H = Object.freeze({
    EDITOR: Chunk526761.fy.SLOW_USER_ACTION,
    SETTINGS: Chunk526761.fy.INFREQUENT_USER_ACTION
  }),
  Y = Chunk473749.createContext({}),
  W = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: r
    } = e;
    T.default.track(P.rMx.CLIENT_THEME_UPDATED, {
      feature_name: D.QP.CLIENT_THEME,
      theme_name: n,
      is_persisted: t,
      location_stack: r
    })
  },
  K = e => {
    let {
      type: t,
      isPreview: n,
      isCoachmark: i
    } = e, o = (0, a.EQ)({
      type: t,
      isPreview: n,
      isCoachmark: i
    }).with({
      type: "EDITOR",
      isCoachmark: true,
      isPreview: true
    }, () => M.intl.string(M.t.D29k16)).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => M.intl.string(M.t["8+vbqd"])).otherwise(() => M.intl.string(M.t.hjV0fZ));
    return (0, r.jsxs)("div", {
      className: k.title,
      children: [(0, r.jsx)(c.Heading, {
        "aria-label": o,
        className: k.titleText,
        variant: "text-md/medium",
        children: o
      }), (0, r.jsx)(b.Z, {
        className: k.premiumIcon
      })]
    })
  },
  z = e => {
    var t, n;
    let {
      type: i,
      isPreview: o,
      isCoachmark: s
    } = e;
    if ((null == (n = (0, g.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === D.Si.TIER_2 && o) return null;
    let l = (0, a.EQ)({
      type: i,
      isPreview: o,
      isCoachmark: s
    }).with({
      type: "EDITOR",
      isPreview: true
    }, () => M.intl.format(M.t.G8yQXi, {
      onPremiumClick: () => m.z
    })).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => M.intl.string(M.t.jmZiNu)).with({
      type: "EDITOR",
      isPreview: false
    }, () => M.intl.string(M.t.dqDFwe)).with({
      isPreview: true
    }, () => M.intl.format(M.t["DWIjJ/"], {
      onPremiumClick: () => m.z
    })).otherwise(() => M.intl.string(M.t["np0X/u"]));
    return (0, r.jsx)(c.Heading, {
      variant: "text-sm/normal",
      className: k.subtext,
      children: l
    })
  },
  q = e => {
    var t, n;
    let {
      renderCTAButtons: a,
      isCoachmark: s
    } = e, {
      type: l
    } = i.useContext(Y), [c] = (0, o.Wu)([A.Z], () => [A.Z.isPreview]), u = (null == (n = (0, g.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === D.Si.TIER_2;
    return "EDITOR" === l && c && u ? (0, r.jsx)(E.ZP, {
      type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      subscriptionTier: D.Si.TIER_2,
      children: M.intl.format(M.t.G8yQXi, {
        onPremiumClick: () => m.z
      })
    }) : (0, r.jsxs)("div", {
      className: k.header,
      children: [(0, r.jsxs)("div", {
        className: k.headings,
        children: [(0, r.jsx)(K, {
          type: l,
          isPreview: c,
          isCoachmark: s
        }), (0, r.jsx)(z, {
          type: l,
          isPreview: c,
          isCoachmark: s
        })]
      }), null == a ? true : a()]
    })
  },
  X = e => {
    let {
      disabled: t
    } = e, {
      type: a,
      delay: l
    } = i.useContext(Y), {
      analyticsLocations: h
    } = (0, _.ZP)(f.Z.CLIENT_THEMES_THEME_SELECTOR), [m, g] = (0, o.Wu)([A.Z], () => {
      var e;
      return [A.Z.isPreview, null == (e = A.Z.gradientPreset) ? true : e.id]
    }), [E, b] = i.useState(false), [y, O] = i.useState(false), v = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    i.useEffect(() => {
      (y === R.XV.length - 2 && "EDITOR" === a || g === s.Us.EASTER_EGG) && b(true)
    }, [y, a, g]);
    let T = (e, t) => {
        if ((0, S.zO)(e.id), W({
            isPersisted: !m,
            analyticsLocations: h,
            themeName: s.Us[e.id]
          }), m && "SETTINGS" === a ? P(e) : (0, u.ZI)({
            backgroundGradientPresetId: e.id,
            theme: e.theme,
            useSystemTheme: m ? w.KW.OFF : true
          }, l), null != t) {
          if (E && b(false), t <= y || 0 === t) return void O(0);
          O(e => e + 1)
        }
      },
      P = async e => {
        await (0, u.ZI)({
          backgroundGradientPresetId: e.id,
          theme: e.theme,
          useSystemTheme: m ? w.KW.OFF : true
        }, x.fy.SLOW_USER_ACTION), (0, p.XO)(p.wh.CLIENT_THEMES), (0, I.default)()
      }, D = () => {
        if (!E) return null;
        let e = R.qt[s.Us.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.e("5217").then(n.t.bind(n, 801048, 19));
          return e
        }
        return (0, r.jsxs)("div", {
          className: k.easterEggSelection,
          children: [(0, r.jsx)(N.DR, {
            preset: e,
            isSelected: g === s.Us.EASTER_EGG,
            onSelect: () => T(e)
          }), (0, r.jsx)(c.Fmz, {
            importData: t,
            shouldAnimate: !v,
            className: k.sparkles
          })]
        })
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(C.Z, {
        isDisabled: t,
        onSelect: () => {
          (0, p.XO)(p.wh.CUSTOM_THEME, {
            from: "SETTINGS" === a ? p.tE.SETTING : p.tE.CLIENT_THEMES_EDITOR
          }), "SETTINGS" === a && (0, I.default)()
        }
      }), R.XV.filter(e => {
        let {
          id: t
        } = e;
        return t !== s.Us.EASTER_EGG
      }).map((e, n) => (0, r.jsx)(N.DR, {
        preset: e,
        isSelected: g === e.id,
        onSelect: () => T(e, n),
        disabled: t,
        tabIndex: 0 !== n || t ? true : 0,
        showBadge: false,
        showLockedBadge: false
      }, e.id)), D()]
    })
  },
  Q = e => {
    let {
      className: t,
      renderCTAButtons: n,
      disabled: i = false,
      isCoachmark: a
    } = e;
    return (0, r.jsxs)("section", {
      className: t,
      children: [(0, r.jsx)(q, {
        renderCTAButtons: n,
        isCoachmark: a
      }), (0, r.jsx)(c.Kqy, {
        direction: "horizontal",
        wrap: true,
        gap: 8,
        style: {
          marginTop: 16
        },
        children: (0, r.jsx)(X, {
          disabled: i
        })
      })]
    })
  },
  J = e => {
    let {
      systemSelectorFirst: t,
      hideSystemSelector: n = false
    } = e, {
      delay: a
    } = i.useContext(Y), {
      analyticsLocations: s
    } = (0, _.ZP)(f.Z.CLIENT_THEMES_THEME_SELECTOR), [l, c, d] = (0, o.Wu)([y.Z, O.ZP, A.Z], () => [y.Z.theme, null == A.Z.gradientPreset && null == v.L1.getSetting().customUserThemeSettings, O.ZP.useSystemTheme === w.KW.ON]), p = e => {
      (0, S.xs)(), W({
        isPersisted: true,
        analyticsLocations: s,
        themeName: "default ".concat(e)
      }), (0, u.ZI)({
        theme: e
      }, a)
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [!n && t && (0, r.jsx)(N.bD, {
        theme: "system",
        isSelected: c && d,
        onSelect: () => p("system")
      }), (0, r.jsx)(N.bD, {
        theme: L.BR.LIGHT,
        isSelected: c && !d && l === L.BR.LIGHT,
        onSelect: () => p(L.BR.LIGHT)
      }), (0, r.jsx)(N.bD, {
        theme: L.BR.DARK,
        isSelected: c && !d && l === L.BR.DARK,
        onSelect: () => p(L.BR.DARK)
      }), (0, r.jsx)(N.bD, {
        theme: L.BR.DARKER,
        isSelected: c && !d && l === L.BR.DARKER,
        onSelect: () => p(L.BR.DARKER)
      }), (0, r.jsx)(N.bD, {
        theme: L.BR.MIDNIGHT,
        isSelected: c && !d && l === L.BR.MIDNIGHT,
        onSelect: () => p(L.BR.MIDNIGHT)
      }), !n && !t && (0, r.jsx)(N.bD, {
        theme: "system",
        isSelected: c && d,
        onSelect: () => p("system")
      })]
    })
  },
  $ = e => {
    let {
      isEditor: t,
      className: n,
      renderCTAButtons: i,
      isCoachmark: a
    } = e;
    return (0, r.jsxs)("section", {
      className: n,
      children: [!t && (0, r.jsx)(q, {
        renderCTAButtons: i,
        isCoachmark: a
      }), t && a && (0, r.jsx)(c.Heading, {
        className: k.upsellText,
        variant: "heading-sm/semibold",
        children: M.intl.string(M.t.POSLGY)
      }), (0, r.jsxs)(c.Kqy, {
        direction: "horizontal",
        wrap: true,
        gap: 8,
        justify: t ? "center" : "start",
        style: {
          marginTop: 16
        },
        children: [(0, r.jsx)(J, {
          systemSelectorFirst: true
        }), (0, r.jsx)(X, {
          disabled: false
        })]
      })]
    })
  },
  ee = e => {
    let {
      type: t,
      children: n
    } = e, a = (0, h.Dt)(), o = (0, l.Jb)({
      orientation: "horizontal",
      labelledBy: a
    }), {
      ref: s
    } = o, c = Z(o, ["ref"]), u = i.useMemo(() => ({
      type: t,
      delay: H[t]
    }), [t]);
    return (0, r.jsx)(Y.Provider, {
      value: u,
      children: (0, r.jsx)("div", B(U({
        ref: s
      }, c), {
        className: k.__invalid_container,
        children: n
      }))
    })
  };
ee.Basic = e => {
  let {
    className: t,
    hideSystemSelector: n
  } = e;
  return (0, r.jsx)("section", {
    className: t,
    children: (0, r.jsx)(c.Kqy, {
      direction: "horizontal",
      wrap: true,
      gap: 8,
      style: {
        marginTop: 16
      },
      children: (0, r.jsx)(J, {
        hideSystemSelector: n
      })
    })
  })
}, ee.Gradient = Q, ee.BasicAndGradient = $;
let et = ee