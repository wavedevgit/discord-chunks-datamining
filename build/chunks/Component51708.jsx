/** Chunk was on 44183 **/
/** chunk id: 51708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk230916 = require("./230916.js"),
  Chunk74538 = require("./74538.js"),
  Chunk156582 = require("./156582.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk715689 = require("./715689.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk367880 = require("./367880.js");

function b(e) {
  var t, n, b;
  let {
    onClose: j
  } = e, {
    analyticsLocations: _
  } = (0, o.ZP)(s.Z.GO_LIVE_MODAL_V2), S = (0, d.N)(), y = (0, c.N)(), C = (null == S || null == (t = S.subscription_trial) ? true : t.sku_id) === m.Si.TIER_2 || (0, f.Wp)(y, m.Si.TIER_2), O = x.intl.string(g.default["+f+cqk"]);
  return C && (null != S ? O = (0, p.Rt)({
    intervalType: null == S || null == (n = S.subscription_trial) ? true : n.interval,
    intervalCount: null == S || null == (b = S.subscription_trial) ? true : b.interval_count
  }) : null != y && (O = x.intl.formatToPlainString(x.t.bkQ4bH, {
    percent: y.discount.amount
  }))), (0, r.jsxs)("div", {
    className: v.root,
    children: [(0, r.jsxs)(l.Text, {
      className: v.infoText,
      variant: "text-xs/normal",
      color: "always-white",
      children: [(0, r.jsx)(l.mBM, {
        size: "xxs",
        color: "currentColor"
      }), x.intl.format(x.t.sLJ3EV, {
        onNitroClick: function() {
          (0, h.E)({
            analyticsLocation: _[0],
            onClose: j
          })
        }
      })]
    }), (0, r.jsx)(u.Z, {
      className: v.ctaButton,
      iconClassName: v.premiumIcon,
      size: i.zx.Sizes.TINY,
      color: i.zx.Colors.BRAND_INVERTED,
      subscriptionTier: m.Si.TIER_2,
      buttonShineClassName: v.premiumShine,
      iconColor: a.JX.PREMIUM_TIER_2,
      onClick: () => {
        j()
      },
      textOptions: {
        subscribeText: O,
        textClassName: v.ctaButtonText
      }
    })]
  })
}