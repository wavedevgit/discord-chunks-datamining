/** Chunk was on web.js **/
/** chunk id: 724145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk230711 = require("./230711.js"),
  Chunk351773 = require("./351773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk639119 = require("./639119.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk587446 = require("./587446.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk514361 = require("./514361.js"),
  Chunk803038 = require("./803038.js"),
  Chunk55358 = require("./55358.js"),
  Chunk572397 = require("./572397.js"),
  Chunk708154 = require("./708154.jsx"),
  Chunk705262 = require("./705262.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk204089 = require("./204089.js");
let U = () => (0, Chunk951288.jsx)("div", {
    className: Chunk204089.editorHeader,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk204089.bannerUpsell,
      children: [(0, Chunk951288.jsx)(Chunk587446.Z, {
        className: Chunk204089.premiumIcon
      }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/bold",
        color: "always-white",
        children: Chunk388032.intl.string(Chunk388032.t.POSLGR)
      })]
    })
  }),
  G = e => {
    let {
      markAsDismissed: t
    } = e, n = (0, P.q)(), i = () => {
      null != t && t(L.L.DISMISS), n(x.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, R.C)()
    };
    return (0, r.jsxs)("div", {
      className: k.editorHeader,
      children: [(0, r.jsx)(f.P3F, {
        className: k.closeCircleButton,
        onClick: i,
        children: (0, r.jsx)(f.k$p, {
          size: "md",
          color: "currentColor",
          className: k.closeCircle
        })
      }), (0, r.jsx)(f.X6q, {
        variant: "heading-lg/extrabold",
        children: M.intl.string(M.t["xSR+a2"])
      })]
    })
  },
  B = e => {
    var t, n, i;
    let {
      onSubscribeSuccess: a,
      markAsDismissed: o
    } = e, {
      analyticsLocations: s
    } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR), [u, f] = (0, l.Wu)([T.default, C.Z], () => [C.Z.gradientPreset, A.ZP.isPremium(T.default.getCurrentUser())]), p = (0, y.N)(), {
      v2EditorEnabled: h
    } = N.Mc.useExperiment({
      location: "ClientThemesEditor"
    }), m = (0, A.Rt)({
      intervalType: null == p || null == (t = p.subscription_trial) ? true : t.interval,
      intervalCount: null == p || null == (n = p.subscription_trial) ? true : n.interval_count
    }), b = f ? M.intl.string(M.t.IJI7ys) : (null == p || null == (i = p.subscription_trial) ? true : i.sku_id) === j.Si.TIER_2 ? m : M.intl.string(M.t.mr4K7O), I = e => {
      e && (null == a || a(), null != o && o(L.L.PRIMARY), null != u && ((0, D.Yk)({
        isPersisted: true,
        themeName: c.Us[u.id],
        analyticsLocations: s
      }), (0, _.ZI)({
        backgroundGradientPresetId: u.id,
        theme: u.theme
      })))
    };
    return h ? (0, r.jsx)(O.Z, {
      subscriptionTier: j.Si.TIER_2,
      defaultTextOverride: b,
      premiumModalAnalyticsLocation: {
        object: x.qAy.BUTTON_CTA,
        objectType: x.Qqv.BUY
      },
      onSubscribeModalClose: I,
      fullWidth: true
    }) : (0, r.jsx)(v.Z, {
      size: d.zx.Sizes.MEDIUM,
      textOptions: {
        textOverride: b
      },
      subscriptionTier: j.Si.TIER_2,
      onSubscribeModalClose: I
    })
  },
  Z = e => {
    let {
      markAsDismissed: t,
      isCoachmark: n
    } = e, {
      isPreview: a
    } = (0, l.cj)([C.Z], () => ({
      isPreview: C.Z.isPreview
    })), {
      v2EditorEnabled: o
    } = N.Mc.useExperiment({
      location: "ClientThemesEditor"
    }), [c, d] = i.useState(false), f = (0, P.q)(), _ = () => {
      null != t && t(L.L.DISMISS), f(x.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, R.C)(), n || p.Z.open()
    }, h = (0, s.EQ)({
      isPreview: a,
      isCoachmark: n,
      forceShowCloseButton: c
    }).with({
      isCoachmark: true
    }, {
      forceShowCloseButton: true
    }, () => M.intl.string(M.t.cpT0Cg)).with({
      isPreview: true
    }, () => M.intl.string(M.t["dqH+qq"])).otherwise(() => M.intl.string(M.t.Olc2Ky)), m = o ? k.editorFooterV2 : k.editorFooter;
    return (0, r.jsxs)("div", {
      className: m,
      children: [a && (0, r.jsx)(B, {
        onSubscribeSuccess: () => {
          d(true)
        },
        markAsDismissed: t
      }), (0, r.jsx)(u.z, {
        fullWidth: true,
        onClick: _,
        variant: "secondary",
        text: h
      })]
    })
  };

function V(e) {
  let {
    markAsDismissed: t,
    showClientThemesCoachmark: n
  } = e, {
    analyticsLocations: a
  } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR), {
    v2EditorEnabled: s
  } = N.Mc.useExperiment({
    location: "ClientThemesEditor"
  }), {
    isPreview: c,
    shouldEditorAnimate: u
  } = (0, l.cj)([C.Z, m.Z], () => ({
    isPreview: C.Z.isPreview,
    shouldEditorAnimate: n && !m.Z.useReducedMotion
  })), d = (0, b.oq)().activePanel === b.wh.CLIENT_THEMES, _ = (0, P.q)();
  i.useEffect(() => _(x.rMx.CLIENT_THEME_PREVIEW_VIEWED), [_]), i.useEffect(() => {
    c && S.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
      type: j.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      location_stack: a
    })
  }, [c, a]);
  let p = (0, P.J)(),
    y = (0, h.Z)(null, c ? p : x.dG4);
  return i.useEffect(() => {
    if (c && !d) return p
  }, [c, d, p]), (0, r.jsx)(E.Gt, {
    value: a,
    children: (0, r.jsx)("div", {
      ref: y,
      "data-app-right-panel": true,
      className: o()(k.themeEditor, u ? k.editorAnimate : null),
      children: (0, r.jsxs)(f.y5t, {
        children: [n ? (0, r.jsx)(U, {}) : (0, r.jsx)(G, {
          markAsDismissed: t
        }), s && (0, r.jsx)(w.Z, {}), (0, r.jsx)(f.Ttm, {
          className: k.editorBody,
          children: (0, r.jsxs)(D.ZP, {
            type: D.yH.EDITOR,
            children: [!c && (0, r.jsx)(D.ZP.Basic, {
              className: k.selectionGroup
            }), (0, r.jsx)(D.ZP.Gradient, {
              className: k.selectionGroup,
              isCoachmark: n
            })]
          })
        }), (0, r.jsx)(Z, {
          markAsDismissed: t,
          isCoachmark: n
        })]
      })
    })
  })
}