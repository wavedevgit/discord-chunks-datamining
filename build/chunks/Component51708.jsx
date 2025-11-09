/** Chunk was on 33840 **/
/** chunk id: 51708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk156582 = require("./156582.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk832832 = require("./832832.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk46546 = require("./46546.js");

function x(e) {
  var t, n, x;
  let {
    onClose: v
  } = e, {
    analyticsLocations: j
  } = (0, s.ZP)(o.Z.GO_LIVE_MODAL_V2), b = (0, d.N)(), S = (0, c.Ng)(), y = (null == b || null == (t = b.subscription_trial) ? true : t.sku_id) === h.Si.TIER_2 || (0, c.Wp)(S, h.Si.TIER_2), C = _.intl.string(m.default["+f+cqk"]);
  return y && (null != b ? C = (0, f.Rt)({
    intervalType: null == b || null == (n = b.subscription_trial) ? true : n.interval,
    intervalCount: null == b || null == (x = b.subscription_trial) ? true : x.interval_count
  }) : null != S && (C = _.intl.formatToPlainString(_.t.bkQ4bH, {
    percent: S.discount.amount
  }))), (0, r.jsxs)("div", {
    className: g.root,
    children: [(0, r.jsxs)(l.Text, {
      className: g.infoText,
      variant: "text-xs/normal",
      color: "always-white",
      children: [(0, r.jsx)(l.mBM, {
        size: "xxs",
        color: "currentColor"
      }), _.intl.format(_.t.sLJ3EV, {
        onNitroClick: function() {
          (0, p.E)({
            analyticsLocation: j[0],
            onClose: v
          })
        }
      })]
    }), (0, r.jsx)(u.Z, {
      className: g.ctaButton,
      iconClassName: g.premiumIcon,
      size: i.zx.Sizes.TINY,
      color: i.zx.Colors.BRAND_INVERTED,
      subscriptionTier: h.Si.TIER_2,
      buttonShineClassName: g.premiumShine,
      iconColor: a.JX.PREMIUM_TIER_2,
      onClick: () => {
        v()
      },
      textOptions: {
        subscribeText: C,
        textClassName: g.ctaButtonText
      }
    })]
  })
}