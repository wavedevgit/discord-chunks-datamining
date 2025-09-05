/** Chunk was on web.js **/
/** chunk id: 705262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yk: () => q,
  ZP: () => ei,
  yH: () => W
}), require("./314940.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
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

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e, t) {
  if (null == e) return {};
  var n, r, i = Y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var W = function(e) {
  return e.EDITOR = "EDITOR", e.SETTINGS = "SETTINGS", e
}({});
let K = Object.freeze({
    EDITOR: Chunk526761.fy.SLOW_USER_ACTION,
    SETTINGS: Chunk526761.fy.INFREQUENT_USER_ACTION
  }),
  z = Chunk647438.createContext({}),
  q = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: r
    } = e;
    A.default.track(x.rMx.CLIENT_THEME_UPDATED, {
      feature_name: L.QP.CLIENT_THEME,
      theme_name: n,
      is_persisted: t,
      location_stack: r
    })
  },
  X = e => {
    let {
      type: t,
      isPreview: n,
      isCoachmark: i
    } = e, a = (0, s.EQ)({
      type: t,
      isPreview: n,
      isCoachmark: i
    }).with({
      type: "EDITOR",
      isCoachmark: true,
      isPreview: true
    }, () => U.intl.string(U.t.D29k19)).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => U.intl.string(U.t["8+vbqa"])).otherwise(() => U.intl.string(U.t.hjV0fX));
    return (0, r.jsxs)("div", {
      className: G.title,
      children: [(0, r.jsx)(d.X6q, {
        "aria-label": a,
        className: G.titleText,
        variant: "text-md/medium",
        children: a
      }), (0, r.jsx)(v.Z, {
        className: G.premiumIcon
      })]
    })
  },
  Q = e => {
    var t, n;
    let {
      type: i,
      isPreview: a,
      isCoachmark: o
    } = e;
    if ((null == (n = (0, y.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === L.Si.TIER_2 && a) return null;
    let l = (0, s.EQ)({
      type: i,
      isPreview: a,
      isCoachmark: o
    }).with({
      type: "EDITOR",
      isPreview: true
    }, () => U.intl.format(U.t.G8yQXl, {
      onPremiumClick: () => b.z
    })).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => U.intl.string(U.t.jmZiNj)).with({
      type: "EDITOR",
      isPreview: false
    }, () => U.intl.string(U.t.dqDFwc)).with({
      isPreview: true
    }, () => U.intl.format(U.t.DWIjJy, {
      onPremiumClick: () => b.z
    })).otherwise(() => U.intl.string(U.t["np0X/v"]));
    return (0, r.jsx)(d.X6q, {
      variant: "text-sm/normal",
      className: G.subtext,
      children: l
    })
  },
  J = e => {
    var t, n;
    let {
      renderCTAButtons: a,
      isCoachmark: o
    } = e, {
      type: s
    } = i.useContext(z), [c] = (0, l.Wu)([N.Z], () => [N.Z.isPreview]), u = (null == (n = (0, y.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === L.Si.TIER_2;
    return "EDITOR" === s && c && u ? (0, r.jsx)(O.ZP, {
      type: L.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      subscriptionTier: L.Si.TIER_2,
      children: U.intl.format(U.t.G8yQXl, {
        onPremiumClick: () => b.z
      })
    }) : (0, r.jsxs)("div", {
      className: G.header,
      children: [(0, r.jsxs)("div", {
        className: G.headings,
        children: [(0, r.jsx)(X, {
          type: s,
          isPreview: c,
          isCoachmark: o
        }), (0, r.jsx)(Q, {
          type: s,
          isPreview: c,
          isCoachmark: o
        })]
      }), null == a ? true : a()]
    })
  },
  $ = e => {
    let {
      disabled: t
    } = e, a = R.Mc.useExperiment({
      location: "GradientSelectors"
    }), {
      type: o,
      delay: s
    } = i.useContext(z), {
      analyticsLocations: u
    } = (0, m.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [E, b] = (0, l.Wu)([N.Z], () => {
      var e;
      return [N.Z.isPreview, null == (e = N.Z.gradientPreset) ? true : e.id]
    }), [y, O] = i.useState(false), [v, I] = i.useState(false), T = (0, l.e7)([p.Z], () => p.Z.useReducedMotion), S = R.Mc.useExperiment({
      location: "GradientSelectors"
    }).enabled;
    i.useEffect(() => {
      (v === D.XV.length - 2 && "EDITOR" === o || b === c.Us.EASTER_EGG) && O(true)
    }, [v, o, b]);
    let A = (e, t) => {
        if ((0, C.zO)(e.id), q({
            isPersisted: !E,
            analyticsLocations: u,
            themeName: c.Us[e.id]
          }), E && a.v2EditorEnabled && "SETTINGS" === o ? x(e) : (0, _.ZI)({
            backgroundGradientPresetId: e.id,
            theme: e.theme,
            useSystemTheme: E ? j.KW.OFF : true
          }, s), null != t) {
          if (y && O(false), t <= v || 0 === t) return void I(0);
          I(e => e + 1)
        }
      },
      x = async e => {
        await (0, _.ZI)({
          backgroundGradientPresetId: e.id,
          theme: e.theme,
          useSystemTheme: E ? j.KW.OFF : true
        }, M.fy.SLOW_USER_ACTION), (0, g.XO)(g.wh.CLIENT_THEMES), (0, f.xf)()
      }, L = () => {
        if (!y) return null;
        let e = D.qt[c.Us.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.e("5217").then(n.t.bind(n, 801048, 19));
          return e
        }
        return (0, r.jsxs)("div", {
          className: G.easterEggSelection,
          children: [(0, r.jsx)(w.DR, {
            preset: e,
            isSelected: b === c.Us.EASTER_EGG,
            onSelect: () => A(e)
          }), (0, r.jsx)(d.Fmz, {
            importData: t,
            shouldAnimate: !T,
            className: G.sparkles
          })]
        })
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [S && (0, r.jsx)(P.Z, {
        isDisabled: t,
        onSelect: () => {
          (0, g.XO)(g.wh.CUSTOM_THEME, {
            from: "SETTINGS" === o ? g.tE.SETTING : g.tE.CLIENT_THEMES_EDITOR
          }), "SETTINGS" === o && (0, f.xf)()
        }
      }), D.XV.filter(e => {
        let {
          id: t
        } = e;
        return t !== c.Us.EASTER_EGG
      }).map((e, n) => (0, r.jsx)(w.DR, {
        preset: e,
        isSelected: b === e.id,
        onSelect: () => A(e, n),
        disabled: t,
        tabIndex: 0 !== n || t ? true : 0,
        showBadge: false,
        showLockedBadge: false
      }, e.id)), L()]
    })
  },
  ee = e => {
    let {
      className: t,
      renderCTAButtons: n,
      disabled: i = false,
      isCoachmark: a
    } = e;
    return (0, r.jsxs)("section", {
      className: t,
      children: [(0, r.jsx)(J, {
        renderCTAButtons: n,
        isCoachmark: a
      }), (0, r.jsx)("div", {
        className: G.presets,
        children: (0, r.jsx)($, {
          disabled: i
        })
      })]
    })
  },
  et = e => {
    let {
      systemSelectorFirst: t,
      hideSystemSelector: n = false
    } = e, {
      delay: a
    } = i.useContext(z), {
      analyticsLocations: o
    } = (0, m.ZP)(h.Z.CLIENT_THEMES_THEME_SELECTOR), [s, c, u] = (0, l.Wu)([I.Z, T.ZP, N.Z], () => [I.Z.theme, null == N.Z.gradientPreset && null == S.L1.getSetting().customUserThemeSettings, T.ZP.useSystemTheme === j.KW.ON]), d = e => {
      (0, C.xs)(), q({
        isPersisted: true,
        analyticsLocations: o,
        themeName: "default ".concat(e)
      }), (0, _.ZI)({
        theme: e
      }, a)
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [!n && t && (0, r.jsx)(w.bD, {
        theme: "system",
        isSelected: c && u,
        onSelect: () => d("system")
      }), (0, r.jsx)(w.bD, {
        theme: k.BR.LIGHT,
        isSelected: c && !u && s === k.BR.LIGHT,
        onSelect: () => d(k.BR.LIGHT)
      }), (0, r.jsx)(w.bD, {
        theme: k.BR.DARK,
        isSelected: c && !u && s === k.BR.DARK,
        onSelect: () => d(k.BR.DARK)
      }), (0, r.jsx)(w.bD, {
        theme: k.BR.DARKER,
        isSelected: c && !u && s === k.BR.DARKER,
        onSelect: () => d(k.BR.DARKER)
      }), (0, r.jsx)(w.bD, {
        theme: k.BR.MIDNIGHT,
        isSelected: c && !u && s === k.BR.MIDNIGHT,
        onSelect: () => d(k.BR.MIDNIGHT)
      }), !n && !t && (0, r.jsx)(w.bD, {
        theme: "system",
        isSelected: c && u,
        onSelect: () => d("system")
      })]
    })
  },
  en = e => {
    let {
      isEditor: t,
      className: n,
      renderCTAButtons: i,
      isCoachmark: a
    } = e;
    return (0, r.jsxs)("section", {
      className: n,
      children: [!t && (0, r.jsx)(J, {
        renderCTAButtons: i,
        isCoachmark: a
      }), t && a && (0, r.jsx)(d.X6q, {
        className: G.upsellText,
        variant: "heading-sm/semibold",
        children: U.intl.string(U.t.POSLGR)
      }), (0, r.jsxs)("div", {
        className: o()(G.presets, {
          [G.presetsJustify]: t
        }),
        children: [(0, r.jsx)(et, {
          systemSelectorFirst: true
        }), (0, r.jsx)($, {
          disabled: false
        })]
      })]
    })
  },
  er = e => {
    let {
      type: t,
      children: n
    } = e, a = (0, E.Dt)(), o = (0, u.Jb)({
      orientation: "horizontal",
      labelledBy: a
    }), {
      ref: s
    } = o, l = H(o, ["ref"]), c = i.useMemo(() => ({
      type: t,
      delay: K[t]
    }), [t]);
    return (0, r.jsx)(z.Provider, {
      value: c,
      children: (0, r.jsx)("div", V(Z({
        ref: s
      }, l), {
        className: G.__invalid_container,
        children: n
      }))
    })
  };
er.Basic = e => {
  let {
    className: t,
    hideSystemSelector: n
  } = e;
  return (0, r.jsx)("section", {
    className: o()(G.presets, t),
    children: (0, r.jsx)(et, {
      hideSystemSelector: n
    })
  })
}, er.Gradient = ee, er.BasicAndGradient = en;
let ei = er