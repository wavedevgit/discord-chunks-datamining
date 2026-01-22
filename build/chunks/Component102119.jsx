/** Chunk was on web.js **/
/** chunk id: 102119, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk82495 = require("./82495.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk793943 = require("./793943.js"),
  Chunk234419 = require("./234419.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk450232 = require("./450232.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk535229 = require("./535229.js"),
  Chunk526162 = require("./526162.js"),
  Chunk848971 = require("./848971.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk378399 = require("./378399.js");
let D = () => {
    var e, t, n;
    let i = (0, o.bG)([O.default], () => v.Ay.isPremium(O.default.getCurrentUser())),
      a = (0, m.V)(),
      s = (null == a || null == (e = a.subscription_trial) ? true : e.sku_id) === R.pe.TIER_2;
    return (0, r.jsx)(g.A, {
      size: c.$n.Sizes.MEDIUM,
      textOptions: {
        textOverride: i ? w.intl.string(w.t.IJI7yk) : s ? (0, v.FY)({
          intervalType: null == a || null == (t = a.subscription_trial) ? true : t.interval,
          intervalCount: null == a || null == (n = a.subscription_trial) ? true : n.interval_count
        }) : w.intl.string(w.t.mr4K7D)
      },
      subscriptionTier: R.pe.TIER_2
    })
  },
  x = e => {
    let {
      markAsDismissed: t
    } = e, n = () => {
      null == t || t(N.i.DISMISS), (0, h.Jp)(), (0, S.U)()
    };
    return (0, r.jsxs)("div", {
      className: P.nV,
      children: [(0, r.jsx)(u.DUT, {
        className: P.VV,
        onClick: () => n(),
        children: (0, r.jsx)(u.aXh, {
          size: "md",
          color: "currentColor",
          className: P.P0
        })
      }), (0, r.jsxs)("div", {
        className: P.DD,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-lg/extrabold",
          children: w.intl.string(w.t["hb/wE0"])
        }), (0, r.jsx)(E.A, {
          className: P.PC
        })]
      })]
    })
  },
  L = e => {
    let {
      isCoachmark: t,
      markAsDismissed: n
    } = e, i = (0, o.bG)([I.A], () => I.A.isUpsellPreview), a = () => {
      null == n || n(N.i.DISMISS), (0, h.Jp)(), (0, S.U)(), t || (0, y.openUserSettings)(b.X.APPEARANCE_PANEL, {
        section: C.nc_.APPEARANCE
      })
    };
    return (0, r.jsxs)("div", {
      className: P.N3,
      children: [i && (0, r.jsx)(D, {}), (0, r.jsx)(l.$nd, {
        onClick: a,
        variant: "secondary",
        fullWidth: true,
        text: i || t ? w.intl.string(w.t["dqH+qr"]) : w.intl.string(w.t.Olc2K3)
      })]
    })
  };

function j(e) {
  let {
    isCoachmark: t,
    markAsDismissed: n
  } = e, {
    analyticsLocations: a
  } = (0, _.Ay)(p.A.APP_ICON_EDITOR), l = (0, o.bG)([O.default], () => O.default.getCurrentUser()), {
    isUpsellPreview: c,
    shouldEditorAnimate: m
  } = (0, o.cf)([I.A, f.A], () => ({
    isUpsellPreview: I.A.isUpsellPreview,
    shouldEditorAnimate: t && !f.A.useReducedMotion
  })), g = h.fy.getState().activePanel === h.HP.APP_ICON;
  i.useEffect(() => {
    c && A.default.track(C.HAw.PREMIUM_UPSELL_VIEWED, {
      type: R.e.APP_ICON_UPSELL,
      location_stack: a
    })
  }, [c, a]);
  let E = (0, d.A)(null, c ? S.U : C.tEg);
  return (i.useEffect(() => {
    if (c && !g) return S.U
  }, [c, g]), null == l) ? null : (0, r.jsx)(_.f5, {
    value: a,
    children: (0, r.jsx)("div", {
      ref: E,
      className: s()(P.EN, m ? P.hP : null),
      "data-app-right-panel": true,
      children: (0, r.jsxs)(u.Fmo, {
        children: [(0, r.jsx)(x, {
          markAsDismissed: n
        }), (0, r.jsx)(u.HOs, {
          className: P.sV,
          children: (0, r.jsx)(T.A, {
            className: P.Gg,
            isEditor: true
          })
        }), (0, r.jsx)(L, {
          markAsDismissed: n,
          isCoachmark: t
        })]
      })
    })
  })
}