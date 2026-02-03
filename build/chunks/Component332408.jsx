/** Chunk was on web.js **/
/** chunk id: 332408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./896048.js"), require("./801541.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk889137 = require("./889137.js"),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk82495 = require("./82495.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk793943 = require("./793943.js"),
  Chunk996254 = require("./996254.js"),
  Chunk234419 = require("./234419.js"),
  Chunk792656 = require("./792656.jsx"),
  Chunk450232 = require("./450232.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk47671 = require("./47671.js"),
  Chunk11029 = require("./11029.js"),
  Chunk58034 = require("./58034.js"),
  Chunk474529 = require("./474529.jsx"),
  Chunk692798 = require("./692798.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk218098 = require("./218098.js");
let k = () => (0, r.jsx)("div", {
    className: j.nV,
    children: (0, r.jsxs)("div", {
      className: j.mR,
      children: [(0, r.jsx)(O.A, {
        className: j.PC
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-md/bold",
        color: "always-white",
        children: M.intl.string(M.t.POSLGY)
      })]
    })
  }),
  U = e => {
    let {
      markAsDismissed: t
    } = e, n = (0, w.H)(), i = () => {
      null != t && t(L.i.DISMISS), n(D.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, N.D)()
    };
    return (0, r.jsxs)("div", {
      className: j.nV,
      children: [(0, r.jsx)(d.DUT, {
        className: j.VV,
        onClick: i,
        children: (0, r.jsx)(d.aXh, {
          size: "md",
          color: "currentColor",
          className: j.P0
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
    } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR), [u, d] = (0, l.yK)([I.default, C.A], () => [C.A.gradientPreset, T.Ay.isPremium(I.default.getCurrentUser())]), p = (0, y.V)(), _ = (0, T.FY)({
      intervalType: null == p || null == (t = p.subscription_trial) ? true : t.interval,
      intervalCount: null == p || null == (n = p.subscription_trial) ? true : n.interval_count
    }), g = d ? M.intl.string(M.t.IJI7yk) : (null == p || null == (i = p.subscription_trial) ? true : i.sku_id) === x.pe.TIER_2 ? _ : M.intl.string(M.t.mr4K7D), E = e => {
      e && (null == a || a(), null != o && o(L.i.PRIMARY), null != u && ((0, P.X8)({
        isPersisted: true,
        themeName: c.ju[u.id],
        analyticsLocations: s
      }), (0, f.u_)({
        backgroundGradientPresetId: u.id,
        theme: u.theme
      })))
    };
    return (0, r.jsx)(b.A, {
      subscriptionTier: x.pe.TIER_2,
      defaultTextOverride: g,
      premiumModalAnalyticsLocation: {
        object: D.ZSU.BUTTON_CTA,
        objectType: D.AnalyticsObjectTypes.BUY
      },
      onSubscribeModalClose: E,
      fullWidth: true
    })
  },
  F = e => {
    let {
      markAsDismissed: t,
      isCoachmark: n
    } = e, {
      isPreview: a
    } = (0, l.cf)([C.A], () => ({
      isPreview: C.A.isPreview
    })), [o, c] = i.useState(false), d = (0, w.H)(), f = () => {
      null != t && t(L.i.DISMISS), d(D.HAw.CLIENT_THEME_PREVIEW_CLOSED), (0, N.D)(), n || (0, A.openUserSettings)(v.X.APPEARANCE_PANEL, {
        section: D.nc_.APPEARANCE
      })
    }, p = (0, E.X)({
      no: M.t["3D5yo/"],
      "sv-SE": M.t["3D5yo/"],
      uk: M.t["3D5yo/"],
      de: M.t["3D5yo/"]
    }, M.t["dqH+qr"]), _ = (0, s.YW)({
      isPreview: a,
      isCoachmark: n,
      forceShowCloseButton: o
    }).with({
      isCoachmark: true
    }, {
      forceShowCloseButton: true
    }, () => M.intl.string(M.t.cpT0Cq)).with({
      isPreview: true
    }, () => p).otherwise(() => M.intl.string(M.t.Olc2K3));
    return (0, r.jsxs)("div", {
      className: j.N3,
      children: [a && (0, r.jsx)(G, {
        onSubscribeSuccess: () => {
          c(true)
        },
        markAsDismissed: t
      }), (0, r.jsx)(u.$nd, {
        fullWidth: true,
        onClick: f,
        variant: "secondary",
        text: _
      })]
    })
  };

function V(e) {
  let {
    markAsDismissed: t,
    showClientThemesCoachmark: n
  } = e, {
    analyticsLocations: a
  } = (0, m.Ay)(h.A.CLIENT_THEMES_EDITOR), {
    isPreview: s,
    shouldEditorAnimate: c
  } = (0, l.cf)([C.A, _.A], () => ({
    isPreview: C.A.isPreview,
    shouldEditorAnimate: n && !_.A.useReducedMotion
  })), u = (0, g.fy)().activePanel === g.HP.CLIENT_THEMES, f = (0, w.H)();
  i.useEffect(() => f(D.HAw.CLIENT_THEME_PREVIEW_VIEWED), [f]), i.useEffect(() => {
    s && S.default.track(D.HAw.PREMIUM_UPSELL_VIEWED, {
      type: x.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      location_stack: a
    })
  }, [s, a]);
  let E = (0, w.Z)(),
    y = (0, p.A)(null, s ? E : D.tEg);
  return i.useEffect(() => {
    if (s && !u) return E
  }, [s, u, E]), (0, r.jsx)(m.f5, {
    value: a,
    children: (0, r.jsx)("div", {
      ref: y,
      "data-app-right-panel": true,
      className: o()(j.HS, c ? j.hP : null),
      children: (0, r.jsxs)(d.Fmo, {
        children: [n ? (0, r.jsx)(k, {}) : (0, r.jsx)(U, {
          markAsDismissed: t
        }), (0, r.jsx)(R.A, {}), (0, r.jsx)(d.HOs, {
          className: j.sV,
          children: (0, r.jsxs)(P.Ay, {
            type: P.v0.EDITOR,
            children: [!s && (0, r.jsx)(P.Ay.Basic, {
              className: j.Gg
            }), (0, r.jsx)(P.Ay.Gradient, {
              className: j.Gg,
              isCoachmark: n
            })]
          })
        }), (0, r.jsx)(F, {
          markAsDismissed: t,
          isCoachmark: n
        })]
      })
    })
  })
}