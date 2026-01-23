/** Chunk was on web.js **/
/** chunk id: 692798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => et,
  X8: () => K,
  v0: () => H
}), require("./801541.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk889137 = require("./889137.js"),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk793943 = require("./793943.js"),
  Chunk915089 = require("./915089.js"),
  Chunk87719 = require("./87719.js"),
  Chunk234419 = require("./234419.js"),
  Chunk811611 = require("./811611.jsx"),
  Chunk450232 = require("./450232.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk964404 = require("./964404.js"),
  Chunk253932 = require("./253932.js"),
  Chunk12901 = require("./12901.js"),
  Chunk954571 = require("./954571.js"),
  Chunk823459 = require("./823459.js"),
  Chunk47671 = require("./47671.js"),
  Chunk323618 = require("./323618.jsx"),
  Chunk653523 = require("./653523.jsx"),
  Chunk385803 = require("./385803.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk185928 = require("./185928.js"),
  Chunk355097 = require("./355097.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk176240 = require("./176240.js");

function k(e, t, n) {
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
      k(e, t, n[t])
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

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = B(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var H = function(e) {
  return e.EDITOR = "EDITOR", e.SETTINGS = "SETTINGS", e
}({});
let Y = Object.freeze({
    EDITOR: Chunk355097.Sb.SLOW_USER_ACTION,
    SETTINGS: Chunk355097.Sb.INFREQUENT_USER_ACTION
  }),
  W = Chunk64700.createContext({}),
  K = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: r
    } = e;
    I.default.track(w.HAw.CLIENT_THEME_UPDATED, {
      feature_name: P.Ae.CLIENT_THEME,
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
    } = e, s = (0, a.YW)({
      type: t,
      isPreview: n,
      isCoachmark: i
    }).with({
      type: "EDITOR",
      isCoachmark: true,
      isPreview: true
    }, () => j.intl.string(j.t.D29k16)).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => j.intl.string(j.t["8+vbqd"])).otherwise(() => j.intl.string(j.t.hjV0fZ));
    return (0, r.jsxs)("div", {
      className: M.DD,
      children: [(0, r.jsx)(c.Heading, {
        "aria-label": s,
        className: M.Qw,
        variant: "text-md/medium",
        children: s
      }), (0, r.jsx)(y.A, {
        className: M.PC
      })]
    })
  },
  q = e => {
    var t, n;
    let {
      type: i,
      isPreview: s,
      isCoachmark: o
    } = e;
    if ((null == (n = (0, g.V)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === P.pe.TIER_2 && s) return null;
    let l = (0, a.YW)({
      type: i,
      isPreview: s,
      isCoachmark: o
    }).with({
      type: "EDITOR",
      isPreview: true
    }, () => j.intl.format(j.t.G8yQXi, {
      onPremiumClick: () => m.Z
    })).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => j.intl.string(j.t.jmZiNu)).with({
      type: "EDITOR",
      isPreview: false
    }, () => j.intl.string(j.t.dqDFwe)).with({
      isPreview: true
    }, () => j.intl.format(j.t["DWIjJ/"], {
      onPremiumClick: () => m.Z
    })).otherwise(() => j.intl.string(j.t["np0X/u"]));
    return (0, r.jsx)(c.Heading, {
      variant: "text-sm/normal",
      className: M.W$,
      children: l
    })
  },
  X = e => {
    var t, n;
    let {
      renderCTAButtons: a,
      isCoachmark: o
    } = e, {
      type: l
    } = i.useContext(W), [c] = (0, s.yK)([T.A], () => [T.A.isPreview]), u = (null == (n = (0, g.V)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === P.pe.TIER_2;
    return "EDITOR" === l && c && u ? (0, r.jsx)(E.Ay, {
      type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      subscriptionTier: P.pe.TIER_2,
      children: j.intl.format(j.t.G8yQXi, {
        onPremiumClick: () => m.Z
      })
    }) : (0, r.jsxs)("div", {
      className: M.wx,
      children: [(0, r.jsxs)("div", {
        className: M.so,
        children: [(0, r.jsx)(z, {
          type: l,
          isPreview: c,
          isCoachmark: o
        }), (0, r.jsx)(q, {
          type: l,
          isPreview: c,
          isCoachmark: o
        })]
      }), null == a ? true : a()]
    })
  },
  Z = e => {
    let {
      disabled: t
    } = e, {
      type: a,
      delay: l
    } = i.useContext(W), {
      analyticsLocations: h
    } = (0, p.Ay)(f.A.CLIENT_THEMES_THEME_SELECTOR), [m, g] = (0, s.yK)([T.A], () => {
      var e;
      return [T.A.isPreview, null == (e = T.A.gradientPreset) ? true : e.id]
    }), [E, y] = i.useState(false), [b, O] = i.useState(false), v = (0, s.bG)([d.A], () => d.A.useReducedMotion);
    i.useEffect(() => {
      (b === R.Jm.length - 2 && "EDITOR" === a || g === o.ju.EASTER_EGG) && y(true)
    }, [b, a, g]);
    let I = (e, t) => {
        if ((0, S.bc)(e.id), K({
            isPersisted: !m,
            analyticsLocations: h,
            themeName: o.ju[e.id]
          }), m && "SETTINGS" === a ? w(e) : (0, u.u_)({
            backgroundGradientPresetId: e.id,
            theme: e.theme,
            useSystemTheme: m ? D.Q_.OFF : true
          }, l), null != t) {
          if (E && y(false), t <= b || 0 === t) return void O(0);
          O(e => e + 1)
        }
      },
      w = async e => {
        await (0, u.u_)({
          backgroundGradientPresetId: e.id,
          theme: e.theme,
          useSystemTheme: m ? D.Q_.OFF : true
        }, x.Sb.SLOW_USER_ACTION), (0, _.nf)(_.HP.CLIENT_THEMES), (0, A.default)()
      }, P = () => {
        if (!E) return null;
        let e = R.ag[o.ju.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.e("3408").then(n.t.bind(n, 707827, 19));
          return e
        }
        return (0, r.jsxs)("div", {
          className: M.kG,
          children: [(0, r.jsx)(N.MX, {
            preset: e,
            isSelected: g === o.ju.EASTER_EGG,
            onSelect: () => I(e)
          }), (0, r.jsx)(c.akl, {
            importData: t,
            shouldAnimate: !v,
            className: M._7
          })]
        })
      };
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(C.A, {
        isDisabled: t,
        onSelect: () => {
          (0, _.nf)(_.HP.CUSTOM_THEME, {
            from: "SETTINGS" === a ? _.xv.SETTING : _.xv.CLIENT_THEMES_EDITOR
          }), "SETTINGS" === a && (0, A.default)()
        }
      }), R.Jm.filter(e => {
        let {
          id: t
        } = e;
        return t !== o.ju.EASTER_EGG
      }).map((e, n) => (0, r.jsx)(N.MX, {
        preset: e,
        isSelected: g === e.id,
        onSelect: () => I(e, n),
        disabled: t,
        tabIndex: 0 !== n || t ? true : 0,
        showBadge: false,
        showLockedBadge: false
      }, e.id)), P()]
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
      children: [(0, r.jsx)(X, {
        renderCTAButtons: n,
        isCoachmark: a
      }), (0, r.jsx)(c.BJc, {
        direction: "horizontal",
        wrap: true,
        gap: 8,
        style: {
          marginTop: 16
        },
        children: (0, r.jsx)(Z, {
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
      analyticsLocations: o
    } = (0, p.Ay)(f.A.CLIENT_THEMES_THEME_SELECTOR), [l, c, d] = (0, s.yK)([b.A, O.Ay, T.A], () => [b.A.theme, null == T.A.gradientPreset && null == v.eh.getSetting().customUserThemeSettings, O.Ay.useSystemTheme === D.Q_.ON]), _ = e => {
      (0, S.Py)(), K({
        isPersisted: true,
        analyticsLocations: o,
        themeName: "default ".concat(e)
      }), (0, u.u_)({
        theme: e
      }, a)
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [!n && t && (0, r.jsx)(N.zy, {
        theme: "system",
        isSelected: c && d,
        onSelect: () => _("system")
      }), (0, r.jsx)(N.zy, {
        theme: L.NJ.LIGHT,
        isSelected: c && !d && l === L.NJ.LIGHT,
        onSelect: () => _(L.NJ.LIGHT)
      }), (0, r.jsx)(N.zy, {
        theme: L.NJ.DARK,
        isSelected: c && !d && l === L.NJ.DARK,
        onSelect: () => _(L.NJ.DARK)
      }), (0, r.jsx)(N.zy, {
        theme: L.NJ.DARKER,
        isSelected: c && !d && l === L.NJ.DARKER,
        onSelect: () => _(L.NJ.DARKER)
      }), (0, r.jsx)(N.zy, {
        theme: L.NJ.MIDNIGHT,
        isSelected: c && !d && l === L.NJ.MIDNIGHT,
        onSelect: () => _(L.NJ.MIDNIGHT)
      }), !n && !t && (0, r.jsx)(N.zy, {
        theme: "system",
        isSelected: c && d,
        onSelect: () => _("system")
      })]
    })
  },
  J = e => {
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
      }), t && a && (0, r.jsx)(c.Heading, {
        className: M.tD,
        variant: "heading-sm/semibold",
        children: j.intl.string(j.t.POSLGY)
      }), (0, r.jsxs)(c.BJc, {
        direction: "horizontal",
        wrap: true,
        gap: 8,
        justify: t ? "center" : "start",
        style: {
          marginTop: 16
        },
        children: [(0, r.jsx)($, {
          systemSelectorFirst: true
        }), (0, r.jsx)(Z, {
          disabled: false
        })]
      })]
    })
  },
  ee = e => {
    let {
      type: t,
      children: n
    } = e, a = (0, h.GV)(), s = (0, l._u)({
      orientation: "horizontal",
      labelledBy: a
    }), {
      ref: o
    } = s, c = F(s, ["ref"]), u = i.useMemo(() => ({
      type: t,
      delay: Y[t]
    }), [t]);
    return (0, r.jsx)(W.Provider, {
      value: u,
      children: (0, r.jsx)("div", V(U({
        ref: o
      }, c), {
        className: M.__invalid_container,
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
    children: (0, r.jsx)(c.BJc, {
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
}, ee.Gradient = Q, ee.BasicAndGradient = J;
let et = ee