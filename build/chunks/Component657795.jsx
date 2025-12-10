/** Chunk was on web.js **/
/** chunk id: 657795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk622909 = require("./622909.js"),
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
  Chunk107293 = require("./107293.js");
let I = 80;

function T(e) {
  var t, n, a;
  let {
    className: T,
    onClose: C
  } = e;
  (0, m.fP)();
  let {
    analyticsLocations: A
  } = (0, u.ZP)(c.Z.EMPTY_STATE), N = (0, s.Wu)([h.Z], () => b.Wt.map(e => h.Z.getStickerById(e)));
  i.useEffect(() => {
    _.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
      type: O.cd.EMPTY_STICKER_PICKER_UPSELL,
      source: {
        section: y.jXE.EMPTY_STICKER_PICKER_UPSELL
      },
      location_stack: A
    })
  }, [A]);
  let P = (0, f.N)(),
    R = (0, d.N)(),
    D = null != P || null != R,
    w = (null == P || null == (t = P.subscription_trial) ? true : t.sku_id) === O.Si.TIER_0;
  return (0, r.jsxs)("div", {
    className: o()(S.emptyState, T, {
      [S.unifyTrialUpsell]: D
    }),
    children: [D ? (0, r.jsx)(p.ZP, {
      discountOffer: R,
      trialOffer: P,
      onClose: C,
      type: O.cd.EMPTY_STICKER_PICKER_UPSELL,
      subscriptionTier: null != (a = null == P || null == (n = P.subscription_trial) ? true : n.sku_id) ? a : O.Si.TIER_2,
      children: v.intl.string(v.t.FnNud4)
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Heading, {
        className: S.header,
        variant: "heading-xl/semibold",
        children: v.intl.string(v.t.HEm04J)
      }), (0, r.jsx)(l.Text, {
        className: S.subtitle,
        color: "text-default",
        variant: "text-md/normal",
        children: v.intl.string(v.t.FnNud4)
      }), (0, r.jsx)("div", {
        className: S.stickersRow,
        children: N.filter(e => null != e).map(e => (0, r.jsx)(g.Z, {
          sticker: e,
          className: S.sticker,
          size: I
        }, null == e ? true : e.id))
      })]
    }), !D && (0, r.jsx)(E.Z, {
      analyticsSection: y.jXE.EXPRESSION_PICKER,
      buttonText: D ? w ? v.intl.string(v.t.hz78hE) : v.intl.string(v.t["Gd/XHF"]) : true
    })]
  })
}