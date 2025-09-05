/** Chunk was on web.js **/
/** chunk id: 907459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk874926 = require("./874926.js"),
  Chunk737604 = require("./737604.js"),
  Chunk539873 = require("./539873.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk549258 = require("./549258.js");
let w = () => {
    var e, t, n;
    let i = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk74538.ZP.isPremium(Chunk594174.default.getCurrentUser())),
      a = (0, Chunk639119.N)(),
      o = (null == Chunk120356 || null == (e = Chunk120356.subscription_trial) ? true : module.sku_id) === Chunk474936.Si.TIER_2;
    return (0, Chunk951288.jsx)(Chunk767714.Z, {
      size: Chunk755721.zx.Sizes.MEDIUM,
      textOptions: {
        textOverride: Chunk647438 ? Chunk388032.intl.string(Chunk388032.t.IJI7ys) : o ? (0, Chunk74538.Rt)({
          intervalType: null == Chunk120356 || null == (t = Chunk120356.subscription_trial) ? true : exports.interval,
          intervalCount: null == Chunk120356 || null == (n = Chunk120356.subscription_trial) ? true : require.interval_count
        }) : Chunk388032.intl.string(Chunk388032.t.mr4K7O)
      },
      subscriptionTier: Chunk474936.Si.TIER_2
    })
  },
  D = e => {
    let {
      markAsDismissed: t
    } = e, n = () => {
      null == t || t(C.L.DISMISS), (0, m.Ll)(), (0, I.O)()
    };
    return (0, r.jsxs)("div", {
      className: P.editorHeader,
      children: [(0, r.jsx)(u.P3F, {
        className: P.closeCircleButton,
        onClick: () => n(),
        children: (0, r.jsx)(u.k$p, {
          size: "md",
          color: "currentColor",
          className: P.closeCircle
        })
      }), (0, r.jsxs)("div", {
        className: P.title,
        children: [(0, r.jsx)(u.X6q, {
          variant: "heading-lg/extrabold",
          children: R.intl.string(R.t["hb/wEx"])
        }), (0, r.jsx)(b.Z, {
          className: P.premiumIcon
        })]
      })]
    })
  },
  x = e => {
    let {
      isCoachmark: t,
      markAsDismissed: n
    } = e, i = (0, s.e7)([T.Z], () => T.Z.isUpsellPreview), a = () => {
      null == n || n(C.L.DISMISS), (0, m.Ll)(), (0, I.O)(), t || d.Z.open()
    };
    return (0, r.jsxs)("div", {
      className: P.editorFooter,
      children: [i && (0, r.jsx)(w, {}), (0, r.jsx)(l.z, {
        onClick: a,
        variant: "secondary",
        fullWidth: true,
        text: i || t ? R.intl.string(R.t["dqH+qq"]) : R.intl.string(R.t.Olc2Ky)
      })]
    })
  };

function L(e) {
  let {
    isCoachmark: t,
    markAsDismissed: n
  } = e, {
    analyticsLocations: a
  } = (0, h.ZP)(p.Z.APP_ICON_EDITOR), l = (0, s.e7)([y.default], () => y.default.getCurrentUser()), {
    isUpsellPreview: c,
    shouldEditorAnimate: d
  } = (0, s.cj)([T.Z, _.Z], () => ({
    isUpsellPreview: T.Z.isUpsellPreview,
    shouldEditorAnimate: t && !_.Z.useReducedMotion
  })), g = m.oq.getState().activePanel === m.wh.APP_ICON;
  i.useEffect(() => {
    c && O.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
      type: N.cd.APP_ICON_UPSELL,
      location_stack: a
    })
  }, [c, a]);
  let E = (0, f.Z)(null, c ? I.O : A.dG4);
  return (i.useEffect(() => {
    if (c && !g) return I.O
  }, [c, g]), null == l) ? null : (0, r.jsx)(h.Gt, {
    value: a,
    children: (0, r.jsx)("div", {
      ref: E,
      className: o()(P.editor, d ? P.editorAnimate : null),
      "data-app-right-panel": true,
      children: (0, r.jsxs)(u.y5t, {
        children: [(0, r.jsx)(D, {
          markAsDismissed: n
        }), (0, r.jsx)(u.Ttm, {
          className: P.editorBody,
          children: (0, r.jsx)(S.Z, {
            className: P.selectionGroup,
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