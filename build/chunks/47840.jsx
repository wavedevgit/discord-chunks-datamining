/** Chunk was on 75708 **/
/** chunk id: 47840, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk117791 = require("./117791.js"),
  Chunk638212 = require("./638212.js"),
  Chunk981631 = require("./981631.js"),
  Chunk700109 = require("./700109.js");
let d = function(e) {
  let {
    isVisible: t,
    subscriptionTier: n,
    isEligibleForBogoPromotion: d
  } = e, u = (0, s.q_F)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  }), m = {
    section: o.jXE.MARKETING_FLOATING_CTA
  };
  return <r.animated.div className={c.wrapper} style={u} data-mtctest-ignore={"true"}><div className={c.buttonContainer}>{<l.Z size={"md"} subscriptionTier={n} hasActivePromotion={!!d} isPersistentCTA={true} premiumModalAnalyticsLocation={m} />}{<a.Z variant={"secondary"} size={"md"} />}</div></r.animated.div>
}