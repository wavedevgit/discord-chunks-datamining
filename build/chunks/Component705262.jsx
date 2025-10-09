/** Chunk was on web.js **/
/** chunk id: 705262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yk: () => K,
  ZP: () => en,
  yH: () => H
}), require("./314940.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk803038 = require("./803038.js"),
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

function F(e, t) {
  if (null == e) return {};
  var n, r, i = V(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var H = function(e) {
  return e.EDITOR = "EDITOR", e.SETTINGS = "SETTINGS", e
}({});
let Y = Object.freeze({
    EDITOR: Chunk526761.fy.SLOW_USER_ACTION,
    SETTINGS: Chunk526761.fy.INFREQUENT_USER_ACTION
  }),
  W = Chunk647438.createContext({}),
  K = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: r
    } = e;
    T.default.track(w.rMx.CLIENT_THEME_UPDATED, {
      feature_name: D.QP.CLIENT_THEME,
      theme_name: n,
      is_persisted: t,
      location_stack: r
    })
  },
  z = e => {
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
    }, () => k.intl.string(k.t.D29k19)).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => k.intl.string(k.t["8+vbqa"])).otherwise(() => k.intl.string(k.t.hjV0fX));
    return (0, r.jsxs)("div", {
      className: j.title,
      children: [(0, r.jsx)(c.X6q, {
        "aria-label": o,
        className: j.titleText,
        variant: "text-md/medium",
        children: o
      }), (0, r.jsx)(b.Z, {
        className: j.premiumIcon
      })]
    })
  },
  q = e => {
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
    }, () => k.intl.format(k.t.G8yQXl, {
      onPremiumClick: () => m.z
    })).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => k.intl.string(k.t.jmZiNj)).with({
      type: "EDITOR",
      isPreview: false
    }, () => k.intl.string(k.t.dqDFwc)).with({
      isPreview: true
    }, () => k.intl.format(k.t.DWIjJy, {
      onPremiumClick: () => m.z
    })).otherwise(() => k.intl.string(k.t["np0X/v"]));
    return (0, r.jsx)(c.X6q, {
      variant: "text-sm/normal",
      className: j.subtext,
      children: l
    })
  },
  X = e => {
    var t, n;
    let {
      renderCTAButtons: a,
      isCoachmark: s
    } = e, {
      type: l
    } = i.useContext(W), [c] = (0, o.Wu)([A.Z], () => [A.Z.isPreview]), u = (null == (n = (0, g.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === D.Si.TIER_2;
    return "EDITOR" === l && c && u ? (0, r.jsx)(E.ZP, {
      type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      subscriptionTier: D.Si.TIER_2,
      children: k.intl.format(k.t.G8yQXl, {
        onPremiumClick: () => m.z
      })
    }) : (0, r.jsxs)("div", {
      className: j.header,
      children: [(0, r.jsxs)("div", {
        className: j.headings,
        children: [(0, r.jsx)(z, {
          type: l,
          isPreview: c,
          isCoachmark: s
        }), (0, r.jsx)(q, {
          type: l,
          isPreview: c,
          isCoachmark: s
        })]
      }), null == a ? true : a()]
    })
  },
  Q = e => {
    let {
      disabled: t
    } = e, a = C.Mc.useExperiment({
      location: "GradientSelectors"
    }), {
      type: l,
      delay: h
    } = i.useContext(W), {
      analyticsLocations: m
    } = (0, _.ZP)(f.Z.CLIENT_THEMES_THEME_SELECTOR), [g, E] = (0, o.Wu)([A.Z], () => {
      var e;
      return [A.Z.isPreview, null == (e = A.Z.gradientPreset) ? true : e.id]
    }), [b, y] = i.useState(false), [O, v] = i.useState(false), T = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), w = C.Mc.useExperiment({
      location: "GradientSelectors"
    }).enabled;
    i.useEffect(() => {
      (O === P.XV.length - 2 && "EDITOR" === l || E === s.Us.EASTER_EGG) && y(true)
    }, [O, l, E]);
    let D = (e, t) => {
        if ((0, S.zO)(e.id), K({
            isPersisted: !g,
            analyticsLocations: m,
            themeName: s.Us[e.id]
          }), g && a.v2EditorEnabled && "SETTINGS" === l ? M(e) : (0, u.ZI)({
            backgroundGradientPresetId: e.id,
            theme: e.theme,
            useSystemTheme: g ? x.KW.OFF : true
          }, h), null != t) {
          if (b && y(false), t <= O || 0 === t) return void v(0);
          v(e => e + 1)
        }
      },
      M = async e => {
        await (0, u.ZI)({
          backgroundGradientPresetId: e.id,
          theme: e.theme,
          useSystemTheme: g ? x.KW.OFF : true
        }, L.fy.SLOW_USER_ACTION), (0, p.XO)(p.wh.CLIENT_THEMES), (0, I.default)()
      }, k = () => {
        if (!b) return null;
        let e = P.qt[s.Us.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.e("5217").then(n.t.bind(n, 801048, 19));
          return e
        }
        return (0, r.jsxs)("div", {
          className: j.easterEggSelection,
          children: [(0, r.jsx)(R.DR, {
            preset: e,
            isSelected: E === s.Us.EASTER_EGG,
            onSelect: () => D(e)
          }), (0, r.jsx)(c.Fmz, {
            importData: t,
            shouldAnimate: !T,
            className: j.sparkles
          })]
        })
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [w && (0, r.jsx)(N.Z, {
        isDisabled: t,
        onSelect: () => {
          (0, p.XO)(p.wh.CUSTOM_THEME, {
            from: "SETTINGS" === l ? p.tE.SETTING : p.tE.CLIENT_THEMES_EDITOR
          }), "SETTINGS" === l && (0, I.default)()
        }
      }), P.XV.filter(e => {
        let {
          id: t
        } = e;
        return t !== s.Us.EASTER_EGG
      }).map((e, n) => (0, r.jsx)(R.DR, {
        preset: e,
        isSelected: E === e.id,
        onSelect: () => D(e, n),
        disabled: t,
        tabIndex: 0 !== n || t ? true : 0,
        showBadge: false,
        showLockedBadge: false
      }, e.id)), k()]
    })
  },
  J = e => {
    let {
      className: t,
      renderCTAButtons: n,
      disabled: i = false,
      isCoachmark: a
    } = e;
    return (0, r.jsxs)("section", {
      className: t,
      children: [(0, r.jsx)(X, {
        renderCTAButtons: n,
        isCoachmark: a
      }), (0, r.jsx)(c.Kqy, {
        direction: "horizontal",
        wrap: true,
        gap: 8,
        style: {
          marginTop: 16
        },
        children: (0, r.jsx)(Q, {
          disabled: i
        })
      })]
    })
  },
  $ = e => {
    let {
      systemSelectorFirst: t,
      hideSystemSelector: n = false
    } = e, {
      delay: a
    } = i.useContext(W), {
      analyticsLocations: s
    } = (0, _.ZP)(f.Z.CLIENT_THEMES_THEME_SELECTOR), [l, c, d] = (0, o.Wu)([y.Z, O.ZP, A.Z], () => [y.Z.theme, null == A.Z.gradientPreset && null == v.L1.getSetting().customUserThemeSettings, O.ZP.useSystemTheme === x.KW.ON]), p = e => {
      (0, S.xs)(), K({
        isPersisted: true,
        analyticsLocations: s,
        themeName: "default ".concat(e)
      }), (0, u.ZI)({
        theme: e
      }, a)
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [!n && t && (0, r.jsx)(R.bD, {
        theme: "system",
        isSelected: c && d,
        onSelect: () => p("system")
      }), (0, r.jsx)(R.bD, {
        theme: M.BR.LIGHT,
        isSelected: c && !d && l === M.BR.LIGHT,
        onSelect: () => p(M.BR.LIGHT)
      }), (0, r.jsx)(R.bD, {
        theme: M.BR.DARK,
        isSelected: c && !d && l === M.BR.DARK,
        onSelect: () => p(M.BR.DARK)
      }), (0, r.jsx)(R.bD, {
        theme: M.BR.DARKER,
        isSelected: c && !d && l === M.BR.DARKER,
        onSelect: () => p(M.BR.DARKER)
      }), (0, r.jsx)(R.bD, {
        theme: M.BR.MIDNIGHT,
        isSelected: c && !d && l === M.BR.MIDNIGHT,
        onSelect: () => p(M.BR.MIDNIGHT)
      }), !n && !t && (0, r.jsx)(R.bD, {
        theme: "system",
        isSelected: c && d,
        onSelect: () => p("system")
      })]
    })
  },
  ee = e => {
    let {
      isEditor: t,
      className: n,
      renderCTAButtons: i,
      isCoachmark: a
    } = e;
    return (0, r.jsxs)("section", {
      className: n,
      children: [!t && (0, r.jsx)(X, {
        renderCTAButtons: i,
        isCoachmark: a
      }), t && a && (0, r.jsx)(c.X6q, {
        className: j.upsellText,
        variant: "heading-sm/semibold",
        children: k.intl.string(k.t.POSLGR)
      }), (0, r.jsxs)(c.Kqy, {
        direction: "horizontal",
        wrap: true,
        gap: 8,
        justify: t ? "center" : "start",
        style: {
          marginTop: 16
        },
        children: [(0, r.jsx)($, {
          systemSelectorFirst: true
        }), (0, r.jsx)(Q, {
          disabled: false
        })]
      })]
    })
  },
  et = e => {
    let {
      type: t,
      children: n
    } = e, a = (0, h.Dt)(), o = (0, l.Jb)({
      orientation: "horizontal",
      labelledBy: a
    }), {
      ref: s
    } = o, c = F(o, ["ref"]), u = i.useMemo(() => ({
      type: t,
      delay: Y[t]
    }), [t]);
    return (0, r.jsx)(W.Provider, {
      value: u,
      children: (0, r.jsx)("div", Z(G({
        ref: s
      }, c), {
        className: j.__invalid_container,
        children: n
      }))
    })
  };
et.Basic = e => {
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
      children: (0, r.jsx)($, {
        hideSystemSelector: n
      })
    })
  })
}, et.Gradient = J, et.BasicAndGradient = ee;
let en = et