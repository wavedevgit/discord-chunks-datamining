/** Chunk was on web.js **/
/** chunk id: 151189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk45521 = require("./45521.js"),
  Chunk251159 = require("./251159.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk935149 = require("./935149.js"),
  Chunk867250 = require("./867250.js");
let v = () => (0, Chunk45521.f)(false),
  I = e => {
    var t, n, a;
    let {
      onLearnMore: h
    } = e, {
      analyticsLocations: I
    } = (0, c.ZP)(l.Z.PREMIUM_UPSELL);
    i.useEffect(() => {
      _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
        location_section: g.jXE.STICKER_PICKER_UPSELL,
        type: E.cd.STICKER_PICKER_UPSELL,
        location_stack: I
      })
    }, [I]);
    let T = (0, d.N)(),
      S = (0, u.N)(),
      A = (null == T || null == (t = T.subscription_trial) ? true : t.sku_id) === E.Si.TIER_0,
      C = null != T || null != S;
    return (0, r.jsxs)("div", {
      className: o()(y.upsellWrapper, {
        [y.unifyTrialUpsell]: C
      }),
      children: [C ? (0, r.jsx)(f.ZP, {
        trialOffer: T,
        discountOffer: S,
        onClose: v,
        type: E.cd.STICKER_PICKER_UPSELL,
        subscriptionTier: null != (a = null == T || null == (n = T.subscription_trial) ? true : n.sku_id) ? a : E.Si.TIER_2,
        children: A ? b.intl.format(b.t.MAGagw, {
          planName: (0, p.aq)(E.Xh.PREMIUM_MONTH_TIER_0),
          onClick: h
        }) : b.intl.format(b.t.jt7JX6, {
          onClick: h
        })
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
          className: y.upsellImage,
          src: O,
          alt: b.intl.string(b.t.do7AoM)
        }), (0, r.jsx)(s.Text, {
          className: y.upsellTitle,
          color: "header-primary",
          variant: "text-lg/semibold",
          children: b.intl.string(b.t.jJG1pl)
        }), (0, r.jsx)(s.Text, {
          className: y.upsellDescription,
          variant: "text-md/normal",
          children: b.intl.format(b.t.jt7JX6, {
            onClick: h
          })
        })]
      }), !C && (0, r.jsx)(m.Z, {
        analyticsSection: g.jXE.EXPRESSION_PICKER,
        buttonText: C ? A ? b.intl.string(b.t.hz78hE) : b.intl.string(b.t["Gd/XHF"]) : true
      }), (0, r.jsx)(s.P3F, {
        className: y.upsellClose,
        onClick: v,
        children: (0, r.jsx)(s.Dio, {
          size: "md",
          color: "currentColor"
        })
      })]
    })
  }