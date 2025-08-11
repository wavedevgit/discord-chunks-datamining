/** Chunk was on web.js **/
/** chunk id: 636411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk645885 = require("./645885.js");
let E = "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
  b = 32;

function y(e) {
  var t, n;
  let {
    onDismiss: i
  } = e, y = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), O = m.intl.string(m.t["eikz4+"]), v = (0, d.N)(), I = (0, u.Ng)(), T = (null == v ? true : v.subscription_trial) != null || null != I, S = {
    object: p.qAy.BUTTON_CTA,
    section: p.jXE.SUPER_REACTION_PICKER
  };
  return <div className={g.wrapper}>{<s.P3F onClick={i} className={g.closeButton} aria-label={m.intl.string(m.t.WAI6xs)}><s.Dio size={"md"} color={"currentColor"} /></s.P3F>}{<div className={g.content}>{<div className={g.contentFill}><c.Z className={o()(g.banner, {
            [g.hasTrialOffer]: T
          })} src={E} loop={true} autoPlay={!y} muted={true} controls={true} /></div>}{T ? <_.ZP type={h.cd.BURST_REACTION_QUICK_ACTION_UPSELL} subscriptionTier={null != (n = null == v || null == (t = v.subscription_trial) ? true : t.sku_id) ? n : h.Si.TIER_2} headingText={m.intl.string(m.t.Wfl5zs)} analyticsLocationObject={S} discountOffer={I} trialOffer={v}>{O}</_.ZP> : <r.Fragment>{<div className={g.header}>{<s.SrA size={"custom"} color={"currentColor"} className={g.nitroWheel} width={b} height={b} />}{<s.X6q className={g.headerText} variant={"heading-xl/bold"}>{m.intl.string(m.t.Wfl5zs)}</s.X6q>}</div>}{<s.Text className={g.subheaderText} variant={"text-md/normal"}>{O}</s.Text>}{<div className={g.ctaActionWrapper}><f.Z subscriptionTier={h.Si.TIER_2} textOptions={{
              textOverride: m.intl.string(m.t.sEAnVF)
            }} /></div>}</r.Fragment>}</div>}</div>
}