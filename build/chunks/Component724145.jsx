/** Chunk was on web.js **/
/** chunk id: 724145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk351773 = require("./351773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk799360 = require("./799360.js"),
  Chunk639119 = require("./639119.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk587446 = require("./587446.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
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
let B = () => (0, Chunk951288.jsx)("div", {
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
  Z = e => {
    let {
      markAsDismissed: t
    } = e, n = (0, D.q)(), i = () => {
      null != t && t(M.L.DISMISS), n(j.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, w.C)()
    };
    return (0, r.jsxs)("div", {
      className: G.editorHeader,
      children: [(0, r.jsx)(f.P3F, {
        className: G.closeCircleButton,
        onClick: i,
        children: (0, r.jsx)(f.k$p, {
          size: "md",
          color: "currentColor",
          className: G.closeCircle
        })
      }), (0, r.jsx)(f.X6q, {
        variant: "heading-lg/extrabold",
        children: U.intl.string(U.t["xSR+a2"])
      })]
    })
  },
  F = e => {
    var t, n, i;
    let {
      onSubscribeSuccess: a,
      markAsDismissed: o
    } = e, {
      analyticsLocations: s
    } = (0, g.ZP)(m.Z.CLIENT_THEMES_EDITOR), [u, f] = (0, l.Wu)([A.default, R.Z], () => [R.Z.gradientPreset, N.ZP.isPremium(A.default.getCurrentUser())]), p = (0, y.N)(), {
      v2EditorEnabled: h
    } = P.Mc.useExperiment({
      location: "ClientThemesEditor"
    }), E = (0, N.Rt)({
      intervalType: null == p || null == (t = p.subscription_trial) ? true : t.interval,
      intervalCount: null == p || null == (n = p.subscription_trial) ? true : n.interval_count
    }), b = f ? U.intl.string(U.t.IJI7ys) : (null == p || null == (i = p.subscription_trial) ? true : i.sku_id) === k.Si.TIER_2 ? E : U.intl.string(U.t.mr4K7O), I = e => {
      e && (null == a || a(), null != o && o(M.L.PRIMARY), null != u && ((0, x.Yk)({
        isPersisted: true,
        themeName: c.Us[u.id],
        analyticsLocations: s
      }), (0, _.ZI)({
        backgroundGradientPresetId: u.id,
        theme: u.theme
      })))
    };
    return h ? (0, r.jsx)(O.Z, {
      subscriptionTier: k.Si.TIER_2,
      defaultTextOverride: b,
      premiumModalAnalyticsLocation: {
        object: j.qAy.BUTTON_CTA,
        objectType: j.Qqv.BUY
      },
      onSubscribeModalClose: I,
      fullWidth: true
    }) : (0, r.jsx)(v.Z, {
      size: d.zx.Sizes.MEDIUM,
      textOptions: {
        textOverride: b
      },
      subscriptionTier: k.Si.TIER_2,
      onSubscribeModalClose: I
    })
  },
  V = e => {
    let {
      markAsDismissed: t,
      isCoachmark: n
    } = e, {
      isPreview: a
    } = (0, l.cj)([R.Z], () => ({
      isPreview: R.Z.isPreview
    })), {
      v2EditorEnabled: o
    } = P.Mc.useExperiment({
      location: "ClientThemesEditor"
    }), [c, d] = i.useState(false), f = (0, D.q)(), _ = () => {
      null != t && t(M.L.DISMISS), f(j.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, w.C)(), n || (0, S.openUserSettings)(T.n.APPEARANCE_PANEL, {
        section: j.oAB.APPEARANCE
      })
    }, p = (0, b.B)({
      no: U.t["3D5yo6"],
      "sv-SE": U.t["3D5yo6"],
      uk: U.t["3D5yo6"],
      de: U.t["3D5yo6"]
    }, U.t["dqH+qq"]), h = (0, s.EQ)({
      isPreview: a,
      isCoachmark: n,
      forceShowCloseButton: c
    }).with({
      isCoachmark: true
    }, {
      forceShowCloseButton: true
    }, () => U.intl.string(U.t.cpT0Cg)).with({
      isPreview: true
    }, () => p).otherwise(() => U.intl.string(U.t.Olc2Ky)), m = o ? G.editorFooterV2 : G.editorFooter;
    return (0, r.jsxs)("div", {
      className: m,
      children: [a && (0, r.jsx)(F, {
        onSubscribeSuccess: () => {
          d(true)
        },
        markAsDismissed: t
      }), (0, r.jsx)(u.zxk, {
        fullWidth: true,
        onClick: _,
        variant: "secondary",
        text: h
      })]
    })
  };

function H(e) {
  let {
    markAsDismissed: t,
    showClientThemesCoachmark: n
  } = e, {
    analyticsLocations: a
  } = (0, g.ZP)(m.Z.CLIENT_THEMES_EDITOR), {
    v2EditorEnabled: s
  } = P.Mc.useExperiment({
    location: "ClientThemesEditor"
  }), {
    isPreview: c,
    shouldEditorAnimate: u
  } = (0, l.cj)([R.Z, h.Z], () => ({
    isPreview: R.Z.isPreview,
    shouldEditorAnimate: n && !h.Z.useReducedMotion
  })), d = (0, E.oq)().activePanel === E.wh.CLIENT_THEMES, _ = (0, D.q)();
  i.useEffect(() => _(j.rMx.CLIENT_THEME_PREVIEW_VIEWED), [_]), i.useEffect(() => {
    c && C.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
      type: k.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      location_stack: a
    })
  }, [c, a]);
  let b = (0, D.J)(),
    y = (0, p.Z)(null, c ? b : j.dG4);
  return i.useEffect(() => {
    if (c && !d) return b
  }, [c, d, b]), (0, r.jsx)(g.Gt, {
    value: a,
    children: (0, r.jsx)("div", {
      ref: y,
      "data-app-right-panel": true,
      className: o()(G.themeEditor, u ? G.editorAnimate : null),
      children: (0, r.jsxs)(f.y5t, {
        children: [n ? (0, r.jsx)(B, {}) : (0, r.jsx)(Z, {
          markAsDismissed: t
        }), s && (0, r.jsx)(L.Z, {}), (0, r.jsx)(f.Ttm, {
          className: G.editorBody,
          children: (0, r.jsxs)(x.ZP, {
            type: x.yH.EDITOR,
            children: [!c && (0, r.jsx)(x.ZP.Basic, {
              className: G.selectionGroup
            }), (0, r.jsx)(x.ZP.Gradient, {
              className: G.selectionGroup,
              isCoachmark: n
            })]
          })
        }), (0, r.jsx)(V, {
          markAsDismissed: t,
          isCoachmark: n
        })]
      })
    })
  })
}