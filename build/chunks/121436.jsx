/** Chunk was on 89839 **/
/** chunk id: 121436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk313201 = require("./313201.js"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk111361 = require("./111361.js"),
  Chunk784238 = require("./784238.js"),
  Chunk176237 = require("./176237.js"),
  Chunk553896 = require("./553896.js"),
  Chunk848572 = require("./848572.js"),
  Chunk787528 = require("./787528.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk840052 = require("./840052.js");
let O = e => {
  var t, n;
  let {
    transitionState: a,
    onClose: O,
    displayProfile: h
  } = e, {
    analyticsLocations: S
  } = (0, c.ZP)(s.Z.TIERED_TENURE_BADGES_MODAL), M = (0, o.Dt)(), P = Object.values(x.vK), R = (0, p.SI)(null == h ? true : h.userId), U = (0, p.Rw)(), y = g.default.getCurrentUser(), I = null != (n = (0, p.a1)(null != (t = null == h ? true : h.userId) ? t : null == y ? true : y.id)) ? n : new Date, B = (0, b.yd)(null == y ? true : y.premiumType, x.p9.TIER_2), D = P.map(e => {
    let {
      id: t,
      nameUnformatted: n,
      tenureReqNumMonths: a
    } = e, u = T.intl.string(n), d = (0, E.J)(t), s = (0, _.q)(t, a), c = null == h, o = c && (null == U ? true : U.id) === t, m = !c && (null == R ? true : R.id) === t, g = o && (null == U ? true : U.status) === p.Vq.EARNED, b = o && (null == U ? true : U.status) === p.Vq.UPCOMING, v = m || g;
    return <div className={r()(j.badge, {
        [j.earnedBadge]: v || b
      })}>{<img src={d} alt={u} className={j.badgeImage} />}{<div className={j.badgeText}>{<i.xv variant={"text-md/semibold"} className={j.badgeName}>{u}</i.xv>}{<i.xv variant={"text-xs/normal"}>{s}</i.xv>}{v && <i.xv variant={"text-xs/normal"} color={"text-muted"} className={j.earnedBadgeSubSince}>{T.intl.formatToPlainString(T.t.Hu4jfn, {
            date: I
          })}</i.xv>}{b && <i.xv variant={"text-xs/normal"} color={"text-muted"} className={j.earnedBadgeSubSince}>{T.intl.formatToPlainString(T.t.PPL1Ii, {
            days: null == U ? true : U.daysLeft
          })}</i.xv>}</div>}</div>
  }), w = () => {
    (0, m.uL)(N.Z5c.APPLICATION_STORE, {
      source: s.Z.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: S
    }), null == O || O()
  }, {
    enabled: C
  } = f.$.useExperiment({
    location: "evolving_tenure_badge_modal_web"
  }, {
    autoTrackExposure: false
  });
  return <d.Y0X data-migration-pending={true} transitionState={a} aria-labelledby={M} className={r()(j.container, "theme-dark")} parentComponent={"EvolvingTenureBadgeModal"}>{<d.olH data-migration-pending={true} onClick={O} className={j.closeButton} />}{<d.hzk data-migration-pending={true} className={j.content}>{B ? <l.Fragment>{<i.xv variant={"display-md"} className={j.header}>{T.intl.string(T.t.Og62j4)}</i.xv>}{<i.xv variant={"text-md/medium"} className={j.subHeader}>{T.intl.string(T.t["IdAP9/"])}</i.xv>}{<div className={j.badgeList}>{D}</div>}{null != h && h.userId !== (null == y ? true : y.id) && <d.gtL className={j.learnMoreButton} onClick={w}>{T.intl.string(T.t.hvVgAQ)}</d.gtL>}</l.Fragment> : <l.Fragment>{<i.xv variant={"display-md"} className={j.header}>{T.intl.string(T.t.RtGeFR)}</i.xv>}{<i.xv variant={"text-md/medium"} className={j.subHeader}>{T.intl.format(T.t.ffatnZ, {
            onClick: w
          })}</i.xv>}{<div className={j.badgeList}>{D}</div>}{<v.Z className={j.subscribeButton} premiumModalAnalyticsLocation={{
            page: N.ZY5.TIERED_TENURE_BADGES_MODAL
          }} textOptions={{
            subscribeText: T.intl.string(T.t.JST6jo)
          }} subscriptionTier={x.Si.TIER_2} showGradient={true} color={u.Tt.BRAND} />}</l.Fragment>}{C && <() => (f.D.useConfig({
        location: "evolving_tenure_badge_modal_web"
      }), (0, l.jsx)(l.Fragment, {})) />}</d.hzk>}</d.Y0X>
}