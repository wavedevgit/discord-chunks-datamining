/** Chunk was on 47863 **/
/** chunk id: 173044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk718629 = require("./718629.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk312518 = require("./312518.js");

function v(e) {
  var t, n, v;
  let {
    onClose: j
  } = e, {
    analyticsLocations: S
  } = (0, o.ZP)(s.Z.GO_LIVE_MODAL_V2), b = (0, d.N)(), y = (0, c.N)(), C = (null == b || null == (t = b.subscription_trial) ? true : t.sku_id) === m.Si.TIER_2 || (0, f.Wp)(y, m.Si.TIER_2), O = g.intl.string(_.default["+f+cqk"]);
  return C && (null != b ? O = (0, p.Rt)({
    intervalType: null == b || null == (n = b.subscription_trial) ? true : n.interval,
    intervalCount: null == b || null == (v = b.subscription_trial) ? true : v.interval_count
  }) : null != y && (O = g.intl.formatToPlainString(g.t.bkQ4bH, {
    percent: y.discount.amount
  }))), (0, r.jsxs)("div", {
    className: x.root,
    children: [(0, r.jsxs)(l.Text, {
      className: x.infoText,
      variant: "text-xs/normal",
      color: "always-white",
      children: [(0, r.jsx)(l.mBM, {
        size: "xxs",
        color: "currentColor"
      }), g.intl.format(g.t.sLJ3EV, {
        onNitroClick: function() {
          (0, h.E)({
            analyticsLocation: S[0],
            onClose: j
          })
        }
      })]
    }), (0, r.jsx)(u.Z, {
      className: x.ctaButton,
      iconClassName: x.premiumIcon,
      size: i.zx.Sizes.TINY,
      color: i.zx.Colors.BRAND_INVERTED,
      subscriptionTier: m.Si.TIER_2,
      buttonShineClassName: x.premiumShine,
      iconColor: a.JX.PREMIUM_TIER_2,
      onClick: () => {
        j()
      },
      textOptions: {
        subscribeText: O,
        textClassName: x.ctaButtonText
      }
    })]
  })
}