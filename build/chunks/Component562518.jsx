/** Chunk was on 46746 **/
/** chunk id: 562518, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk504710 = require("./504710.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk715689 = require("./715689.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk230240 = require("./230240.js");

function j(e) {
  var t, r, j;
  let {
    onClose: _
  } = e, {
    analyticsLocations: b
  } = (0, o.ZP)(l.Z.GO_LIVE_MODAL_V2), y = (0, d.N)(), w = (0, a.N)(), O = (null == y || null == (t = y.subscription_trial) ? true : t.sku_id) === x.Si.TIER_2 || (0, f.Wp)(w, x.Si.TIER_2), C = g.intl.string(m.default["+f+cqk"]);
  return O && (null != y ? C = (0, h.Rt)({
    intervalType: null == y || null == (r = y.subscription_trial) ? true : r.interval,
    intervalCount: null == y || null == (j = y.subscription_trial) ? true : j.interval_count
  }) : null != w && (C = g.intl.formatToPlainString(g.t.bkQ4bH, {
    percent: w.discount.amount
  }))), (0, n.jsxs)("div", {
    className: v.root,
    children: [(0, n.jsxs)(s.Text, {
      className: v.infoText,
      variant: "text-xs/normal",
      color: "always-white",
      children: [(0, n.jsx)(s.mBM, {
        size: "xxs",
        color: "currentColor"
      }), g.intl.format(g.t.sLJ3EV, {
        onNitroClick: function() {
          (0, p.E)({
            analyticsLocation: b[0],
            onClose: _
          })
        }
      })]
    }), (0, n.jsx)(u.Z, {
      className: v.ctaButton,
      iconClassName: v.premiumIcon,
      size: i.zx.Sizes.TINY,
      color: i.zx.Colors.BRAND_INVERTED,
      subscriptionTier: x.Si.TIER_2,
      buttonShineClassName: v.premiumShine,
      iconColor: c.JX.PREMIUM_TIER_2,
      onClick: () => {
        _()
      },
      textOptions: {
        subscribeText: C,
        textClassName: v.ctaButtonText
      }
    })]
  })
}