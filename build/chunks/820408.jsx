/** Chunk was on 5863 **/
/** chunk id: 820408, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk2052 = require("./2052.js"),
  Chunk434650 = require("./434650.js"),
  Chunk906732 = require("./906732.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk749044 = require("./749044.js");

function S(e) {
  let {
    onClose: t
  } = e, n = (0, o.O)(), {
    analyticsLocations: S
  } = (0, c.ZP)(), [N, f] = s.useState(false), b = s.useCallback(e => {
    !N && e && (g.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
      type: x.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
      location: n.location,
      location_stack: S
    }), f(true))
  }, [n.location, S, N]), C = (0, d.O)(b, .8, true);
  return <div ref={C} className={j.container}>{<r.SrA size={"md"} color={u.JX.PREMIUM_TIER_2} className={j.nitroWheel} />}{<r.Text className={j.text} variant={"text-sm/normal"}>{v.intl.string(v.t["Pb0O6+"])}{" "}{<h.Z onClick={() => {
          t(), a.Z.open(p.oAB.PREMIUM)
        }}>{v.intl.string(v.t.hvVgAQ)}</h.Z>}</r.Text>}{<div className={j.nitroButton}><m.Z showGradient={true} textOptions={{
          textOverride: v.intl.string(v.t.pj0XBA)
        }} size={l.zx.Sizes.SMALL} shinyButtonClassName={j.nitroButton} subscriptionTier={x.Si.TIER_2} premiumModalAnalyticsLocation={{
          section: p.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL
        }} /></div>}</div>
}