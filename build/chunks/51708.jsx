/** Chunk was on 46746 **/
/** chunk id: 51708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk436774 = require("./436774.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.js"),
  Chunk74538 = require("./74538.js"),
  Chunk156582 = require("./156582.js"),
  Chunk474936 = require("./474936.js"),
  Chunk676462 = require("./676462.js"),
  Chunk388032 = require("./388032.js"),
  Chunk393095 = require("./393095.js");

function _(e) {
  var t, n, _;
  let {
    onClose: v
  } = e, {
    analyticsLocations: j
  } = (0, o.ZP)(s.Z.GO_LIVE_MODAL_V2), b = (0, d.N)(), S = (0, c.Ng)(), C = (null == b || null == (t = b.subscription_trial) ? true : t.sku_id) === h.Si.TIER_2 || (0, c.Wp)(S, h.Si.TIER_2), y = x.intl.string(p.default["+f+cqq"]);
  return C && (null != b ? y = (0, f.Rt)({
    intervalType: null == b || null == (n = b.subscription_trial) ? true : n.interval,
    intervalCount: null == b || null == (_ = b.subscription_trial) ? true : _.interval_count
  }) : null != S && (y = x.intl.formatToPlainString(x.t.bkQ4bG, {
    percent: S.discount.amount
  }))), <div className={g.root}>{<l.Text className={g.infoText} variant={"text-xs/normal"} color={"always-white"}>{<l.mBM size={"xxs"} color={"currentColor"} />}{x.intl.format(x.t.sLJ3ER, {
        onNitroClick: function() {
          (0, m.E)({
            analyticsLocation: j[0],
            onClose: v
          })
        }
      })}</l.Text>}{<u.Z className={g.ctaButton} iconClassName={g.premiumIcon} size={i.zx.Sizes.TINY} color={i.zx.Colors.BRAND_INVERTED} subscriptionTier={h.Si.TIER_2} buttonShineClassName={g.premiumShine} iconColor={a.JX.PREMIUM_TIER_2} onClick={() => {
        v()
      }} textOptions={{
        subscribeText: y,
        textClassName: g.ctaButtonText
      }} />}</div>
}