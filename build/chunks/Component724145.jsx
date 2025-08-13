/** Chunk was on web.js **/
/** chunk id: 724145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js"), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk767714 = require("./767714.jsx"),
  Chunk587446 = require("./587446.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk514361 = require("./514361.js"),
  Chunk55358 = require("./55358.js"),
  Chunk572397 = require("./572397.js"),
  Chunk705262 = require("./705262.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk312841 = require("./312841.js");
let M = () => (0, Chunk255367.jsx)("div", {
    className: Chunk312841.editorHeader,
    children: (0, Chunk255367.jsxs)("div", {
      className: Chunk312841.bannerUpsell,
      children: [(0, Chunk255367.jsx)(Chunk587446.Z, {
        className: Chunk312841.premiumIcon
      }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-md/bold",
        color: "always-white",
        children: Chunk388032.intl.string(Chunk388032.t.POSLGR)
      })]
    })
  }),
  j = e => {
    let {
      markAsDismissed: t
    } = e, n = (0, C.q)(), i = () => {
      null != t && t(w.L.DISMISS), n(P.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.C)()
    };
    return (0, r.jsxs)("div", {
      className: x.editorHeader,
      children: [(0, r.jsx)(f.P3F, {
        className: x.closeCircleButton,
        onClick: i,
        children: (0, r.jsx)(f.k$p, {
          size: "md",
          color: "currentColor",
          className: x.closeCircle
        })
      }), (0, r.jsx)(f.X6q, {
        variant: "heading-lg/extrabold",
        children: L.intl.string(L.t["xSR+a2"])
      })]
    })
  },
  k = e => {
    var t, n, i;
    let {
      onSubscribeSuccess: o,
      markAsDismissed: a
    } = e, {
      analyticsLocations: s
    } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR), [u, f] = (0, l.Wu)([I.default, A.Z], () => [A.Z.gradientPreset, S.ZP.isPremium(I.default.getCurrentUser())]), p = (0, y.N)(), h = (0, S.Rt)({
      intervalType: null == p || null == (t = p.subscription_trial) ? true : t.interval,
      intervalCount: null == p || null == (n = p.subscription_trial) ? true : n.interval_count
    }), m = e => {
      e && (null == o || o(), null != a && a(w.L.PRIMARY), null != u && ((0, R.Yk)({
        isPersisted: true,
        themeName: c.Us[u.id],
        analyticsLocations: s
      }), (0, _.ZI)({
        backgroundGradientPresetId: u.id,
        theme: u.theme
      })))
    };
    return (0, r.jsx)(O.Z, {
      size: d.zx.Sizes.MEDIUM,
      textOptions: {
        textOverride: f ? L.intl.string(L.t.IJI7ys) : (null == p || null == (i = p.subscription_trial) ? true : i.sku_id) === D.Si.TIER_2 ? h : L.intl.string(L.t.mr4K7O)
      },
      subscriptionTier: D.Si.TIER_2,
      onSubscribeModalClose: m
    })
  },
  U = e => {
    let {
      markAsDismissed: t,
      isCoachmark: n
    } = e, {
      isPreview: o
    } = (0, l.cj)([A.Z], () => ({
      isPreview: A.Z.isPreview
    })), [a, c] = i.useState(false), d = (0, C.q)(), f = () => {
      null != t && t(w.L.DISMISS), d(P.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.C)(), n || p.Z.open()
    }, _ = (0, s.EQ)({
      isPreview: o,
      isCoachmark: n,
      forceShowCloseButton: a
    }).with({
      isCoachmark: true
    }, {
      forceShowCloseButton: true
    }, () => L.intl.string(L.t.cpT0Cg)).with({
      isPreview: true
    }, () => L.intl.string(L.t["dqH+qq"])).otherwise(() => L.intl.string(L.t.Olc2Ky));
    return (0, r.jsxs)("div", {
      className: x.editorFooter,
      children: [o && (0, r.jsx)(k, {
        onSubscribeSuccess: () => {
          c(true)
        },
        markAsDismissed: t
      }), (0, r.jsx)(u.z, {
        fullWidth: true,
        onClick: f,
        variant: "secondary",
        text: _
      })]
    })
  };

function G(e) {
  let {
    markAsDismissed: t,
    showClientThemesCoachmark: n
  } = e, {
    analyticsLocations: o
  } = (0, E.ZP)(g.Z.CLIENT_THEMES_EDITOR), {
    isPreview: s,
    shouldEditorAnimate: c
  } = (0, l.cj)([A.Z, m.Z], () => ({
    isPreview: A.Z.isPreview,
    shouldEditorAnimate: n && !m.Z.useReducedMotion
  })), u = (0, b.oq)().activePanel === b.wh.CLIENT_THEMES, d = (0, C.q)();
  i.useEffect(() => d(P.rMx.CLIENT_THEME_PREVIEW_VIEWED), [d]), i.useEffect(() => {
    s && T.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
      type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      location_stack: o
    })
  }, [s, o]);
  let _ = (0, C.J)(),
    p = (0, h.Z)(null, s ? _ : P.dG4);
  return i.useEffect(() => {
    if (s && !u) return _
  }, [s, u, _]), (0, r.jsx)(E.Gt, {
    value: o,
    children: (0, r.jsx)("div", {
      ref: p,
      "data-app-right-panel": true,
      className: a()(x.themeEditor, c ? x.editorAnimate : null),
      children: (0, r.jsxs)(f.y5t, {
        children: [n ? (0, r.jsx)(M, {}) : (0, r.jsx)(j, {
          markAsDismissed: t
        }), (0, r.jsx)(f.Ttm, {
          className: x.editorBody,
          children: (0, r.jsxs)(R.ZP, {
            type: R.yH.EDITOR,
            children: [!s && (0, r.jsx)(R.ZP.Basic, {
              className: x.selectionGroup
            }), (0, r.jsx)(R.ZP.Gradient, {
              className: x.selectionGroup,
              isCoachmark: n
            })]
          })
        }), (0, r.jsx)(U, {
          markAsDismissed: t,
          isCoachmark: n
        })]
      })
    })
  })
}