/** Chunk was on web.js **/
/** chunk id: 724145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk159691 = require("./159691.js"),
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
  Chunk587446 = require("./587446.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk514361 = require("./514361.js"),
  Chunk55358 = require("./55358.js"),
  Chunk572397 = require("./572397.js"),
  Chunk708154 = require("./708154.jsx"),
  Chunk705262 = require("./705262.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk826425 = require("./826425.js");
let k = () => (0, Chunk54381.jsx)("div", {
    className: Chunk826425.editorHeader,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk826425.bannerUpsell,
      children: [(0, Chunk54381.jsx)(Chunk587446.Z, {
        className: Chunk826425.premiumIcon
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/bold",
        color: "always-white",
        children: Chunk388032.intl.string(Chunk388032.t.POSLGY)
      })]
    })
  }),
  U = e => {
    let {
      markAsDismissed: t
    } = e, n = (0, R.q)(), i = () => {
      null != t && t(L.L.DISMISS), n(w.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.C)()
    };
    return (0, r.jsxs)("div", {
      className: j.editorHeader,
      children: [(0, r.jsx)(d.P3F, {
        className: j.closeCircleButton,
        onClick: i,
        children: (0, r.jsx)(d.k$p, {
          size: "md",
          color: "currentColor",
          className: j.closeCircle
        })
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-lg/extrabold",
        children: M.intl.string(M.t["xSR+a/"])
      })]
    })
  },
  G = e => {
    var t, n, i;
    let {
      onSubscribeSuccess: a,
      markAsDismissed: o
    } = e, {
      analyticsLocations: s
    } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR), [u, d] = (0, l.Wu)([T.default, C.Z], () => [C.Z.gradientPreset, A.ZP.isPremium(T.default.getCurrentUser())]), _ = (0, b.N)(), p = (0, A.Rt)({
      intervalType: null == _ || null == (t = _.subscription_trial) ? true : t.interval,
      intervalCount: null == _ || null == (n = _.subscription_trial) ? true : n.interval_count
    }), g = d ? M.intl.string(M.t.IJI7yk) : (null == _ || null == (i = _.subscription_trial) ? true : i.sku_id) === x.Si.TIER_2 ? p : M.intl.string(M.t.mr4K7D), E = e => {
      e && (null == a || a(), null != o && o(L.L.PRIMARY), null != u && ((0, D.Yk)({
        isPersisted: true,
        themeName: c.Us[u.id],
        analyticsLocations: s
      }), (0, f.ZI)({
        backgroundGradientPresetId: u.id,
        theme: u.theme
      })))
    };
    return (0, r.jsx)(y.Z, {
      subscriptionTier: x.Si.TIER_2,
      defaultTextOverride: g,
      premiumModalAnalyticsLocation: {
        object: w.qAy.BUTTON_CTA,
        objectType: w.AnalyticsObjectTypes.BUY
      },
      onSubscribeModalClose: E,
      fullWidth: true
    })
  },
  B = e => {
    let {
      markAsDismissed: t,
      isCoachmark: n
    } = e, {
      isPreview: a
    } = (0, l.cj)([C.Z], () => ({
      isPreview: C.Z.isPreview
    })), [o, c] = i.useState(false), d = (0, R.q)(), f = () => {
      null != t && t(L.L.DISMISS), d(w.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.C)(), n || (0, I.openUserSettings)(v.n.APPEARANCE_PANEL, {
        section: w.oAB.APPEARANCE
      })
    }, _ = (0, E.B)({
      no: M.t["3D5yo/"],
      "sv-SE": M.t["3D5yo/"],
      uk: M.t["3D5yo/"],
      de: M.t["3D5yo/"]
    }, M.t["dqH+qr"]), p = (0, s.EQ)({
      isPreview: a,
      isCoachmark: n,
      forceShowCloseButton: o
    }).with({
      isCoachmark: true
    }, {
      forceShowCloseButton: true
    }, () => M.intl.string(M.t.cpT0Cq)).with({
      isPreview: true
    }, () => _).otherwise(() => M.intl.string(M.t.Olc2K3));
    return (0, r.jsxs)("div", {
      className: j.editorFooter,
      children: [a && (0, r.jsx)(G, {
        onSubscribeSuccess: () => {
          c(true)
        },
        markAsDismissed: t
      }), (0, r.jsx)(u.zxk, {
        fullWidth: true,
        onClick: f,
        variant: "secondary",
        text: p
      })]
    })
  };

function Z(e) {
  let {
    markAsDismissed: t,
    showClientThemesCoachmark: n
  } = e, {
    analyticsLocations: a
  } = (0, m.ZP)(h.Z.CLIENT_THEMES_EDITOR), {
    isPreview: s,
    shouldEditorAnimate: c
  } = (0, l.cj)([C.Z, p.Z], () => ({
    isPreview: C.Z.isPreview,
    shouldEditorAnimate: n && !p.Z.useReducedMotion
  })), u = (0, g.oq)().activePanel === g.wh.CLIENT_THEMES, f = (0, R.q)();
  i.useEffect(() => f(w.rMx.CLIENT_THEME_PREVIEW_VIEWED), [f]), i.useEffect(() => {
    s && S.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
      type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      location_stack: a
    })
  }, [s, a]);
  let E = (0, R.J)(),
    b = (0, _.Z)(null, s ? E : w.dG4);
  return i.useEffect(() => {
    if (s && !u) return E
  }, [s, u, E]), (0, r.jsx)(m.Gt, {
    value: a,
    children: (0, r.jsx)("div", {
      ref: b,
      "data-app-right-panel": true,
      className: o()(j.themeEditor, c ? j.editorAnimate : null),
      children: (0, r.jsxs)(d.y5t, {
        children: [n ? (0, r.jsx)(k, {}) : (0, r.jsx)(U, {
          markAsDismissed: t
        }), (0, r.jsx)(P.Z, {}), (0, r.jsx)(d.Ttm, {
          className: j.editorBody,
          children: (0, r.jsxs)(D.ZP, {
            type: D.yH.EDITOR,
            children: [!s && (0, r.jsx)(D.ZP.Basic, {
              className: j.selectionGroup
            }), (0, r.jsx)(D.ZP.Gradient, {
              className: j.selectionGroup,
              isCoachmark: n
            })]
          })
        }), (0, r.jsx)(B, {
          markAsDismissed: t,
          isCoachmark: n
        })]
      })
    })
  })
}