/** Chunk was on web.js **/
/** chunk id: 705262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yk: () => z,
  ZP: () => er,
  yH: () => Y
}), require("./314940.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
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

function V(e, t) {
  if (null == e) return {};
  var n, r, i = H(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function H(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var Y = function(e) {
  return e.EDITOR = "EDITOR", e.SETTINGS = "SETTINGS", e
}({});
let W = Object.freeze({
    EDITOR: Chunk526761.fy.SLOW_USER_ACTION,
    SETTINGS: Chunk526761.fy.INFREQUENT_USER_ACTION
  }),
  K = Chunk647438.createContext({}),
  z = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: r
    } = e;
    S.default.track(D.rMx.CLIENT_THEME_UPDATED, {
      feature_name: x.QP.CLIENT_THEME,
      theme_name: n,
      is_persisted: t,
      location_stack: r
    })
  },
  q = e => {
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
    }, () => M.intl.string(M.t.D29k19)).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => M.intl.string(M.t["8+vbqa"])).otherwise(() => M.intl.string(M.t.hjV0fX));
    return (0, r.jsxs)("div", {
      className: U.title,
      children: [(0, r.jsx)(u.X6q, {
        "aria-label": a,
        className: U.titleText,
        variant: "text-md/medium",
        children: a
      }), (0, r.jsx)(O.Z, {
        className: U.premiumIcon
      })]
    })
  },
  X = e => {
    var t, n;
    let {
      type: i,
      isPreview: a,
      isCoachmark: o
    } = e;
    if ((null == (n = (0, b.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === x.Si.TIER_2 && a) return null;
    let l = (0, s.EQ)({
      type: i,
      isPreview: a,
      isCoachmark: o
    }).with({
      type: "EDITOR",
      isPreview: true
    }, () => M.intl.format(M.t.G8yQXl, {
      onPremiumClick: () => E.z
    })).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => M.intl.string(M.t.jmZiNj)).with({
      type: "EDITOR",
      isPreview: false
    }, () => M.intl.string(M.t.dqDFwc)).with({
      isPreview: true
    }, () => M.intl.format(M.t.DWIjJy, {
      onPremiumClick: () => E.z
    })).otherwise(() => M.intl.string(M.t["np0X/v"]));
    return (0, r.jsx)(u.X6q, {
      variant: "text-sm/normal",
      className: U.subtext,
      children: l
    })
  },
  Q = e => {
    var t, n;
    let {
      renderCTAButtons: a,
      isCoachmark: o
    } = e, {
      type: s
    } = i.useContext(K), [c] = (0, l.Wu)([C.Z], () => [C.Z.isPreview]), u = (null == (n = (0, b.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === x.Si.TIER_2;
    return "EDITOR" === s && c && u ? (0, r.jsx)(y.ZP, {
      type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      subscriptionTier: x.Si.TIER_2,
      children: M.intl.format(M.t.G8yQXl, {
        onPremiumClick: () => E.z
      })
    }) : (0, r.jsxs)("div", {
      className: U.header,
      children: [(0, r.jsxs)("div", {
        className: U.headings,
        children: [(0, r.jsx)(q, {
          type: s,
          isPreview: c,
          isCoachmark: o
        }), (0, r.jsx)(X, {
          type: s,
          isPreview: c,
          isCoachmark: o
        })]
      }), null == a ? true : a()]
    })
  },
  J = e => {
    let {
      disabled: t
    } = e, a = N.Mc.useExperiment({
      location: "GradientSelectors"
    }), {
      type: o,
      delay: s
    } = i.useContext(K), {
      analyticsLocations: g
    } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR), [E, b] = (0, l.Wu)([C.Z], () => {
      var e;
      return [C.Z.isPreview, null == (e = C.Z.gradientPreset) ? true : e.id]
    }), [y, O] = i.useState(false), [v, I] = i.useState(false), T = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), S = N.Mc.useExperiment({
      location: "GradientSelectors"
    }).enabled;
    i.useEffect(() => {
      (v === w.XV.length - 2 && "EDITOR" === o || b === c.Us.EASTER_EGG) && O(true)
    }, [v, o, b]);
    let D = (e, t) => {
        if ((0, A.zO)(e.id), z({
            isPersisted: !E,
            analyticsLocations: g,
            themeName: c.Us[e.id]
          }), E && a.v2EditorEnabled && "SETTINGS" === o ? x(e) : (0, f.ZI)({
            backgroundGradientPresetId: e.id,
            theme: e.theme,
            useSystemTheme: E ? L.KW.OFF : true
          }, s), null != t) {
          if (y && O(false), t <= v || 0 === t) return void I(0);
          I(e => e + 1)
        }
      },
      x = async e => {
        await (0, f.ZI)({
          backgroundGradientPresetId: e.id,
          theme: e.theme,
          useSystemTheme: E ? L.KW.OFF : true
        }, j.fy.SLOW_USER_ACTION), (0, m.XO)(m.wh.CLIENT_THEMES), (0, d.xf)()
      }, k = () => {
        if (!y) return null;
        let e = w.qt[c.Us.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.e("5217").then(n.t.bind(n, 801048, 19));
          return e
        }
        return (0, r.jsxs)("div", {
          className: U.easterEggSelection,
          children: [(0, r.jsx)(P.DR, {
            preset: e,
            isSelected: b === c.Us.EASTER_EGG,
            onSelect: () => D(e)
          }), (0, r.jsx)(u.Fmz, {
            importData: t,
            shouldAnimate: !T,
            className: U.sparkles
          })]
        })
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [S && (0, r.jsx)(R.Z, {
        isDisabled: t,
        onSelect: () => {
          (0, m.XO)(m.wh.CUSTOM_THEME, {
            from: "SETTINGS" === o ? m.tE.SETTING : m.tE.CLIENT_THEMES_EDITOR
          }), "SETTINGS" === o && (0, d.xf)()
        }
      }), w.XV.filter(e => {
        let {
          id: t
        } = e;
        return t !== c.Us.EASTER_EGG
      }).map((e, n) => (0, r.jsx)(P.DR, {
        preset: e,
        isSelected: b === e.id,
        onSelect: () => D(e, n),
        disabled: t,
        tabIndex: 0 !== n || t ? true : 0,
        showBadge: false,
        showLockedBadge: false
      }, e.id)), k()]
    })
  },
  $ = e => {
    let {
      className: t,
      renderCTAButtons: n,
      disabled: i = false,
      isCoachmark: a
    } = e;
    return (0, r.jsxs)("section", {
      className: t,
      children: [(0, r.jsx)(Q, {
        renderCTAButtons: n,
        isCoachmark: a
      }), (0, r.jsx)("div", {
        className: U.presets,
        children: (0, r.jsx)(J, {
          disabled: i
        })
      })]
    })
  },
  ee = e => {
    let {
      systemSelectorFirst: t,
      hideSystemSelector: n = false
    } = e, {
      delay: a
    } = i.useContext(K), {
      analyticsLocations: o
    } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR), [s, c, u] = (0, l.Wu)([v.Z, I.ZP, C.Z], () => [v.Z.theme, null == C.Z.gradientPreset && null == T.L1.getSetting().customUserThemeSettings, I.ZP.useSystemTheme === L.KW.ON]), d = e => {
      (0, A.xs)(), z({
        isPersisted: true,
        analyticsLocations: o,
        themeName: "default ".concat(e)
      }), (0, f.ZI)({
        theme: e
      }, a)
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [!n && t && (0, r.jsx)(P.bD, {
        theme: "system",
        isSelected: c && u,
        onSelect: () => d("system")
      }), (0, r.jsx)(P.bD, {
        theme: k.BR.LIGHT,
        isSelected: c && !u && s === k.BR.LIGHT,
        onSelect: () => d(k.BR.LIGHT)
      }), (0, r.jsx)(P.bD, {
        theme: k.BR.DARK,
        isSelected: c && !u && s === k.BR.DARK,
        onSelect: () => d(k.BR.DARK)
      }), (0, r.jsx)(P.bD, {
        theme: k.BR.DARKER,
        isSelected: c && !u && s === k.BR.DARKER,
        onSelect: () => d(k.BR.DARKER)
      }), (0, r.jsx)(P.bD, {
        theme: k.BR.MIDNIGHT,
        isSelected: c && !u && s === k.BR.MIDNIGHT,
        onSelect: () => d(k.BR.MIDNIGHT)
      }), !n && !t && (0, r.jsx)(P.bD, {
        theme: "system",
        isSelected: c && u,
        onSelect: () => d("system")
      })]
    })
  },
  et = e => {
    let {
      isEditor: t,
      className: n,
      renderCTAButtons: i,
      isCoachmark: a
    } = e;
    return (0, r.jsxs)("section", {
      className: n,
      children: [!t && (0, r.jsx)(Q, {
        renderCTAButtons: i,
        isCoachmark: a
      }), t && a && (0, r.jsx)(u.X6q, {
        className: U.upsellText,
        variant: "heading-sm/semibold",
        children: M.intl.string(M.t.POSLGR)
      }), (0, r.jsxs)("div", {
        className: o()(U.presets, {
          [U.presetsJustify]: t
        }),
        children: [(0, r.jsx)(ee, {
          systemSelectorFirst: true
        }), (0, r.jsx)(J, {
          disabled: false
        })]
      })]
    })
  },
  en = e => {
    let {
      type: t,
      children: n
    } = e, a = (0, g.Dt)(), o = (0, u.arW)({
      orientation: "horizontal",
      labelledBy: a
    }), {
      ref: s
    } = o, l = V(o, ["ref"]), c = i.useMemo(() => ({
      type: t,
      delay: W[t]
    }), [t]);
    return (0, r.jsx)(K.Provider, {
      value: c,
      children: (0, r.jsx)("div", F(B({
        ref: s
      }, l), {
        className: U.__invalid_container,
        children: n
      }))
    })
  };
en.Basic = e => {
  let {
    className: t,
    hideSystemSelector: n
  } = e;
  return (0, r.jsx)("section", {
    className: o()(U.presets, t),
    children: (0, r.jsx)(ee, {
      hideSystemSelector: n
    })
  })
}, en.Gradient = $, en.BasicAndGradient = et;
let er = en