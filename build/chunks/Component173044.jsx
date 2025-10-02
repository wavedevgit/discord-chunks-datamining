/** Chunk was on 46746 **/
/** chunk id: 173044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk637824 = require("./637824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk312518 = require("./312518.js");

function _(e) {
  var t, n, _;
  let {
    onClose: v
  } = e, {
    analyticsLocations: j
  } = (0, o.ZP)(s.Z.GO_LIVE_MODAL_V2), b = (0, d.N)(), S = (0, c.Ng)(), C = (null == b || null == (t = b.subscription_trial) ? true : t.sku_id) === h.Si.TIER_2 || (0, c.Wp)(S, h.Si.TIER_2), y = g.intl.string(p.default["+f+cqq"]);
  return C && (null != b ? y = (0, f.Rt)({
    intervalType: null == b || null == (n = b.subscription_trial) ? true : n.interval,
    intervalCount: null == b || null == (_ = b.subscription_trial) ? true : _.interval_count
  }) : null != S && (y = g.intl.formatToPlainString(g.t.bkQ4bG, {
    percent: S.discount.amount
  }))), (0, r.jsxs)("div", {
    className: x.root,
    children: [(0, r.jsxs)(l.Text, {
      className: x.infoText,
      variant: "text-xs/normal",
      color: "always-white",
      children: [(0, r.jsx)(l.mBM, {
        size: "xxs",
        color: "currentColor"
      }), g.intl.format(g.t.sLJ3ER, {
        onNitroClick: function() {
          (0, m.E)({
            analyticsLocation: j[0],
            onClose: v
          })
        }
      })]
    }), (0, r.jsx)(u.Z, {
      className: x.ctaButton,
      iconClassName: x.premiumIcon,
      size: i.zx.Sizes.TINY,
      color: i.zx.Colors.BRAND_INVERTED,
      subscriptionTier: h.Si.TIER_2,
      buttonShineClassName: x.premiumShine,
      iconColor: a.JX.PREMIUM_TIER_2,
      onClick: () => {
        v()
      },
      textOptions: {
        subscribeText: y,
        textClassName: x.ctaButtonText
      }
    })]
  })
}