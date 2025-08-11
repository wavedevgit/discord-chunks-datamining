/** Chunk was on 75708 **/
/** chunk id: 238649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk357355 = require("./357355.js"),
  Chunk140465 = require("./140465.js"),
  Chunk105759 = require("./105759.js"),
  Chunk117791 = require("./117791.jsx"),
  Chunk638212 = require("./638212.js"),
  Chunk422034 = require("./422034.js"),
  Chunk206127 = require("./206127.js"),
  Chunk710220 = require("./710220.js"),
  Chunk164662 = require("./164662.js"),
  Chunk123274 = require("./123274.jsx"),
  Chunk638631 = require("./638631.js"),
  Chunk645616 = require("./645616.js"),
  Chunk388032 = require("./388032.js"),
  Chunk5943 = require("./5943.js");
let T = Chunk73800.memo(Chunk73800.forwardRef((e, t) => {
  let {
    className: n,
    subscriptionTier: r,
    isEligibleForBogoPromotion: s
  } = e, {
    analyticsLocations: T
  } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA), I = (0, p.Nx)(), N = (0, x.$)(), y = (0, g.Z)(), A = null != y, P = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), {
    visibilityPercentageRef: R,
    visibilityPercentage: D
  } = (0, j.E)(!P), Z = (0, l.e7)([m.Z], () => m.Z.affinities), w = !A && Z.length > 0;
  return <u.Gt value={T}><div ref={t} className={a()(S.container, n)} data-testid={"marketing-page-hero-header"}><div ref={R}><div className={S.contentContainer}>{<O.Z containerVisibilityPercentage={D} />}{I && <div className={S.offerPillContainer}><C.Z enablePremiumBrandRefresh={true} /></div>}{<div className={S.marketingPageTextContainer}><E.Z>{v.intl.string(v.t["EW+VIS"])}</E.Z></div>}{<div className={S.body}>{A && <div className={S.referrerAttributionContainer}><_.Z referrer={y} enablePremiumBrandRefresh={true} /></div>}{w && <div className={S.affinitiesContainer}><b.Z textColor={"text-primary"} smallerText={false} isApplicationHome={true} enablePremiumBrandRefresh={true} /></div>}{<div className={I ? S.singleButtonContainer : S.twoButtonContainer}>{<f.Z size={"md"} fullWidth={I} hasActivePromotion={!!s} subscriptionTier={r} />}{!I && <h.Z variant={"secondary"} size={"md"} />}</div>}{<div className={S.descriptionContainer}><o.Text color={"text-tertiary"} variant={"text-xs/medium"}>{v.intl.format(v.t.kt9wxs, {
                  cheapestMonthlyPrice: N
                })}</o.Text></div>}</div>}</div></div></div></u.Gt>
}))