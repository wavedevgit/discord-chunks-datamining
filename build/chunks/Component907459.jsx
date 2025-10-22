/** Chunk was on web.js **/
/** chunk id: 907459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk351773 = require("./351773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk587446 = require("./587446.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk874926 = require("./874926.js"),
  Chunk737604 = require("./737604.js"),
  Chunk539873 = require("./539873.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk164161 = require("./164161.js");
let D = () => {
    var e, t, n;
    let i = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk74538.ZP.isPremium(Chunk594174.default.getCurrentUser())),
      a = (0, Chunk639119.N)(),
      o = (null == Chunk120356 || null == (e = Chunk120356.subscription_trial) ? true : module.sku_id) === Chunk474936.Si.TIER_2;
    return (0, Chunk951288.jsx)(Chunk767714.Z, {
      size: Chunk755721.zx.Sizes.MEDIUM,
      textOptions: {
        textOverride: Chunk647438 ? Chunk388032.intl.string(Chunk388032.t.IJI7yk) : o ? (0, Chunk74538.Rt)({
          intervalType: null == Chunk120356 || null == (t = Chunk120356.subscription_trial) ? true : exports.interval,
          intervalCount: null == Chunk120356 || null == (n = Chunk120356.subscription_trial) ? true : require.interval_count
        }) : Chunk388032.intl.string(Chunk388032.t.mr4K7D)
      },
      subscriptionTier: Chunk474936.Si.TIER_2
    })
  },
  L = e => {
    let {
      markAsDismissed: t
    } = e, n = () => {
      null == t || t(N.L.DISMISS), (0, h.Ll)(), (0, T.O)()
    };
    return (0, r.jsxs)("div", {
      className: w.editorHeader,
      children: [(0, r.jsx)(u.P3F, {
        className: w.closeCircleButton,
        onClick: () => n(),
        children: (0, r.jsx)(u.k$p, {
          size: "md",
          color: "currentColor",
          className: w.closeCircle
        })
      }), (0, r.jsxs)("div", {
        className: w.title,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-lg/extrabold",
          children: P.intl.string(P.t["hb/wE0"])
        }), (0, r.jsx)(E.Z, {
          className: w.premiumIcon
        })]
      })]
    })
  },
  x = e => {
    let {
      isCoachmark: t,
      markAsDismissed: n
    } = e, i = (0, s.e7)([S.Z], () => S.Z.isUpsellPreview), a = () => {
      null == n || n(N.L.DISMISS), (0, h.Ll)(), (0, T.O)(), t || (0, y.openUserSettings)(b.n.APPEARANCE_PANEL, {
        section: C.oAB.APPEARANCE
      })
    };
    return (0, r.jsxs)("div", {
      className: w.editorFooter,
      children: [i && (0, r.jsx)(D, {}), (0, r.jsx)(l.zxk, {
        onClick: a,
        variant: "secondary",
        fullWidth: true,
        text: i || t ? P.intl.string(P.t["dqH+qr"]) : P.intl.string(P.t.Olc2K3)
      })]
    })
  };

function M(e) {
  let {
    isCoachmark: t,
    markAsDismissed: n
  } = e, {
    analyticsLocations: a
  } = (0, p.ZP)(_.Z.APP_ICON_EDITOR), l = (0, s.e7)([O.default], () => O.default.getCurrentUser()), {
    isUpsellPreview: c,
    shouldEditorAnimate: m
  } = (0, s.cj)([S.Z, f.Z], () => ({
    isUpsellPreview: S.Z.isUpsellPreview,
    shouldEditorAnimate: t && !f.Z.useReducedMotion
  })), g = h.oq.getState().activePanel === h.wh.APP_ICON;
  i.useEffect(() => {
    c && v.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
      type: R.cd.APP_ICON_UPSELL,
      location_stack: a
    })
  }, [c, a]);
  let E = (0, d.Z)(null, c ? T.O : C.dG4);
  return (i.useEffect(() => {
    if (c && !g) return T.O
  }, [c, g]), null == l) ? null : (0, r.jsx)(p.Gt, {
    value: a,
    children: (0, r.jsx)("div", {
      ref: E,
      className: o()(w.editor, m ? w.editorAnimate : null),
      "data-app-right-panel": true,
      children: (0, r.jsxs)(u.y5t, {
        children: [(0, r.jsx)(L, {
          markAsDismissed: n
        }), (0, r.jsx)(u.Ttm, {
          className: w.editorBody,
          children: (0, r.jsx)(A.Z, {
            className: w.selectionGroup,
            isEditor: true
          })
        }), (0, r.jsx)(x, {
          markAsDismissed: n,
          isCoachmark: t
        })]
      })
    })
  })
}