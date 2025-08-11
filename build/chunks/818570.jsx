/** Chunk was on web.js **/
/** chunk id: 818570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk834129 = require("./834129.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk806725 = require("./806725.js");

function f(e) {
  let {
    message: t,
    channel: n
  } = e, f = null != n.guild_id ? l.jXE.TEXT_IN_VOICE : l.jXE.CHANNEL_TEXT_AREA;
  return <s.Z contentClassName={d.messageContentContainer} iconContainerClassName={d.iconContainer} iconNode={(0, r.jsx)(o.Dkj, {
      colorClass: d.icon
    })}><div className={d.container}>{<div>{<o.Text variant={"text-sm/medium"}>{t.content}</o.Text>}{<div className={d.nitroBadge}>{<o.SrA size={"xs"} colorClass={d.nitroBadgeIcon} />}{<o.Text variant={"text-xs/medium"} className={d.nitroBadgeText}>{u.intl.string(u.t["BMw+7O"])}</o.Text>}</div>}</div>}{<div className={d.buttonContainer}><a.Z showGradient={true} iconClassName={d.premiumIcon} subscriptionTier={c.Si.TIER_2} textOptions={{
            textOverride: u.intl.string(u.t.Y2WKTk)
          }} size={i.zx.Sizes.SMALL} premiumModalAnalyticsLocation={{
            section: f,
            object: l.qAy.MESSAGE
          }} /></div>}</div></s.Z>
}