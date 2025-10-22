/** Chunk was on web.js **/
/** chunk id: 657795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk453070 = require("./453070.js"),
  Chunk926491 = require("./926491.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk251159 = require("./251159.jsx"),
  Chunk611480 = require("./611480.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk908522 = require("./908522.js");
let T = 80;

function S(e) {
  var t, n, a;
  let {
    className: S,
    onClose: A
  } = e;
  (0, h.fP)();
  let {
    analyticsLocations: C
  } = (0, u.ZP)(c.Z.EMPTY_STATE), N = (0, s.Wu)([m.Z], () => b.Wt.map(e => m.Z.getStickerById(e)));
  i.useEffect(() => {
    p.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
      type: O.cd.EMPTY_STICKER_PICKER_UPSELL,
      source: {
        section: y.jXE.EMPTY_STICKER_PICKER_UPSELL
      },
      location_stack: C
    })
  }, [C]);
  let R = (0, f.N)(),
    P = (0, d.Ng)(),
    w = null != R || null != P,
    D = (null == R || null == (t = R.subscription_trial) ? true : t.sku_id) === O.Si.TIER_0;
  return (0, r.jsxs)("div", {
    className: o()(I.emptyState, S, {
      [I.unifyTrialUpsell]: w
    }),
    children: [w ? (0, r.jsx)(_.ZP, {
      discountOffer: P,
      trialOffer: R,
      onClose: A,
      type: O.cd.EMPTY_STICKER_PICKER_UPSELL,
      subscriptionTier: null != (a = null == R || null == (n = R.subscription_trial) ? true : n.sku_id) ? a : O.Si.TIER_2,
      children: v.intl.string(v.t.FnNud4)
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Heading, {
        className: I.header,
        variant: "heading-xl/semibold",
        children: v.intl.string(v.t.HEm04J)
      }), (0, r.jsx)(l.Text, {
        className: I.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: v.intl.string(v.t.FnNud4)
      }), (0, r.jsx)("div", {
        className: I.stickersRow,
        children: N.filter(e => null != e).map(e => (0, r.jsx)(g.Z, {
          sticker: e,
          className: I.sticker,
          size: T
        }, null == e ? true : e.id))
      })]
    }), !w && (0, r.jsx)(E.Z, {
      analyticsSection: y.jXE.EXPRESSION_PICKER,
      buttonText: w ? D ? v.intl.string(v.t.hz78hE) : v.intl.string(v.t["Gd/XHF"]) : true
    })]
  })
}